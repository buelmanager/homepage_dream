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

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const guard = await requireAdmin();
  if ("error" in guard) return guard.error;

  const { slug } = await params;
  const body = (await request.json()) as {
    title?: string;
    price?: number;
    tier?: "FREE" | "PRO";
    storageKey?: string | null;
    status?: "DRAFT" | "PUBLISHED" | "ARCHIVED";
    category?: string;
  };

  const data: {
    title?: string;
    price?: number;
    tier?: "FREE" | "PRO";
    storageKey?: string | null;
    status?: "DRAFT" | "PUBLISHED" | "ARCHIVED";
    category?: string;
  } = {};
  if (body.title !== undefined) data.title = body.title.trim();
  if (body.category !== undefined) data.category = body.category;
  if (body.price !== undefined) data.price = Math.max(0, Math.floor(Number(body.price) || 0));
  if (body.tier !== undefined) data.tier = body.tier;
  if (body.storageKey !== undefined) data.storageKey = body.storageKey?.trim() || null;
  if (body.status !== undefined) data.status = body.status;

  if (Object.keys(data).length === 0) {
    return NextResponse.json({ error: "No fields to update" }, { status: 400 });
  }

  const template = await prisma.template.update({
    where: { slug },
    data,
  });

  return NextResponse.json({ template });
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const guard = await requireAdmin();
  if ("error" in guard) return guard.error;

  const { slug } = await params;
  await prisma.template.delete({ where: { slug } });
  return NextResponse.json({ success: true });
}
