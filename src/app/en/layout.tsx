import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: "KENET | Architecture & Interior Design Studio",
    template: "%s | KENET",
  },
  description: "A contemporary architecture & interior design practice crafting timeless spaces.",
  openGraph: {
    title: "KENET | Architecture & Interior Design Studio",
    description: "A contemporary architecture & interior design practice crafting timeless spaces.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "KENET | Architecture & Interior Design Studio",
    description: "A contemporary architecture & interior design practice crafting timeless spaces.",
  },
};

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
