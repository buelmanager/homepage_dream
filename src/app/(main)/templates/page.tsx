import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { TemplateGrid } from "@/components/template/template-grid";
import { CATEGORIES } from "@/types";
import type { TemplateWithSections } from "@/types";
import { cn } from "@/lib/utils";
import { getCatalogTemplates } from "@/lib/template-catalog";

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

  const allTemplates = (await getCatalogTemplates({
    publishedOnly: true,
  })) as TemplateWithSections[];

  let filteredTemplates = allTemplates;
  if (category && category !== "all") {
    filteredTemplates = allTemplates.filter(t => t.category === category);
  }
  if (style) {
    filteredTemplates = filteredTemplates.filter(t => t.style.includes(style));
  }
  if (language) {
    filteredTemplates = filteredTemplates.filter(t => t.language === language);
  }

  const countMap = new Map<string, number>();
  allTemplates.forEach(t => {
    countMap.set(t.category, (countMap.get(t.category) ?? 0) + 1);
  });

  const totalCount = allTemplates.length;
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
            {filteredTemplates.length}
          </span>{" "}
          templates found
        </p>
      </div>

      <TemplateGrid templates={filteredTemplates} />
    </div>
  );
}
