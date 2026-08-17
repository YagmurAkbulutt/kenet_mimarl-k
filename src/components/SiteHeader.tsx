"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/projeler", label: "Projeler" },
  { to: "/studyo", label: "Hakkımızda" },
  { to: "/hizmetler", label: "Hizmetler" },
  { to: "/iletisim", label: "İletişim" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  // Sadece tam ekran görselle açılan sayfalarda header şeffaf kalır.
  const overHero = pathname === "/" || /^\/projeler\/[^/]+$/.test(pathname);
  const transparent = overHero && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Rota değişince mobil menüyü kapat
  useEffect(() => setOpen(false), [pathname]);

  // Menü açıkken sayfayı kilitle + Escape ile kapat
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Hamburger menü açıkken sayfanın geri kalanını flu yapan karartma/bulanıklaştırma katmanı */}
      {open && (
        <div
          tabIndex={-1}
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md transition-opacity duration-300 md:hidden"
        />
      )}

      <header
        className={`fixed inset-x-0 top-0 z-50 ${
          open
            ? "bg-background text-foreground border-b border-border/40 shadow-xl"
            : `transition-all duration-500 ${
                transparent
                  ? "header-scrim text-primary-foreground"
                  : "bg-background/90 text-foreground backdrop-blur-xl"
              }`
        }`}
      >
        <div className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 md:px-10 md:py-5">
          <Link
            href="/"
            className="relative block h-9 w-[130px] min-w-0 md:h-11 md:w-[158px]"
            aria-label="Kenet Mimarlık — ana sayfa"
          >
            <Image
              src="/logo.png"
              alt="Kenet Mimarlık"
              fill
              priority
              sizes="(min-width: 768px) 158px, 130px"
              className={`object-contain object-left ${
                open
                  ? "brightness-0"
                  : `transition duration-500 ${transparent ? "brightness-0 invert" : "brightness-0"}`
              }`}
            />
          </Link>

          <nav className="hidden shrink-0 items-center gap-8 md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                href={item.to}
                className={`link-underline eyebrow transition-opacity ${
                  isActive(pathname, item.to)
                    ? transparent
                      ? "opacity-100"
                      : "text-foreground"
                    : transparent
                      ? "opacity-75 hover:opacity-100"
                      : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="-mr-3 inline-flex h-11 w-11 shrink-0 items-center justify-center text-foreground transition-colors md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobil Menü İçeriği - Header ile Eş Zamanlı ve Bitişik Açılan */}
        {open && (
          <div
            id="mobile-nav"
            className="w-full bg-background text-foreground md:hidden border-t border-border/30"
          >
            <nav className="flex flex-col px-6 pt-2 pb-6">
              <div className="flex flex-col">
                {nav.map((item, i) => {
                  const active = isActive(pathname, item.to);
                  return (
                    <Link
                      key={item.to}
                      href={item.to}
                      onClick={() => setOpen(false)}
                      style={{ animationDelay: `${i * 35}ms` }}
                      className={`fade-down flex items-center justify-between py-3.5 border-b border-border/40 font-display text-xl font-normal tracking-wide transition-colors ${
                        active
                          ? "text-foreground font-medium pl-2 border-foreground/40 bg-muted/40"
                          : "text-foreground/85 hover:text-foreground hover:pl-1"
                      }`}
                    >
                      <span>{item.label}</span>
                      {active && (
                        <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                      )}
                    </Link>
                  );
                })}
              </div>

              <div className="pt-4 flex justify-end">
                <a
                  href="https://www.instagram.com/kenetmimarlik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eyebrow text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  @kenetmimarlik
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
