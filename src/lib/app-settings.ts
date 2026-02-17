import { prisma } from "@/lib/prisma";

export const APP_SETTING_KEYS = {
  DEFAULT_SIGNUP_CREDITS: "DEFAULT_SIGNUP_CREDITS",
  LEMON_STORE_ID: "LEMON_STORE_ID",
  LEMON_VARIANT_ID_BASIC: "LEMON_VARIANT_ID_BASIC",
  LEMON_VARIANT_ID_STANDARD: "LEMON_VARIANT_ID_STANDARD",
  LEMON_VARIANT_ID_PREMIUM: "LEMON_VARIANT_ID_PREMIUM",
} as const;

const DEFAULTS = {
  [APP_SETTING_KEYS.DEFAULT_SIGNUP_CREDITS]: 30,
} as const;

export async function getDefaultSignupCredits() {
  const setting = await prisma.appSetting.findUnique({
    where: { key: APP_SETTING_KEYS.DEFAULT_SIGNUP_CREDITS },
    select: { value: true },
  });

  const parsed = Number(setting?.value);
  if (!Number.isFinite(parsed) || parsed < 0) {
    return DEFAULTS[APP_SETTING_KEYS.DEFAULT_SIGNUP_CREDITS];
  }
  return Math.floor(parsed);
}

export async function setDefaultSignupCredits(credits: number) {
  const safeCredits = Math.max(0, Math.floor(credits));

  return prisma.appSetting.upsert({
    where: { key: APP_SETTING_KEYS.DEFAULT_SIGNUP_CREDITS },
    update: { value: String(safeCredits) },
    create: {
      key: APP_SETTING_KEYS.DEFAULT_SIGNUP_CREDITS,
      value: String(safeCredits),
    },
  });
}

// --- Lemon Squeezy settings (DB first, env fallback) ---

async function getSetting(key: string): Promise<string | null> {
  const row = await prisma.appSetting.findUnique({
    where: { key },
    select: { value: true },
  });
  return row?.value ?? null;
}

async function setSetting(key: string, value: string) {
  return prisma.appSetting.upsert({
    where: { key },
    update: { value },
    create: { key, value },
  });
}

export async function getLemonStoreId() {
  return (await getSetting(APP_SETTING_KEYS.LEMON_STORE_ID)) || process.env.LEMONSQUEEZY_STORE_ID || null;
}

export async function getLemonVariantId(plan: "BASIC" | "STANDARD" | "PREMIUM") {
  const keyMap = {
    BASIC: APP_SETTING_KEYS.LEMON_VARIANT_ID_BASIC,
    STANDARD: APP_SETTING_KEYS.LEMON_VARIANT_ID_STANDARD,
    PREMIUM: APP_SETTING_KEYS.LEMON_VARIANT_ID_PREMIUM,
  } as const;
  const envMap = {
    BASIC: process.env.LEMONSQUEEZY_VARIANT_ID_BASIC,
    STANDARD: process.env.LEMONSQUEEZY_VARIANT_ID_STANDARD,
    PREMIUM: process.env.LEMONSQUEEZY_VARIANT_ID_PREMIUM,
  } as const;
  return (await getSetting(keyMap[plan])) || envMap[plan] || null;
}

export async function getLemonSettings() {
  const keys = [
    APP_SETTING_KEYS.LEMON_STORE_ID,
    APP_SETTING_KEYS.LEMON_VARIANT_ID_BASIC,
    APP_SETTING_KEYS.LEMON_VARIANT_ID_STANDARD,
    APP_SETTING_KEYS.LEMON_VARIANT_ID_PREMIUM,
  ];
  const rows = await prisma.appSetting.findMany({ where: { key: { in: keys } } });
  const map = new Map(rows.map((r) => [r.key, r.value]));

  return {
    storeId: map.get(APP_SETTING_KEYS.LEMON_STORE_ID) ?? "",
    variantIdBasic: map.get(APP_SETTING_KEYS.LEMON_VARIANT_ID_BASIC) ?? "",
    variantIdStandard: map.get(APP_SETTING_KEYS.LEMON_VARIANT_ID_STANDARD) ?? "",
    variantIdPremium: map.get(APP_SETTING_KEYS.LEMON_VARIANT_ID_PREMIUM) ?? "",
  };
}

export async function setLemonSettings(values: {
  storeId?: string;
  variantIdBasic?: string;
  variantIdStandard?: string;
  variantIdPremium?: string;
}) {
  const ops: { key: string; value: string }[] = [];
  if (values.storeId !== undefined) ops.push({ key: APP_SETTING_KEYS.LEMON_STORE_ID, value: values.storeId.trim() });
  if (values.variantIdBasic !== undefined) ops.push({ key: APP_SETTING_KEYS.LEMON_VARIANT_ID_BASIC, value: values.variantIdBasic.trim() });
  if (values.variantIdStandard !== undefined) ops.push({ key: APP_SETTING_KEYS.LEMON_VARIANT_ID_STANDARD, value: values.variantIdStandard.trim() });
  if (values.variantIdPremium !== undefined) ops.push({ key: APP_SETTING_KEYS.LEMON_VARIANT_ID_PREMIUM, value: values.variantIdPremium.trim() });

  await Promise.all(ops.map((o) => setSetting(o.key, o.value)));
}
