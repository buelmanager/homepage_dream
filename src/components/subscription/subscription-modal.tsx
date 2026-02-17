"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, CreditCard, Crown, Loader2, LogIn, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSubscription } from "@/components/subscription/subscription-provider";

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const proFeatures = [
  "Unlimited PRO template downloads",
  "Priority support",
  "Early access to new templates",
  "Commercial license included",
];

export function SubscriptionModal({ isOpen, onClose }: SubscriptionModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { status: sessionStatus } = useSession();
  const isAuthenticated = sessionStatus === "authenticated";
  const { hasActiveSubscription } = useSubscription();

  const handleSubscribe = async () => {
    if (hasActiveSubscription) return;

    setIsLoading(true);
    try {
      const response = await fetch("/api/subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: "PRO" }),
      });

      if (response.ok) {
        const data = await response.json();
        if (!data.url) {
          alert("Checkout URL not found");
          return;
        }
        window.location.href = data.url;
      } else {
        const error = await response.json();
        alert(error.error || "Failed to subscribe");
      }
    } catch {
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto p-8">
        <DialogHeader>
          <DialogTitle className="text-center text-3xl font-bold">
            {hasActiveSubscription ? "You're on PRO" : "Upgrade to PRO"}
          </DialogTitle>
          <DialogDescription className="text-center text-base mt-2">
            {hasActiveSubscription
              ? "You already have an active PRO subscription."
              : "Get unlimited access to all PRO templates."}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6">
          <div className="relative rounded-xl border-2 border-amber-500 p-8">
            <div className={cn("w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mb-6 mx-auto")}>
              <Crown className="w-8 h-8 text-white" />
            </div>

            <div className="text-center mb-6">
              <span className="text-2xl font-medium text-muted-foreground line-through mr-2">
                $50
              </span>
              <span className="text-5xl font-bold">$20</span>
              <span className="text-muted-foreground text-lg">/month</span>
            </div>

            <div className="space-y-4">
              {proFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            {hasActiveSubscription ? (
              <div className="mt-8 flex items-center justify-center gap-2 rounded-lg border border-emerald-300 bg-emerald-50 py-3 text-sm font-semibold text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-300">
                <ShieldCheck className="size-5" />
                Active PRO Subscription
              </div>
            ) : !isAuthenticated ? (
              <Button
                className="w-full mt-8 h-12 text-base font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"
                asChild
              >
                <Link href="/signin">
                  <LogIn className="w-5 h-5 mr-2" />
                  Sign in to Subscribe
                </Link>
              </Button>
            ) : (
              <Button
                className="w-full mt-8 h-12 text-base font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"
                onClick={handleSubscribe}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <CreditCard className="w-5 h-5 mr-2" />
                    Subscribe Now
                  </>
                )}
              </Button>
            )}
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Secure payment processing &middot; Cancel anytime &middot; No hidden fees
        </p>
      </DialogContent>
    </Dialog>
  );
}
