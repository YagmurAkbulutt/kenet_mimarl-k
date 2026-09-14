import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact KENET Architecture | Bandırma",
  description:
    "Contact KENET Architecture & Interior Design Studio in Bandırma, Balıkesir for project and consultation requests.",
  alternates: {
    canonical: "/en/contact",
    languages: { "tr-TR": "/iletisim", "en-US": "/en/contact" },
  },
};

export default function EnglishContactLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
