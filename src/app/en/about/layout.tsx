import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About | KENET Architecture & Interior Design",
  description:
    "Meet KENET, an architecture and interior design studio in Bandırma creating thoughtful spaces from permit project to execution.",
  alternates: {
    canonical: "/en/about",
    languages: { "tr-TR": "/hakkimizda", "en-US": "/en/about" },
  },
};

export default function EnglishAboutLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
