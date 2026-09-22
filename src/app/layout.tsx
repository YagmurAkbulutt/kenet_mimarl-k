import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StructuredData } from "@/components/StructuredData";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from "@/context/LanguageContext";
import "../styles.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kenetmimarlik.com"),
  title: {
    default: "KENET Mimarlık | Mimari Tasarım ve İç Mimarlık",
    template: "%s",
  },
  description:
    "Kenet Mimarlık; Bandırma ve çevresinde mimari tasarım, ruhsat projesi, iç mimarlık ve uygulama hizmetleri sunan bir tasarım stüdyosudur.",
  authors: [{ name: "Kenet Mimarlık" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "KENET Mimarlık | Mimari Tasarım ve İç Mimarlık",
    description:
      "Kenet Mimarlık; Bandırma ve çevresinde mimari tasarım, ruhsat projesi, iç mimarlık ve uygulama hizmetleri sunan bir tasarım stüdyosudur.",
    url: "https://www.kenetmimarlik.com",
    siteName: "Kenet Mimarlık",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KENET Mimarlık | Mimari Tasarım ve İç Mimarlık",
    description:
      "Kenet Mimarlık; Bandırma ve çevresinde mimari tasarım, ruhsat projesi, iç mimarlık ve uygulama hizmetleri sunan bir tasarım stüdyosudur.",
  },
  alternates: {
    canonical: "/",
    languages: { "tr-TR": "/", "en-US": "/en" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Manrope:wght@300;400;500;600&display=swap"
        />
      </head>
      <body suppressHydrationWarning>
        <LanguageProvider>
          <a
            href="#icerik"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            İçeriğe geç
          </a>
          <SiteHeader />
          <main id="icerik" className="min-h-dvh">
            {children}
          </main>
          <SiteFooter />
          <WhatsAppButton />
          <Toaster />
          <Analytics />
          <SpeedInsights />
          <StructuredData />
        </LanguageProvider>
      </body>
    </html>
  );
}
