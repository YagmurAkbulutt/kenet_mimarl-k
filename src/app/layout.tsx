import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from "@/context/LanguageContext";
import "../styles.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kenetmimarlik.com"),
  title: {
    default: "KENET | Architecture & Interior Design Studio",
    template: "%s",
  },
  description: "Bütüncül mimari tasarım, iç mekan kurgusu ve uygulama pratiği.",
  authors: [{ name: "Kenet Mimarlık" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "KENET | Architecture & Interior Design Studio",
    description: "Bütüncül mimari tasarım, iç mekan kurgusu ve uygulama pratiği.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
        </LanguageProvider>
      </body>
    </html>
  );
}
