import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

async function requireAdmin() {
  const session = await auth();
  if (!session?.user?.id) {
    return { error: NextResponse.json({ error: "Unauthorized" }, { status: 401 }) };
  }
  if (session.user.role !== "ADMIN") {
    return { error: NextResponse.json({ error: "Forbidden" }, { status: 403 }) };
  }
  return { session };
}

export async function GET() {
  const guard = await requireAdmin();
  if ("error" in guard) return guard.error;

  const sub = await prisma.subscription.findFirst({
    where: { userId: guard.session.user.id, status: "ACTIVE" },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ mode: sub ? "PRO" : "FREE" });
}

export async function POST(request: NextRequest) {
  const guard = await requireAdmin();
  if ("error" in guard) return guard.error;

  const { mode } = (await request.json()) as { mode?: "FREE" | "PRO" };
  const userId = guard.session.user.id;

  if (mode === "PRO") {
    const existing = await prisma.subscription.findFirst({
      where: { userId, status: "ACTIVE" },
    });

    if (!existing) {
      await prisma.subscription.create({
        data: {
          userId,
          plan: "PRO",
          status: "ACTIVE",
          monthlyLimit: 999999,
          price: 0,
          currentPeriodStart: new Date(),
          currentPeriodEnd: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
        },
      });
    }

    return NextResponse.json({ mode: "PRO" });
  }

  // mode === "FREE" → cancel all active subscriptions
  await prisma.subscription.updateMany({
    where: { userId, status: "ACTIVE" },
    data: { status: "CANCELLED" },
  });

  return NextResponse.json({ mode: "FREE" });
}
