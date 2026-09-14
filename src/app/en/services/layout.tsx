import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Architecture & Permit Project Services | KENET",
  description:
    "Architecture, permit projects, interior design, 3D visualization, and design-build services from KENET in Bandırma.",
  alternates: {
    canonical: "/en/services",
    languages: { "tr-TR": "/hizmetler", "en-US": "/en/services" },
  },
};

export default function EnglishServicesLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
