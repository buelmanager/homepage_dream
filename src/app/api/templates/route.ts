import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import templatesManifest from "@/data/templates-manifest.json";
import type { Prisma } from "@/generated/prisma/client";

type ManifestTemplate = {
  slug: string;
  title: string;
  description: string | null;
  price: number;
  tier: "FREE" | "PRO";
  category: string;
  tags: string[];
  language: string;
  style: string[];
  layout: string | null;
  sourceUrl: string | null;
  thumbnailUrl: string | null;
  htmlPath: string | null;
  storageKey: string | null;
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  viewCount: number;
  createdAt: string;
};

type DbTemplateWithCounts = Prisma.TemplateGetPayload<{
  include: { _count: { select: { sections: true; purchases: true } } };
}>;

async function requireAdmin() {
  const session = await auth();
  if (!session?.user?.id) {
    return { error: NextResponse.json({ error: "Unauthorized" }, { status: 401 }) };
  }
  if (session.user.role !== "ADMIN") {
    return { error: NextResponse.json({ error: "Forbidden" }, { status: 403 }) };
  }
  return { session };
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = Math.max(1, Math.min(Number(searchParams.get("limit")) || 50, 200));
  const includeStats = searchParams.get("includeStats") === "true";

  const manifest = templatesManifest as ManifestTemplate[];
  const dbTemplates: DbTemplateWithCounts[] = await prisma.template.findMany({
    include: { _count: { select: { sections: true, purchases: true } } },
  });

  const dbBySlug = new Map(dbTemplates.map((t) => [t.slug, t]));

  const merged = manifest.map((m) => {
    const db = dbBySlug.get(m.slug);
    return {
      id: db?.id ?? `fs:${m.slug}`,
      slug: m.slug,
      title: db?.title ?? m.title,
      category: db?.category ?? m.category,
      status: db?.status ?? m.status,
      price: db?.price ?? m.price,
      tier: db?.tier ?? (m.tier === "PRO" ? "PRO" : "FREE"),
      viewCount: db?.viewCount ?? m.viewCount,
      createdAt: (db?.createdAt ?? new Date(m.createdAt)).toISOString(),
      _count: {
        sections: db?._count.sections ?? 0,
        purchases: db?._count.purchases ?? 0,
      },
    };
  });

  const templates = merged.slice(0, limit);

  if (!includeStats) {
    return NextResponse.json({ templates, total: merged.length });
  }

  const [totalUsers, totalPurchases, totalSections] = await Promise.all([
    prisma.user.count(),
    prisma.purchase.count(),
    prisma.section.count(),
  ]);

  return NextResponse.json({
    templates,
    total: merged.length,
    totalUsers,
    totalPurchases,
    totalSections,
  });
}

export async function POST(request: NextRequest) {
  const guard = await requireAdmin();
  if ("error" in guard) return guard.error;

  const body = (await request.json()) as {
    title?: string;
    slug?: string;
    description?: string;
    price?: number;
    category?: string;
    tags?: string[];
    language?: string;
    style?: string[];
    layout?: string;
    sourceUrl?: string;
    htmlPath?: string;
    tier?: "FREE" | "PRO";
    storageKey?: string;
  };

  if (!body.slug || !body.title) {
    return NextResponse.json({ error: "slug and title are required" }, { status: 400 });
  }

  const slug = body.slug.trim().toLowerCase();
  const existing = await prisma.template.findUnique({ where: { slug } });
  if (existing) {
    return NextResponse.json({ error: "Template slug already exists" }, { status: 409 });
  }

  const template = await prisma.template.create({
    data: {
      slug,
      title: body.title.trim(),
      description: body.description?.trim() || null,
      price: Math.max(0, Math.floor(Number(body.price) || 0)),
      category: body.category || "pages",
      tags: body.tags ?? [],
      language: body.language || "English",
      style: body.style ?? [],
      layout: body.layout || null,
      sourceUrl: body.sourceUrl || null,
      htmlPath: body.htmlPath || `/templates/${slug}/index.html`,
      tier: body.tier === "PRO" ? "PRO" : "FREE",
      storageKey: body.storageKey?.trim() || null,
      status: "PUBLISHED",
    },
  });

  return NextResponse.json({ template }, { status: 201 });
}
