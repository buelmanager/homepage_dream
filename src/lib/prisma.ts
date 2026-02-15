import pg from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient() {
  // Prefer pooled connection for serverless runtimes (Vercel).
  const connectionString = process.env.DATABASE_URL || process.env.DIRECT_URL;
  if (!connectionString) {
    throw new Error("Missing DATABASE_URL (or DIRECT_URL fallback)");
  }

  // Supabase Postgres requires SSL in most environments.
  const ssl = connectionString.includes("supabase.com")
    ? { rejectUnauthorized: false }
    : undefined;

  const pool = new pg.Pool({ connectionString, ssl });
  const adapter = new PrismaPg(pool);
  return new PrismaClient({ adapter } as any);
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
