import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

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

  let price = 0;

  if (templateId) {
    const template = await prisma.template.findUnique({
      where: { id: templateId },
    });
    if (!template) {
      return NextResponse.json(
        { error: "Template not found" },
        { status: 404 }
      );
    }
    price = template.price;

    const existingPurchase = await prisma.purchase.findFirst({
      where: { userId: session.user.id, templateId },
    });
    if (existingPurchase) {
      return NextResponse.json(
        { error: "Already purchased" },
        { status: 409 }
      );
    }
  }

  if (sectionId) {
    const section = await prisma.section.findUnique({
      where: { id: sectionId },
    });
    if (!section) {
      return NextResponse.json(
        { error: "Section not found" },
        { status: 404 }
      );
    }
    price = section.price;

    const existingPurchase = await prisma.purchase.findFirst({
      where: { userId: session.user.id, sectionId },
    });
    if (existingPurchase) {
      return NextResponse.json(
        { error: "Already purchased" },
        { status: 409 }
      );
    }
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { credits: true },
  });

  if (!user || user.credits < price) {
    return NextResponse.json(
      { error: "Insufficient credits", required: price, current: user?.credits ?? 0 },
      { status: 402 }
    );
  }

  const [purchase] = await prisma.$transaction([
    prisma.purchase.create({
      data: {
        userId: session.user.id,
        templateId: templateId || null,
        sectionId: sectionId || null,
        creditsSpent: price,
      },
    }),
    prisma.user.update({
      where: { id: session.user.id },
      data: { credits: { decrement: price } },
    }),
    prisma.creditTransaction.create({
      data: {
        userId: session.user.id,
        amount: -price,
        type: "PURCHASE",
        description: templateId
          ? `Purchased template ${templateId}`
          : `Purchased section ${sectionId}`,
      },
    }),
  ]);

  const updatedUser = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { credits: true },
  });

  return NextResponse.json({
    success: true,
    purchaseId: purchase.id,
    remainingCredits: updatedUser?.credits ?? 0,
  });
}
