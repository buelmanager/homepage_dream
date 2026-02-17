import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { lemonRequest } from "@/lib/lemonsqueezy";
import { getLemonStoreId, getLemonVariantId } from "@/lib/app-settings";

const SUBSCRIPTION_PLANS = {
  PRO: { price: 20, monthlyLimit: 999999, label: "Pro" },
};

type PlanKey = keyof typeof SUBSCRIPTION_PLANS;

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

    // Prevent duplicate subscription
    const existingActive = await prisma.subscription.findFirst({
      where: {
        userId: user.id,
        status: "ACTIVE",
        currentPeriodEnd: { gt: new Date() },
      },
    });

    if (existingActive) {
      return NextResponse.json(
        { error: "You already have an active PRO subscription." },
        { status: 409 }
      );
    }

    const planKey = plan as PlanKey;
    const planConfig = SUBSCRIPTION_PLANS[planKey];
    const storeId = await getLemonStoreId();
    const variantId = await getLemonVariantId(planKey);

    const origin = request.headers.get("origin") || request.nextUrl.origin;
    const successUrl = `${origin}/profile?checkout=success`;

    // Test mode: Lemon Squeezy not configured → create subscription directly
    if (!storeId || !variantId) {
      // Cancel existing active subscriptions
      await prisma.subscription.updateMany({
        where: { userId: user.id, status: "ACTIVE" },
        data: { status: "CANCELLED" },
      });

      await prisma.subscription.create({
        data: {
          userId: user.id,
          plan: planKey,
          status: "ACTIVE",
          monthlyLimit: planConfig.monthlyLimit,
          price: planConfig.price,
          currentPeriodStart: new Date(),
          currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        },
      });

      return NextResponse.json({
        success: true,
        url: successUrl,
        plan: planConfig.label,
        testMode: true,
      });
    }

    // Production mode: Lemon Squeezy checkout
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
