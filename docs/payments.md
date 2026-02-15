# Stripe Subscription Setup

## 1) Environment Variables

Add these to your local/prod env:

```bash
STRIPE_SECRET_KEY=sk_live_or_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
```

## 2) Database Sync

This implementation adds new Prisma fields:
- `User.stripeCustomerId`
- `Subscription.stripeSubscriptionId`

Run:

```bash
npx prisma generate
npx prisma db push
```

## 3) Webhook Endpoint

Set Stripe webhook destination to:

```text
https://your-domain.com/api/stripe/webhook
```

Enable events:
- `checkout.session.completed`
- `invoice.paid`
- `customer.subscription.deleted`

## 4) Payment Flow

1. User clicks Subscribe in modal.
2. `POST /api/subscription` creates Stripe Checkout Session.
3. User pays in Stripe-hosted Checkout.
4. Stripe Webhook verifies signature and updates subscription/credits in DB.

## 5) Notes

- Credits are granted on `invoice.paid` (first payment + recurring renewals).
- Direct `POST /api/credits` top-up is disabled to prevent free credit abuse.
