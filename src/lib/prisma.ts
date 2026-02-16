import pg from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient() {
  console.log("[Prisma] Creating new Prisma client...");
  const startTime = Date.now();
  
  // Prefer pooled connection for serverless runtimes (Vercel).
  const connectionString = process.env.DATABASE_URL || process.env.DIRECT_URL;
  if (!connectionString) {
    throw new Error("Missing DATABASE_URL (or DIRECT_URL fallback)");
  }

  console.log("[Prisma] Connection string found, creating pool...");
  
  // Supabase Postgres requires SSL in most environments.
  const ssl = connectionString.includes("supabase.com")
    ? { rejectUnauthorized: false }
    : undefined;

  const pool = new pg.Pool({ 
    connectionString, 
    ssl,
    connectionTimeoutMillis: 10000,
    idleTimeoutMillis: 30000,
    max: 10,
  });
  
  pool.on('connect', () => {
    console.log("[Prisma] Pool connected to database");
  });
  
  pool.on('error', (err) => {
    console.error("[Prisma] Pool error:", err);
  });
  
  const adapter = new PrismaPg(pool);
  const client = new PrismaClient({ adapter } as any);
  
  console.log("[Prisma] Client created in", Date.now() - startTime, "ms");
  return client;
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
