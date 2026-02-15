import { prisma } from "@/lib/prisma";
import { Header } from "./header";

export async function HeaderWrapper() {
  const categoryCounts = await prisma.template.groupBy({
    by: ["category"],
    where: { status: "PUBLISHED" },
    _count: { id: true },
  });

  const counts = categoryCounts.map(
    (c: { category: string; _count: { id: number } }) => ({
      name: c.category,
      label: c.category.charAt(0).toUpperCase() + c.category.slice(1),
      count: c._count.id,
    })
  );

  return <Header categoryCounts={counts} />;
}
