import crypto from "crypto";

const STRIPE_API_BASE = "https://api.stripe.com/v1";

function getStripeSecretKey() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("Missing STRIPE_SECRET_KEY");
  }
  return key;
}

export function getStripeWebhookSecret() {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    throw new Error("Missing STRIPE_WEBHOOK_SECRET");
  }
  return secret;
}

async function stripeRequest<T>(
  path: string,
  init: Pick<RequestInit, "method" | "body">
): Promise<T> {
  const response = await fetch(`${STRIPE_API_BASE}${path}`, {
    method: init.method,
    headers: {
      Authorization: `Bearer ${getStripeSecretKey()}`,
      ...(init.body
        ? { "Content-Type": "application/x-www-form-urlencoded" }
        : {}),
    },
    body: init.body,
    cache: "no-store",
  });

  const data = (await response.json()) as {
    error?: { message?: string };
  };

  if (!response.ok) {
    const message =
      data?.error?.message || `Stripe request failed with status ${response.status}`;
    throw new Error(message);
  }

  return data as T;
}

export async function stripePostForm<T = unknown>(
  path: string,
  form: URLSearchParams
): Promise<T> {
  return stripeRequest<T>(path, {
    method: "POST",
    body: form.toString(),
  });
}

export async function stripeGet<T = unknown>(path: string): Promise<T> {
  return stripeRequest<T>(path, {
    method: "GET",
    body: undefined,
  });
}

export function verifyStripeWebhookSignature(
  payload: string,
  signatureHeader: string,
  webhookSecret: string,
  toleranceSeconds = 300
) {
  const parts = signatureHeader.split(",").reduce<Record<string, string[]>>((acc, part) => {
    const [key, value] = part.split("=");
    if (!key || !value) return acc;
    acc[key] = [...(acc[key] ?? []), value];
    return acc;
  }, {});

  const timestamp = Number(parts.t?.[0]);
  const signatures = parts.v1 ?? [];

  if (!timestamp || signatures.length === 0) {
    return false;
  }

  const now = Math.floor(Date.now() / 1000);
  if (Math.abs(now - timestamp) > toleranceSeconds) {
    return false;
  }

  const expected = crypto
    .createHmac("sha256", webhookSecret)
    .update(`${timestamp}.${payload}`, "utf8")
    .digest("hex");

  return signatures.some((sig) => {
    try {
      return crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
    } catch {
      return false;
    }
  });
}
