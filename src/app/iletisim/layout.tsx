import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "İletişim | Kenet Mimarlık Bandırma",
  description:
    "Kenet Mimarlık’a ulaşın. Bandırma/Balıkesir ofis adresi, telefon ve e-posta bilgileri.",
  alternates: {
    canonical: "/iletisim",
    languages: { "tr-TR": "/iletisim", "en-US": "/en/contact" },
  },
};

export default function ContactLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
