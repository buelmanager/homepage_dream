import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
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
      return NextResponse.json({ purchases: [] }, { status: 401 });
    }

    const purchases = await prisma.purchase.findMany({
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

    const enriched = purchases.map((p) => ({
      ...p,
      template: p.template
        ? {
            ...p.template,
            thumbnailUrl:
              p.template.thumbnailUrl ??
              manifestBySlug.get(p.template.slug) ??
              null,
          }
        : null,
    }));

    return NextResponse.json({ purchases: enriched });
  } catch (error) {
    console.error("Error fetching purchases:", error);
    return NextResponse.json(
      { error: "Failed to fetch purchases" },
      { status: 500 }
    );
  }
}
