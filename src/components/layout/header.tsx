"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import {
  Search,
  Menu,
  Command,
  Trophy,
  User,
  LogOut,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/leaderboard", label: "TOP", icon: Trophy },
    { href: "/blog", label: "Blog", icon: BookOpen },
  ];

  const user = session?.user;
  const userInitials = user
    ? (user.name ?? user.email ?? "U")
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "U";

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
            <ThemeToggle />
            {user ? (
              <>
                <Link href="/profile">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "gap-2 text-muted-foreground hover:text-foreground",
                      pathname === "/profile" && "text-foreground"
                    )}
                  >
                    <Avatar className="size-6">
                      <AvatarImage src={user.image ?? undefined} />
                      <AvatarFallback className="text-[10px]">
                        {userInitials}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm">My</span>
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => signOut()}
                >
                  <LogOut className="size-4" />
                </Button>
              </>
            ) : (
              <Link href="/signin">
                <Button variant="ghost" size="sm" className="gap-1.5">
                  <User className="size-3.5" />
                  Sign In
                </Button>
              </Link>
            )}
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
                {user ? (
                  <>
                    <Link
                      href="/profile"
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                        pathname === "/profile" && "bg-muted text-foreground font-medium"
                      )}
                    >
                      <Avatar className="size-4">
                        <AvatarImage src={user.image ?? undefined} />
                        <AvatarFallback className="text-[8px]">
                          {userInitials}
                        </AvatarFallback>
                      </Avatar>
                      My Page
                    </Link>
                    <button
                      onClick={() => {
                        setMobileOpen(false);
                        signOut();
                      }}
                      className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      <LogOut className="size-4" />
                      Log Out
                    </button>
                  </>
                ) : (
                  <Link
                    href="/signin"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <User className="size-4" />
                    Sign In
                  </Link>
                )}
              </div>

            </SheetContent>
          </Sheet>
        </div>
      </div>

    </header>
  );
}
