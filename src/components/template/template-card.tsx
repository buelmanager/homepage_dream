"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { TemplateWithSections } from "@/types";
import { useState } from "react";

interface TemplateCardProps {
  template: TemplateWithSections;
}

export function TemplateCard({ template }: TemplateCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const thumbnailSrc = template.thumbnailUrl || null;
  const [imgError, setImgError] = useState(false);

  const categoryLabel =
    template.category.charAt(0).toUpperCase() + template.category.slice(1);

  return (
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

          <motion.div
            initial={false}
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center gap-3 bg-black/60 backdrop-blur-[2px]"
          >
            <Link href={`/templates/${template.slug}`}>
              <Button
                size="sm"
                className="bg-white text-black hover:bg-white/90"
              >
                View Details
                <ArrowRight className="size-3.5" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="p-3.5">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0 flex-1">
              <Link
                href={`/templates/${template.slug}`}
                className="block truncate text-sm font-medium tracking-tight transition-colors hover:text-foreground/80"
              >
                {template.title}
              </Link>
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
            {template.tags.slice(0, 2).map((tag) => (
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
  );
}
