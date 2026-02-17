import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import { auth } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const formData = await request.formData();
  const file = formData.get("file") as File | null;
  const slug = formData.get("slug") as string | null;

  if (!file || !slug) {
    return NextResponse.json({ error: "file and slug are required" }, { status: 400 });
  }

  const ext = path.extname(file.name).toLowerCase() || ".png";
  const allowed = [".png", ".jpg", ".jpeg", ".webp", ".avif"];
  if (!allowed.includes(ext)) {
    return NextResponse.json({ error: "Unsupported image format" }, { status: 400 });
  }

  const fileName = `thumb${ext}`;
  const dir = path.join(process.cwd(), "public", "thumbnails", slug);
  await fs.mkdir(dir, { recursive: true });

  const buffer = Buffer.from(await file.arrayBuffer());
  const filePath = path.join(dir, fileName);
  await fs.writeFile(filePath, buffer);

  const url = `/thumbnails/${slug}/${fileName}`;
  return NextResponse.json({ url });
}
