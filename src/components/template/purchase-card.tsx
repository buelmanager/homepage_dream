"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Heart,
  Bookmark,
  Check,
  Sparkles,
  CreditCard,
  Code2,
  Download,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SubscriptionModal } from "@/components/subscription/subscription-modal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PurchaseCardProps {
  price: number;
  itemType: "template" | "section";
  itemTitle: string;
  itemSlug: string;
}

export function PurchaseCard({
  price,
  itemType,
  itemTitle,
  itemSlug,
}: PurchaseCardProps) {
  const [isPurchased, setIsPurchased] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [credits, setCredits] = useState<number | null>(null);
  const [sourceOpen, setSourceOpen] = useState(false);
  const [sourceLoading, setSourceLoading] = useState(false);
  const [sourceText, setSourceText] = useState<string>("");
  const [sourceError, setSourceError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch purchase status so reloads correctly show "Purchased".
    const ac = new AbortController();
    fetch(`/api/purchase/status?slug=${encodeURIComponent(itemSlug)}&type=${itemType}`, {
      signal: ac.signal,
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data && typeof data.purchased === "boolean") setIsPurchased(data.purchased);
      })
      .catch(() => {});
    return () => ac.abort();
  }, [itemSlug, itemType]);

  const handlePurchase = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/purchase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: itemSlug,
          type: itemType,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsPurchased(true);
        setCredits(data.remainingCredits);
      } else if (data.error === "Insufficient credits") {
        setShowSubscriptionModal(true);
      } else {
        alert(data.error || "Purchase failed");
      }
    } catch (_error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const openSource = async () => {
    if (itemType !== "template") return;
    setSourceOpen(true);
    setSourceLoading(true);
    setSourceError(null);
    setSourceText("");
    try {
      const r = await fetch(
        `/api/templates/${encodeURIComponent(itemSlug)}/source?file=${encodeURIComponent("index.html")}`
      );
      const txt = await r.text();
      if (!r.ok) {
        setSourceError(txt || "Failed to load source");
        return;
      }
      setSourceText(txt);
    } catch {
      setSourceError("Failed to load source");
    } finally {
      setSourceLoading(false);
    }
  };

  return (
    <>
      <Card className="overflow-hidden border-border/50 shadow-md">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Sparkles className="size-4 text-amber-500" />
            Purchase
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl font-bold tracking-tight">{price}</span>
            <span className="text-sm font-medium text-muted-foreground">
              credits
            </span>
          </div>

          {credits !== null && (
            <p className="text-xs text-muted-foreground">
              Remaining credits: {credits}
            </p>
          )}

          {isPurchased ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center justify-center gap-2 rounded-lg bg-emerald-50 py-3 text-sm font-medium text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400"
            >
              <Check className="size-4" />
              Purchased
            </motion.div>
          ) : (
            <Button
              size="lg"
              className="w-full gap-2 font-semibold"
              onClick={handlePurchase}
              disabled={isLoading}
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="size-4" />
                </motion.div>
              ) : (
                <ShoppingCart className="size-4" />
              )}
              Buy {itemType === "template" ? "Template" : "Section"}
            </Button>
          )}

          {isPurchased && itemType === "template" && (
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm" className="gap-2" onClick={openSource}>
                <Code2 className="size-4" />
                View Source
              </Button>
              <Button asChild variant="outline" size="sm" className="gap-2">
                <a href={`/api/templates/${encodeURIComponent(itemSlug)}/download`}>
                  <Download className="size-4" />
                  Download
                </a>
              </Button>
            </div>
          )}

          <Button
            variant="outline"
            size="sm"
            className="w-full gap-2"
            onClick={() => setShowSubscriptionModal(true)}
          >
            <CreditCard className="size-4" />
            Subscribe for More
          </Button>

          <div className="flex gap-2">
            <Button
              variant={isFavorited ? "default" : "outline"}
              size="sm"
              className="flex-1 gap-1.5"
              onClick={() => setIsFavorited(!isFavorited)}
            >
              <Heart
                className={`size-3.5 ${isFavorited ? "fill-current" : ""}`}
              />
              {isFavorited ? "Favorited" : "Favorite"}
            </Button>
            <Button
              variant={isBookmarked ? "default" : "outline"}
              size="sm"
              className="flex-1 gap-1.5"
              onClick={() => setIsBookmarked(!isBookmarked)}
            >
              <Bookmark
                className={`size-3.5 ${isBookmarked ? "fill-current" : ""}`}
              />
              {isBookmarked ? "Saved" : "Save"}
            </Button>
          </div>
        </CardContent>
      </Card>

      <SubscriptionModal
        isOpen={showSubscriptionModal}
        onClose={() => setShowSubscriptionModal(false)}
      />

      <Dialog open={sourceOpen} onOpenChange={setSourceOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Code2 className="size-4" />
              {itemTitle} source (index.html)
            </DialogTitle>
          </DialogHeader>

          {sourceLoading ? (
            <div className="flex items-center justify-center py-10 text-muted-foreground">
              <Loader2 className="mr-2 size-4 animate-spin" />
              Loading source...
            </div>
          ) : sourceError ? (
            <div className="rounded-md border border-border bg-muted/40 p-3 text-sm text-muted-foreground">
              {sourceError}
            </div>
          ) : (
            <ScrollArea className="h-[60vh] rounded-md border border-border bg-muted/20">
              <pre className="whitespace-pre p-4 text-xs leading-relaxed">
                {sourceText}
              </pre>
            </ScrollArea>
          )}

          <DialogFooter showCloseButton />
        </DialogContent>
      </Dialog>
    </>
  );
}
