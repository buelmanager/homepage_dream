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

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) {
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg shadow-amber-300/40">
        <Crown className="h-5 w-5 text-white" />
      </div>
    );
  }
  if (rank === 2) {
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-stone-300 to-stone-500 shadow-lg shadow-stone-300/30">
        <Medal className="h-5 w-5 text-white" />
      </div>
    );
  }
  if (rank === 3) {
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-600 to-amber-800 shadow-lg shadow-amber-400/20">
        <Trophy className="h-4 w-4 text-white" />
      </div>
    );
  }
  return (
    <div className="flex h-10 w-10 items-center justify-center">
      <span className="text-lg font-bold tabular-nums text-stone-400">
        {rank}
      </span>
    </div>
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
    ...(period === "daily" && { createdAt: { gte: new Date(Date.now() - 86400000) } }),
    ...(period === "weekly" && { createdAt: { gte: new Date(Date.now() - 604800000) } }),
  };

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
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
            Top{" "}
            <span className="italic font-serif text-stone-600">Templates</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-stone-500 leading-relaxed">
            Discover the most popular templates based on views, likes, and saves
          </p>
        </header>

        <div className="mb-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.filter((c) =>
              ["all", "pages", "hero", "feature", "footer", "pricing", "testimonial", "cta", "header"].includes(c.name)
            ).map((cat) => (
              <Link
                key={cat.name}
                href={buildUrl({ category: cat.name })}
                className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                  category === cat.name
                    ? "bg-stone-900 text-white shadow-md shadow-stone-300/30"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {cat.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-1 rounded-lg bg-stone-100 p-1">
              {PERIODS.map((p) => (
                <Link
                  key={p.key}
                  href={buildUrl({ period: p.key })}
                  className={`rounded-md px-3 py-1.5 text-sm font-medium transition-all ${
                    period === p.key
                      ? "bg-white text-stone-900 shadow-sm"
                      : "text-stone-500 hover:text-stone-700"
                  }`}
                >
                  {p.label}
                </Link>
              ))}
            </div>

            <div className="flex gap-1 rounded-lg bg-stone-100 p-1">
              {METRICS.map((m) => {
                const Icon = m.icon;
                return (
                  <Link
                    key={m.key}
                    href={buildUrl({ metric: m.key })}
                    className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-all ${
                      metric === m.key
                        ? "bg-white text-stone-900 shadow-sm"
                        : "text-stone-500 hover:text-stone-700"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {m.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {templates.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <Trophy className="mb-4 h-12 w-12 text-stone-300" />
            <h3 className="text-lg font-medium text-stone-600">
              No templates found
            </h3>
            <p className="mt-1 text-sm text-stone-400">
              Try adjusting your filters
            </p>
          </div>
        ) : (
          <div className="rounded-xl border border-stone-200/80 bg-white shadow-sm overflow-hidden">
            <div className="hidden sm:grid grid-cols-[60px_1fr_120px_100px] items-center gap-4 border-b border-stone-100 px-6 py-3">
              <span className="text-xs font-semibold tracking-wider text-stone-400 uppercase">
                Rank
              </span>
              <span className="text-xs font-semibold tracking-wider text-stone-400 uppercase">
                Template
              </span>
              <span className="text-xs font-semibold tracking-wider text-stone-400 uppercase">
                Category
              </span>
              <span className="text-right text-xs font-semibold tracking-wider text-stone-400 uppercase">
                {activeMetric.label}
              </span>
            </div>

            {templates.map((t, i) => {
              const MetricIcon = activeMetric.icon;
              const metricValue = t[metric];
              return (
                <Link
                  key={t.id}
                  href={`/templates/${t.slug}`}
                  className={`group grid grid-cols-[60px_1fr_100px] sm:grid-cols-[60px_1fr_120px_100px] items-center gap-4 px-6 py-4 transition-colors hover:bg-stone-50 ${
                    i < templates.length - 1 ? "border-b border-stone-100/80" : ""
                  } ${i < 3 ? "bg-amber-50/20" : ""}`}
                >
                  <RankBadge rank={i + 1} />

                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative h-10 w-16 shrink-0 overflow-hidden rounded-md border border-stone-200 bg-stone-100">
                      {t.thumbnailUrl ? (
                        <Image
                          src={t.thumbnailUrl}
                          alt={t.title}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-xs text-stone-400">
                          N/A
                        </div>
                      )}
                    </div>
                    <span className="truncate font-medium text-stone-800 group-hover:text-stone-950">
                      {t.title}
                    </span>
                  </div>

                  <div className="hidden sm:block">
                    <Badge
                      variant="secondary"
                      className="bg-stone-100 text-stone-600 font-normal capitalize"
                    >
                      {t.category}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-end gap-1.5 text-stone-600">
                    <MetricIcon className="h-4 w-4 text-stone-400" />
                    <span className="font-semibold tabular-nums">
                      {metricValue.toLocaleString()}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
