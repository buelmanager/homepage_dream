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
import {
  Coins,
  Download,
  Heart,
  Bookmark,
  ShoppingBag,
  Loader2,
  Plus,
  Package,
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
                  <Button size="sm" variant="ghost" className="shrink-0 h-8 w-8 p-0 text-stone-400 hover:text-stone-700">
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

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [purchases, setPurchases] = useState<PurchaseItem[]>([]);
  const [favorites, setFavorites] = useState<ListItem[]>([]);
  const [bookmarks, setBookmarks] = useState<ListItem[]>([]);
  const [credits, setCredits] = useState(0);
  const [loading, setLoading] = useState(true);
  const [topUpAmount, setTopUpAmount] = useState("");
  const [toppingUp, setToppingUp] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin");
      return;
    }

    if (status === "authenticated") {
      Promise.all([
        fetch("/api/credits").then((r) => r.json()),
        fetch("/api/favorites").then((r) => r.json()),
        fetch("/api/bookmarks").then((r) => r.json()),
      ]).then(([creditsData, favData, bookData]) => {
        setCredits(creditsData.credits ?? 0);
        setFavorites(favData.favorites ?? []);
        setBookmarks(bookData.bookmarks ?? []);
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
    }
    setToppingUp(false);
  };

  if (status === "loading" || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-stone-400" />
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

  return (
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
  );
}
