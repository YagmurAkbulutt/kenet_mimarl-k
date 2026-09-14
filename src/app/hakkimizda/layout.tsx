import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Hakkımızda | Kenet Mimarlık",
  description:
    "Kenet Mimarlık’ın Bandırma’da mimari tasarım, ruhsat projesi, iç mimarlık ve uygulamaya yaklaşımını keşfedin.",
  alternates: {
    canonical: "/hakkimizda",
    languages: { "tr-TR": "/hakkimizda", "en-US": "/en/about" },
  },
};

export default function AboutLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
