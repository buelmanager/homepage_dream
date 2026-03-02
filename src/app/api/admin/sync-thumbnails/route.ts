import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import templatesManifest from "@/data/templates-manifest.json";

type ManifestEntry = {
  slug: string;
  thumbnailUrl?: string | null;
};

export async function POST() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const manifest = templatesManifest as ManifestEntry[];

  // slug → thumbnailUrl 매핑 (manifest 기준)
  const manifestMap = new Map(
    manifest
      .filter((t) => t.slug && t.thumbnailUrl)
      .map((t) => [t.slug, t.thumbnailUrl!])
  );

  // DB에서 thumbnailUrl이 null인 템플릿 조회
  const nullThumbTemplates = await prisma.template.findMany({
    where: { thumbnailUrl: null },
    select: { slug: true },
  });

  const updated: string[] = [];
  const missing: string[] = [];

  for (const t of nullThumbTemplates) {
    const thumbnailUrl = manifestMap.get(t.slug);
    if (thumbnailUrl) {
      await prisma.template.update({
        where: { slug: t.slug },
        data: { thumbnailUrl },
      });
      updated.push(t.slug);
    } else {
      missing.push(t.slug);
    }
  }

  return NextResponse.json({
    total_null: nullThumbTemplates.length,
    updated: updated.length,
    updated_slugs: updated,
    missing_in_manifest: missing,
  });
}
