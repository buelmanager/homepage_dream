import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  console.log("[healthz] hit", new Date().toISOString());
  return NextResponse.json({ ok: true, ts: Date.now() });
}

