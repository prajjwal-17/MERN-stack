// app/page.tsx  (Server Component by default)
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getUserOptimized() {
  const user = await prisma.user.findFirst();

  return (
    <div>
      Name: {user?.username}
    </div>
  );
}
