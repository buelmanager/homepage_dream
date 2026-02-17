import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import sharp from "sharp";
import { auth } from "@/lib/auth";
import { createClient } from "@supabase/supabase-js";

const BUCKET = process.env.TEMPLATE_THUMBNAIL_BUCKET || "template-thumbnails";

function getSupabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) return null;
  return createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function ensureBucket(supabase: any) {
  const { data } = await supabase.storage.getBucket(BUCKET);
  if (data) return;
  await supabase.storage.createBucket(BUCKET, { public: true });
}

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

  try {
    const rawBuffer = Buffer.from(await file.arrayBuffer());

    // Convert to webp with optimization
    const webpBuffer = await sharp(rawBuffer)
      .resize(1200, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toBuffer();

    const fileName = "thumb.webp";

    // Try Supabase Storage (works in production)
    const supabase = getSupabase();

    if (supabase) {
      await ensureBucket(supabase);

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

      return NextResponse.json(
        { error: `Storage upload failed: ${error.message}` },
        { status: 502 },
      );
    }

    // Fallback: save to local public folder (dev only, Vercel is read-only)
    const dir = path.join(process.cwd(), "public", "thumbnails", slug);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(path.join(dir, fileName), webpBuffer);

    const url = `/thumbnails/${slug}/${fileName}`;
    return NextResponse.json({ url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
