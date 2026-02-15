"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Bookmark, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PurchaseCardProps {
  price: number;
  itemType: "template" | "section";
  itemTitle: string;
}

export function PurchaseCard({
  price,
  itemType,
  itemTitle,
}: PurchaseCardProps) {
  const [isPurchased, setIsPurchased] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handlePurchase = () => {
    setIsPurchased(true);
  };

  return (
    <Card className="overflow-hidden border-border/50 shadow-md">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Sparkles className="size-4 text-amber-500" />
          Purchase
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-baseline gap-1.5">
          <span className="text-3xl font-bold tracking-tight">{price}</span>
          <span className="text-sm font-medium text-muted-foreground">
            credits
          </span>
        </div>

        {isPurchased ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center justify-center gap-2 rounded-lg bg-emerald-50 py-3 text-sm font-medium text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400"
          >
            <Check className="size-4" />
            Purchased
          </motion.div>
        ) : (
          <Button
            size="lg"
            className="w-full gap-2 font-semibold"
            onClick={handlePurchase}
          >
            <ShoppingCart className="size-4" />
            Buy {itemType === "template" ? "Template" : "Section"}
          </Button>
        )}

        <div className="flex gap-2">
          <Button
            variant={isFavorited ? "default" : "outline"}
            size="sm"
            className="flex-1 gap-1.5"
            onClick={() => setIsFavorited(!isFavorited)}
          >
            <Heart
              className={`size-3.5 ${isFavorited ? "fill-current" : ""}`}
            />
            {isFavorited ? "Favorited" : "Favorite"}
          </Button>
          <Button
            variant={isBookmarked ? "default" : "outline"}
            size="sm"
            className="flex-1 gap-1.5"
            onClick={() => setIsBookmarked(!isBookmarked)}
          >
            <Bookmark
              className={`size-3.5 ${isBookmarked ? "fill-current" : ""}`}
            />
            {isBookmarked ? "Saved" : "Save"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
