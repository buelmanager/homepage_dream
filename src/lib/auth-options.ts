import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcryptjs";

import { prisma } from "@/lib/prisma";
import { getDefaultSignupCredits } from "@/lib/app-settings";

const hasGitHubOAuth = !!process.env.GITHUB_ID && !!process.env.GITHUB_SECRET;

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user?.password) return null;

        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) return null;

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
  session: { strategy: "jwt" },
  pages: { signIn: "/signin" },
  callbacks: {
    async signIn({ user, account }) {
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
          (user as any).id = newUser.id;
          (user as any).role = newUser.role;
          (user as any).credits = newUser.credits;
        } else {
          (user as any).id = existingUser.id;
          (user as any).role = existingUser.role;
          (user as any).credits = existingUser.credits;
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
        }
      }

      return true;
    },
    async jwt({ token, user, trigger, session }) {
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
      (session.user as any).id = token.id;
      (session.user as any).role = token.role;
      (session.user as any).credits = token.credits;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

