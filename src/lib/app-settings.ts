import { prisma } from "@/lib/prisma";

export const APP_SETTING_KEYS = {
  DEFAULT_SIGNUP_CREDITS: "DEFAULT_SIGNUP_CREDITS",
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
