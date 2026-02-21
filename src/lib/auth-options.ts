import type { NextAuthOptions, Account, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";

import { prisma } from "@/lib/prisma";
import { getDefaultSignupCredits } from "@/lib/app-settings";

const hasGitHubOAuth = !!process.env.GITHUB_ID && !!process.env.GITHUB_SECRET;
const hasGoogleOAuth = !!process.env.GOOGLE_CLIENT_ID && !!process.env.GOOGLE_CLIENT_SECRET;

export function createRequestId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export function redactEmail(email: string | null | undefined) {
  if (!email) return null;
  const at = email.indexOf("@");
  if (at <= 1) return "***";
  return `${email.slice(0, 2)}***${email.slice(at)}`;
}

function logAuth(level: "info" | "warn" | "error", message: string, meta?: Record<string, unknown>) {
  const payload = meta ? { ...meta } : undefined;
  const line = payload ? `[auth] ${message} ${JSON.stringify(payload)}` : `[auth] ${message}`;
  if (level === "error") console.error(line);
  else if (level === "warn") console.warn(line);
  else console.log(line);
}

/** Find an existing user or create a new one for an OAuth sign-in. */
async function resolveOAuthUser(user: User) {
  const existingUser = await prisma.user.findUnique({
    where: { email: user.email! },
  });

  if (existingUser) {
    logAuth("info", "callback.signIn.oauth_existing_user", {
      userId: existingUser.id,
      email: redactEmail(existingUser.email),
      credits: existingUser.credits,
    });
    return existingUser;
  }

  const signupCredits = await getDefaultSignupCredits();
  const newUser = await prisma.user.create({
    data: {
      email: user.email!,
      name: user.name,
      image: user.image,
      credits: signupCredits,
      role: "USER",
    },
  });
  await prisma.creditTransaction.create({
    data: {
      userId: newUser.id,
      amount: signupCredits,
      type: "SIGNUP_BONUS",
      description: `Welcome bonus credits (${signupCredits})`,
    },
  });

  logAuth("info", "callback.signIn.oauth_created_user", {
    userId: newUser.id,
    email: redactEmail(newUser.email),
    credits: signupCredits,
  });

  return newUser;
}

/** Link an OAuth account to a user if not already linked. */
async function ensureOAuthAccountLinked(userId: string, account: Account) {
  const existingAccount = await prisma.account.findFirst({
    where: {
      provider: account.provider,
      providerAccountId: account.providerAccountId,
    },
  });

  if (existingAccount) return;

  await prisma.account.create({
    data: {
      userId,
      type: account.type,
      provider: account.provider,
      providerAccountId: account.providerAccountId,
      access_token: account.access_token,
      refresh_token: account.refresh_token,
      expires_at: account.expires_at,
      token_type: account.token_type,
      scope: account.scope,
      id_token: account.id_token,
    },
  });

  logAuth("info", "callback.signIn.oauth_account_linked", {
    userId,
    provider: account.provider,
  });
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const rid = createRequestId();
        const email = credentials?.email;

        logAuth("info", "credentials.authorize.start", {
          rid,
          email: redactEmail(email),
          hasEmail: !!email,
          hasPassword: !!credentials?.password,
        });

        if (!email || !credentials?.password) {
          logAuth("warn", "credentials.authorize.missing_fields", { rid });
          return null;
        }

        const user = await prisma.user.findUnique({ where: { email } });
        logAuth("info", "credentials.authorize.user_lookup", {
          rid,
          email: redactEmail(email),
          found: !!user,
          userId: user?.id ?? null,
          hasStoredPassword: !!user?.password,
          role: user?.role ?? null,
        });

        if (!user?.password) {
          logAuth("warn", "credentials.authorize.no_password_or_user", { rid });
          return null;
        }

        const isValid = await bcrypt.compare(credentials.password, user.password);
        logAuth("info", "credentials.authorize.password_compare", {
          rid,
          userId: user.id,
          ok: isValid,
        });

        if (!isValid) {
          logAuth("warn", "credentials.authorize.invalid_password", { rid, userId: user.id });
          return null;
        }

        logAuth("info", "credentials.authorize.success", { rid, userId: user.id });

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          role: user.role,
          credits: user.credits,
        };
      },
    }),
    ...(hasGitHubOAuth
      ? [
          GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
          }),
        ]
      : []),
    ...(hasGoogleOAuth
      ? [
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
          }),
        ]
      : []),
  ],
  debug: process.env.NODE_ENV !== "production",
  session: { strategy: "jwt" },
  pages: { signIn: "/signin" },
  logger: {
    error(code, metadata) {
      logAuth("error", "nextauth.logger.error", { code: String(code), metadata: String(metadata) });
    },
    warn(code) {
      logAuth("warn", "nextauth.logger.warn", { code });
    },
    debug(code, metadata) {
      logAuth("info", "nextauth.logger.debug", { code: String(code), metadata: String(metadata) });
    },
  },
  events: {
    async signIn(message) {
      logAuth("info", "nextauth.event.signIn", {
        provider: message.account?.provider ?? null,
        userId: message.user?.id ?? null,
        email: redactEmail(message.user?.email),
        isNewUser: message.isNewUser ?? null,
      });
    },
    async signOut(message) {
      const msg = message as { token?: { id?: string } };
      logAuth("info", "nextauth.event.signOut", {
        tokenId: msg?.token?.id ?? null,
      });
    },
    async session(message) {
      const msg = message as { session?: { user?: { id?: string } } };
      logAuth("info", "nextauth.event.session", {
        userId: msg?.session?.user?.id ?? null,
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      logAuth("info", "callback.signIn", {
        provider: account?.provider ?? null,
        userId: user?.id ?? null,
        email: redactEmail(user?.email),
      });

      const isOAuth =
        (account?.provider === "github" || account?.provider === "google") && user.email;

      if (!isOAuth || !account) return true;

      const dbUser = await resolveOAuthUser(user);

      user.id = dbUser.id;
      user.role = dbUser.role;
      user.credits = dbUser.credits;

      await ensureOAuthAccountLinked(dbUser.id, account);

      return true;
    },
    async jwt({ token, user, trigger, session }) {
      logAuth("info", "callback.jwt", {
        trigger: trigger ?? null,
        hasUser: !!user,
        tokenId: token?.id ?? null,
      });

      if (user) {
        token.id = user.id;
        token.role = user.role ?? "USER";
        token.credits = user.credits ?? 0;
      }

      if (trigger === "update" && session) {
        const s = session as { credits?: number };
        token.credits = s.credits ?? token.credits;
      }

      return token;
    },
    async session({ session, token }) {
      logAuth("info", "callback.session", {
        tokenId: token?.id ?? null,
        role: token?.role ?? null,
        credits: token?.credits ?? null,
      });
      session.user.id = token.id;
      session.user.role = token.role;
      session.user.credits = token.credits;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
