import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { stripePostForm } from "@/lib/stripe";

const SUBSCRIPTION_PLANS = {
  BASIC: { price: 10, monthlyLimit: 3, label: "Basic" },
  STANDARD: { price: 20, monthlyLimit: 7, label: "Standard" },
  PREMIUM: { price: 30, monthlyLimit: 15, label: "Premium" },
};

export async function POST(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { plan } = await request.json();

    if (!plan || !SUBSCRIPTION_PLANS[plan as keyof typeof SUBSCRIPTION_PLANS]) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const planConfig = SUBSCRIPTION_PLANS[plan as keyof typeof SUBSCRIPTION_PLANS];
    const origin = request.headers.get("origin") || request.nextUrl.origin;
    const successUrl = `${origin}/profile?checkout=success&session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${origin}/profile?checkout=cancel`;

    let stripeCustomerId = user.stripeCustomerId;
    if (!stripeCustomerId) {
      const customer = await stripePostForm<{ id: string }>("/customers", new URLSearchParams({
        email: user.email,
        name: user.name || "",
        "metadata[userId]": user.id,
      }));
      stripeCustomerId = customer.id;

      await prisma.user.update({
        where: { id: user.id },
        data: { stripeCustomerId },
      });
    }

    const form = new URLSearchParams({
      mode: "subscription",
      customer: stripeCustomerId,
      success_url: successUrl,
      cancel_url: cancelUrl,
      allow_promotion_codes: "true",
      billing_address_collection: "auto",
      "line_items[0][quantity]": "1",
      "line_items[0][price_data][currency]": "usd",
      "line_items[0][price_data][unit_amount]": String(planConfig.price * 100),
      "line_items[0][price_data][recurring][interval]": "month",
      "line_items[0][price_data][product_data][name]": `HomeDream ${planConfig.label} Plan`,
      "line_items[0][price_data][product_data][description]": `${planConfig.monthlyLimit} credits per month`,
      "metadata[userId]": user.id,
      "metadata[plan]": plan,
      "subscription_data[metadata][userId]": user.id,
      "subscription_data[metadata][plan]": plan,
    });

    const checkoutSession = await stripePostForm<{ id: string; url: string }>("/checkout/sessions", form);

    return NextResponse.json({
      success: true,
      sessionId: checkoutSession.id,
      url: checkoutSession.url,
    });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
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
