import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Instagram } from "lucide-react";

const mapsUrl =
  "https://www.google.com/maps/place/KENET+M%C4%B0MARLIK/@40.3441386,27.9725994,17z/data=!3m1!4b1!4m6!3m5!1s0x14b5d379344f6913:0x3e56971620068a4c!8m2!3d40.3441345!4d27.9751743!16s%2Fg%2F11xkpvc000?entry=ttu&g_ep=EgoyMDI2MDgxMS4wIKXMDSoASAFQAw%3D%3D";

export function SiteFooter() {
  return (
    <footer className="footer-pattern relative overflow-hidden bg-primary text-primary-foreground">
      <div className="relative mx-auto max-w-[1600px] px-6 pt-16 pb-8 md:px-10 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(160px,0.45fr)_minmax(420px,1fr)]">
          <div>
            <Link
              href="/"
              className="relative block h-12 w-[172px]"
              aria-label="Kenet Mimarlık — ana sayfa"
            >
              <Image
                src="/logo.png"
                alt="Kenet Mimarlık"
                fill
                sizes="172px"
                className="object-contain object-left brightness-0 invert"
              />
            </Link>
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
                Hakkımızda
              </Link>
              <Link href="/hizmetler" className="hover:opacity-60">
                Hizmetler
              </Link>
              <Link href="/iletisim" className="hover:opacity-60">
                İletişim
              </Link>
            </div>
          </div>

          <div className="grid gap-x-10 gap-y-8 text-sm sm:grid-cols-2">
            <div className="space-y-3">
              <p className="eyebrow text-primary-foreground/50">İletişim</p>
              <a href="mailto:info@kenetmimarlik.com" className="block hover:opacity-60">
                info@kenetmimarlik.com
              </a>
              <a href="tel:+905362063063" className="block hover:opacity-60">
                0 536 206 30 63
              </a>
              <a href="tel:+905432638520" className="block hover:opacity-60">
                0 543 263 85 20
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

            <div className="space-y-3">
              <p className="eyebrow text-primary-foreground/50">Adres</p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 hover:opacity-60"
              >
                <span>
                  Sunullah, Kemal Özal Cd. No:75
                  <br />
                  10200 Bandırma/Balıkesir
                </span>
                <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-primary-foreground/15 pt-4 text-xs text-primary-foreground/40 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Kenet Mimarlık</span>
          <span>
            Crafted by{" "}
            <a
              href="https://www.inoviqlab.com/tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/75 transition-opacity hover:opacity-70"
            >
              InoviqLab
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
