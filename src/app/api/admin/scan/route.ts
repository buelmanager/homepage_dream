import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import templatesManifest from "@/data/templates-manifest.json";

export async function POST() {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const manifest = templatesManifest as Array<{
    slug: string;
    title: string;
    description?: string | null;
    price?: number;
    category?: string;
    tags?: string[];
    language?: string;
    style?: string[];
    layout?: string | null;
    sourceUrl?: string | null;
    thumbnailUrl?: string | null;
    htmlPath?: string | null;
    tier?: "FREE" | "PRO";
    storageKey?: string | null;
    status?: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  }>;

  const existingTemplates = await prisma.template.findMany({
    select: { slug: true },
  });
  const existingSlugs = new Set(existingTemplates.map((t: { slug: string }) => t.slug));

  const discovered: string[] = [];

  for (const t of manifest) {
    if (!t?.slug) continue;
    if (existingSlugs.has(t.slug)) continue;

    await prisma.template.create({
      data: {
        slug: t.slug,
        title: t.title ?? t.slug,
        description: t.description ?? null,
        price: Math.max(0, Math.floor(Number(t.price ?? 10))),
        category: t.category ?? "pages",
        tags: t.tags ?? [],
        language: t.language ?? "한국어",
        style: t.style ?? [],
        layout: t.layout ?? null,
        sourceUrl: t.sourceUrl ?? null,
        thumbnailUrl: t.thumbnailUrl ?? null,
        htmlPath: t.htmlPath ?? `/templates/${t.slug}/index.html`,
        tier: t.tier === "PRO" ? "PRO" : "FREE",
        storageKey: t.storageKey ?? null,
        status: t.status ?? "PUBLISHED",
      },
    });

    discovered.push(t.slug);
  }

  return NextResponse.json({
    scanned: manifest.length,
    discovered,
  });
}
