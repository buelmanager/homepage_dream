import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import templatesManifest from "@/data/templates-manifest.json";

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
  { params }: { params: Promise<{ id: string }> }
) {
  const guard = await requireAdmin();
  if ("error" in guard) return guard.error;

  const { id } = await params;
  const body = (await request.json()) as {
    title?: string;
    price?: number;
    status?: "DRAFT" | "PUBLISHED" | "ARCHIVED";
    category?: string;
  };

  const data: {
    title?: string;
    price?: number;
    status?: "DRAFT" | "PUBLISHED" | "ARCHIVED";
    category?: string;
  } = {};
  if (body.title !== undefined) data.title = body.title.trim();
  if (body.category !== undefined) data.category = body.category;
  if (body.price !== undefined) data.price = Math.max(0, Math.floor(Number(body.price) || 0));
  if (body.status !== undefined) data.status = body.status;

  if (Object.keys(data).length === 0) {
    return NextResponse.json({ error: "No fields to update" }, { status: 400 });
  }

  let template;
  if (id.startsWith("fs:")) {
    const slug = id.replace(/^fs:/, "");
    const m = (templatesManifest as Array<{ slug: string; title: string; category: string }>).find(
      (t) => t.slug === slug
    );
    template = await prisma.template.upsert({
      where: { slug },
      update: data,
      create: {
        slug,
        title: data.title || m?.title || slug,
        description: null,
        price: data.price ?? 10,
        category: data.category || m?.category || "pages",
        tags: [],
        language: "English",
        style: [],
        layout: null,
        sourceUrl: null,
        htmlPath: `/templates/${slug}/index.html`,
        status: data.status || "PUBLISHED",
      },
    });
  } else {
    template = await prisma.template.update({
      where: { id },
      data,
    });
  }

  return NextResponse.json({ template });
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const guard = await requireAdmin();
  if ("error" in guard) return guard.error;

  const { id } = await params;
  if (id.startsWith("fs:")) {
    return NextResponse.json({ success: true });
  }
  await prisma.template.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
