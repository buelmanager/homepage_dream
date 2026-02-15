import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { getDefaultSignupCredits } from "@/lib/app-settings";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        });

        if (!user?.password) return null;

        const isValid = await bcrypt.compare(
          credentials.password as string,
          user.password
        );

        if (!isValid) return null;

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          role: user.role as "USER" | "ADMIN",
          credits: user.credits,
        };
      },
    }),
    GitHub({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
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
          user.id = newUser.id;
          (user as any).role = newUser.role;
          (user as any).credits = newUser.credits;
        } else {
          user.id = existingUser.id;
          (user as any).role = existingUser.role;
          (user as any).credits = existingUser.credits;
        }

        // Upsert the account link
        const existingAccount = await prisma.account.findFirst({
          where: {
            provider: account.provider,
            providerAccountId: account.providerAccountId,
          },
        });

        if (!existingAccount) {
          await prisma.account.create({
            data: {
              userId: user.id!,
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
        token.id = user.id!;
        token.role = (user as any).role ?? "USER";
        token.credits = (user as any).credits ?? 3;
      }

      // Refresh credits on session update
      if (trigger === "update" && session) {
        token.credits = session.credits;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as "USER" | "ADMIN";
        session.user.credits = token.credits as number;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
});
