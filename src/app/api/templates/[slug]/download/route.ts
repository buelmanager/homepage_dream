import path from "path";
import { readFile } from "fs/promises";
import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getCatalogTemplateBySlug } from "@/lib/template-catalog";

const DEFAULT_BUCKET = process.env.TEMPLATE_PRIVATE_BUCKET || "template-pro-assets";
const SIGNED_URL_TTL_SECONDS = Math.max(
  30,
  Number(process.env.TEMPLATE_SIGNED_URL_TTL_SECONDS || 60)
);

function defaultStorageKey(slug: string) {
  return `templates/${slug}/source.zip`;
}

async function findActiveSubscription(userId: string) {
  return prisma.subscription.findFirst({
    where: {
      userId,
      status: "ACTIVE",
      currentPeriodEnd: { gt: new Date() },
    },
    orderBy: { currentPeriodEnd: "desc" },
    select: { id: true },
  });
}

async function localZipResponse(slug: string): Promise<NextResponse | null> {
  const candidates = [
    path.join(process.cwd(), "private", "templates", slug, "source.zip"),
    path.join(process.cwd(), "multi_clone_hompage", "home", slug, "pro", "source.zip"),
  ];

  for (const filePath of candidates) {
    try {
      const file = await readFile(filePath);
      return new NextResponse(new Uint8Array(file), {
        headers: {
          "content-type": "application/zip",
          "content-disposition": `attachment; filename="${slug}.zip"`,
          "cache-control": "no-store",
        },
      });
    } catch {
      // Ignore and try next candidate.
    }
  }

  return null;
}

async function createSupabaseSignedUrl(storageKey: string, slug: string) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return null;
  }

  const admin = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  const { data, error } = await admin.storage
    .from(DEFAULT_BUCKET)
    .createSignedUrl(storageKey, SIGNED_URL_TTL_SECONDS, {
      download: `${slug}.zip`,
    });

  if (error || !data?.signedUrl) {
    return null;
  }

  return data.signedUrl;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const template = await getCatalogTemplateBySlug(slug, { publishedOnly: true });

  if (!template) {
    return NextResponse.json({ error: "Template not found" }, { status: 404 });
  }

  if (template.tier === "FREE") {
    const publicPath = template.htmlPath ?? `/templates/${slug}/index.html`;
    return NextResponse.redirect(new URL(publicPath, request.url));
  }

  const session = await auth();
  if (!session?.user?.id) {
    const signInUrl = new URL("/signin", request.url);
    signInUrl.searchParams.set("callbackUrl", `/templates/${slug}`);
    return NextResponse.redirect(signInUrl);
  }

  const activeSubscription = await findActiveSubscription(session.user.id);
  if (!activeSubscription) {
    const pricingUrl = new URL("/pricing", request.url);
    pricingUrl.searchParams.set("required", "subscription");
    return NextResponse.redirect(pricingUrl);
  }

  const storageKey = template.storageKey || defaultStorageKey(slug);
  const signedUrl = await createSupabaseSignedUrl(storageKey, slug);

  if (signedUrl) {
    return NextResponse.redirect(signedUrl);
  }

  const localFallback = await localZipResponse(slug);
  if (localFallback) {
    return localFallback;
  }

  return NextResponse.json(
    {
      error:
        "Pro source package not found. Set template storageKey and upload source.zip to private storage.",
    },
    { status: 404 }
  );
}
