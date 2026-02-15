import { headers } from "next/headers";
import { getToken } from "next-auth/jwt";

// Minimal session accessor for App Router route handlers still using `auth()`.
// Long term, these endpoints should be migrated to `pages/api/*` which can use
// `getServerSession(req, res, authOptions)`.
export async function auth(): Promise<
  | {
      user: {
        id: string;
        email?: string;
        role?: "USER" | "ADMIN";
        credits?: number;
      };
    }
  | null
> {
  const h = await headers();
  const cookie = h.get("cookie") ?? "";
  const token = await getToken({
    req: { headers: { cookie } } as any,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token?.id) return null;

  return {
    user: {
      id: String(token.id),
      email: token.email ? String(token.email) : undefined,
      role: (token.role as any) ?? "USER",
      credits: typeof token.credits === "number" ? token.credits : undefined,
    },
  };
}
