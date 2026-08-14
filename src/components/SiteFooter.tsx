import Link from "next/link";
import { Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-display text-4xl font-light">Kenet Mimarlık</p>
            <p className="mt-4 max-w-sm text-sm text-primary-foreground/60">
              Ölçek fark etmeksizin; ışık, malzeme ve oran üzerine kurulu sakin bir iç mimari
              pratiği.
            </p>
          </div>
          <div className="space-y-3 text-sm">
            <p className="eyebrow text-primary-foreground/50">Menü</p>
            <div className="flex flex-col gap-2">
              <Link href="/projeler" className="hover:opacity-60">
                Projeler
              </Link>
              <Link href="/studyo" className="hover:opacity-60">
                Stüdyo
              </Link>
              <Link href="/hizmetler" className="hover:opacity-60">
                Hizmetler
              </Link>
              <Link href="/iletisim" className="hover:opacity-60">
                İletişim
              </Link>
            </div>
          </div>
          <div className="space-y-3 text-sm text-primary-foreground/70">
            <p className="eyebrow text-primary-foreground/50">İletişim</p>
            <p>Bandırma, Balıkesir</p>
            <a href="mailto:studio@kenetmimarlik.com" className="block hover:opacity-60">
              studio@kenetmimarlik.com
            </a>
            <a href="tel:+902121234567" className="block hover:opacity-60">
              +90 212 123 45 67
            </a>
            <a
              href="https://www.instagram.com/kenetmimarlik/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:opacity-60"
            >
              <Instagram className="h-4 w-4" /> @kenetmimarlik
            </a>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-2 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/40 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Kenet Mimarlık</span>
          <span>Bandırma, Balıkesir — Türkiye</span>
        </div>
      </div>
    </footer>
  );
}
