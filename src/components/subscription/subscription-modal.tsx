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
    credits: 3,
    description: "Perfect for starters",
    features: ["3 template downloads/month", "Basic support", "Standard quality"],
    icon: Star,
    color: "from-slate-500 to-slate-600",
  },
  {
    name: "STANDARD",
    price: 20,
    credits: 7,
    description: "Best for professionals",
    features: ["7 template downloads/month", "Priority support", "High quality", "Early access"],
    icon: Zap,
    color: "from-blue-500 to-blue-600",
    popular: true,
  },
  {
    name: "PREMIUM",
    price: 30,
    credits: 15,
    description: "For power users",
    features: ["15 template downloads/month", "24/7 support", "Premium quality", "Early access", "Custom requests"],
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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto" aria-describedby="subscription-description">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Choose Your Plan
          </DialogTitle>
        </DialogHeader>
        <div id="subscription-description" className="text-center text-muted-foreground -mt-2">
          Subscribe to download templates. All plans include instant access.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isSelected = selectedPlan === plan.name;

            return (
              <div
                key={plan.name}
                className={cn(
                  "relative rounded-xl border-2 p-6 cursor-pointer transition-all",
                  isSelected
                    ? "border-foreground shadow-lg"
                    : "border-border hover:border-foreground/50",
                  plan.popular && "ring-2 ring-blue-500/20"
                )}
                onClick={() => setSelectedPlan(plan.name)}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                    Most Popular
                  </Badge>
                )}

                <div className={cn("w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center mb-4", plan.color)}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-bold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>

                <div className="mt-4 mb-6">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>

                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={cn(
                    "w-full mt-6",
                    isSelected && "bg-foreground text-background"
                  )}
                  variant={isSelected ? "default" : "outline"}
                  onClick={() => handleSubscribe(plan.name)}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <CreditCard className="w-4 h-4 mr-2" />
                      Subscribe
                    </>
                  )}
                </Button>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Secure payment processing. Cancel anytime.
        </p>
      </DialogContent>
    </Dialog>
  );
}
