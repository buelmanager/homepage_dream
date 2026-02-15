"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import {
  Search,
  Menu,
  Command,
  Trophy,
  BookOpen,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { CATEGORIES } from "@/types";

type CategoryCount = {
  name: string;
  label: string;
  count: number;
};

interface HeaderProps {
  categoryCounts?: CategoryCount[];
}

export function Header({ categoryCounts = [] }: HeaderProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentCategory = searchParams.get("category") || "all";

  const categories = CATEGORIES.map((cat) => {
    const found = categoryCounts.find((c) => c.name === cat.name);
    return { ...cat, count: found?.count ?? 0 };
  });

  const totalCount = categoryCounts.reduce((sum, c) => sum + c.count, 0);
  categories[0] = { ...categories[0], count: totalCount };

  const navLinks = [
    { href: "/leaderboard", label: "TOP", icon: Trophy },
    { href: "/blog", label: "Blog", icon: BookOpen },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="border-b border-border/40 bg-background/80 backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-4 px-4 sm:px-6">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 transition-opacity hover:opacity-80"
          >
            <div className="flex size-7 items-center justify-center rounded-lg bg-foreground">
              <span className="text-xs font-bold text-background">HD</span>
            </div>
            <span className="text-[15px] font-semibold tracking-tight">
              HomeDream
            </span>
          </Link>

          <div className="hidden flex-1 justify-center md:flex">
            <div className="relative w-full max-w-md">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search templates..."
                className="h-8 w-full rounded-lg border border-border/60 bg-muted/40 pl-9 pr-16 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground/20 focus:bg-background"
              />
              <kbd className="pointer-events-none absolute right-2.5 top-1/2 flex h-5 -translate-y-1/2 select-none items-center gap-0.5 rounded border border-border/60 bg-background px-1.5 font-mono text-[10px] text-muted-foreground">
                <Command className="size-2.5" />K
              </kbd>
            </div>
          </div>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "gap-1.5 text-muted-foreground hover:text-foreground",
                    pathname === link.href && "text-foreground"
                  )}
                >
                  <link.icon className="size-3.5" />
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                className="md:hidden"
              >
                <Menu className="size-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-0">
              <SheetHeader className="border-b px-4 py-3">
                <div className="flex items-center justify-between">
                  <SheetTitle className="text-sm font-semibold">
                    Menu
                  </SheetTitle>
                </div>
              </SheetHeader>

              <div className="border-b p-4">
                <div className="relative">
                  <Search className="pointer-events-none absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search templates..."
                    className="h-9 w-full rounded-lg border border-border/60 bg-muted/40 pl-9 pr-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-foreground/20"
                  />
                </div>
              </div>

              <div className="border-b p-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                      pathname === link.href &&
                        "bg-muted text-foreground font-medium"
                    )}
                  >
                    <link.icon className="size-4" />
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="p-2">
                <p className="px-3 py-2 text-xs font-medium uppercase tracking-wider text-muted-foreground/60">
                  Categories
                </p>
                {categories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={
                      cat.name === "all"
                        ? "/templates"
                        : `/templates?category=${cat.name}`
                    }
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                      currentCategory === cat.name &&
                        "bg-muted text-foreground font-medium"
                    )}
                  >
                    {cat.label}
                    {cat.count > 0 && (
                      <span className="text-xs text-muted-foreground/60">
                        {cat.count}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="border-b border-border/30 bg-background/60 backdrop-blur-lg">
        <div className="scrollbar-none mx-auto flex max-w-7xl items-center gap-0.5 overflow-x-auto px-4 sm:px-6">
          {categories.map((cat) => {
            const isActive = (() => {
              if (cat.name === "all") {
                return (
                  pathname === "/templates" && !searchParams.has("category")
                );
              }
              return currentCategory === cat.name;
            })();

            const href =
              cat.name === "all"
                ? "/templates"
                : `/templates?category=${cat.name}`;

            return (
              <Link
                key={cat.name}
                href={href}
                className={cn(
                  "relative flex shrink-0 items-center gap-1.5 border-b-2 px-3 py-2.5 text-[13px] transition-colors",
                  isActive
                    ? "border-foreground text-foreground font-medium"
                    : "border-transparent text-muted-foreground hover:text-foreground/70"
                )}
              >
                {cat.label}
                {cat.count > 0 && (
                  <Badge
                    variant="secondary"
                    className={cn(
                      "h-4 min-w-4 px-1 text-[10px]",
                      isActive
                        ? "bg-foreground text-background"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {cat.count}
                  </Badge>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
