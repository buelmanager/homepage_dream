"use client";

import { useState } from "react";
import { Check, Crown, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { SubscriptionModal } from "@/components/subscription/subscription-modal";

const freePlan = {
  name: "FREE",
  price: 0,
  description: "Get started with free templates",
  features: [
    "Access to all FREE tier templates",
    "No subscription required",
    "Community support",
  ],
  icon: Sparkles,
  color: "from-slate-500 to-slate-600",
};

const proPlan = {
  name: "PRO",
  originalPrice: 50,
  price: 10,
  description: "Unlimited access to everything",
  features: [
    "Unlimited PRO template downloads",
    "Priority support",
    "Early access to new templates",
    "Commercial license included",
  ],
  icon: Crown,
  color: "from-amber-500 to-amber-600",
};

export default function PricingPage() {
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Start free, upgrade when you need unlimited access to PRO templates.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:max-w-4xl md:mx-auto">
            {/* FREE Plan */}
            <div className="relative rounded-2xl border-2 border-border p-8 transition-all hover:shadow-2xl hover:border-foreground/50">
              <div className={cn("w-16 h-16 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6", freePlan.color)}>
                <freePlan.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold">{freePlan.name}</h3>
              <p className="mt-2 text-muted-foreground">{freePlan.description}</p>

              <div className="mt-6 mb-8">
                <span className="text-5xl font-bold">$0</span>
                <span className="text-muted-foreground text-lg">/forever</span>
              </div>

              <ul className="space-y-4 mb-8">
                {freePlan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                className="w-full h-12 text-base font-semibold"
                asChild
              >
                <a href="/templates">
                  Browse Free Templates
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* PRO Plan */}
            <div className="relative rounded-2xl border-2 border-amber-500 p-8 transition-all hover:shadow-2xl shadow-xl scale-105">
              <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-1">
                Best Value
              </Badge>

              <div className={cn("w-16 h-16 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6", proPlan.color)}>
                <proPlan.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold">{proPlan.name}</h3>
              <p className="mt-2 text-muted-foreground">{proPlan.description}</p>

              <div className="mt-6 mb-8">
                <span className="text-2xl font-medium text-muted-foreground line-through mr-2">
                  ${proPlan.originalPrice}
                </span>
                <span className="text-5xl font-bold">${proPlan.price}</span>
                <span className="text-muted-foreground text-lg">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                {proPlan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full h-12 text-base font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"
                onClick={() => setShowSubscriptionModal(true)}
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 text-left">
              <div className="rounded-lg border p-6">
                <h3 className="font-semibold">Can I cancel anytime?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Yes! You can cancel your subscription at any time. Your access will continue until the end of your billing period.
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="font-semibold">What payment methods do you accept?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We accept all major credit cards, debit cards, and PayPal through our secure payment processor.
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="font-semibold">Are PRO downloads limited?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  No. PRO subscribers have unlimited downloads of all PRO templates for the duration of their subscription.
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="font-semibold">What&apos;s included in the free plan?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Free users can access and download all FREE tier templates without any subscription. PRO templates require an active subscription.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground">
              Secure payment processing &middot; Cancel anytime &middot; No hidden fees
            </p>
          </div>
        </div>
      </div>

      <SubscriptionModal
        isOpen={showSubscriptionModal}
        onClose={() => setShowSubscriptionModal(false)}
      />
    </>
  );
}
