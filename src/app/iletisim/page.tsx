import type { Metadata } from "next";
import { Instagram } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "İletişim — Kenet Mimarlık",
  description:
    "Kenet Mimarlık ile iletişime geçin: Bandırma, Balıkesir. Proje talepleriniz için form doldurun veya bizi arayın.",
  openGraph: {
    title: "İletişim — Kenet Mimarlık",
    description: "Proje talepleriniz için Kenet Mimarlık ile iletişime geçin.",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1600px] px-6 pt-36 pb-24 md:px-10 md:pt-48">
      <p className="eyebrow text-muted-foreground">Bize ulaşın</p>
      <h1 className="mt-6 font-display text-5xl font-light md:text-7xl">İletişim</h1>

      <div className="mt-16 grid gap-16 md:grid-cols-[1fr_1.2fr]">
        <div className="space-y-10">
          <div className="border-t border-border pt-6">
            <p className="eyebrow text-muted-foreground">Stüdyo</p>
            <p className="mt-3 text-sm leading-relaxed">
              Bandırma
              <br />
              Balıkesir, Türkiye
            </p>
          </div>
          <div className="border-t border-border pt-6">
            <p className="eyebrow text-muted-foreground">E-posta</p>
            <a
              href="mailto:studio@kenetmimarlik.com"
              className="mt-3 block text-sm hover:opacity-60"
            >
              studio@kenetmimarlik.com
            </a>
          </div>
          <div className="border-t border-border pt-6">
            <p className="eyebrow text-muted-foreground">Telefon</p>
            <a href="tel:+902121234567" className="mt-3 block text-sm hover:opacity-60">
              +90 212 123 45 67
            </a>
          </div>
          <div className="border-t border-border pt-6">
            <p className="eyebrow text-muted-foreground">Çalışma Saatleri</p>
            <p className="mt-3 text-sm">Pazartesi – Cuma · 09:00 – 18:00</p>
          </div>
          <div className="border-t border-border pt-6">
            <p className="eyebrow text-muted-foreground">Sosyal</p>
            <a
              href="https://www.instagram.com/kenetmimarlik/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm hover:opacity-60"
            >
              <Instagram className="h-4 w-4" /> @kenetmimarlik
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
