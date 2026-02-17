import Link from "next/link";
import { Separator } from "@/components/ui/separator";

import { VERSION } from "@/config/version";

const footerSections = [
  {
    title: "Product",
    links: [
      { label: "Templates", href: "/templates" },
      { label: "Leaderboard", href: "/leaderboard" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
{
    title: "Legal",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "License", href: "/license" },
      { label: "Refund Policy", href: "/refund" },
      { label: "DMCA", href: "/dmca" },
      { label: "Cookies", href: "/cookies" },
      { label: "Acceptable Use", href: "/acceptable-use" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4 lg:py-16">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <div className="flex size-7 items-center justify-center rounded-lg bg-foreground">
                <span className="text-xs font-bold text-background">HD</span>
              </div>
              <span className="text-[15px] font-semibold tracking-tight">
                HomeDream
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-muted-foreground">
              Curated homepage templates and components for modern web projects.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-[13px] font-semibold tracking-tight">
                {section.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="opacity-40" />

        <div className="flex flex-col items-center justify-between gap-3 py-6 md:flex-row">
          <p className="text-xs text-muted-foreground/60">
            &copy; 2026 HomeDream. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-muted-foreground/40">
              Built with Next.js, Tailwind CSS, and shadcn/ui
            </p>
            <span className="text-xs text-muted-foreground/30">v{VERSION}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
