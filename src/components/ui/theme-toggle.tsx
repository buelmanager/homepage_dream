"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="size-8 p-0">
        <Sun className="size-3.5" />
      </Button>
    );
  }

  const next = theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
  const Icon = theme === "dark" ? Moon : theme === "light" ? Sun : Monitor;

  return (
    <Button
      variant="ghost"
      size="sm"
      className="size-8 p-0 text-muted-foreground hover:text-foreground"
      onClick={() => setTheme(next)}
      title={`Theme: ${theme}`}
    >
      <Icon className="size-3.5" />
    </Button>
  );
}
