"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t, getLink } = useLanguage();

  const nav = [
    { to: "/", label: t("nav_home") },
    { to: "/projeler", label: t("nav_projects") },
    { to: "/studyo", label: t("nav_about") },
    { to: "/hizmetler", label: t("nav_services") },
    { to: "/iletisim", label: t("nav_contact") },
  ] as const;

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
            href={getLink("/")}
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

          <div className="flex items-center gap-6 md:gap-8">
            <nav className="hidden shrink-0 items-center gap-8 md:flex">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  href={getLink(item.to)}
                  className={`link-underline eyebrow transition-opacity ${
                    isActive(pathname, item.to)
                      ? transparent
                        ? "opacity-100 font-semibold"
                        : "text-foreground font-semibold"
                      : transparent
                        ? "opacity-75 hover:opacity-100"
                        : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Language Switcher Pill */}
            {!open && (
              <div
                className={`hidden md:inline-flex items-center gap-0.5 rounded-full p-0.5 text-[11px] font-medium tracking-wider uppercase transition-all duration-300 ${
                  transparent
                    ? "border border-primary-foreground/30 text-primary-foreground"
                    : "border border-border text-foreground"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setLanguage("tr")}
                  className={`rounded-full px-2.5 py-0.5 transition-all duration-200 ${
                    language === "tr"
                      ? transparent
                        ? "bg-primary-foreground text-primary font-semibold shadow-xs"
                        : "bg-foreground text-background font-semibold shadow-xs"
                      : "opacity-60 hover:opacity-100"
                  }`}
                  aria-label="Türkçe Dil Seçeneği"
                >
                  TR
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`rounded-full px-2.5 py-0.5 transition-all duration-200 ${
                    language === "en"
                      ? transparent
                        ? "bg-primary-foreground text-primary font-semibold shadow-xs"
                        : "bg-foreground text-background font-semibold shadow-xs"
                      : "opacity-60 hover:opacity-100"
                  }`}
                  aria-label="English Language Option"
                >
                  EN
                </button>
              </div>
            )}

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
        </div>

        {/* Mobil Menü İçeriği */}
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
                      href={getLink(item.to)}
                      onClick={() => setOpen(false)}
                      style={{ animationDelay: `${i * 35}ms` }}
                      className={`fade-down flex items-center justify-between py-3.5 border-b border-border/40 font-display text-xl font-normal tracking-wide transition-colors ${
                        active
                          ? "text-foreground font-medium pl-2 border-foreground/40 bg-muted/40"
                          : "text-foreground/85 hover:text-foreground hover:pl-1"
                      }`}
                    >
                      <span>{item.label}</span>
                      {active && <span className="h-1.5 w-1.5 rounded-full bg-foreground" />}
                    </Link>
                  );
                })}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <div className="inline-flex items-center gap-0.5 rounded-full border border-border p-0.5 text-xs uppercase font-medium">
                  <button
                    type="button"
                    onClick={() => setLanguage("tr")}
                    className={`rounded-full px-3 py-1 transition-all ${
                      language === "tr"
                        ? "bg-foreground text-background font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    TR
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage("en")}
                    className={`rounded-full px-3 py-1 transition-all ${
                      language === "en"
                        ? "bg-foreground text-background font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    EN
                  </button>
                </div>
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
