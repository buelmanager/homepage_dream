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

const SITE_URL = "https://homepagedream.vercel.app";
const SITE_NAME = "HomeDream";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "무료 홈페이지 템플릿 | 럭셔리 아름다운 스타일리쉬 디자인 — HomeDream",
    template: "%s — HomeDream",
  },
  description:
    "무료 럭셔리 홈페이지 템플릿을 찾아보세요. 아름다운 스타일리쉬 HTML/CSS 디자인으로 빠르게 웹사이트를 구축하세요. Browse and preview curated homepage templates.",
  keywords: [
    "무료 홈페이지 템플릿",
    "럭셔리 템플릿",
    "아름다운 디자인",
    "스타일리쉬 홈페이지",
    "homepage templates",
    "landing page templates",
    "web design",
    "HTML templates",
    "CSS components",
    "website templates free",
    "무료 웹사이트",
    "홈페이지 디자인",
  ],
  verification: {
    google: "w84DO6d7tAFQJU979T7FfEkq11ICoZ4E_Kn0_cIbnkM",
    other: {
      "naver-site-verification": "627c632cfe6e249d8a8c1065208434b161eba247",
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "무료 홈페이지 템플릿 | 럭셔리 아름다운 스타일리쉬 — HomeDream",
    description:
      "무료 럭셔리 홈페이지 템플릿을 찾아보세요. 아름다운 스타일리쉬 디자인으로 웹사이트를 구축하세요.",
    type: "website",
    siteName: SITE_NAME,
    locale: "ko_KR",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "무료 홈페이지 템플릿 | 럭셔리 아름다운 스타일리쉬 — HomeDream",
    description:
      "무료 럭셔리 홈페이지 템플릿을 찾아보세요. 아름다운 스타일리쉬 디자인으로 웹사이트를 구축하세요.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
        description:
          "무료 럭셔리 홈페이지 템플릿을 찾아보세요. 아름다운 스타일리쉬 HTML/CSS 디자인.",
        inLanguage: "ko",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/templates?style={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
    ],
  };

  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
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
