"use client";

import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Tablet,
  Smartphone,
  RefreshCw,
  ExternalLink,
  Maximize2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { DeviceType } from "@/types";
import { DEVICE_WIDTHS } from "@/types";

interface DevicePreviewProps {
  htmlPath: string;
  title?: string;
  sourceUrl?: string | null;
}

const DEVICE_CONFIG: Record<
  DeviceType,
  { icon: typeof Monitor; label: string; shortLabel: string }
> = {
  desktop: { icon: Monitor, label: "Desktop", shortLabel: "Desktop" },
  tablet: { icon: Tablet, label: "Tablet", shortLabel: "Tablet" },
  mobile: { icon: Smartphone, label: "Mobile", shortLabel: "Mobile" },
};

export function DevicePreview({
  htmlPath,
  title,
  sourceUrl,
}: DevicePreviewProps) {
  const [currentDevice, setCurrentDevice] = useState<DeviceType>("desktop");
  const [isLoading, setIsLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleRefresh = useCallback(() => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  }, []);

  const handleIframeLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleFullPreview = useCallback(() => {
    window.open(htmlPath, "_blank", "noopener,noreferrer");
  }, [htmlPath]);

  const handleVisitOriginal = useCallback(() => {
    if (sourceUrl) {
      window.open(sourceUrl, "_blank", "noopener,noreferrer");
    }
  }, [sourceUrl]);

  const deviceWidth = DEVICE_WIDTHS[currentDevice];

  return (
    <div className="flex flex-col gap-0">
      <div className="flex items-center justify-between rounded-t-xl border border-b-0 border-border/60 bg-muted/30 px-4 py-2.5 backdrop-blur-sm">
        <div className="flex items-center gap-1 rounded-lg bg-background/80 p-1 shadow-inner">
          {(Object.keys(DEVICE_CONFIG) as DeviceType[]).map((device) => {
            const config = DEVICE_CONFIG[device];
            const Icon = config.icon;
            const isActive = currentDevice === device;
            return (
              <button
                key={device}
                onClick={() => {
                  setCurrentDevice(device);
                  setIsLoading(true);
                }}
                className={cn(
                  "relative flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-200",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground/70"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="device-tab-bg"
                    className="absolute inset-0 rounded-md bg-background shadow-sm"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <Icon className="size-3.5" />
                  <span className="hidden sm:inline">
                    {config.shortLabel}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <span className="font-mono text-[11px] tracking-wide text-muted-foreground">
            {deviceWidth}px
          </span>
        </div>

        <TooltipProvider>
          <div className="flex items-center gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-xs"
                  onClick={handleRefresh}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <RefreshCw
                    className={cn("size-3.5", isLoading && "animate-spin")}
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Refresh preview</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-xs"
                  onClick={handleFullPreview}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Maximize2 className="size-3.5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Full preview</TooltipContent>
            </Tooltip>

            {sourceUrl && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon-xs"
                    onClick={handleVisitOriginal}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <ExternalLink className="size-3.5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Visit original</TooltipContent>
              </Tooltip>
            )}
          </div>
        </TooltipProvider>
      </div>

      <div className="relative overflow-hidden rounded-b-xl border border-border/60 bg-[#f8f8f8] dark:bg-zinc-900/50">
        <div className="flex justify-center py-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDevice}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className={cn(
                "relative w-full transition-all duration-300",
                currentDevice === "tablet" && "max-w-[768px]",
                currentDevice === "mobile" && "max-w-[375px]"
              )}
            >
              {isLoading && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-muted/40 backdrop-blur-[2px]">
                  <div className="flex flex-col items-center gap-3">
                    <div className="size-6 animate-spin rounded-full border-2 border-muted-foreground/20 border-t-foreground/60" />
                    <span className="text-xs text-muted-foreground">
                      Loading preview...
                    </span>
                  </div>
                </div>
              )}

              <iframe
                ref={iframeRef}
                key={iframeKey}
                src={htmlPath}
                sandbox="allow-scripts allow-same-origin"
                className="h-[640px] w-full border-0 bg-white"
                loading="lazy"
                title={title ?? "Template preview"}
                onLoad={handleIframeLoad}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
