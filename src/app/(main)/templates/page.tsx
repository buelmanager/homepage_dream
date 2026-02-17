import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { TemplateGrid } from "@/components/template/template-grid";
import type { TemplateWithSections } from "@/types";
import { getCatalogTemplates } from "@/lib/template-catalog";

export const metadata: Metadata = {
  title: "무료 홈페이지 템플릿 모음 | 스타일리쉬 웹 디자인",
  description:
    "럭셔리하고 아름다운 무료 홈페이지 템플릿을 둘러보세요. HTML/CSS 기반의 스타일리쉬한 웹 디자인 템플릿을 지금 바로 다운로드하세요.",
  alternates: { canonical: "/templates" },
  openGraph: {
    title: "무료 홈페이지 템플릿 모음 — HomeDream",
    description:
      "럭셔리하고 아름다운 무료 홈페이지 템플릿을 둘러보세요.",
    url: "/templates",
  },
};

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

  const activeFilters: string[] = [];
  if (style) activeFilters.push(style);
  if (language) activeFilters.push(language);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:py-8">
      {activeFilters.length > 0 && (
        <div className="mb-6 flex items-center gap-2">
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
