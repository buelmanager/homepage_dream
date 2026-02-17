import { cookies } from "next/headers";
import { decode } from "next-auth/jwt";

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
  const cookieStore = await cookies();
  const tokenValue =
    cookieStore.get("__Secure-next-auth.session-token")?.value ??
    cookieStore.get("next-auth.session-token")?.value;

  if (!tokenValue) return null;

  const secret = process.env.NEXTAUTH_SECRET;
  if (!secret) return null;

  try {
    const token = await decode({ token: tokenValue, secret });
    if (!token?.id) return null;

    return {
      user: {
        id: String(token.id),
        email: token.email ? String(token.email) : undefined,
        role: (token.role as "USER" | "ADMIN") ?? "USER",
        credits: typeof token.credits === "number" ? token.credits : undefined,
      },
    };
  } catch {
    return null;
  }
}
