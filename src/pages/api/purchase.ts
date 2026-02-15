import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";

import { authOptions } from "@/lib/auth-options";
import { prisma } from "@/lib/prisma";
import templatesManifest from "@/data/templates-manifest.json";

type PurchaseBody = {
  slug?: string;
  type?: "template" | "section";
};

type ManifestTemplate = {
  slug: string;
  title?: string;
  description?: string | null;
  price?: number;
  category?: string;
  tags?: string[];
  language?: string;
  style?: string[];
  layout?: string | null;
  sourceUrl?: string | null;
  thumbnailUrl?: string | null;
  htmlPath?: string | null;
  status?: "DRAFT" | "PUBLISHED" | "ARCHIVED";
};

function getManifestTemplate(slug: string) {
  const list = templatesManifest as unknown as ManifestTemplate[];
  return list.find((t) => t?.slug === slug) ?? null;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const session = await getServerSession(req, res, authOptions);
  if (!session?.user?.email) return res.status(401).json({ error: "Unauthorized" });

  const body = (req.body ?? {}) as PurchaseBody;
  const slug = typeof body.slug === "string" ? body.slug : null;
  const type = body.type === "section" ? "section" : "template";

  if (!slug) return res.status(400).json({ error: "Missing required fields" });

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { id: true, credits: true, role: true },
  });
  if (!user) return res.status(404).json({ error: "User not found" });

  // Admins can "purchase" without charging credits to unblock QA/admin flows.
  const isAdmin = user.role === "ADMIN";

  if (type === "template") {
    const manifest = getManifestTemplate(slug);

    let template = await prisma.template.findUnique({
      where: { slug },
      select: {
        id: true,
        title: true,
        price: true,
        status: true,
      },
    });

    if (!template && manifest) {
      // Ensure a DB row exists so purchases can reference templateId.
      const created = await prisma.template.create({
        data: {
          slug: String(manifest.slug),
          title: String(manifest.title ?? slug),
          description: manifest.description ? String(manifest.description) : null,
          price: Number(manifest.price ?? 0) || 0,
          category: String(manifest.category ?? "pages"),
          tags: Array.isArray(manifest.tags) ? manifest.tags.map(String) : [],
          language: String(manifest.language ?? "한국어"),
          style: Array.isArray(manifest.style) ? manifest.style.map(String) : [],
          layout: manifest.layout ? String(manifest.layout) : null,
          sourceUrl: manifest.sourceUrl ? String(manifest.sourceUrl) : null,
          thumbnailUrl: manifest.thumbnailUrl ? String(manifest.thumbnailUrl) : null,
          htmlPath: manifest.htmlPath ? String(manifest.htmlPath) : null,
          status: manifest.status ?? "PUBLISHED",
        },
        select: { id: true, title: true, price: true, status: true },
      });
      template = created;
    }

    if (!template) return res.status(404).json({ error: "Template not found" });
    if (template.status !== "PUBLISHED") {
      return res.status(400).json({ error: "This template is not for sale right now" });
    }

    const price = Math.max(0, Number(template.price) || 0);

    const existing = await prisma.purchase.findFirst({
      where: { userId: user.id, templateId: template.id },
      select: { id: true },
    });

    if (existing) {
      const refreshed = await prisma.user.findUnique({
        where: { id: user.id },
        select: { credits: true },
      });
      return res.status(200).json({
        success: true,
        alreadyPurchased: true,
        remainingCredits: refreshed?.credits ?? user.credits,
        message: `Already purchased ${template.title}`,
      });
    }

    if (!isAdmin && user.credits < price) {
      return res
        .status(400)
        .json({ error: "Insufficient credits", required: price, current: user.credits });
    }

    try {
      const result = await prisma.$transaction(async (tx) => {
        if (!isAdmin && price > 0) {
          const updated = await tx.user.updateMany({
            where: { id: user.id, credits: { gte: price } },
            data: { credits: { decrement: price } },
          });
          if (updated.count !== 1) {
            const current = await tx.user.findUnique({
              where: { id: user.id },
              select: { credits: true },
            });
            return { ok: false as const, currentCredits: current?.credits ?? 0 };
          }

          await tx.creditTransaction.create({
            data: {
              userId: user.id,
              amount: -price,
              type: "PURCHASE",
              description: `Purchased ${type}: ${template.title}`,
            },
          });
        }

        await tx.purchase.create({
          data: {
            userId: user.id,
            templateId: template.id,
            creditsSpent: isAdmin ? 0 : price,
          },
        });

        const refreshed = await tx.user.findUnique({
          where: { id: user.id },
          select: { credits: true },
        });

        return { ok: true as const, remainingCredits: refreshed?.credits ?? 0 };
      });

      if (!result.ok) {
        return res.status(400).json({
          error: "Insufficient credits",
          required: price,
          current: result.currentCredits,
        });
      }

      return res.status(200).json({
        success: true,
        remainingCredits: result.remainingCredits,
        message: `Successfully purchased ${template.title}`,
      });
    } catch (e) {
      console.error("[purchase] error", e);
      return res.status(500).json({ error: "Failed to process purchase" });
    }
  }

  // Section purchase (best-effort; current catalog is template-first).
  const section = await prisma.section.findUnique({
    where: { slug },
    select: { id: true, title: true, price: true },
  });
  if (!section) return res.status(404).json({ error: "Section not found" });

  const existing = await prisma.purchase.findFirst({
    where: { userId: user.id, sectionId: section.id },
    select: { id: true },
  });
  if (existing) {
    const refreshed = await prisma.user.findUnique({
      where: { id: user.id },
      select: { credits: true },
    });
    return res.status(200).json({
      success: true,
      alreadyPurchased: true,
      remainingCredits: refreshed?.credits ?? user.credits,
      message: `Already purchased ${section.title}`,
    });
  }

  const price = Math.max(0, Number(section.price) || 0);
  if (!isAdmin && user.credits < price) {
    return res
      .status(400)
      .json({ error: "Insufficient credits", required: price, current: user.credits });
  }

  try {
    const result = await prisma.$transaction(async (tx) => {
      if (!isAdmin && price > 0) {
        const updated = await tx.user.updateMany({
          where: { id: user.id, credits: { gte: price } },
          data: { credits: { decrement: price } },
        });
        if (updated.count !== 1) {
          const current = await tx.user.findUnique({
            where: { id: user.id },
            select: { credits: true },
          });
          return { ok: false as const, currentCredits: current?.credits ?? 0 };
        }

        await tx.creditTransaction.create({
          data: {
            userId: user.id,
            amount: -price,
            type: "PURCHASE",
            description: `Purchased ${type}: ${section.title}`,
          },
        });
      }

      await tx.purchase.create({
        data: {
          userId: user.id,
          sectionId: section.id,
          creditsSpent: isAdmin ? 0 : price,
        },
      });

      const refreshed = await tx.user.findUnique({
        where: { id: user.id },
        select: { credits: true },
      });

      return { ok: true as const, remainingCredits: refreshed?.credits ?? 0 };
    });

    if (!result.ok) {
      return res.status(400).json({
        error: "Insufficient credits",
        required: price,
        current: result.currentCredits,
      });
    }

    return res.status(200).json({
      success: true,
      remainingCredits: result.remainingCredits,
      message: `Successfully purchased ${section.title}`,
    });
  } catch (e) {
    console.error("[purchase] error", e);
    return res.status(500).json({ error: "Failed to process purchase" });
  }
}
