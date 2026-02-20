"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SubscriptionModal } from "@/components/subscription/subscription-modal";
import {
  Coins,
  Download,
  Heart,
  Bookmark,
  Loader2,
  Plus,
  Package,
  Crown,
  Calendar,
  CreditCard,
} from "lucide-react";

type TemplateItem = {
  id: string;
  slug: string;
  title: string;
  category: string;
  thumbnailUrl: string | null;
  price: number;
};

type ListItem = {
  id: string;
  createdAt: string;
  template: TemplateItem | null;
  section: TemplateItem | null;
};

type Subscription = {
  id: string;
  plan: string;
  status: string;
  monthlyLimit: number;
  usedCount: number;
  currentPeriodEnd: string;
  price: number;
};

const PLAN_COLORS: Record<string, string> = {
  PRO: "from-amber-500 to-amber-600",
};

function TemplateGrid({
  items,
  emptyMessage,
  showDownload,
}: {
  items: ListItem[];
  emptyMessage: string;
  showDownload?: boolean;
}) {
  const templates = items
    .map((item) => ({ ...item, display: item.template ?? item.section }))
    .filter((item) => item.display != null);

  if (templates.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <Package className="mb-3 h-10 w-10 text-muted-foreground/40" />
        <p className="text-sm text-muted-foreground">{emptyMessage}</p>
        <Link href="/templates">
          <Button variant="outline" className="mt-4" size="sm">
            Browse Templates
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {templates.map((item) => {
        const t = item.display!;
        return (
          <Card
            key={item.id}
            className="group overflow-hidden border-border/80 transition-all hover:border-border hover:shadow-md"
          >
            <Link href={`/templates/${t.slug}`}>
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                {t.thumbnailUrl ? (
                  <Image
                    src={t.thumbnailUrl}
                    alt={t.title}
                    fill
                    className="object-cover object-top transition-transform group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
                    No preview
                  </div>
                )}
              </div>
            </Link>
            <CardContent className="p-3">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-medium text-foreground">
                    {t.title}
                  </h3>
                  <Badge
                    variant="secondary"
                    className="mt-1 text-xs capitalize"
                  >
                    {t.category}
                  </Badge>
                </div>
                {showDownload && (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="shrink-0 h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

// Helper function to add timeout to fetch requests
function fetchWithTimeout(url: string, timeout = 30000) {
  return Promise.race([
    fetch(url),
    new Promise<Response>((_, reject) =>
      setTimeout(() => reject(new Error(`Request timeout: ${url}`)), timeout)
    ),
  ]);
}

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [favorites, setFavorites] = useState<ListItem[]>([]);
  const [bookmarks, setBookmarks] = useState<ListItem[]>([]);
  const [purchases, setPurchases] = useState<ListItem[]>([]);
  const [credits, setCredits] = useState(0);
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);
  const [topUpAmount, setTopUpAmount] = useState("");
  const [toppingUp, setToppingUp] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin");
      return;
    }

    if (status === "authenticated") {

      Promise.allSettled([
        fetchWithTimeout("/api/credits", 30000).then((r) => {
          if (!r.ok) throw new Error(`Credits API failed: ${r.status}`);
          return r.json();
        }),
        fetchWithTimeout("/api/favorites", 30000).then((r) => {
          if (!r.ok) throw new Error(`Favorites API failed: ${r.status}`);
          return r.json();
        }),
        fetchWithTimeout("/api/bookmarks", 30000).then((r) => {
          if (!r.ok) throw new Error(`Bookmarks API failed: ${r.status}`);
          return r.json();
        }),
        fetchWithTimeout("/api/subscription", 30000).then((r) => {
          if (!r.ok) throw new Error(`Subscription API failed: ${r.status}`);
          return r.json();
        }),
        fetchWithTimeout("/api/purchases", 30000).then((r) => {
          if (!r.ok) throw new Error(`Purchases API failed: ${r.status}`);
          return r.json();
        }),
      ])
        .then((results) => {
          const creditsData = results[0].status === "fulfilled" ? results[0].value : null;
          const favData = results[1].status === "fulfilled" ? results[1].value : null;
          const bookData = results[2].status === "fulfilled" ? results[2].value : null;
          const subData = results[3].status === "fulfilled" ? results[3].value : null;
          const purchData = results[4].status === "fulfilled" ? results[4].value : null;

          setCredits(creditsData?.credits ?? 0);
          setFavorites(favData?.favorites ?? []);
          setBookmarks(bookData?.bookmarks ?? []);
          setSubscription(subData?.subscription ?? null);
          setPurchases(purchData?.purchases ?? []);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [status, router]);

  const handleTopUp = async () => {
    const amount = parseInt(topUpAmount);
    if (!amount || amount <= 0) return;

    setToppingUp(true);
    const res = await fetch("/api/credits", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });
    const data = await res.json();
    if (res.ok) {
      setCredits(data.credits);
      setTopUpAmount("");
    } else {
      alert(data.error || "Top-up failed");
    }
    setToppingUp(false);
  };

  if (status === "loading" || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        <div className="ml-4 text-sm text-muted-foreground">
          {status === "loading" ? "Checking session..." : "Loading profile..."}
        </div>
      </div>
    );
  }

  if (!session?.user) return null;

  const user = session.user;
  const initials = (user.name ?? user.email ?? "U")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const isUnlimited = subscription && subscription.monthlyLimit >= 999999;

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <Avatar className="h-20 w-20 border-2 border-border shadow-lg">
              <AvatarImage src={user.image ?? undefined} alt={user.name ?? ""} />
              <AvatarFallback className="bg-gradient-to-br from-foreground/80 to-foreground text-xl font-semibold text-background">
                {initials}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                {user.name ?? "User"}
              </h1>
              <p className="mt-0.5 text-sm text-muted-foreground">{user.email}</p>

              {user.role === "ADMIN" && (
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="inline-flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50/60 px-4 py-2 dark:border-amber-900/50 dark:bg-amber-950/30">
                    <Coins className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    <span className="text-lg font-bold tabular-nums text-amber-800 dark:text-amber-200">
                      {credits.toLocaleString()}
                    </span>
                    <span className="text-sm text-amber-600 dark:text-amber-400">credits</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      placeholder="Amount"
                      value={topUpAmount}
                      onChange={(e) => setTopUpAmount(e.target.value)}
                      className="h-9 w-24 rounded-lg border border-border bg-background px-3 text-sm tabular-nums text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                      min="1"
                      max="10000"
                    />
                    <Button
                      size="sm"
                      onClick={handleTopUp}
                      disabled={toppingUp || !topUpAmount}
                      className="gap-1"
                    >
                      {toppingUp ? (
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      ) : (
                        <Plus className="h-3.5 w-3.5" />
                      )}
                      Top Up
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {subscription && (
            <Card className="mb-8 overflow-hidden border-0 shadow-lg">
              <div className={`bg-gradient-to-r ${PLAN_COLORS[subscription.plan] || "from-slate-500 to-slate-600"} p-6 text-white`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Crown className="h-8 w-8" />
                    <div>
                      <h2 className="text-xl font-bold">{subscription.plan} Plan</h2>
                      <p className="text-white/80 text-sm">
                        ${subscription.price}/month
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-white/20 text-white">
                    {subscription.status}
                  </Badge>
                </div>
              </div>
              <CardContent className="grid grid-cols-2 gap-4 p-6">
                <div className="rounded-lg bg-muted p-4">
                  <p className="text-sm text-muted-foreground">Downloads</p>
                  <p className="text-2xl font-bold text-foreground">
                    {isUnlimited ? "Unlimited" : `${subscription.usedCount} / ${subscription.monthlyLimit}`}
                  </p>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <p className="text-sm text-muted-foreground">Renewal Date</p>
                  <p className="text-lg font-bold text-foreground">
                    <Calendar className="mr-1 inline h-3.5 w-3.5" />
                    {new Date(subscription.currentPeriodEnd).toLocaleDateString()}
                  </p>
                </div>
              </CardContent>
              <div className="flex gap-2 border-t border-border p-4">
                <Button
                  variant="outline"
                  className="flex-1 gap-2"
                  onClick={() => setShowSubscriptionModal(true)}
                >
                  <CreditCard className="h-4 w-4" />
                  Manage Subscription
                </Button>
              </div>
            </Card>
          )}

          {!subscription && (
            <Card className="mb-8 border-amber-200 bg-amber-50 dark:border-amber-900/50 dark:bg-amber-950/30">
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <h3 className="font-semibold text-amber-900 dark:text-amber-100">
                    Upgrade to PRO
                  </h3>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    Get unlimited PRO template downloads for $20/month
                  </p>
                </div>
                <Button
                  className="gap-2 bg-amber-600 hover:bg-amber-700 dark:bg-amber-600 dark:hover:bg-amber-500"
                  onClick={() => setShowSubscriptionModal(true)}
                >
                  <Crown className="h-4 w-4" />
                  View Plans
                </Button>
              </CardContent>
            </Card>
          )}

          <Tabs defaultValue="downloads" className="w-full">
            <TabsList className="w-full sm:w-auto">
              <TabsTrigger value="downloads" className="gap-1.5">
                <Download className="h-3.5 w-3.5" />
                Downloads
                {purchases.length > 0 && (
                  <span className="ml-1 rounded-full bg-muted px-1.5 text-xs tabular-nums">
                    {purchases.length}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="favorites" className="gap-1.5">
                <Heart className="h-3.5 w-3.5" />
                Favorites
                {favorites.length > 0 && (
                  <span className="ml-1 rounded-full bg-muted px-1.5 text-xs tabular-nums">
                    {favorites.length}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="bookmarks" className="gap-1.5">
                <Bookmark className="h-3.5 w-3.5" />
                Bookmarks
                {bookmarks.length > 0 && (
                  <span className="ml-1 rounded-full bg-muted px-1.5 text-xs tabular-nums">
                    {bookmarks.length}
                  </span>
                )}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="downloads" className="mt-6">
              <TemplateGrid
                items={purchases}
                emptyMessage="No downloads yet. Purchase templates to access them here."
                showDownload
              />
            </TabsContent>

            <TabsContent value="favorites" className="mt-6">
              <TemplateGrid
                items={favorites}
                emptyMessage="No favorites yet. Heart templates you like to save them here."
              />
            </TabsContent>

            <TabsContent value="bookmarks" className="mt-6">
              <TemplateGrid
                items={bookmarks}
                emptyMessage="No bookmarks yet. Bookmark templates to revisit them later."
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <SubscriptionModal
        isOpen={showSubscriptionModal}
        onClose={() => setShowSubscriptionModal(false)}
      />
    </>
  );
}
