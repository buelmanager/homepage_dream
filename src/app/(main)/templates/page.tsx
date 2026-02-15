import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";
import { TemplateGrid } from "@/components/template/template-grid";
import { CATEGORIES } from "@/types";
import type { TemplateWithSections } from "@/types";
import { cn } from "@/lib/utils";

interface TemplatesPageProps {
  searchParams: Promise<{
    category?: string;
    style?: string;
    language?: string;
  }>;
}

export default async function TemplatesPage({ searchParams }: TemplatesPageProps) {
  const params = await searchParams;
  const { category, style, language } = params;

  const where: Record<string, unknown> = { status: "PUBLISHED" as const };
  if (category && category !== "all") where.category = category;
  if (style) where.style = { has: style };
  if (language) where.language = language;

  const [templates, categoryCounts] = await Promise.all([
    prisma.template.findMany({
      where,
      include: { sections: true },
      orderBy: { createdAt: "desc" },
    }),
    prisma.template.groupBy({
      by: ["category"],
      where: { status: "PUBLISHED" },
      _count: { id: true },
    }),
  ]);

  const countMap = new Map(
    categoryCounts.map(
      (c: { category: string; _count: { id: number } }) => [c.category, c._count.id]
    )
  );

  const totalCount = categoryCounts.reduce(
    (sum: number, c: { _count: { id: number } }) => sum + c._count.id,
    0
  );

  const activeCategory = category || "all";

  const activeFilters: string[] = [];
  if (style) activeFilters.push(style);
  if (language) activeFilters.push(language);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:py-8">
      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.name;
            const count =
              cat.name === "all" ? totalCount : (countMap.get(cat.name) ?? 0);

            const href =
              cat.name === "all"
                ? "/templates"
                : `/templates?category=${cat.name}`;

            return (
              <Link key={cat.name} href={href}>
                <Badge
                  variant={isActive ? "default" : "outline"}
                  className={cn(
                    "cursor-pointer gap-1 px-3 py-1 text-xs transition-colors",
                    isActive
                      ? "bg-foreground text-background hover:bg-foreground/90"
                      : "text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                  )}
                >
                  {cat.label}
                  {count > 0 && (
                    <span
                      className={cn(
                        "text-[10px]",
                        isActive
                          ? "text-background/60"
                          : "text-muted-foreground/50"
                      )}
                    >
                      {count}
                    </span>
                  )}
                </Badge>
              </Link>
            );
          })}
        </div>

        {activeFilters.length > 0 && (
          <div className="mt-3 flex items-center gap-2">
            <span className="text-xs text-muted-foreground/50">Filters:</span>
            {activeFilters.map((filter) => (
              <Badge
                key={filter}
                variant="secondary"
                className="text-[11px]"
              >
                {filter}
              </Badge>
            ))}
            <Link href="/templates">
              <span className="cursor-pointer text-xs text-muted-foreground underline underline-offset-2 transition-colors hover:text-foreground">
                Clear all
              </span>
            </Link>
          </div>
        )}
      </div>

      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">
            {(templates as unknown as TemplateWithSections[]).length}
          </span>{" "}
          templates found
        </p>
      </div>

      <TemplateGrid templates={templates as unknown as TemplateWithSections[]} />
    </div>
  );
}
