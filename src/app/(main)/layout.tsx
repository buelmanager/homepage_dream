import { Suspense } from "react";
import { HeaderWrapper } from "@/components/layout/header-wrapper";
import { Footer } from "@/components/layout/footer";
import { SubscriptionProvider } from "@/components/subscription/subscription-provider";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SubscriptionProvider>
      <div className="flex min-h-screen flex-col">
        <Suspense>
          <HeaderWrapper />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </SubscriptionProvider>
  );
}
