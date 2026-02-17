import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import templatesManifest from "@/data/templates-manifest.json";
import fs from "fs";
import path from "path";
import sharp from "sharp";

type MetaJson = {
  title?: string;
  description?: string | null;
  price?: number;
  category?: string;
  tags?: string[];
  language?: string;
  style?: string[];
  layout?: string | null;
  sourceUrl?: string | null;
  thumbnailUrl?: string | null;
  tier?: "FREE" | "PRO";
  storageKey?: string | null;
  status?: "DRAFT" | "PUBLISHED" | "ARCHIVED";
};

type ManifestEntry = MetaJson & {
  slug: string;
  htmlPath?: string | null;
};

const IMAGE_EXTS = new Set([".png", ".jpg", ".jpeg", ".bmp", ".tiff"]);

/** Convert image to webp, return the new filename */
function toWebpName(name: string): string {
  const ext = path.extname(name).toLowerCase();
  if (IMAGE_EXTS.has(ext)) {
    return name.slice(0, -ext.length) + ".webp";
  }
  return name;
}

/** Recursively copy a directory, converting images to webp */
async function copyDirWithOptimize(src: string, dest: string) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === "pro") continue;
      await copyDirWithOptimize(srcPath, path.join(dest, entry.name));
      continue;
    }

    // skip meta.json and readme.md
    if (entry.name === "meta.json" || entry.name === "readme.md") continue;

    const ext = path.extname(entry.name).toLowerCase();

    if (IMAGE_EXTS.has(ext)) {
      // Convert to webp
      const webpName = toWebpName(entry.name);
      const destPath = path.join(dest, webpName);
      try {
        await sharp(srcPath)
          .resize(1200, null, { withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(destPath);
      } catch {
        // Fallback: copy as-is if sharp fails
        fs.copyFileSync(srcPath, path.join(dest, entry.name));
      }
    } else {
      // Copy non-image files as-is (html, css, js, webp, etc.)
      fs.copyFileSync(srcPath, path.join(dest, entry.name));
    }
  }
}

export async function POST() {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const existingTemplates = await prisma.template.findMany({
    select: { slug: true },
  });
  const existingSlugs = new Set(existingTemplates.map((t: { slug: string }) => t.slug));

  const discovered: string[] = [];
  const deployed: string[] = [];

  // ── 1. Scan templates-manifest.json (existing behavior) ──
  const manifest = templatesManifest as ManifestEntry[];

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
        language: t.language ?? "English",
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

    existingSlugs.add(t.slug);
    discovered.push(t.slug);
  }

  // ── 2. Scan multi_clone_hompage/home/*/meta.json ──
  const cloneRoot = path.join(process.cwd(), "multi_clone_hompage", "home");
  const publicTemplates = path.join(process.cwd(), "public", "templates");

  if (fs.existsSync(cloneRoot)) {
    const entries = fs.readdirSync(cloneRoot, { withFileTypes: true });

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      if (entry.name === "docs") continue;

      const slug = entry.name;
      const metaPath = path.join(cloneRoot, slug, "meta.json");

      if (!fs.existsSync(metaPath)) continue;
      if (existingSlugs.has(slug)) continue;

      let meta: MetaJson;
      try {
        meta = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
      } catch {
        continue;
      }

      // Deploy: copy + optimize images to public/templates/{slug}/
      const srcDir = path.join(cloneRoot, slug);
      const destDir = path.join(publicTemplates, slug);

      if (!fs.existsSync(destDir)) {
        await copyDirWithOptimize(srcDir, destDir);
        deployed.push(slug);
      }

      // Check if thumbnail exists in images/ (prefer webp)
      let thumbnailUrl: string | null = meta.thumbnailUrl ?? null;
      if (!thumbnailUrl) {
        const imagesDir = path.join(destDir, "images");
        if (fs.existsSync(imagesDir)) {
          const imgs = fs.readdirSync(imagesDir);
          const fullpage = imgs.find((f) => f.startsWith("fullpage"));
          if (fullpage) {
            thumbnailUrl = `/templates/${slug}/images/${fullpage}`;
          }
        }
      }
      // Update thumbnail extension to webp if it was converted
      if (thumbnailUrl) {
        const thumbExt = path.extname(thumbnailUrl).toLowerCase();
        if (IMAGE_EXTS.has(thumbExt)) {
          thumbnailUrl = thumbnailUrl.slice(0, -thumbExt.length) + ".webp";
        }
      }

      await prisma.template.create({
        data: {
          slug,
          title: meta.title ?? slug,
          description: meta.description ?? null,
          price: Math.max(0, Math.floor(Number(meta.price ?? 10))),
          category: meta.category ?? "pages",
          tags: meta.tags ?? [],
          language: meta.language ?? "English",
          style: meta.style ?? [],
          layout: meta.layout ?? null,
          sourceUrl: meta.sourceUrl ?? null,
          thumbnailUrl,
          htmlPath: `/templates/${slug}/index.html`,
          tier: meta.tier === "PRO" ? "PRO" : "FREE",
          storageKey: meta.storageKey ?? null,
          status: meta.status ?? "PUBLISHED",
        },
      });

      existingSlugs.add(slug);
      discovered.push(slug);
    }
  }

  return NextResponse.json({
    scanned: manifest.length,
    discovered,
    deployed,
  });
}
