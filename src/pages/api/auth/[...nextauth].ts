import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth-options";

function pickHeaders(req: NextApiRequest) {
  // Avoid logging cookies/authorization headers.
  const allow = ["user-agent", "x-forwarded-for", "x-real-ip", "x-vercel-id"];
  const out: Record<string, string | string[] | undefined> = {};
  for (const k of allow) out[k] = req.headers[k];
  return out;
}

export default async function authHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const rid = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
  console.log(
    `[auth] route.start ${JSON.stringify({
      rid,
      method: req.method,
      url: req.url,
      queryKeys: Object.keys(req.query || {}),
      headers: pickHeaders(req),
    })}`
  );

  try {
    // NextAuth v4 pages router handler
    return await (NextAuth as any)(req, res, authOptions);
  } finally {
    console.log(`[auth] route.end ${JSON.stringify({ rid })}`);
  }
}
