import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Mimarlık ve Ruhsat Projesi Hizmetleri | Kenet Mimarlık",
  description:
    "Bandırma’da ruhsat projesi, mimari tasarım, iç mimarlık, 3B görselleştirme ve tasarım-uygulama hizmetleri.",
  alternates: {
    canonical: "/hizmetler",
    languages: { "tr-TR": "/hizmetler", "en-US": "/en/services" },
  },
};

export default function ServicesLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
