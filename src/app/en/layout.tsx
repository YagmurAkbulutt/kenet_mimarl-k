import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: "KENET | Architecture & Interior Design Studio",
    template: "%s | KENET",
  },
  description:
    "KENET is an architecture and interior design studio in Bandırma, creating thoughtful spaces from concept through implementation.",
  openGraph: {
    title: "KENET | Architecture & Interior Design Studio",
    description:
      "KENET is an architecture and interior design studio in Bandırma, creating thoughtful spaces from concept through implementation.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "KENET | Architecture & Interior Design Studio",
    description:
      "KENET is an architecture and interior design studio in Bandırma, creating thoughtful spaces from concept through implementation.",
  },
};

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
