import { prisma } from "@/lib/prisma";
import { CATEGORIES } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Eye, Heart, Bookmark, Trophy, Crown, Medal } from "lucide-react";

type SearchParams = Promise<{
  category?: string;
  period?: string;
  metric?: string;
}>;

const METRICS = [
  { key: "viewCount", label: "Views", icon: Eye },
  { key: "likeCount", label: "Likes", icon: Heart },
  { key: "saveCount", label: "Saves", icon: Bookmark },
] as const;

const PERIODS = [
  { key: "all", label: "All Time" },
  { key: "weekly", label: "Weekly" },
  { key: "daily", label: "Daily" },
] as const;

const MS_PER_DAY = 86_400_000;
const MS_PER_WEEK = 604_800_000;
const TOP_RANK_THRESHOLD = 3;

type LeaderboardTemplate = {
  id: string;
  slug: string;
  title: string;
  category: string;
  thumbnailUrl: string | null;
  viewCount: number;
  likeCount: number;
  saveCount: number;
};

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-md shadow-amber-500/20">
        <Crown className="h-4 w-4 text-white" />
      </div>
    );
  }
  if (rank === 2) {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-muted-foreground/40 to-muted-foreground/70 shadow-sm">
        <Medal className="h-4 w-4 text-background" />
      </div>
    );
  }
  if (rank === 3) {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-700 to-amber-900 shadow-sm shadow-amber-900/20">
        <Trophy className="h-3.5 w-3.5 text-amber-200" />
      </div>
    );
  }
  return (
    <div className="flex h-9 w-9 items-center justify-center">
      <span className="text-sm font-semibold tabular-nums text-muted-foreground/60">
        {rank}
      </span>
    </div>
  );
}

function LeaderboardRow({
  template: t,
  rank,
  metric,
  metricIcon: MetricIcon,
  isLast,
}: {
  template: LeaderboardTemplate;
  rank: number;
  metric: "viewCount" | "likeCount" | "saveCount";
  metricIcon: React.ElementType;
  isLast: boolean;
}) {
  const metricValue = t[metric];
  return (
    <Link
      href={`/templates/${t.slug}`}
      className={`group grid grid-cols-[52px_1fr_100px] sm:grid-cols-[52px_1fr_110px_100px] items-center gap-4 px-5 py-3.5 transition-colors hover:bg-muted/40 ${
        !isLast ? "border-b border-border/50" : ""
      } ${rank <= TOP_RANK_THRESHOLD ? "bg-muted/20" : ""}`}
    >
      <RankBadge rank={rank} />
      <div className="flex items-center gap-3 min-w-0">
        <div className="relative h-9 w-14 shrink-0 overflow-hidden rounded-md border border-border/60 bg-muted">
          {t.thumbnailUrl ? (
            <Image
              src={t.thumbnailUrl}
              alt={t.title}
              fill
              className="object-cover"
              sizes="56px"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-[10px] text-muted-foreground/40">N/A</span>
            </div>
          )}
        </div>
        <span className="truncate text-sm font-medium text-foreground group-hover:text-foreground/80">
          {t.title}
        </span>
      </div>
      <div className="hidden sm:block">
        <Badge
          variant="outline"
          className="border-border/50 text-[11px] text-muted-foreground font-normal capitalize"
        >
          {t.category}
        </Badge>
      </div>
      <div className="flex items-center justify-end gap-1.5 text-muted-foreground">
        <MetricIcon className="h-3.5 w-3.5 text-muted-foreground/50" />
        <span className="text-sm font-semibold tabular-nums text-foreground">
          {metricValue.toLocaleString()}
        </span>
      </div>
    </Link>
  );
}

