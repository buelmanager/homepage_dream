import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import fs from "fs";
import path from "path";

export async function POST() {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const templatesDir = path.join(process.cwd(), "public", "templates");

  if (!fs.existsSync(templatesDir)) {
    return NextResponse.json(
      { error: "templates directory not found", discovered: [] },
      { status: 200 }
    );
  }

  const folders = fs
    .readdirSync(templatesDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const existingTemplates = await prisma.template.findMany({
    select: { slug: true },
  });
  const existingSlugs = new Set(existingTemplates.map((t: { slug: string }) => t.slug));

  const discovered: string[] = [];

  for (const folder of folders) {
    if (existingSlugs.has(folder)) continue;

    const indexPath = path.join(templatesDir, folder, "index.html");
    if (!fs.existsSync(indexPath)) continue;

    const title = folder
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

    await prisma.template.create({
      data: {
        slug: folder,
        title,
        description: `Auto-discovered template: ${title}`,
        price: 10,
        category: "pages",
        tags: ["auto-discovered"],
        language: "English",
        style: [],
        htmlPath: `/templates/${folder}`,
        status: "PUBLISHED",
      },
    });

    discovered.push(folder);
  }

  return NextResponse.json({
    scanned: folders.length,
    discovered,
  });
}
