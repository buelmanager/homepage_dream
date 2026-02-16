import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { lemonRequest } from "@/lib/lemonsqueezy";

const SUBSCRIPTION_PLANS = {
  BASIC: { price: 10, monthlyLimit: 3, label: "Basic" },
  STANDARD: { price: 20, monthlyLimit: 7, label: "Standard" },
  PREMIUM: { price: 30, monthlyLimit: 15, label: "Premium" },
};

type PlanKey = keyof typeof SUBSCRIPTION_PLANS;

function getVariantIdForPlan(plan: PlanKey) {
  const mapping = {
    BASIC: process.env.LEMONSQUEEZY_VARIANT_ID_BASIC,
    STANDARD: process.env.LEMONSQUEEZY_VARIANT_ID_STANDARD,
    PREMIUM: process.env.LEMONSQUEEZY_VARIANT_ID_PREMIUM,
  };
  return mapping[plan];
}

export async function POST(request: NextRequest) {
  try {
    console.log("[API /api/subscription POST] Request started");
    const session = await auth();

    if (!session?.user?.id) {
      console.log("[API /api/subscription POST] Unauthorized - no user ID");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { plan } = await request.json();
    console.log("[API /api/subscription POST] Plan requested:", plan);

    if (!plan || !SUBSCRIPTION_PLANS[plan as PlanKey]) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    console.log("[API /api/subscription POST] Finding user:", session.user.id);
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const planKey = plan as PlanKey;
    const planConfig = SUBSCRIPTION_PLANS[planKey];
    const storeId = process.env.LEMONSQUEEZY_STORE_ID;
    const variantId = getVariantIdForPlan(planKey);

    if (!storeId || !variantId) {
      return NextResponse.json(
        { error: "Missing Lemon Squeezy store/variant configuration" },
        { status: 500 }
      );
    }

    const origin = request.headers.get("origin") || request.nextUrl.origin;
    const successUrl = `${origin}/profile?checkout=success`;
    const checkoutResp = await lemonRequest<{
      data: { attributes?: { url?: string } };
    }>("/checkouts", {
      method: "POST",
      body: JSON.stringify({
        data: {
          type: "checkouts",
          attributes: {
            checkout_data: {
              email: user.email,
              custom: {
                user_id: user.id,
                plan: planKey,
              },
            },
            checkout_options: {
              embed: false,
              media: true,
              logo: true,
              desc: true,
              subscription_preview: true,
            },
            product_options: {
              redirect_url: successUrl,
              receipt_link_url: successUrl,
              receipt_button_text: "Back to HomeDream",
            },
            test_mode: process.env.LEMONSQUEEZY_TEST_MODE === "true",
          },
          relationships: {
            store: {
              data: { type: "stores", id: String(storeId) },
            },
            variant: {
              data: { type: "variants", id: String(variantId) },
            },
          },
        },
      }),
    });

    const checkoutUrl = checkoutResp.data.attributes?.url;
    if (!checkoutUrl) {
      return NextResponse.json(
        { error: "Failed to create checkout URL" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      url: checkoutUrl,
      plan: planConfig.label,
    });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { error: "Failed to create Lemon checkout session" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    console.log("[API /api/subscription GET] Request started");
    const session = await auth();

    if (!session?.user?.id) {
      console.log("[API /api/subscription GET] Unauthorized - no user ID");
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    console.log("[API /api/subscription GET] Finding user:", session.user.id);
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: {
        subscriptions: {
          where: { status: "ACTIVE" },
          orderBy: { createdAt: "desc" },
          take: 1,
        },
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const activeSubscription = user.subscriptions[0];

    return NextResponse.json({
      credits: user.credits,
      subscription: activeSubscription,
      plans: SUBSCRIPTION_PLANS,
    });
  } catch (error) {
    console.error("Get subscription error:", error);
    return NextResponse.json(
      { error: "Failed to get subscription info" },
      { status: 500 }
    );
  }
}
