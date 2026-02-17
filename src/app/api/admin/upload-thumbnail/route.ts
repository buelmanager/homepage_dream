import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import sharp from "sharp";
import { auth } from "@/lib/auth";
import { createClient } from "@supabase/supabase-js";

const BUCKET = process.env.TEMPLATE_THUMBNAIL_BUCKET || "template-thumbnails";

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

  const rawBuffer = Buffer.from(await file.arrayBuffer());

  // Convert to webp with optimization
  const webpBuffer = await sharp(rawBuffer)
    .resize(1200, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toBuffer();

  const fileName = "thumb.webp";

  // Try Supabase Storage first (works in production)
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (supabaseUrl && serviceRoleKey) {
    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    const storagePath = `${slug}/${fileName}`;
    const { error } = await supabase.storage
      .from(BUCKET)
      .upload(storagePath, webpBuffer, {
        contentType: "image/webp",
        upsert: true,
      });

    if (!error) {
      const { data: publicUrl } = supabase.storage
        .from(BUCKET)
        .getPublicUrl(storagePath);
      return NextResponse.json({ url: publicUrl.publicUrl });
    }
  }

  // Fallback: save to local public folder
  const dir = path.join(process.cwd(), "public", "thumbnails", slug);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, fileName), webpBuffer);

  const url = `/thumbnails/${slug}/${fileName}`;
  return NextResponse.json({ url });
}
