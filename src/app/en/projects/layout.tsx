import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Architecture & Interior Design Projects | KENET",
  description:
    "Selected residential, interior, showroom, and office projects by KENET in Bandırma and the Balıkesir region.",
  alternates: {
    canonical: "/en/projects",
    languages: { "tr-TR": "/projeler", "en-US": "/en/projects" },
  },
};

export default function EnglishProjectsLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
