import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import {
  getDefaultSignupCredits,
  setDefaultSignupCredits,
  getLemonSettings,
  setLemonSettings,
} from "@/lib/app-settings";

async function requireAdmin() {
  const session = await auth();
  if (!session?.user?.id) {
    return { error: NextResponse.json({ error: "Unauthorized" }, { status: 401 }) };
  }
  if (session.user.role !== "ADMIN") {
    return { error: NextResponse.json({ error: "Forbidden" }, { status: 403 }) };
  }
  return { session };
}

export async function GET() {
  const guard = await requireAdmin();
  if ("error" in guard) return guard.error;

  const [defaultSignupCredits, lemon] = await Promise.all([
    getDefaultSignupCredits(),
    getLemonSettings(),
  ]);

  return NextResponse.json({ defaultSignupCredits, lemon });
}

export async function PATCH(request: Request) {
  const guard = await requireAdmin();
  if ("error" in guard) return guard.error;

  const body = (await request.json()) as {
    defaultSignupCredits?: number;
    lemon?: {
      storeId?: string;
      variantIdPro?: string;
    };
  };

  if (body.defaultSignupCredits !== undefined) {
    const value = Number(body.defaultSignupCredits);
    if (!Number.isFinite(value) || value < 0 || value > 100000) {
      return NextResponse.json(
        { error: "defaultSignupCredits must be between 0 and 100000" },
        { status: 400 }
      );
    }
    await setDefaultSignupCredits(value);
  }

  if (body.lemon) {
    await setLemonSettings(body.lemon);
  }

  return NextResponse.json({ success: true });
}
