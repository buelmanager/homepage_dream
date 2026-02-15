import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { credits: true },
  });

  return NextResponse.json({ credits: user?.credits ?? 0 });
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { amount } = await request.json();
  const topUpAmount = Math.max(0, Math.min(Number(amount) || 0, 10000));

  if (topUpAmount <= 0) {
    return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
  }

  const user = await prisma.user.update({
    where: { id: session.user.id },
    data: { credits: { increment: topUpAmount } },
  });

  await prisma.creditTransaction.create({
    data: {
      userId: session.user.id,
      amount: topUpAmount,
      type: "TOP_UP",
      description: `Added ${topUpAmount} credits`,
    },
  });

  return NextResponse.json({ credits: user.credits, added: topUpAmount });
}
