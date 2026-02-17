import path from "path";
import fs from "fs";
import { readFile } from "fs/promises";
import { PassThrough } from "stream";
import archiver from "archiver";
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

/** Zip public/templates/[slug] on-the-fly and return as a streaming Response */
function zipPublicFolder(slug: string): Response | null {
  const dir = path.join(process.cwd(), "public", "templates", slug);
  if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) return null;

  const passthrough = new PassThrough();
  const archive = archiver("zip", { zlib: { level: 5 } });

  archive.on("error", (err) => passthrough.destroy(err));
  archive.pipe(passthrough);
  archive.directory(dir, slug);
  archive.finalize();

  const stream = new ReadableStream({
    start(controller) {
      passthrough.on("data", (chunk: Buffer) => controller.enqueue(new Uint8Array(chunk)));
      passthrough.on("end", () => controller.close());
      passthrough.on("error", (err) => controller.error(err));
    },
    cancel() {
      archive.abort();
      passthrough.destroy();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="${slug}.zip"`,
      "Cache-Control": "no-store",
    },
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

  // All downloads require authentication
  const session = await auth();
  if (!session?.user?.id) {
    const signInUrl = new URL("/signin", request.url);
    signInUrl.searchParams.set("callbackUrl", `/templates/${slug}`);
    return NextResponse.redirect(signInUrl);
  }

  // FREE → zip public/templates/[slug] and download
  if (template.tier === "FREE") {
    const zip = zipPublicFolder(slug);
    if (zip) return zip;

    return NextResponse.json(
      { error: "Template files not found" },
      { status: 404 }
    );
  }

  // Admins bypass subscription check
  if (session.user.role !== "ADMIN") {
    const activeSubscription = await findActiveSubscription(session.user.id);
    if (!activeSubscription) {
      const pricingUrl = new URL("/pricing", request.url);
      pricingUrl.searchParams.set("required", "subscription");
      return NextResponse.redirect(pricingUrl);
    }
  }

  // 1) Supabase signed URL
  const storageKey = template.storageKey || defaultStorageKey(slug);
  const signedUrl = await createSupabaseSignedUrl(storageKey, slug);
  if (signedUrl) {
    return NextResponse.redirect(signedUrl);
  }

  // 2) Pre-built local zip
  const localFallback = await localZipResponse(slug);
  if (localFallback) {
    return localFallback;
  }

  // 3) Zip public folder on-the-fly
  const publicZip = zipPublicFolder(slug);
  if (publicZip) return publicZip;

  return NextResponse.json(
    { error: "Template source package not found" },
    { status: 404 }
  );
}