export default async function LeaderboardPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const category = params.category || "all";
  const metric = (params.metric || "viewCount") as
    | "viewCount"
    | "likeCount"
    | "saveCount";
  const period = params.period || "all";

  const where = {
    status: "PUBLISHED" as const,
    ...(category !== "all" && { category }),
    ...(period === "daily" && {
      createdAt: { gte: new Date(Date.now() - MS_PER_DAY) },
    }),
    ...(period === "weekly" && {
      createdAt: { gte: new Date(Date.now() - MS_PER_WEEK) },
    }),
  };

  const templates: LeaderboardTemplate[] = await prisma.template.findMany({
    where,
    orderBy: { [metric]: "desc" as const },
    take: 50,
    select: {
      id: true,
      slug: true,
      title: true,
      category: true,
      thumbnailUrl: true,
      viewCount: true,
      likeCount: true,
      saveCount: true,
    },
  });

  const activeMetric = METRICS.find((m) => m.key === metric) ?? METRICS[0];

  function buildUrl(overrides: Record<string, string>) {
    const p = new URLSearchParams();
    const base = { category, metric, period, ...overrides };
    for (const [k, v] of Object.entries(base)) {
      if (v && v !== "all" && v !== "viewCount") p.set(k, v);
    }
    const qs = p.toString();
    return `/leaderboard${qs ? `?${qs}` : ""}`;
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(120,119,198,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_80%_60%,rgba(255,182,130,0.05),transparent)]" />
        <div className="relative mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-18 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-3.5 py-1.5 text-xs text-muted-foreground">
            <Trophy className="size-3" />
            <span className="font-medium">Top 50 Templates</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Template{" "}
            <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent italic font-serif">
              Leaderboard
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Discover the most popular templates based on views, likes, and saves
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        {/* Filters */}
        <div className="mb-7 space-y-4">
          {/* Category filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            {CATEGORIES.filter((c) =>
              [
                "all",
                "pages",
                "hero",
                "feature",
                "footer",
                "pricing",
                "testimonial",
                "cta",
                "header",
              ].includes(c.name)
            ).map((cat) => (
              <Link
                key={cat.name}
                href={buildUrl({ category: cat.name })}
                className={`inline-flex items-center rounded-full px-3.5 py-1 text-xs font-medium transition-all ${
                  category === cat.name
                    ? "bg-foreground text-background shadow-sm"
                    : "border border-border/60 text-muted-foreground hover:border-border hover:text-foreground"
                }`}
              >
                {cat.label}
              </Link>
            ))}
          </div>

          {/* Period + Metric selectors */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex gap-0.5 rounded-lg border border-border/60 bg-muted/30 p-0.5">
              {PERIODS.map((p) => (
                <Link
                  key={p.key}
                  href={buildUrl({ period: p.key })}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                    period === p.key
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {p.label}
                </Link>
              ))}
            </div>

            <div className="flex gap-0.5 rounded-lg border border-border/60 bg-muted/30 p-0.5">
              {METRICS.map((m) => {
                const Icon = m.icon;
                return (
                  <Link
                    key={m.key}
                    href={buildUrl({ metric: m.key })}
                    className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                      metric === m.key
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-3 w-3" />
                    {m.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Table */}
        {templates.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-xl border border-border/50 py-24 text-center">
            <Trophy className="mb-3 h-10 w-10 text-muted-foreground/20" />
            <h3 className="text-sm font-medium text-muted-foreground">
              No templates found
            </h3>
            <p className="mt-1 text-xs text-muted-foreground/60">
              Try adjusting your filters
            </p>
          </div>
        ) : (
          <div className="rounded-xl border border-border/60 bg-card overflow-hidden shadow-sm">
            {/* Table header */}
            <div className="hidden sm:grid grid-cols-[52px_1fr_110px_100px] items-center gap-4 border-b border-border/50 bg-muted/20 px-5 py-2.5">
              <span className="text-[10px] font-semibold tracking-widest text-muted-foreground/50 uppercase">
                #
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-muted-foreground/50 uppercase">
                Template
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-muted-foreground/50 uppercase">
                Category
              </span>
              <span className="text-right text-[10px] font-semibold tracking-widest text-muted-foreground/50 uppercase">
                {activeMetric.label}
              </span>
            </div>

            {templates.map((t, i) => (
              <LeaderboardRow
                key={t.id}
                template={t}
                rank={i + 1}
                metric={metric}
                metricIcon={activeMetric.icon}
                isLast={i === templates.length - 1}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
