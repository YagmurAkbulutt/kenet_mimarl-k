"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

const WHATSAPP_OPTIONS = [
  {
    id: "ruhsat",
    title: "Ruhsat Projesi",
    phone: "0 543 263 85 20",
    description: "Ruhsat projelendirme ve resmi süreçler",
    url: `https://wa.me/905432638520?text=${encodeURIComponent(
      "Merhaba, Ruhsat Projesi hakkında bilgi almak istiyorum.",
    )}`,
  },
  {
    id: "tasarim",
    title: "Tasarım Uygulama",
    phone: "0 536 206 30 63",
    description: "İç mimari tasarım ve şantiye uygulaması",
    url: `https://wa.me/905362063063?text=${encodeURIComponent(
      "Merhaba, Tasarım & Uygulama hakkında bilgi almak istiyorum.",
    )}`,
  },
];

export function WhatsAppButton() {
  const [footerVisible, setFooterVisible] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        setFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.02 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const checkModal = () => {
      setModalActive(document.body.getAttribute("data-lightbox-active") === "true");
    };

    checkModal();
    const observer = new MutationObserver(checkModal);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-lightbox-active"],
    });

    return () => observer.disconnect();
  }, []);

  // Click outside and keydown listeners to close options popover
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (modalActive) return null;

  return (
    <div
      ref={containerRef}
      className={`fixed right-5 z-50 transition-all duration-500 md:right-7 ${
        footerVisible ? "bottom-24 md:bottom-28" : "bottom-5 md:bottom-7"
      }`}
    >
      {/* Popover Menu */}
      <div
        className={`absolute bottom-full right-0 mb-3 w-[290px] origin-bottom-right transition-all duration-300 sm:w-[330px] ${
          isOpen
            ? "pointer-events-auto scale-100 opacity-100 translate-y-0"
            : "pointer-events-none scale-90 opacity-0 translate-y-2"
        }`}
      >
        <div className="overflow-hidden rounded-2xl border border-border/80 bg-background/95 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          <div className="mb-3 border-b border-border/60 pb-2.5">
            <div className="flex items-center justify-between">
              <span className="font-display text-sm font-medium tracking-wide text-foreground">
                WhatsApp İletişim Hattı
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Kapat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-0.5 text-[11px] text-muted-foreground">
              Görüşmek istediğiniz birimi seçiniz:
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {WHATSAPP_OPTIONS.map((option) => (
              <a
                key={option.id}
                href={option.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="group relative flex items-center justify-between rounded-xl border border-border/50 bg-muted/30 p-3.5 transition-all duration-200 hover:border-foreground/20 hover:bg-foreground hover:text-background"
              >
                <div>
                  <div className="font-medium text-xs sm:text-sm leading-tight text-foreground group-hover:text-background">
                    {option.title}
                  </div>
                  <div className="mt-1 text-[11px] text-muted-foreground group-hover:text-background/80">
                    {option.phone}
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-background" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label="WhatsApp İletişim Menüsü"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_12px_30px_oklch(0.14_0_0_/_0.18)] transition-all duration-300 hover:scale-105 focus-visible:scale-105 md:h-14 md:w-14"
      >
        {isOpen ? (
          <X className="h-6 w-6 transition-transform duration-300 rotate-0" />
        ) : (
          <svg viewBox="0 0 32 32" aria-hidden="true" className="h-6 w-6 md:h-7 md:w-7" fill="none">
            <path
              d="M26.7 5.3A14.9 14.9 0 0 0 3.3 23.1L2 30l7.1-1.9A14.9 14.9 0 0 0 26.7 5.3Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M11.7 9.5c-.3-.7-.6-.7-.9-.7h-.7c-.2 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.9c.2.2 2.6 4.1 6.4 5.6 3.2 1.3 3.9 1 4.6.9.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5l-2.7-1.3c-.4-.1-.7-.2-1 .2-.3.4-1.1 1.3-1.3 1.6-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.7.1-.2.1-.5 0-.7l-1.2-2.8Z"
              fill="currentColor"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
