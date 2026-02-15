import templatesManifest from "@/data/templates-manifest.json";
import { prisma } from "@/lib/prisma";
import type { TemplateWithSections } from "@/types";

type DbTemplateOverride = {
  slug: string;
  title: string;
  description: string | null;
  price: number;
  category: string;
  tags: string[];
  language: string;
  style: string[];
  layout: string | null;
  sourceUrl: string | null;
  thumbnailUrl: string | null;
  htmlPath: string | null;
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  viewCount: number;
  likeCount: number;
  saveCount: number;
  createdAt: Date;
  updatedAt: Date;
};

function manifestTemplates(): TemplateWithSections[] {
  return (templatesManifest as any[]).map((t) => ({
    ...t,
    createdAt: new Date(t.createdAt),
    updatedAt: new Date(t.updatedAt),
  })) as TemplateWithSections[];
}

async function dbOverridesBySlug() {
  const dbTemplates = await prisma.template.findMany({
    select: {
      slug: true,
      title: true,
      description: true,
      price: true,
      category: true,
      tags: true,
      language: true,
      style: true,
      layout: true,
      sourceUrl: true,
      thumbnailUrl: true,
      htmlPath: true,
      status: true,
      viewCount: true,
      likeCount: true,
      saveCount: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return new Map<string, DbTemplateOverride>(
    dbTemplates.map((t) => [t.slug, t as DbTemplateOverride])
  );
}

export async function getCatalogTemplates(options?: { publishedOnly?: boolean }) {
  const publishedOnly = options?.publishedOnly ?? true;
  const manifest = manifestTemplates();
  const overrideMap = await dbOverridesBySlug();

  const merged = manifest.map((m) => {
    const db = overrideMap.get(m.slug);
    return db
      ? {
          ...m,
          ...db,
          createdAt: db.createdAt,
          updatedAt: db.updatedAt,
        }
      : m;
  });

  if (!publishedOnly) return merged;
  return merged.filter((t) => t.status === "PUBLISHED");
}

export async function getCatalogTemplateBySlug(
  slug: string,
  options?: { publishedOnly?: boolean }
) {
  const templates = await getCatalogTemplates(options);
  return templates.find((t) => t.slug === slug) ?? null;
}
