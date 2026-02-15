import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { TemplateCard } from "@/components/template/template-card";
import { CategoryFilters } from "@/components/template/category-filters";
import { CATEGORIES, STYLES, LAYOUTS } from "@/types";
import type { TemplateWithSections } from "@/types";

interface CategoryPageProps {
  params: Promise<{ name: string }>;
  searchParams: Promise<{
    language?: string;
    style?: string;
    layout?: string;
  }>;
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { name } = await params;
  const filters = await searchParams;

  const categoryInfo = CATEGORIES.find((c) => c.name === name);
  if (!categoryInfo || name === "all") notFound();

  const where: Record<string, unknown> = {
    status: "PUBLISHED" as const,
    category: name,
  };

  if (filters.language) where.language = filters.language;
  if (filters.style) where.style = { has: filters.style };
  if (filters.layout) where.layout = filters.layout;

  const [templates, count, languages] = await Promise.all([
    prisma.template.findMany({
      where,
      include: { sections: true },
      orderBy: { createdAt: "desc" },
    }),
    prisma.template.count({
      where: { status: "PUBLISHED", category: name },
    }),
    prisma.template.groupBy({
      by: ["language"],
      where: { status: "PUBLISHED", category: name },
      _count: { id: true },
    }),
  ]);

  const languageOptions = languages.map(
    (l: { language: string; _count: { id: number } }) => ({
      value: l.language,
      count: l._count.id,
    })
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link
            href="/templates"
            className="transition-colors hover:text-foreground"
          >
            Templates
          </Link>
          <span className="text-muted-foreground/40">/</span>
          <span className="text-foreground">{categoryInfo.label}</span>
        </div>
        <h1 className="mt-3 text-2xl font-bold tracking-tight">
          {categoryInfo.label}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {categoryInfo.description} &middot;{" "}
          <span className="font-medium text-foreground">{count}</span>{" "}
          templates
        </p>
      </div>

      <div className="flex gap-8">
        <aside className="hidden w-56 shrink-0 lg:block">
          <CategoryFilters
            categoryName={name}
            languages={languageOptions}
            styles={STYLES as unknown as string[]}
            layouts={LAYOUTS as unknown as string[]}
            activeLanguage={filters.language}
            activeStyle={filters.style}
            activeLayout={filters.layout}
          />
        </aside>

        <div className="min-w-0 flex-1">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">
                {(templates as unknown as TemplateWithSections[]).length}
              </span>{" "}
              results
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {(templates as unknown as TemplateWithSections[]).map(
              (template) => (
                <TemplateCard key={template.id} template={template} />
              )
            )}
          </div>

          {(templates as unknown as TemplateWithSections[]).length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-sm font-medium">
                No templates match your filters
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Try removing some filters to see more results
              </p>
              <Link
                href={`/category/${name}`}
                className="mt-4 text-sm font-medium underline underline-offset-2"
              >
                Clear filters
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
