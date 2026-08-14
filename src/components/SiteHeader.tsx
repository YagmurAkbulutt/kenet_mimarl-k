"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/projeler", label: "Projeler" },
  { to: "/studyo", label: "Stüdyo" },
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        transparent
          ? "header-scrim text-primary-foreground"
          : "border-b border-border bg-background/85 text-foreground backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 md:px-10 md:py-5">
        <Link href="/" className="min-w-0" aria-label="Kenet Mimarlık — ana sayfa">
          <span className="font-display text-2xl tracking-[0.2em] uppercase">Kenet</span>
          <span className={`ml-2 eyebrow ${transparent ? "opacity-70" : "text-muted-foreground"}`}>
            Mimarlık
          </span>
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
          className="-mr-3 inline-flex h-11 w-11 shrink-0 items-center justify-center md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-x-0 top-[60px] bottom-0 bg-background text-foreground md:hidden"
      >
        <nav className="flex h-full flex-col px-6 pt-6">
          {nav.map((item, i) => (
            <Link
              key={item.to}
              href={item.to}
              onClick={() => setOpen(false)}
              style={{ animationDelay: `${i * 60}ms` }}
              className={`fade-up flex min-h-14 items-center border-b border-border font-display text-3xl font-light ${
                isActive(pathname, item.to) ? "opacity-50" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://www.instagram.com/kenetmimarlik/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto mb-10 eyebrow text-muted-foreground"
          >
            @kenetmimarlik
          </a>
        </nav>
      </div>
    </header>
  );
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
