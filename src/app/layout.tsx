import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SessionProvider } from "@/components/providers/session-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HomeDream — Discover Beautiful Homepage Templates",
  description:
    "Browse and preview curated homepage templates. Find the perfect design for your next project with real HTML/CSS components.",
  keywords: [
    "homepage templates",
    "landing page",
    "web design",
    "HTML templates",
    "CSS components",
  ],
  verification: {
    google: "w84DO6d7tAFQJU979T7FfEkq11ICoZ4E_Kn0_cIbnkM",
  },
  openGraph: {
    title: "HomeDream — Discover Beautiful Homepage Templates",
    description:
      "Browse and preview curated homepage templates. Find the perfect design for your next project.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <SessionProvider>
            <TooltipProvider>{children}</TooltipProvider>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
