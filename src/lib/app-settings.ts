import { prisma } from "@/lib/prisma";

export const APP_SETTING_KEYS = {
  DEFAULT_SIGNUP_CREDITS: "DEFAULT_SIGNUP_CREDITS",
  LEMON_STORE_ID: "LEMON_STORE_ID",
  LEMON_VARIANT_ID_PRO: "LEMON_VARIANT_ID_PRO",
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

export async function getLemonVariantId(plan: "PRO") {
  const keyMap = {
    PRO: APP_SETTING_KEYS.LEMON_VARIANT_ID_PRO,
  } as const;
  const envMap = {
    PRO: process.env.LEMONSQUEEZY_VARIANT_ID_PRO,
  } as const;
  return (await getSetting(keyMap[plan])) || envMap[plan] || null;
}

export async function getLemonSettings() {
  const keys = [
    APP_SETTING_KEYS.LEMON_STORE_ID,
    APP_SETTING_KEYS.LEMON_VARIANT_ID_PRO,
  ];
  const rows = await prisma.appSetting.findMany({ where: { key: { in: keys } } });
  const map = new Map(rows.map((r) => [r.key, r.value]));

  return {
    storeId: map.get(APP_SETTING_KEYS.LEMON_STORE_ID) ?? "",
    variantIdPro: map.get(APP_SETTING_KEYS.LEMON_VARIANT_ID_PRO) ?? "",
  };
}

export async function setLemonSettings(values: {
  storeId?: string;
  variantIdPro?: string;
}) {
  const ops: { key: string; value: string }[] = [];
  if (values.storeId !== undefined) ops.push({ key: APP_SETTING_KEYS.LEMON_STORE_ID, value: values.storeId.trim() });
  if (values.variantIdPro !== undefined) ops.push({ key: APP_SETTING_KEYS.LEMON_VARIANT_ID_PRO, value: values.variantIdPro.trim() });

  await Promise.all(ops.map((o) => setSetting(o.key, o.value)));
}
