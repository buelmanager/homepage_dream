"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, Zap, Crown, Star, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const plans = [
  {
    name: "BASIC",
    price: 10,
    description: "Perfect for starters",
    features: ["Unlimited Pro template downloads", "Basic support", "Standard quality"],
    icon: Star,
    color: "from-slate-500 to-slate-600",
  },
  {
    name: "STANDARD",
    price: 20,
    description: "Best for professionals",
    features: ["Unlimited Pro template downloads", "Priority support", "High quality", "Early access"],
    icon: Zap,
    color: "from-blue-500 to-blue-600",
    popular: true,
  },
  {
    name: "PREMIUM",
    price: 30,
    description: "For power users",
    features: ["Unlimited Pro template downloads", "24/7 support", "Premium quality", "Early access", "Custom requests"],
    icon: Crown,
    color: "from-amber-500 to-amber-600",
  },
];

export function SubscriptionModal({ isOpen, onClose }: SubscriptionModalProps) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (planName: string) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planName }),
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
      <DialogContent className="sm:max-w-5xl max-h-[90vh] overflow-y-auto p-8" aria-describedby="subscription-description">
        <DialogHeader>
          <DialogTitle className="text-center text-3xl font-bold">
            Choose Your Plan
          </DialogTitle>
        </DialogHeader>
        <div id="subscription-description" className="text-center text-muted-foreground text-base mt-2">
          Subscribe to unlock Pro template downloads. Access starts immediately after checkout.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isSelected = selectedPlan === plan.name;

            return (
              <div
                key={plan.name}
                className={cn(
                  "relative rounded-xl border-2 p-8 cursor-pointer transition-all hover:shadow-xl",
                  isSelected
                    ? "border-foreground shadow-2xl scale-105"
                    : "border-border hover:border-foreground/50",
                  plan.popular && "ring-2 ring-blue-500/30"
                )}
                onClick={() => setSelectedPlan(plan.name)}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                )}

                <div className={cn("w-16 h-16 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6", plan.color)}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>

                <div className="mt-6 mb-8">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground text-lg">/month</span>
                </div>

                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={cn(
                    "w-full mt-8 h-12 text-base font-semibold",
                    isSelected && "bg-foreground text-background"
                  )}
                  variant={isSelected ? "default" : "outline"}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSubscribe(plan.name);
                  }}
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
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          🔒 Secure payment processing • Cancel anytime • No hidden fees
        </p>
      </DialogContent>
    </Dialog>
  );
}
