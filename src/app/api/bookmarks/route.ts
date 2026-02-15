import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const bookmarks = await prisma.bookmark.findMany({
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

  return NextResponse.json({ bookmarks });
}

export async function POST(request: Request) {
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
    const existing = await prisma.bookmark.findFirst({
      where: { userId: session.user.id, templateId },
    });

    if (existing) {
      await prisma.bookmark.delete({ where: { id: existing.id } });
      await prisma.template.update({
        where: { id: templateId },
        data: { saveCount: { decrement: 1 } },
      });
      return NextResponse.json({ action: "removed" });
    }

    await prisma.bookmark.create({
      data: { userId: session.user.id, templateId },
    });
    await prisma.template.update({
      where: { id: templateId },
      data: { saveCount: { increment: 1 } },
    });
    return NextResponse.json({ action: "added" });
  }

  if (sectionId) {
    const existing = await prisma.bookmark.findFirst({
      where: { userId: session.user.id, sectionId },
    });

    if (existing) {
      await prisma.bookmark.delete({ where: { id: existing.id } });
      return NextResponse.json({ action: "removed" });
    }

    await prisma.bookmark.create({
      data: { userId: session.user.id, sectionId },
    });
    return NextResponse.json({ action: "added" });
  }

  return NextResponse.json({ error: "Invalid request" }, { status: 400 });
}
