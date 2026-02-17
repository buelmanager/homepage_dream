"use client";

import { useEffect, useState } from "react";
import {
  Heart,
  Bookmark,
  Sparkles,
  CreditCard,
  Download,
  Loader2,
  ShieldCheck,
  ShieldAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SubscriptionModal } from "@/components/subscription/subscription-modal";
import type { TemplateTier } from "@/types";

interface PurchaseCardProps {
  price: number;
  itemType: "template" | "section";
  itemTitle: string;
  itemSlug: string;
  tier?: TemplateTier;
}

export function PurchaseCard({
  price,
  itemType,
  itemTitle,
  itemSlug,
  tier = "PRO",
}: PurchaseCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [isCheckingSubscription, setIsCheckingSubscription] = useState(true);
  const [hasActiveSubscription, setHasActiveSubscription] = useState(false);

  useEffect(() => {
    const ac = new AbortController();

    fetch("/api/subscription", { signal: ac.signal })
      .then(async (response) => {
        if (!response.ok) {
          setHasActiveSubscription(false);
          return;
        }
        const data = await response.json();
        const active =
          !!data?.subscription &&
          data.subscription.status === "ACTIVE" &&
          new Date(data.subscription.currentPeriodEnd).getTime() > Date.now();

        setHasActiveSubscription(active);
      })
      .catch(() => {
        setHasActiveSubscription(false);
      })
      .finally(() => {
        setIsCheckingSubscription(false);
      });

    return () => ac.abort();
  }, []);

  const handleDownload = () => {
    window.location.href = `/api/templates/${encodeURIComponent(itemSlug)}/download`;
  };

  const accessLabel =
    itemType === "template"
      ? tier === "FREE"
        ? "Free Access"
        : "Pro Access"
      : "Section Access";

  const accessSubLabel =
    itemType === "template" && tier === "PRO"
      ? "Requires active PRO subscription"
      : itemType === "template"
      ? "No subscription required"
      : "Included in template source package";

  const renderTemplateActions = () => {
    if (tier === "FREE") {
      return (
        <>
          <div className="flex items-center justify-between rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-300">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="size-4" />
              Free template
            </span>
            <Badge variant="secondary">FREE</Badge>
          </div>

          <Button size="lg" className="w-full gap-2 font-semibold" onClick={handleDownload}>
            <Download className="size-4" />
            Download Free Template
          </Button>
        </>
      );
    }

    if (isCheckingSubscription) {
      return (
        <div className="flex items-center justify-center rounded-lg border border-border py-4 text-sm text-muted-foreground">
          <Loader2 className="mr-2 size-4 animate-spin" />
          Checking subscription...
        </div>
      );
    }

    if (hasActiveSubscription) {
      return (
        <>
          <div className="flex items-center justify-between rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-300">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="size-4" />
              Active subscription
            </span>
            <Badge>PRO</Badge>
          </div>

          <Button size="lg" className="w-full gap-2 font-semibold" onClick={handleDownload}>
            <Download className="size-4" />
            Download Pro Template
          </Button>
        </>
      );
    }

    return (
      <>
        <div className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-700 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-300">
          <span className="flex items-center gap-1.5 font-medium">
            <ShieldAlert className="size-4" />
            Pro download requires an active subscription.
          </span>
        </div>

        <Button
          size="lg"
          className="w-full gap-2 font-semibold"
          onClick={() => setShowSubscriptionModal(true)}
        >
          <CreditCard className="size-4" />
          Subscribe to Download
        </Button>
      </>
    );
  };

  const renderSectionActions = () => {
    if (isCheckingSubscription) {
      return (
        <div className="flex items-center justify-center rounded-lg border border-border py-4 text-sm text-muted-foreground">
          <Loader2 className="mr-2 size-4 animate-spin" />
          Checking subscription...
        </div>
      );
    }

    if (hasActiveSubscription) {
      return (
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-300">
          Active subscription: section source is included in Pro template package.
        </div>
      );
    }

    return (
      <Button
        size="lg"
        className="w-full gap-2 font-semibold"
        onClick={() => setShowSubscriptionModal(true)}
      >
        <CreditCard className="size-4" />
        Subscribe for Pro Access
      </Button>
    );
  };

  return (
    <>
      <Card className="overflow-hidden border-border/50 shadow-md">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Sparkles className="size-4 text-amber-500" />
            Access
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-bold tracking-tight">{accessLabel}</span>
            <span className="text-sm font-medium text-muted-foreground">{accessSubLabel}</span>
          </div>

          <p className="text-xs text-muted-foreground">
            {itemType === "template"
              ? `${itemTitle} is ${tier} tier.`
              : "Sections are bundled with template source packages."}
          </p>

          {itemType === "template" ? renderTemplateActions() : renderSectionActions()}

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
    </>
  );
}
