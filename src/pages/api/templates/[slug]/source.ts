import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import path from "node:path";
import fs from "node:fs/promises";

import { authOptions } from "@/lib/auth-options";
import { prisma } from "@/lib/prisma";

export const config = {
  api: {
    responseLimit: false,
  },
};

function safeRelPath(input: string) {
  // Prevent path traversal and absolute paths.
  const p = input.replace(/\\/g, "/").trim();
  if (!p || p.startsWith("/") || p.includes("..")) return null;
  return p;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).send("Method not allowed");
  }

  const slug = typeof req.query.slug === "string" ? req.query.slug : null;
  if (!slug) return res.status(400).send("Missing slug");

  const fileRaw = typeof req.query.file === "string" ? req.query.file : "index.html";
  const rel = safeRelPath(fileRaw);
  if (!rel) return res.status(400).send("Invalid file");

  const session = await getServerSession(req, res, authOptions);
  if (!session?.user?.email) return res.status(401).send("Unauthorized");

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { id: true, role: true },
  });
  if (!user) return res.status(401).send("Unauthorized");

  if (user.role !== "ADMIN") {
    const template = await prisma.template.findUnique({
      where: { slug },
      select: { id: true },
    });
    if (!template) return res.status(404).send("Template not found");

    const purchase = await prisma.purchase.findFirst({
      where: { userId: user.id, templateId: template.id },
      select: { id: true },
    });
    if (!purchase) return res.status(403).send("Not purchased");
  }

  const templateRoot = path.join(process.cwd(), "multi_clone_hompage", "home", slug);
  const abs = path.join(templateRoot, rel);

  // Ensure the resolved path stays under templateRoot
  const normalizedRoot = path.resolve(templateRoot) + path.sep;
  const normalizedAbs = path.resolve(abs);
  if (!normalizedAbs.startsWith(normalizedRoot)) return res.status(400).send("Invalid file");

  try {
    const buf = await fs.readFile(normalizedAbs);
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    return res.status(200).send(buf.toString("utf8"));
  } catch (e: unknown) {
    const err = e as { code?: string };
    if (err?.code === "ENOENT") return res.status(404).send("File not found");
    console.error("[template-source] error", e);
    return res.status(500).send("Failed to load source");
  }
}
