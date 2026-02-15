import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Globe,
  Layers,
  Calendar,
  Languages,
  Eye,
  Heart,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DevicePreview } from "@/components/template/device-preview";
import { PurchaseCard } from "@/components/template/purchase-card";
import { ViewCounter } from "@/components/template/view-counter";
import { CATEGORIES } from "@/types";
import type { TemplateWithSections, SectionItem } from "@/types";
import { getCatalogTemplateBySlug } from "@/lib/template-catalog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const template = await getCatalogTemplateBySlug(slug, { publishedOnly: true });
  
  if (!template) {
    return { title: "Template Not Found" };
  }

  return {
    title: `${template.title} | HomeDream`,
    description: template.description ?? `Preview ${template.title} template`,
  };
}

export default async function TemplateDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const template = await getCatalogTemplateBySlug(slug, { publishedOnly: true });
  
  if (!template) {
    notFound();
  }

  const htmlPath = template.htmlPath ?? `/templates/${slug}/index.html`;

  const uniqueCategories: string[] = [
    ...new Set(template.sections.map((s: SectionItem) => s.category)),
  ];

  const formatDate = (date: Date) =>
    new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);

  const getCategoryLabel = (name: string) =>
    CATEGORIES.find((c) => c.name === name)?.label ?? name;

  return (
    <div className="min-h-screen bg-background">
      <ViewCounter slug={slug} />

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <Link
              href="/templates"
              className="group flex w-fit items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
              Back
            </Link>

            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {template.title}
              </h1>
              <Badge variant="secondary" className="tabular-nums">
                {template.sections.length} sections
              </Badge>
            </div>

            {template.sourceUrl && (
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Globe className="size-3.5" />
                <span className="truncate max-w-xs">
                  {template.sourceUrl.replace(/^https?:\/\//, "")}
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Eye className="size-3.5" />
              {template.viewCount.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <Heart className="size-3.5" />
              {template.likeCount.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          <div className="min-w-0">
            <DevicePreview
              htmlPath={htmlPath}
              title={template.title}
              sourceUrl={template.sourceUrl}
            />
          </div>

          <aside className="flex flex-col gap-4">
            <Card className="border-border/50 shadow-md">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Layers className="size-4" />
                  Page Info
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex flex-col gap-1">
                    <span className="text-muted-foreground">Sections</span>
                    <span className="font-semibold">
                      {template.sections.length}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-muted-foreground">Language</span>
                    <span className="flex items-center gap-1 font-semibold">
                      <Languages className="size-3.5" />
                      {template.language}
                    </span>
                  </div>
                  <div className="col-span-2 flex flex-col gap-1">
                    <span className="text-muted-foreground">Created</span>
                    <span className="flex items-center gap-1 font-semibold">
                      <Calendar className="size-3.5" />
                      {formatDate(template.createdAt)}
                    </span>
                  </div>
                </div>

                <Separator />

                <div className="flex flex-col gap-2">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Categories
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {uniqueCategories.length > 0 ? (
                      uniqueCategories.map((cat) => (
                        <Badge key={cat} variant="outline" className="text-xs">
                          {getCategoryLabel(cat)}
                        </Badge>
                      ))
                    ) : (
                      <Badge variant="outline" className="text-xs">
                        {getCategoryLabel("pages")}
                      </Badge>
                    )}
                  </div>
                </div>

                {template.style.length > 0 && (
                  <>
                    <Separator />
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Style
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {template.style.map((s: string) => (
                          <Badge
                            key={s}
                            variant="secondary"
                            className="text-xs"
                          >
                            {s}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            <PurchaseCard
              price={template.price}
              itemType="template"
              itemTitle={template.title}
              itemSlug={slug}
            />
          </aside>
        </div>

        {template.sections.length > 0 && (
          <section className="mt-12">
            <div className="mb-6 flex items-center gap-3">
              <h2 className="text-xl font-bold tracking-tight">Sections</h2>
              <Badge variant="secondary" className="tabular-nums">
                {template.sections.length}
              </Badge>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {template.sections.map((section: SectionItem) => (
                <Link key={section.id} href={`/c/${section.slug}`}>
                  <Card className="group cursor-pointer overflow-hidden border-border/40 transition-all duration-200 hover:border-border hover:shadow-lg">
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                      {section.thumbnailUrl ? (
                        <Image
                          src={section.thumbnailUrl}
                          alt={section.title}
                          fill
                          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-muted-foreground">
                          <Layers className="size-8 opacity-30" />
                        </div>
                      )}

                      <div className="absolute left-2.5 top-2.5">
                        <Badge className="bg-foreground/80 text-background tabular-nums backdrop-blur-sm">
                          {String(section.order + 1).padStart(2, "0")}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="flex flex-col gap-2 py-3">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-sm font-semibold leading-tight line-clamp-1">
                          {section.title}
                        </span>
                        <Badge
                          variant="outline"
                          className="shrink-0 text-[10px]"
                        >
                          {getCategoryLabel(section.category)}
                        </Badge>
                      </div>

                      {section.style.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {section.style.slice(0, 3).map((s: string) => (
                            <span
                              key={s}
                              className="rounded-md bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
