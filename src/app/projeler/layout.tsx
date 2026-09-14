import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Mimari ve İç Mimari Projeler | Kenet Mimarlık",
  description:
    "Kenet Mimarlık’ın Bandırma ve çevresindeki konut, iç mimari, showroom ve ofis projelerinden seçilmiş çalışmalar.",
  alternates: {
    canonical: "/projeler",
    languages: { "tr-TR": "/projeler", "en-US": "/en/projects" },
  },
};

export default function ProjectsLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
