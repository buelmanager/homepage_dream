import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcryptjs";

import { prisma } from "@/lib/prisma";
import { getDefaultSignupCredits } from "@/lib/app-settings";

const hasGitHubOAuth = !!process.env.GITHUB_ID && !!process.env.GITHUB_SECRET;

function createRequestId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function redactEmail(email: string | null | undefined) {
  if (!email) return null;
  const at = email.indexOf("@");
  if (at <= 1) return "***";
  return `${email.slice(0, 2)}***${email.slice(at)}`;
}

function logAuth(level: "info" | "warn" | "error", message: string, meta?: any) {
  // Never log secrets/passwords; keep meta shallow.
  const payload = meta ? { ...meta } : undefined;
  const line = payload ? `[auth] ${message} ${JSON.stringify(payload)}` : `[auth] ${message}`;
  if (level === "error") console.error(line);
  else if (level === "warn") console.warn(line);
  else console.log(line);
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

        const user = await prisma.user.findUnique({
          where: { email },
        });
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
          logAuth("warn", "credentials.authorize.invalid_password", {
            rid,
            userId: user.id,
          });
          return null;
        }

        logAuth("info", "credentials.authorize.success", {
          rid,
          userId: user.id,
        });

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          role: user.role,
          credits: user.credits,
        } as any;
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
  ],
  debug: true,
  session: { strategy: "jwt" },
  pages: { signIn: "/signin" },
  logger: {
    error(code, metadata) {
      logAuth("error", "nextauth.logger.error", { code, metadata });
    },
    warn(code) {
      logAuth("warn", "nextauth.logger.warn", { code });
    },
    debug(code, metadata) {
      logAuth("info", "nextauth.logger.debug", { code, metadata });
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
      logAuth("info", "nextauth.event.signOut", {
        tokenId: (message as any)?.token?.id ?? null,
      });
    },
    async session(message) {
      logAuth("info", "nextauth.event.session", {
        userId: (message as any)?.session?.user?.id ?? null,
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      logAuth("info", "callback.signIn", {
        provider: account?.provider ?? null,
        userId: (user as any)?.id ?? null,
        email: redactEmail(user?.email),
      });

      if (account?.provider === "github" && user.email) {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
        });

        if (!existingUser) {
          const signupCredits = await getDefaultSignupCredits();
          const newUser = await prisma.user.create({
            data: {
              email: user.email,
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

          logAuth("info", "callback.signIn.github_created_user", {
            userId: newUser.id,
            email: redactEmail(newUser.email),
            credits: signupCredits,
          });

          (user as any).id = newUser.id;
          (user as any).role = newUser.role;
          (user as any).credits = newUser.credits;
        } else {
          (user as any).id = existingUser.id;
          (user as any).role = existingUser.role;
          (user as any).credits = existingUser.credits;

          logAuth("info", "callback.signIn.github_existing_user", {
            userId: existingUser.id,
            email: redactEmail(existingUser.email),
            credits: existingUser.credits,
          });
        }

        const existingAccount = await prisma.account.findFirst({
          where: {
            provider: account.provider,
            providerAccountId: account.providerAccountId,
          },
        });

        if (!existingAccount) {
          await prisma.account.create({
            data: {
              userId: (user as any).id,
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

          logAuth("info", "callback.signIn.github_account_linked", {
            userId: (user as any).id,
            provider: account.provider,
          });
        }
      }

      return true;
    },
    async jwt({ token, user, trigger, session }) {
      logAuth("info", "callback.jwt", {
        trigger: trigger ?? null,
        hasUser: !!user,
        tokenId: (token as any)?.id ?? null,
      });

      if (user) {
        token.id = (user as any).id;
        token.role = (user as any).role ?? "USER";
        token.credits = (user as any).credits ?? 0;
      }

      if (trigger === "update" && session) {
        token.credits = (session as any).credits;
      }

      return token;
    },
    async session({ session, token }) {
      logAuth("info", "callback.session", {
        tokenId: (token as any)?.id ?? null,
        role: (token as any)?.role ?? null,
        credits: (token as any)?.credits ?? null,
      });
      (session.user as any).id = token.id;
      (session.user as any).role = token.role;
      (session.user as any).credits = token.credits;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
