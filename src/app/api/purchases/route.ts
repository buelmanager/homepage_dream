import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

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

    return NextResponse.json({ purchases });
  } catch (error) {
    console.error("Error fetching purchases:", error);
    return NextResponse.json(
      { error: "Failed to fetch purchases" },
      { status: 500 }
    );
  }
}
