import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decode } from "next-auth/jwt";

const protectedRoutes = ["/profile"];
const adminRoutes = ["/admin"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );
  const isAdmin = adminRoutes.some((route) => pathname.startsWith(route));

  if (!isProtected && !isAdmin) {
    return NextResponse.next();
  }

  const tokenValue =
    request.cookies.get("authjs.session-token")?.value ||
    request.cookies.get("__Secure-authjs.session-token")?.value ||
    request.cookies.get("next-auth.session-token")?.value ||
    request.cookies.get("__Secure-next-auth.session-token")?.value;

  if (!tokenValue) {
    const signInUrl = new URL("/signin", request.url);
    signInUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(signInUrl);
  }

  if (isAdmin) {
    const secret = process.env.NEXTAUTH_SECRET;
    if (secret) {
      try {
        const token = await decode({ token: tokenValue, secret });
        if ((token as { role?: string } | null)?.role !== "ADMIN") {
          return NextResponse.redirect(new URL("/", request.url));
        }
      } catch {
        const signInUrl = new URL("/signin", request.url);
        signInUrl.searchParams.set("callbackUrl", pathname);
        return NextResponse.redirect(signInUrl);
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/admin/:path*"],
};
