"use client";

import { useState } from "react";
import { Check, Crown, Star, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { SubscriptionModal } from "@/components/subscription/subscription-modal";

const plans = [
  {
    name: "BASIC",
    price: 10,
    description: "Perfect for starters",
    features: [
      "Unlimited Pro template downloads",
      "Basic support",
      "Standard quality",
      "Access to all templates",
    ],
    icon: Star,
    color: "from-slate-500 to-slate-600",
  },
  {
    name: "STANDARD",
    price: 20,
    description: "Best for professionals",
    features: [
      "Unlimited Pro template downloads",
      "Priority support",
      "High quality",
      "Early access to new templates",
      "Custom requests",
    ],
    icon: Zap,
    color: "from-blue-500 to-blue-600",
    popular: true,
  },
  {
    name: "PREMIUM",
    price: 30,
    description: "For power users",
    features: [
      "Unlimited Pro template downloads",
      "24/7 priority support",
      "Premium quality",
      "Early access to new templates",
      "Custom requests",
      "Dedicated account manager",
    ],
    icon: Crown,
    color: "from-amber-500 to-amber-600",
  },
];

export default function PricingPage() {
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose the perfect plan for your needs. All plans include instant access to our template library.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {plans.map((plan) => {
              const Icon = plan.icon;
              
              return (
                <div
                  key={plan.name}
                  className={cn(
                    "relative rounded-2xl border-2 p-8 transition-all hover:shadow-2xl",
                    plan.popular
                      ? "border-blue-500 shadow-xl scale-105"
                      : "border-border hover:border-foreground/50"
                  )}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  )}

                  <div className={cn("w-16 h-16 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6", plan.color)}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="mt-2 text-muted-foreground">{plan.description}</p>

                  <div className="mt-6 mb-8">
                    <span className="text-5xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground text-lg">/month</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={cn(
                      "w-full h-12 text-base font-semibold",
                      plan.popular && "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                    )}
                    onClick={() => setShowSubscriptionModal(true)}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              );
            })}
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
                <h3 className="font-semibold">Are Pro downloads limited per month?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  No. Active subscribers can download all Pro templates without a monthly cap.
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="font-semibold">Can I upgrade or downgrade my plan?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Yes! You can change your plan at any time. Changes will be prorated based on your billing cycle.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground">
              🔒 Secure payment processing • Cancel anytime • No hidden fees
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
