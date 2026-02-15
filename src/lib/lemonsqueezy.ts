import crypto from "crypto";

const LEMON_API_BASE = "https://api.lemonsqueezy.com/v1";

function getLemonApiKey() {
  const key = process.env.LEMONSQUEEZY_API_KEY;
  if (!key) {
    throw new Error("Missing LEMONSQUEEZY_API_KEY");
  }
  return key;
}

export function getLemonWebhookSecret() {
  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;
  if (!secret) {
    throw new Error("Missing LEMONSQUEEZY_WEBHOOK_SECRET");
  }
  return secret;
}

export async function lemonRequest<T = unknown>(
  path: string,
  init: Pick<RequestInit, "method" | "body">
): Promise<T> {
  const response = await fetch(`${LEMON_API_BASE}${path}`, {
    method: init.method,
    headers: {
      Accept: "application/vnd.api+json",
      Authorization: `Bearer ${getLemonApiKey()}`,
      ...(init.body ? { "Content-Type": "application/vnd.api+json" } : {}),
    },
    body: init.body,
    cache: "no-store",
  });

  const data = (await response.json()) as {
    errors?: Array<{ detail?: string; title?: string }>;
  };

  if (!response.ok) {
    const err = data?.errors?.[0];
    const message = err?.detail || err?.title || `Lemon API failed: ${response.status}`;
    throw new Error(message);
  }

  return data as T;
}

export function verifyLemonWebhookSignature(
  payload: string,
  signatureHeader: string | null,
  signingSecret: string
) {
  if (!signatureHeader) return false;

  const expected = crypto
    .createHmac("sha256", signingSecret)
    .update(payload, "utf8")
    .digest("hex");

  try {
    return crypto.timingSafeEqual(
      Buffer.from(signatureHeader, "utf8"),
      Buffer.from(expected, "utf8")
    );
  } catch {
    return false;
  }
}
