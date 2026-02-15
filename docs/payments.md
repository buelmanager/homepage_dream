# Lemon Squeezy Subscription Setup

## 1) Environment Variables

Add these to your local/prod env:

```bash
LEMONSQUEEZY_API_KEY=xxx
LEMONSQUEEZY_WEBHOOK_SECRET=xxx
LEMONSQUEEZY_STORE_ID=xxx
LEMONSQUEEZY_VARIANT_ID_BASIC=xxx
LEMONSQUEEZY_VARIANT_ID_STANDARD=xxx
LEMONSQUEEZY_VARIANT_ID_PREMIUM=xxx
LEMONSQUEEZY_TEST_MODE=true
```

## 2) Database Sync

This implementation uses `Subscription.stripeSubscriptionId` to store Lemon subscription IDs.

Run:

```bash
npx prisma generate
npx prisma db push
```

## 3) Webhook Endpoint

Set Lemon Squeezy webhook destination to:

```text
https://your-domain.com/api/lemonsqueezy/webhook
```

Enable events:
- `subscription_created`
- `subscription_updated`
- `subscription_cancelled`
- `subscription_expired`
- `subscription_payment_success`

## 4) Payment Flow

1. User clicks Subscribe in modal.
2. `POST /api/subscription` creates Lemon Squeezy Checkout.
3. User pays in Lemon Squeezy checkout page.
4. Lemon webhook verifies signature and updates subscription/credits in DB.

## 5) Notes

- Credits are granted on `subscription_payment_success` and initial `subscription_created`.
- Direct `POST /api/credits` top-up is disabled to prevent free credit abuse.
