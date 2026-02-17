"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import {
  Heart,
  Bookmark,
  Sparkles,
  CreditCard,
  Download,
  Loader2,
  LogIn,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";
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
  const { status: sessionStatus } = useSession();
  const isAuthenticated = sessionStatus === "authenticated";
  const isSessionLoading = sessionStatus === "loading";
  const [isFavorited, setIsFavorited] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [isCheckingSubscription, setIsCheckingSubscription] = useState(true);
  const [hasActiveSubscription, setHasActiveSubscription] = useState(false);
  const [showLicenseConfirm, setShowLicenseConfirm] = useState(false);

  useEffect(() => {
    if (isSessionLoading) return;
    if (!isAuthenticated) {
      setIsCheckingSubscription(false);
      return;
    }

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
  }, [isAuthenticated, isSessionLoading]);

  const executeDownload = () => {
    window.location.href = `/api/templates/${encodeURIComponent(itemSlug)}/download`;
  };

  const handleDownload = () => {
    setShowLicenseConfirm(true);
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

          {isSessionLoading ? (
            <div className="flex items-center justify-center rounded-lg border border-border py-4 text-sm text-muted-foreground">
              <Loader2 className="mr-2 size-4 animate-spin" />
              Loading...
            </div>
          ) : !isAuthenticated ? (
            <Button size="lg" className="w-full gap-2 font-semibold" asChild>
              <Link href="/signin">
                <LogIn className="size-4" />
                Sign in to Download
              </Link>
            </Button>
          ) : (
            <Button size="lg" className="w-full gap-2 font-semibold" onClick={handleDownload}>
              <Download className="size-4" />
              Download Free Template
            </Button>
          )}
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

    if (!isAuthenticated) {
      return (
        <>
          <div className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-700 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-300">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldAlert className="size-4" />
              Sign in required to access PRO templates.
            </span>
          </div>

          <Button size="lg" className="w-full gap-2 font-semibold" asChild>
            <Link href="/signin">
              <LogIn className="size-4" />
              Sign in to Continue
            </Link>
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

          {/* License Warning */}
          <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 dark:border-red-900/50 dark:bg-red-950/30">
            <div className="flex items-start gap-2">
              <AlertTriangle className="mt-0.5 size-3.5 shrink-0 text-red-600 dark:text-red-400" />
              <p className="text-[11px] leading-relaxed text-red-700 dark:text-red-300">
                <span className="font-bold">Resale prohibited.</span> This template is licensed for your own commercial projects only. Redistribution, resale, or sharing of the source code is strictly forbidden and subject to legal action.{" "}
                <Link href="/license" className="underline underline-offset-2 font-medium hover:text-red-900 dark:hover:text-red-100">
                  View License
                </Link>
              </p>
            </div>
          </div>

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

      {/* License Confirmation Modal */}
      {showLicenseConfirm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowLicenseConfirm(false)}
        >
          <div
            className="mx-4 w-full max-w-md rounded-2xl border border-border bg-background p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-center">
              <div className="flex size-14 items-center justify-center rounded-full bg-red-100 dark:bg-red-950/50">
                <AlertTriangle className="size-7 text-red-600 dark:text-red-400" />
              </div>
            </div>

            <h3 className="text-center text-lg font-bold">
              License Agreement
            </h3>

            <div className="mt-4 rounded-lg border border-red-300 bg-red-50 p-4 dark:border-red-900/50 dark:bg-red-950/30">
              <p className="text-sm font-bold text-red-800 dark:text-red-200">
                RESALE & REDISTRIBUTION STRICTLY PROHIBITED
              </p>
              <ul className="mt-3 space-y-2 text-xs text-red-700 dark:text-red-300">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 block size-1.5 shrink-0 rounded-full bg-red-500" />
                  You MAY use this template for your own commercial projects (client work, personal business, etc.)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 block size-1.5 shrink-0 rounded-full bg-red-500" />
                  You MAY NOT resell, redistribute, share, sublicense, or make the source code available to any third party
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 block size-1.5 shrink-0 rounded-full bg-red-500" />
                  You MAY NOT upload the source code to any public or private marketplace, repository, or file-sharing service
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 block size-1.5 shrink-0 rounded-full bg-red-500" />
                  Violations will result in immediate account termination and legal action
                </li>
              </ul>
            </div>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              By downloading, you agree to the{" "}
              <Link href="/license" className="font-medium underline underline-offset-2 text-foreground">
                HomeDream License Agreement
              </Link>
            </p>

            <div className="mt-5 flex flex-col gap-2">
              <Button
                className="w-full gap-2 font-semibold"
                onClick={() => {
                  setShowLicenseConfirm(false);
                  executeDownload();
                }}
              >
                <Download className="size-4" />
                I Agree &mdash; Download
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setShowLicenseConfirm(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      <SubscriptionModal
        isOpen={showSubscriptionModal}
        onClose={() => setShowSubscriptionModal(false)}
      />
    </>
  );
}
