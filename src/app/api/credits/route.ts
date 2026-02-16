import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  console.log("[API /api/credits] Request started");
  const startTime = Date.now();
  
  try {
    console.log("[API /api/credits] Checking auth...");
    const session = await auth();
    console.log("[API /api/credits] Auth check completed in", Date.now() - startTime, "ms");
    
    if (!session?.user?.id) {
      console.log("[API /api/credits] Unauthorized - no session");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    console.log("[API /api/credits] Querying database for user:", session.user.id);
    const dbStartTime = Date.now();
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { credits: true },
    });
    console.log("[API /api/credits] Database query completed in", Date.now() - dbStartTime, "ms");

    console.log("[API /api/credits] Total request time:", Date.now() - startTime, "ms");
    return NextResponse.json({ credits: user?.credits ?? 0 });
  } catch (error) {
    console.error("[API /api/credits] Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  void request;
  return NextResponse.json(
    { error: "Direct credit top-up is disabled. Use paid checkout flow." },
    { status: 403 }
  );
}
