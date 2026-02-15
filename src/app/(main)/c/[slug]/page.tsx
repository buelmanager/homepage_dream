import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Layers,
  Languages,
  Eye,
  Heart,
  ArrowUpRight,
} from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PurchaseCard } from "@/components/template/purchase-card";
import { CATEGORIES } from "@/types";
import type { SectionItem } from "@/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const section = await prisma.section.findUnique({
    where: { slug },
    select: { title: true, category: true },
  });

  if (!section) return { title: "Section Not Found" };

  return {
    title: `${section.title} | HomeDream`,
    description: `${section.title} - ${section.category} section component`,
  };
}

export default async function SectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const result = await prisma.section.findUnique({
    where: { slug },
    include: {
      template: {
        select: {
          slug: true,
          title: true,
          sections: {
            orderBy: { order: "asc" },
            select: {
              id: true,
              slug: true,
              title: true,
              category: true,
              thumbnailUrl: true,
              style: true,
              order: true,
            },
          },
        },
      },
    },
  });

  if (!result) notFound();

  const section = result as unknown as SectionItem & {
    template: {
      slug: string;
      title: string;
      sections: Pick<
        SectionItem,
        "id" | "slug" | "title" | "category" | "thumbnailUrl" | "style" | "order"
      >[];
    } | null;
  };

  const getCategoryLabel = (name: string) =>
    CATEGORIES.find((c) => c.name === name)?.label ?? name;

  const relatedSections =
    section.template?.sections.filter(
      (s: Pick<SectionItem, "slug">) => s.slug !== slug
    ) ?? [];

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-2">
          <Link
            href={
              section.template
                ? `/templates/${section.template.slug}`
                : "/templates"
            }
            className="group flex w-fit items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
            {section.template
              ? `Back to ${section.template.title}`
              : "Back"}
          </Link>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {section.title}
                </h1>
                <Badge variant="outline">
                  {getCategoryLabel(section.category)}
                </Badge>
              </div>

              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Languages className="size-3.5" />
                  {section.language}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="size-3.5" />
                  {section.viewCount.toLocaleString()}
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="size-3.5" />
                  {section.likeCount.toLocaleString()}
                </span>
              </div>

              {section.style.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {section.style.map((s: string) => (
                    <Badge key={s} variant="secondary" className="text-xs">
                      {s}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          <div className="min-w-0">
            <div className="overflow-hidden rounded-xl border border-border/60 bg-muted/20">
              {section.thumbnailUrl ? (
                <div className="relative w-full">
                  <Image
                    src={section.thumbnailUrl}
                    alt={section.title}
                    width={1280}
                    height={800}
                    className="w-full object-cover object-top"
                    priority
                  />
                </div>
              ) : (
                <div className="flex h-80 items-center justify-center text-muted-foreground">
                  <div className="flex flex-col items-center gap-2">
                    <Layers className="size-12 opacity-20" />
                    <span className="text-sm">No preview available</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <aside className="flex flex-col gap-4">
            {section.template && (
              <Card className="border-border/50 shadow-md">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Layers className="size-4" />
                    Parent Template
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Link
                    href={`/templates/${section.template.slug}`}
                    className="group flex items-center justify-between rounded-lg border border-border/50 px-3 py-2.5 transition-colors hover:bg-muted/50"
                  >
                    <span className="text-sm font-medium">
                      {section.template.title}
                    </span>
                    <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </CardContent>
              </Card>
            )}

            <PurchaseCard
              price={section.price}
              itemType="section"
              itemTitle={section.title}
              itemSlug={slug}
            />
          </aside>
        </div>

        {relatedSections.length > 0 && (
          <section className="mt-12">
            <div className="mb-6 flex items-center gap-3">
              <h2 className="text-xl font-bold tracking-tight">
                Other Sections
              </h2>
              <Badge variant="secondary" className="tabular-nums">
                {relatedSections.length}
              </Badge>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedSections.map(
                (
                  related: Pick<
                    SectionItem,
                    | "id"
                    | "slug"
                    | "title"
                    | "category"
                    | "thumbnailUrl"
                    | "style"
                    | "order"
                  >
                ) => (
                  <Link key={related.id} href={`/c/${related.slug}`}>
                    <Card className="group cursor-pointer overflow-hidden border-border/40 transition-all duration-200 hover:border-border hover:shadow-lg">
                      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                        {related.thumbnailUrl ? (
                          <Image
                            src={related.thumbnailUrl}
                            alt={related.title}
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
                            {String(related.order + 1).padStart(2, "0")}
                          </Badge>
                        </div>
                      </div>

                      <CardContent className="flex flex-col gap-2 py-3">
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-sm font-semibold leading-tight line-clamp-1">
                            {related.title}
                          </span>
                          <Badge
                            variant="outline"
                            className="shrink-0 text-[10px]"
                          >
                            {getCategoryLabel(related.category)}
                          </Badge>
                        </div>

                        {related.style.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {related.style
                              .slice(0, 3)
                              .map((s: string) => (
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
                )
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
