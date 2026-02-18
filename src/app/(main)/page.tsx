export const dynamic = "force-dynamic";

import Link from "next/link";
import { Search, ArrowRight, Sparkles, Layers, Grid3X3, Palette, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TemplateGrid } from "@/components/template/template-grid";
import { prisma } from "@/lib/prisma";
import { getCatalogTemplates } from "@/lib/template-catalog";
import { CATEGORIES } from "@/types";
import type { TemplateWithSections } from "@/types";

async function getHomeData() {
  const fileSystemTemplates = (await getCatalogTemplates({
    publishedOnly: true,
  })) as TemplateWithSections[];
  const sectionCount = await prisma.section.count();
  
  const categoryCountMap = new Map<string, number>();
  fileSystemTemplates.forEach(t => {
    categoryCountMap.set(t.category, (categoryCountMap.get(t.category) ?? 0) + 1);
  });

  const topCategories = CATEGORIES.filter(
    (c) => c.name !== "all" && categoryCountMap.has(c.name)
  )
    .map((c) => ({ ...c, count: categoryCountMap.get(c.name) || 0 }))
    .sort((a, b) => (b.count as number) - (a.count as number))
    .slice(0, 4);

  const uniqueLanguages = new Set(fileSystemTemplates.map(t => t.language));

  return {
    templates: fileSystemTemplates,
    templateCount: fileSystemTemplates.length,
    sectionCount,
    topCategories,
    uniqueStyleCount: uniqueLanguages.size,
  };
}

const popularTags = [
  "dark-theme",
  "modern",
  "minimal",
  "gradient",
  "elegant",
  "serif",
];

export default async function HomePage() {
  const { templates, templateCount, sectionCount, topCategories, uniqueStyleCount } =
    await getHomeData();

  const newTemplates = templates.slice(0, 4);
  const categoryTemplates = topCategories.map((cat) => ({
    ...cat,
    templates: templates
      .filter((t) => t.category === cat.name)
      .slice(0, 12),
  }));

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(120,119,198,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_80%_60%,rgba(255,182,130,0.05),transparent)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-3.5 py-1.5 text-xs text-muted-foreground">
              <Sparkles className="size-3" />
              <span className="font-medium">{templateCount.toLocaleString()}+ Templates Available</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Discover Beautiful{" "}
              <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                Homepage Templates
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
              Curated collection of homepage designs with real HTML/CSS code.
              Browse, preview, and build your next project faster.
            </p>

            <div className="mx-auto mt-8 max-w-md">
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by name, category, or style..."
                  className="h-11 w-full rounded-xl border border-border/60 bg-background pl-11 pr-4 text-sm shadow-sm outline-none transition-shadow placeholder:text-muted-foreground/50 focus:border-foreground/20 focus:shadow-md"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-1.5">
              <span className="text-xs text-muted-foreground/50">Popular:</span>
              {popularTags.map((tag) => (
                <Link key={tag} href={`/templates?style=${tag}`}>
                  <Badge
                    variant="outline"
                    className="cursor-pointer text-[11px] text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                  >
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">
              New Pages
            </h2>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Recently added templates
            </p>
          </div>
          <Link href="/templates">
            <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
              View all
              <ArrowRight className="size-3.5" />
            </Button>
          </Link>
        </div>
        <TemplateGrid templates={newTemplates} />
      </section>

      {categoryTemplates.map((cat) => (
        <section
          key={cat.name}
          className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:pb-16"
        >
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">
                {cat.label}
              </h2>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {cat.description}
              </p>
            </div>
            <Link href={`/templates?category=${cat.name}`}>
              <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                See all {String(cat.count)}
                <ArrowRight className="size-3.5" />
              </Button>
            </Link>
          </div>
          <TemplateGrid templates={cat.templates} />
        </section>
      ))}

      <section className="border-y border-border/30 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="mb-10 text-center">
            <h2 className="text-lg font-semibold tracking-tight">
              Registry at a Glance
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              A growing collection of production-ready templates
            </p>
          </div>
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center rounded-xl border border-border/40 bg-background p-6 text-center shadow-sm">
              <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-muted">
                <Layers className="size-4 text-foreground" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                {templateCount}
              </span>
              <span className="mt-0.5 text-xs text-muted-foreground">
                Templates
              </span>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-border/40 bg-background p-6 text-center shadow-sm">
              <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-muted">
                <Grid3X3 className="size-4 text-foreground" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                {CATEGORIES.filter((c) => c.name !== "all").length}
              </span>
              <span className="mt-0.5 text-xs text-muted-foreground">
                Categories
              </span>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-border/40 bg-background p-6 text-center shadow-sm">
              <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-muted">
                <Palette className="size-4 text-foreground" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                {uniqueStyleCount}
              </span>
              <span className="mt-0.5 text-xs text-muted-foreground">
                Languages
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-muted/50 via-background to-muted/30 p-8 text-center sm:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(120,119,198,0.04),transparent)]" />
          <div className="relative">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Ready to build faster?
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Browse our complete template library and find the perfect starting
              point for your next project.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link href="/templates">
                <Button className="gap-2">
                  Browse Templates
                  <ArrowRight className="size-3.5" />
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline" className="gap-2">
                  <BookOpen className="size-3.5" />
                  Read Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
