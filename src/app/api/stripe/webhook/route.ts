import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  getStripeWebhookSecret,
  stripeGet,
  verifyStripeWebhookSignature,
} from "@/lib/stripe";

export const runtime = "nodejs";

type PlanKey = "PRO";

const SUBSCRIPTION_PLANS: Record<
  PlanKey,
  { price: number; monthlyLimit: number }
> = {
  PRO: { price: 20, monthlyLimit: 999999 },
};

type StripeSubscriptionResponse = {
  id: string;
  customer: string;
  status: string;
  current_period_start: number;
  current_period_end: number;
  metadata?: Record<string, string>;
};

function toLocalStatus(stripeStatus: string): "ACTIVE" | "CANCELLED" | "EXPIRED" {
  if (stripeStatus === "active" || stripeStatus === "trialing") return "ACTIVE";
  if (stripeStatus === "canceled" || stripeStatus === "unpaid") return "CANCELLED";
  return "EXPIRED";
}

async function upsertSubscriptionFromStripe(
  stripeSubscriptionId: string,
  fallbackUserId?: string,
  fallbackPlan?: PlanKey
) {
  const stripeSub = await stripeGet<StripeSubscriptionResponse>(
    `/subscriptions/${stripeSubscriptionId}`
  );

  const userId = stripeSub.metadata?.userId || fallbackUserId;
  const plan = (stripeSub.metadata?.plan || fallbackPlan) as PlanKey | undefined;

  if (!userId || !plan || !SUBSCRIPTION_PLANS[plan]) {
    throw new Error("Missing userId or plan metadata on Stripe subscription");
  }

  const planConfig = SUBSCRIPTION_PLANS[plan];

  await prisma.subscription.updateMany({
    where: { userId, status: "ACTIVE", NOT: { stripeSubscriptionId } },
    data: { status: "CANCELLED" },
  });

  await prisma.subscription.upsert({
    where: { stripeSubscriptionId },
    update: {
      status: toLocalStatus(stripeSub.status),
      plan,
      monthlyLimit: planConfig.monthlyLimit,
      price: planConfig.price,
      currentPeriodStart: new Date(stripeSub.current_period_start * 1000),
      currentPeriodEnd: new Date(stripeSub.current_period_end * 1000),
    },
    create: {
      userId,
      stripeSubscriptionId,
      plan,
      status: toLocalStatus(stripeSub.status),
      monthlyLimit: planConfig.monthlyLimit,
      price: planConfig.price,
      currentPeriodStart: new Date(stripeSub.current_period_start * 1000),
      currentPeriodEnd: new Date(stripeSub.current_period_end * 1000),
    },
  });

  return { userId, plan, planConfig };
}

async function grantCreditsOncePerInvoice(
  userId: string,
  amount: number,
  description: string
) {
  const existing = await prisma.creditTransaction.findFirst({
    where: { userId, type: "SUBSCRIPTION", description },
    select: { id: true },
  });

  if (existing) return;

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
    const rawBody = await request.text();
    const signature = request.headers.get("stripe-signature");

    if (!signature) {
      return NextResponse.json({ error: "Missing signature" }, { status: 400 });
    }

    const webhookSecret = getStripeWebhookSecret();
    const isValidSignature = verifyStripeWebhookSignature(
      rawBody,
      signature,
      webhookSecret
    );

    if (!isValidSignature) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    const event = JSON.parse(rawBody) as {
      type: string;
      data: { object: Record<string, unknown> };
    };

    if (event.type === "checkout.session.completed") {
      const sessionObj = event.data.object;
      const stripeSubscriptionId = String(sessionObj.subscription || "");
      const userId = String(
        (sessionObj.metadata as Record<string, string> | undefined)?.userId || ""
      );
      const plan = String(
        (sessionObj.metadata as Record<string, string> | undefined)?.plan || ""
      ) as PlanKey;

      if (stripeSubscriptionId) {
        await upsertSubscriptionFromStripe(stripeSubscriptionId, userId, plan);
      }
    }

    if (event.type === "invoice.paid") {
      const invoice = event.data.object;
      const stripeSubscriptionId = String(invoice.subscription || "");
      const invoiceId = String(invoice.id || "");

      if (stripeSubscriptionId && invoiceId) {
        const { userId, plan, planConfig } = await upsertSubscriptionFromStripe(
          stripeSubscriptionId
        );

        await grantCreditsOncePerInvoice(
          userId,
          20,
          `${plan} subscription invoice ${invoiceId}`
        );
      }
    }

    if (event.type === "customer.subscription.deleted") {
      const stripeSub = event.data.object;
      const stripeSubscriptionId = String(stripeSub.id || "");
      if (stripeSubscriptionId) {
        await prisma.subscription.updateMany({
          where: { stripeSubscriptionId },
          data: { status: "CANCELLED" },
        });
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Stripe webhook error:", error);
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
  }
}
