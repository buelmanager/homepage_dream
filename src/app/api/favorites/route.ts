import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import logger from "@/lib/logger";
import templatesManifest from "@/data/templates-manifest.json";

const manifestBySlug = new Map(
  (templatesManifest as { slug: string; thumbnailUrl: string | null }[]).map(
    (t) => [t.slug, t.thumbnailUrl]
  )
);

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const favorites = await prisma.favorite.findMany({
      where: { userId: session.user.id },
      include: {
        template: {
          select: {
            id: true,
            slug: true,
            title: true,
            category: true,
            thumbnailUrl: true,
            price: true,
          },
        },
        section: {
          select: {
            id: true,
            slug: true,
            title: true,
            category: true,
            thumbnailUrl: true,
            price: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    const enriched = favorites.map((fav) => ({
      ...fav,
      template: fav.template
        ? {
            ...fav.template,
            thumbnailUrl:
              fav.template.thumbnailUrl ??
              manifestBySlug.get(fav.template.slug) ??
              null,
          }
        : null,
    }));

    return NextResponse.json({ favorites: enriched });
  } catch (error) {
    logger.error("[API /api/favorites GET]", error);
    return NextResponse.json(
      { error: "Failed to fetch favorites" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { templateId, sectionId } = await request.json();

    if (!templateId && !sectionId) {
      return NextResponse.json(
        { error: "templateId or sectionId required" },
        { status: 400 }
      );
    }

    if (templateId) {
      const existing = await prisma.favorite.findFirst({
        where: { userId: session.user.id, templateId },
      });

      if (existing) {
        await prisma.favorite.delete({ where: { id: existing.id } });
        await prisma.template.update({
          where: { id: templateId },
          data: { likeCount: { decrement: 1 } },
        });
        return NextResponse.json({ action: "removed" });
      }

      await prisma.favorite.create({
        data: { userId: session.user.id, templateId },
      });
      await prisma.template.update({
        where: { id: templateId },
        data: { likeCount: { increment: 1 } },
      });
      return NextResponse.json({ action: "added" });
    }

    if (sectionId) {
      const existing = await prisma.favorite.findFirst({
        where: { userId: session.user.id, sectionId },
      });

      if (existing) {
        await prisma.favorite.delete({ where: { id: existing.id } });
        return NextResponse.json({ action: "removed" });
      }

      await prisma.favorite.create({
        data: { userId: session.user.id, sectionId },
      });
      return NextResponse.json({ action: "added" });
    }

    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  } catch (error) {
    logger.error("[API /api/favorites POST]", error);
    return NextResponse.json(
      { error: "Failed to update favorite" },
      { status: 500 }
    );
  }
}
