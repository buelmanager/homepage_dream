import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  getLemonWebhookSecret,
  verifyLemonWebhookSignature,
} from "@/lib/lemonsqueezy";

type PlanKey = "BASIC" | "STANDARD" | "PREMIUM";
type LocalStatus = "ACTIVE" | "CANCELLED" | "EXPIRED";

const SUBSCRIPTION_PLANS: Record<PlanKey, { price: number; monthlyLimit: number }> = {
  BASIC: { price: 10, monthlyLimit: 3 },
  STANDARD: { price: 20, monthlyLimit: 7 },
  PREMIUM: { price: 30, monthlyLimit: 15 },
};

function planFromVariantId(variantId?: string | number | null): PlanKey | null {
  if (!variantId) return null;
  const id = String(variantId);
  if (id === process.env.LEMONSQUEEZY_VARIANT_ID_BASIC) return "BASIC";
  if (id === process.env.LEMONSQUEEZY_VARIANT_ID_STANDARD) return "STANDARD";
  if (id === process.env.LEMONSQUEEZY_VARIANT_ID_PREMIUM) return "PREMIUM";
  return null;
}

function toLocalStatus(eventName: string, apiStatus?: string | null): LocalStatus {
  if (eventName.includes("cancelled") || eventName.includes("paused")) return "CANCELLED";
  if (eventName.includes("expired")) return "EXPIRED";
  if (apiStatus === "cancelled" || apiStatus === "paused") return "CANCELLED";
  if (apiStatus === "expired") return "EXPIRED";
  return "ACTIVE";
}

async function grantCreditsIdempotent(userId: string, amount: number, description: string) {
  const exists = await prisma.creditTransaction.findFirst({
    where: { userId, type: "SUBSCRIPTION", description },
    select: { id: true },
  });
  if (exists) return;

  await prisma.$transaction([
    prisma.user.update({
      where: { id: userId },
      data: { credits: { increment: amount } },
    }),
    prisma.creditTransaction.create({
      data: {
        userId,
        amount,
        type: "SUBSCRIPTION",
        description,
      },
    }),
  ]);
}

export async function POST(request: NextRequest) {
  try {
    const payload = await request.text();
    const signature = request.headers.get("x-signature");
    const secret = getLemonWebhookSecret();

    if (!verifyLemonWebhookSignature(payload, signature, secret)) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    const event = JSON.parse(payload) as {
      meta?: {
        event_name?: string;
        custom_data?: {
          user_id?: string;
          plan?: string;
        };
      };
      data?: {
        id?: string;
        attributes?: {
          status?: string;
          user_email?: string;
          variant_id?: number | string;
          renews_at?: string | null;
          ends_at?: string | null;
          order_id?: number | string;
          subscription_id?: number | string;
        };
      };
    };

    const eventName = event.meta?.event_name || "";
    const attrs = event.data?.attributes || {};
    const custom = event.meta?.custom_data || {};
    const lemonSubscriptionId = String(
      attrs.subscription_id || event.data?.id || ""
    );

    let userId = custom.user_id || "";
    if (!userId && attrs.user_email) {
      const user = await prisma.user.findUnique({
        where: { email: attrs.user_email },
        select: { id: true },
      });
      userId = user?.id || "";
    }

    let plan = (custom.plan as PlanKey | undefined) || null;
    if (!plan) {
      plan = planFromVariantId(attrs.variant_id);
    }

    const periodEndRaw = attrs.renews_at || attrs.ends_at;
    const periodEnd = periodEndRaw ? new Date(periodEndRaw) : null;

    if (
      userId &&
      lemonSubscriptionId &&
      plan &&
      SUBSCRIPTION_PLANS[plan]
    ) {
      const planConfig = SUBSCRIPTION_PLANS[plan];

      await prisma.subscription.updateMany({
        where: {
          userId,
          status: "ACTIVE",
          NOT: { stripeSubscriptionId: lemonSubscriptionId },
        },
        data: { status: "CANCELLED" },
      });

      await prisma.subscription.upsert({
        where: { stripeSubscriptionId: lemonSubscriptionId },
        update: {
          plan,
          status: toLocalStatus(eventName, attrs.status),
          monthlyLimit: planConfig.monthlyLimit,
          price: planConfig.price,
          currentPeriodEnd:
            periodEnd && !Number.isNaN(periodEnd.getTime())
              ? periodEnd
              : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        },
        create: {
          userId,
          stripeSubscriptionId: lemonSubscriptionId,
          plan,
          status: toLocalStatus(eventName, attrs.status),
          monthlyLimit: planConfig.monthlyLimit,
          price: planConfig.price,
          currentPeriodStart: new Date(),
          currentPeriodEnd:
            periodEnd && !Number.isNaN(periodEnd.getTime())
              ? periodEnd
              : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        },
      });

      if (
        eventName === "subscription_payment_success" ||
        eventName === "subscription_created"
      ) {
        const paymentRef = String(attrs.order_id || event.data?.id || Date.now());
        await grantCreditsIdempotent(
          userId,
          planConfig.monthlyLimit,
          `${plan} lemon subscription payment ${paymentRef}`
        );
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Lemon webhook error:", error);
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
  }
}
