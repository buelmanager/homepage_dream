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
  ShoppingBag,
  Loader2,
  Plus,
  Package,
  Crown,
  Calendar,
  CreditCard,
  History,
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

type PurchaseItem = ListItem & {
  creditsSpent: number;
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

type CreditTransaction = {
  id: string;
  amount: number;
  type: string;
  description: string | null;
  createdAt: string;
};

const PLAN_COLORS: Record<string, string> = {
  BASIC: "from-slate-500 to-slate-600",
  STANDARD: "from-blue-500 to-blue-600",
  PREMIUM: "from-amber-500 to-amber-600",
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
        <Package className="mb-3 h-10 w-10 text-stone-300" />
        <p className="text-sm text-stone-500">{emptyMessage}</p>
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
            className="group overflow-hidden border-stone-200/80 transition-all hover:border-stone-300 hover:shadow-md"
          >
            <Link href={`/templates/${t.slug}`}>
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                {t.thumbnailUrl ? (
                  <Image
                    src={t.thumbnailUrl}
                    alt={t.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-sm text-stone-400">
                    No preview
                  </div>
                )}
              </div>
            </Link>
            <CardContent className="p-3">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-medium text-stone-800">
                    {t.title}
                  </h3>
                  <Badge
                    variant="secondary"
                    className="mt-1 bg-stone-100 text-stone-500 text-xs capitalize"
                  >
                    {t.category}
                  </Badge>
                </div>
                {showDownload && (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="shrink-0 h-8 w-8 p-0 text-stone-400 hover:text-stone-700"
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
function fetchWithTimeout(url: string, timeout = 10000) {
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
  const [purchases, setPurchases] = useState<PurchaseItem[]>([]);
  const [favorites, setFavorites] = useState<ListItem[]>([]);
  const [bookmarks, setBookmarks] = useState<ListItem[]>([]);
  const [credits, setCredits] = useState(0);
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [transactions, setTransactions] = useState<CreditTransaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [topUpAmount, setTopUpAmount] = useState("");
  const [toppingUp, setToppingUp] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

  useEffect(() => {
    console.log("[Profile] useEffect triggered - status:", status);
    
    if (status === "unauthenticated") {
      console.log("[Profile] Unauthenticated - redirecting to /signin");
      router.push("/signin");
      return;
    }

    if (status === "authenticated") {
      console.log("[Profile] Authenticated - fetching data...");
      
      Promise.all([
        fetchWithTimeout("/api/credits", 10000).then((r) => {
          console.log("[Profile] /api/credits response:", r.status, r.ok);
          if (!r.ok) throw new Error(`Credits API failed: ${r.status}`);
          return r.json();
        }),
        fetchWithTimeout("/api/favorites", 10000).then((r) => {
          console.log("[Profile] /api/favorites response:", r.status, r.ok);
          if (!r.ok) throw new Error(`Favorites API failed: ${r.status}`);
          return r.json();
        }),
        fetchWithTimeout("/api/bookmarks", 10000).then((r) => {
          console.log("[Profile] /api/bookmarks response:", r.status, r.ok);
          if (!r.ok) throw new Error(`Bookmarks API failed: ${r.status}`);
          return r.json();
        }),
        fetchWithTimeout("/api/subscription", 10000).then((r) => {
          console.log("[Profile] /api/subscription response:", r.status, r.ok);
          if (!r.ok) throw new Error(`Subscription API failed: ${r.status}`);
          return r.json();
        }),
        fetchWithTimeout("/api/transactions", 10000).then((r) => {
          console.log("[Profile] /api/transactions response:", r.status, r.ok);
          if (!r.ok) throw new Error(`Transactions API failed: ${r.status}`);
          return r.json();
        }),
      ])
        .then(([creditsData, favData, bookData, subData, transData]) => {
          console.log("[Profile] All data fetched successfully:", {
            creditsData,
            favData,
            bookData,
            subData,
            transData,
          });
          setCredits(creditsData.credits ?? 0);
          setFavorites(favData.favorites ?? []);
          setBookmarks(bookData.bookmarks ?? []);
          setSubscription(subData.subscription ?? null);
          setTransactions(transData.transactions ?? []);
          setLoading(false);
          console.log("[Profile] Loading complete - setLoading(false)");
        })
        .catch((error) => {
          console.error("[Profile] Error fetching data:", error);
          setLoading(false);
          console.log("[Profile] Error handled - setLoading(false)");
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
    console.log("[Profile] Showing loader - status:", status, "loading:", loading);
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-stone-400" />
        <div className="ml-4 text-sm text-stone-500">
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

  const remainingDownloads = subscription
    ? subscription.monthlyLimit - subscription.usedCount
    : 0;

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <Avatar className="h-20 w-20 border-2 border-stone-200 shadow-lg">
              <AvatarImage src={user.image ?? undefined} alt={user.name ?? ""} />
              <AvatarFallback className="bg-gradient-to-br from-stone-800 to-stone-950 text-xl font-semibold text-white">
                {initials}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-2xl font-semibold tracking-tight text-stone-900">
                {user.name ?? "User"}
              </h1>
              <p className="mt-0.5 text-sm text-stone-500">{user.email}</p>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="inline-flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50/60 px-4 py-2">
                  <Coins className="h-5 w-5 text-amber-600" />
                  <span className="text-lg font-bold tabular-nums text-amber-800">
                    {credits.toLocaleString()}
                  </span>
                  <span className="text-sm text-amber-600">credits</span>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="Amount"
                    value={topUpAmount}
                    onChange={(e) => setTopUpAmount(e.target.value)}
                    className="h-9 w-24 rounded-lg border border-stone-200 bg-white px-3 text-sm tabular-nums text-stone-800 placeholder:text-stone-400 focus:border-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-300"
                    min="1"
                    max="10000"
                  />
                  <Button
                    size="sm"
                    onClick={handleTopUp}
                    disabled={toppingUp || !topUpAmount}
                    className="gap-1 bg-stone-900 text-white hover:bg-stone-800"
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
                <div className="rounded-lg bg-stone-50 p-4">
                  <p className="text-sm text-stone-500">Downloads This Month</p>
                  <p className="text-2xl font-bold text-stone-900">
                    {subscription.usedCount} / {subscription.monthlyLimit}
                  </p>
                  <div className="mt-2 h-2 rounded-full bg-stone-200">
                    <div
                      className="h-2 rounded-full bg-amber-500"
                      style={{
                        width: `${(subscription.usedCount / subscription.monthlyLimit) * 100}%`,
                      }}
                    />
                  </div>
                </div>
                <div className="rounded-lg bg-stone-50 p-4">
                  <p className="text-sm text-stone-500">Available Downloads</p>
                  <p className="text-2xl font-bold text-stone-900">
                    {remainingDownloads}
                  </p>
                  <p className="mt-2 text-sm text-stone-500">
                    <Calendar className="mr-1 inline h-3.5 w-3.5" />
                    Renews {new Date(subscription.currentPeriodEnd).toLocaleDateString()}
                  </p>
                </div>
              </CardContent>
              <div className="flex gap-2 border-t border-stone-100 p-4">
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
            <Card className="mb-8 border-amber-200 bg-amber-50">
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <h3 className="font-semibold text-amber-900">
                    Subscribe for More Downloads
                  </h3>
                  <p className="text-sm text-amber-700">
                    Get up to 15 downloads per month starting at $10
                  </p>
                </div>
                <Button
                  className="gap-2 bg-amber-600 hover:bg-amber-700"
                  onClick={() => setShowSubscriptionModal(true)}
                >
                  <Crown className="h-4 w-4" />
                  View Plans
                </Button>
              </CardContent>
            </Card>
          )}

          <Tabs defaultValue="purchased" className="w-full">
            <TabsList className="bg-stone-100 w-full sm:w-auto">
              <TabsTrigger value="purchased" className="gap-1.5">
                <ShoppingBag className="h-3.5 w-3.5" />
                Purchased
                {purchases.length > 0 && (
                  <span className="ml-1 rounded-full bg-stone-200 px-1.5 text-xs tabular-nums">
                    {purchases.length}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="transactions" className="gap-1.5">
                <History className="h-3.5 w-3.5" />
                Transactions
                {transactions.length > 0 && (
                  <span className="ml-1 rounded-full bg-stone-200 px-1.5 text-xs tabular-nums">
                    {transactions.length}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="favorites" className="gap-1.5">
                <Heart className="h-3.5 w-3.5" />
                Favorites
                {favorites.length > 0 && (
                  <span className="ml-1 rounded-full bg-stone-200 px-1.5 text-xs tabular-nums">
                    {favorites.length}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="bookmarks" className="gap-1.5">
                <Bookmark className="h-3.5 w-3.5" />
                Bookmarks
                {bookmarks.length > 0 && (
                  <span className="ml-1 rounded-full bg-stone-200 px-1.5 text-xs tabular-nums">
                    {bookmarks.length}
                  </span>
                )}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="purchased" className="mt-6">
              <TemplateGrid
                items={purchases}
                emptyMessage="No purchases yet. Browse templates to find something you love."
                showDownload
              />
            </TabsContent>

            <TabsContent value="transactions" className="mt-6">
              {transactions.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <History className="mb-3 h-10 w-10 text-stone-300" />
                  <p className="text-sm text-stone-500">No transactions yet</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {transactions.map((tx) => (
                    <div
                      key={tx.id}
                      className="flex items-center justify-between rounded-lg border border-stone-200 bg-white p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full ${
                            tx.amount > 0
                              ? "bg-green-100 text-green-600"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {tx.amount > 0 ? (
                            <Plus className="h-5 w-5" />
                          ) : (
                            <Coins className="h-5 w-5" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-stone-800">
                            {tx.type === "TOP_UP"
                              ? "Credit Top Up"
                              : tx.type === "PURCHASE"
                              ? "Template Purchase"
                              : tx.type === "SUBSCRIPTION"
                              ? "Subscription"
                              : tx.type}
                          </p>
                          <p className="text-sm text-stone-500">
                            {tx.description || tx.type}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p
                          className={`font-semibold ${
                            tx.amount > 0 ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {tx.amount > 0 ? "+" : ""}
                          {tx.amount}
                        </p>
                        <p className="text-xs text-stone-400">
                          {new Date(tx.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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
