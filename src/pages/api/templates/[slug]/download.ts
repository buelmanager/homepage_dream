import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import path from "node:path";
import fs from "node:fs/promises";
import archiver from "archiver";

import { authOptions } from "@/lib/auth-options";
import { prisma } from "@/lib/prisma";

export const config = {
  api: {
    responseLimit: false,
  },
};

async function existsDir(p: string) {
  try {
    const st = await fs.stat(p);
    return st.isDirectory();
  } catch {
    return false;
  }
}

async function addDirToArchive(archive: archiver.Archiver, rootDir: string) {
  // Use archiver's directory helper; exclude common junk files.
  // This keeps implementation small and Vercel-friendly.
  archive.directory(rootDir, false, (entry) => {
    const name = entry.name.replace(/\\/g, "/");
    if (name.endsWith(".DS_Store")) return false;
    if (name.startsWith(".sisyphus/")) return false;
    return entry;
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const slug = typeof req.query.slug === "string" ? req.query.slug : null;
  if (!slug) return res.status(400).json({ error: "Missing slug" });

  const session = await getServerSession(req, res, authOptions);
  if (!session?.user?.email) return res.status(401).json({ error: "Unauthorized" });

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { id: true, role: true },
  });
  if (!user) return res.status(401).json({ error: "Unauthorized" });

  if (user.role !== "ADMIN") {
    const template = await prisma.template.findUnique({
      where: { slug },
      select: { id: true },
    });
    if (!template) return res.status(404).json({ error: "Template not found" });

    const purchase = await prisma.purchase.findFirst({
      where: { userId: user.id, templateId: template.id },
      select: { id: true },
    });
    if (!purchase) return res.status(403).json({ error: "Not purchased" });
  }

  const templateRoot = path.join(process.cwd(), "multi_clone_hompage", "home", slug);
  if (!(await existsDir(templateRoot))) {
    return res.status(404).json({ error: "Template files not found" });
  }

  res.setHeader("Content-Type", "application/zip");
  res.setHeader("Content-Disposition", `attachment; filename="${slug}.zip"`);
  res.setHeader("Cache-Control", "no-store");

  const archive = archiver("zip", { zlib: { level: 9 } });
  archive.on("error", (err) => {
    console.error("[template-download] archiver error", err);
    try {
      res.status(500).end();
    } catch {}
  });

  archive.pipe(res);
  await addDirToArchive(archive, templateRoot);
  await archive.finalize();
}
