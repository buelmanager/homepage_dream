"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Lock, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SubscriptionModal } from "@/components/subscription/subscription-modal";
import { useSubscription } from "@/components/subscription/subscription-provider";
import type { TemplateWithSections } from "@/types";
import { useState } from "react";

interface TemplateCardProps {
  template: TemplateWithSections;
  hasActiveSubscription?: boolean;
}

export function TemplateCard({ template, hasActiveSubscription: propSubscription }: TemplateCardProps) {
  const { hasActiveSubscription: ctxSubscription } = useSubscription();
  const hasActiveSubscription = propSubscription ?? ctxSubscription;
  const [isHovered, setIsHovered] = useState(false);
  const [showCta, setShowCta] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

  const thumbnailSrc = template.thumbnailUrl || null;
  const [imgError, setImgError] = useState(false);

  const categoryLabel =
    template.category.charAt(0).toUpperCase() + template.category.slice(1);

  const isLocked = template.tier === "PRO" && !hasActiveSubscription;

  const handleCardClick = (e: React.MouseEvent) => {
    if (isLocked) {
      e.preventDefault();
      e.stopPropagation();
      setShowCta(true);
    }
  };

  return (
    <>
      <div
        className="group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-300 hover:border-border hover:shadow-lg hover:shadow-black/5">
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            {thumbnailSrc && !imgError ? (
              <Image
                src={thumbnailSrc}
                alt={template.title}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-2 text-muted-foreground">
                <Layers className="size-8 opacity-30" />
                <span className="text-xs opacity-40">{template.title}</span>
              </div>
            )}

            {isLocked && (
              <div className="absolute top-2 right-2 z-10 flex items-center gap-1 rounded-md bg-black/70 px-2 py-1 text-white backdrop-blur-sm">
                <Lock className="size-3" />
                <span className="text-[10px] font-medium">PRO</span>
              </div>
            )}

            <motion.div
              initial={false}
              animate={{
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center gap-3 bg-black/60 backdrop-blur-[2px]"
              onClick={handleCardClick}
            >
              {isLocked ? (
                <Button
                  size="sm"
                  className="bg-white text-black hover:bg-white/90"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowCta(true);
                  }}
                >
                  <Lock className="mr-1.5 size-3.5" />
                  PRO Template
                </Button>
              ) : (
                <Link href={`/templates/${template.slug}`}>
                  <Button
                    size="sm"
                    className="bg-white text-black hover:bg-white/90"
                  >
                    View Details
                    <ArrowRight className="size-3.5" />
                  </Button>
                </Link>
              )}
            </motion.div>
          </div>

          <div className="p-3.5">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0 flex-1">
                {isLocked ? (
                  <span
                    className="block truncate text-sm font-medium tracking-tight cursor-pointer transition-colors hover:text-foreground/80"
                    onClick={() => setShowCta(true)}
                  >
                    {template.title}
                  </span>
                ) : (
                  <Link
                    href={`/templates/${template.slug}`}
                    className="block truncate text-sm font-medium tracking-tight transition-colors hover:text-foreground/80"
                  >
                    {template.title}
                  </Link>
                )}
                {template.sourceUrl && (
                  <p className="mt-0.5 truncate text-xs text-muted-foreground/60">
                    {new URL(template.sourceUrl).hostname}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-2.5 flex items-center gap-1.5 overflow-hidden">
              <Badge variant="secondary" className="shrink-0 text-[10px]">
                {categoryLabel}
              </Badge>
              {template.tier === "PRO" && (
                <Badge variant="outline" className="shrink-0 text-[10px] border-amber-300 text-amber-600 dark:border-amber-700 dark:text-amber-400">
                  <Crown className="mr-0.5 size-2.5" />
                  PRO
                </Badge>
              )}
              {template.tags.slice(0, 1).map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="shrink-0 text-[10px] text-muted-foreground"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="mt-2.5 flex items-center gap-3 text-[11px] text-muted-foreground/60">
              <span className="flex items-center gap-1">
                <Layers className="size-3" />
                {template.sections.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Popup */}
      {showCta && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowCta(false)}
        >
          <div
            className="mx-4 w-full max-w-sm rounded-2xl border border-border bg-background p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-600">
                <Crown className="size-6 text-white" />
              </div>
            </div>
            <h3 className="text-center text-lg font-bold">
              PRO Subscription Required
            </h3>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              &ldquo;{template.title}&rdquo; is a PRO template. Subscribe to get unlimited access.
            </p>
            <div className="mt-6">
              <Button
                className="w-full gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"
                onClick={() => {
                  setShowCta(false);
                  setShowSubscriptionModal(true);
                }}
              >
                <Crown className="size-4" />
                Subscribe to PRO
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
