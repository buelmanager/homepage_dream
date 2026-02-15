import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";

import { authOptions } from "@/lib/auth-options";
import { prisma } from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const slug = typeof req.query.slug === "string" ? req.query.slug : null;
  const type = typeof req.query.type === "string" ? req.query.type : "template";

  if (!slug) return res.status(400).json({ error: "Missing slug" });
  if (type !== "template" && type !== "section") {
    return res.status(400).json({ error: "Invalid type" });
  }

  const session = await getServerSession(req, res, authOptions);
  if (!session?.user?.email) {
    // For UI convenience: unauthenticated => not purchased.
    return res.status(200).json({ purchased: false });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { id: true, role: true },
  });
  if (!user) return res.status(200).json({ purchased: false });
  if (user.role === "ADMIN") return res.status(200).json({ purchased: true });

  if (type === "template") {
    const template = await prisma.template.findUnique({
      where: { slug },
      select: { id: true },
    });
    if (!template) return res.status(200).json({ purchased: false });

    const purchase = await prisma.purchase.findFirst({
      where: { userId: user.id, templateId: template.id },
      select: { id: true },
    });

    return res.status(200).json({ purchased: !!purchase });
  }

  const section = await prisma.section.findUnique({
    where: { slug },
    select: { id: true },
  });
  if (!section) return res.status(200).json({ purchased: false });

  const purchase = await prisma.purchase.findFirst({
    where: { userId: user.id, sectionId: section.id },
    select: { id: true },
  });

  return res.status(200).json({ purchased: !!purchase });
}

