import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import templatesManifest from "@/data/templates-manifest.json";

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { slug, type } = await request.json();
    
    if (!slug || !type) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const manifestTemplate = (templatesManifest as Array<{ slug: string; title: string; price: number; status?: string }>).find((t) => t.slug === slug);
    const dbTemplate = await prisma.template.findUnique({
      where: { slug },
      select: { title: true, price: true, status: true },
    });
    const template = dbTemplate ?? manifestTemplate;
    
    if (!template) {
      return NextResponse.json(
        { error: "Template not found" },
        { status: 404 }
      );
    }

    if (dbTemplate && dbTemplate.status !== "PUBLISHED") {
      return NextResponse.json(
        { error: "This template is not for sale right now" },
        { status: 400 }
      );
    }

    const price = Math.max(0, Number(template.price) || 0);

    if (user.credits < price) {
      return NextResponse.json(
        { error: "Insufficient credits", required: price, current: user.credits },
        { status: 400 }
      );
    }

    await prisma.user.update({
      where: { id: user.id },
      data: { credits: { decrement: price } },
    });

    await prisma.creditTransaction.create({
      data: {
        userId: user.id,
        amount: -price,
        type: "PURCHASE",
        description: `Purchased ${type}: ${template.title}`,
      },
    });

    const updatedUser = await prisma.user.findUnique({
      where: { id: user.id },
      select: { credits: true },
    });

    return NextResponse.json({
      success: true,
      remainingCredits: updatedUser?.credits,
      message: `Successfully purchased ${template.title}`,
    });
  } catch (error) {
    console.error("Purchase error:", error);
    return NextResponse.json(
      { error: "Failed to process purchase" },
      { status: 500 }
    );
  }
}
