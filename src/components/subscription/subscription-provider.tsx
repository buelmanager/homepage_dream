"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface SubscriptionContextValue {
  hasActiveSubscription: boolean;
  isLoading: boolean;
}

const SubscriptionContext = createContext<SubscriptionContextValue>({
  hasActiveSubscription: false,
  isLoading: true,
});

export function useSubscription() {
  return useContext(SubscriptionContext);
}

export function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const [hasActiveSubscription, setHasActiveSubscription] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
      });

    return () => ac.abort();
  }, []);

  return (
    <SubscriptionContext.Provider value={{ hasActiveSubscription, isLoading }}>
      {children}
    </SubscriptionContext.Provider>
  );
}
