export type TemplateWithSections = {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  price: number;
  category: string;
  tags: string[];
  language: string;
  style: string[];
  layout: string | null;
  sourceUrl: string | null;
  thumbnailUrl: string | null;
  htmlPath: string | null;
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  viewCount: number;
  likeCount: number;
  saveCount: number;
  createdAt: Date;
  updatedAt: Date;
  sections: SectionItem[];
};

export type SectionItem = {
  id: string;
  slug: string;
  title: string;
  category: string;
  templateId: string | null;
  tags: string[];
  language: string;
  style: string[];
  layout: string | null;
  thumbnailUrl: string | null;
  htmlContent: string | null;
  price: number;
  viewCount: number;
  likeCount: number;
  saveCount: number;
  order: number;
  createdAt: Date;
  updatedAt: Date;
};

export type CategoryInfo = {
  name: string;
  label: string;
  description: string;
  count: number;
};

export type LeaderboardEntry = {
  rank: number;
  slug: string;
  title: string;
  category: string;
  thumbnailUrl: string | null;
  viewCount: number;
  likeCount: number;
  saveCount: number;
};

export type DeviceType = "desktop" | "tablet" | "mobile";

export const DEVICE_WIDTHS: Record<DeviceType, number> = {
  desktop: 1280,
  tablet: 768,
  mobile: 375,
};

export const CATEGORIES = [
  { name: "all", label: "All", description: "All components" },
  { name: "pages", label: "Pages", description: "Full landing page templates" },
  { name: "hero", label: "Hero", description: "Hero sections" },
  { name: "feature", label: "Feature", description: "Feature showcase sections" },
  { name: "footer", label: "Footer", description: "Footer sections" },
  { name: "pricing", label: "Pricing", description: "Pricing table sections" },
  { name: "testimonial", label: "Testimonial", description: "Customer testimonials" },
  { name: "contact", label: "Contact", description: "Contact form sections" },
  { name: "cta", label: "CTA", description: "Call-to-action sections" },
  { name: "stats", label: "Stats", description: "Statistics display sections" },
  { name: "header", label: "Header", description: "Navigation headers" },
  { name: "faq", label: "FAQ", description: "FAQ sections" },
  { name: "logo-cloud", label: "Logo Cloud", description: "Logo cloud sections" },
  { name: "how-it-works", label: "How It Works", description: "Process sections" },
] as const;

export const STYLES = [
  "dark-theme",
  "light-theme",
  "modern",
  "minimal",
  "gradient",
  "elegant",
  "serif",
  "sans-serif",
  "bold",
  "warm",
  "glow",
] as const;

export const LAYOUTS = [
  "centered",
  "two-column",
  "three-column",
  "four-column",
  "split-layout",
  "card-grid",
  "grid",
  "bento",
  "full-width",
] as const;
