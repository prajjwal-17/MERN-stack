import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()



if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma

export default prisma

/*
This file creates a SINGLETON PrismaClient instance.

WHY THIS IS NEEDED:
- In Next.js development mode, files are hot-reloaded frequently.
- Each reload re-executes module code.
- If we create `new PrismaClient()` on every reload,
  multiple database connections are opened.
- PostgreSQL will eventually crash with "too many connections".

HOW THIS SOLUTION WORKS:
- A PrismaClient instance is stored on the global object.
- The global object survives hot reloads.
- On first load, a new PrismaClient is created.
- On subsequent reloads, the existing instance is reused.

WHY THIS IS DEV-ONLY:
- In production, the app starts once (no hot reloads).
- A single PrismaClient instance is sufficient.
- To avoid leaking globals, we only attach to `globalThis` in dev.

RESULT:
- Prevents database connection leaks in development.
- Safe, recommended pattern by Prisma for Next.js apps.

USAGE:
Import this file everywhere instead of creating PrismaClient directly:
  import prisma from "@/lib/prisma";
*/
