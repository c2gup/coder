import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const prismaClientSingleton = () => {
  // 1. Create a standard Postgres connection pool
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  // 2. Initialize the adapter
  const adapter = new PrismaPg(pool);

  // 3. Pass the adapter to Prisma
  return new PrismaClient({
    adapter,
    log: ["query", "info", "warn", "error"],
  });
};

const globalForPrisma = globalThis;
const db = globalForPrisma.prisma ?? prismaClientSingleton();

export default db;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
