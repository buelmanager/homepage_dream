import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "요금제 | 무료 & PRO 홈페이지 템플릿",
  description:
    "HomeDream 무료 플랜과 PRO 구독($20/월)을 비교하세요. 럭셔리 아름다운 홈페이지 템플릿을 무제한으로 다운로드하세요.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "요금제 — HomeDream",
    description:
      "무료 플랜과 PRO 구독을 비교하세요. 럭셔리 홈페이지 템플릿 무제한 다운로드.",
    url: "/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
