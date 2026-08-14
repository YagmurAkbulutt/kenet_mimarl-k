"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type ActivePanel = "left" | "right" | null;

const heroPanels = [
  {
    key: "left",
    title: "Ruhsat Projesi",
    href: "/hizmetler",
    image: "/ruhsat_proje.jpeg",
    alt: "Ruhsat projesi için teknik çizim ve mimari proje çalışma alanı",
  },
  {
    key: "right",
    title: "Tasarım Uygulama",
    href: "/hizmetler",
    image: "/hero_tasarim_uygulama.jpeg",
    alt: "Tasarım uygulama sürecini temsil eden tamamlanmış iç mekân",
  },
] as const;

export function SplitHero() {
  const [active, setActive] = useState<ActivePanel>(null);
  const [closing, setClosing] = useState<ActivePanel>(null);
  const closingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (closingTimer.current) clearTimeout(closingTimer.current);
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  const activate = (panel: Exclude<ActivePanel, null>) => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    if (closingTimer.current) clearTimeout(closingTimer.current);
    resetTimer.current = null;
    closingTimer.current = null;
    setClosing(null);
    setActive(panel);
  };

  const reset = () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    if (closingTimer.current) clearTimeout(closingTimer.current);
    resetTimer.current = null;
    if (active) {
      setClosing(active);
      closingTimer.current = setTimeout(() => {
        setClosing(null);
        closingTimer.current = null;
      }, 1800);
    }
    setActive(null);
  };

  const scheduleReset = () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(reset, 120);
  };

  return (
    <section
      className="split-hero relative w-full overflow-hidden bg-primary text-primary-foreground"
      data-active={active ?? "none"}
      data-closing={closing ?? "none"}
      onMouseLeave={reset}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) reset();
      }}
    >
      <div className="relative h-full">
        {heroPanels.map((panel, index) => (
          <div
            key={panel.title}
            className={`split-hero-panel group absolute top-0 bottom-0 overflow-hidden text-primary-foreground outline-none ${
              panel.key === "left"
                ? "split-hero-panel-left left-0"
                : "split-hero-panel-right right-0"
            }`}
          >
            <Image
              src={panel.image}
              alt={panel.alt}
              fill
              priority={index === 0}
              sizes="(min-width: 768px) 60vw, 100vw"
              className="split-hero-image absolute inset-0 object-cover"
            />
            <div className="split-hero-scrim absolute inset-0" />
          </div>
        ))}

        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6 text-center">
          <h1 className="fade-up font-display text-4xl leading-none font-light tracking-normal md:text-5xl lg:text-6xl">
            projeden <span className="font-semibold">uygulamaya</span>
          </h1>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-9 z-20 flex items-center justify-center px-6 md:bottom-12">
          <div className="grid w-full max-w-4xl grid-cols-[1fr_auto_1fr] items-center text-center">
            <Link
              href="/hizmetler"
              onMouseEnter={() => activate("left")}
              onMouseLeave={scheduleReset}
              onFocus={() => activate("left")}
              className="split-hero-trigger-left split-hero-nav-title pointer-events-auto justify-self-end pr-4 font-display text-sm font-light tracking-[0.14em] uppercase outline-none md:pr-5 md:text-xl md:tracking-[0.22em]"
            >
              Ruhsat Projesi
            </Link>
            <span className="h-16 w-px bg-primary-foreground md:h-24" aria-hidden="true" />
            <Link
              href="/hizmetler"
              onMouseEnter={() => activate("right")}
              onMouseLeave={scheduleReset}
              onFocus={() => activate("right")}
              className="split-hero-trigger-right split-hero-nav-title pointer-events-auto justify-self-start pl-4 font-display text-sm font-light tracking-[0.14em] uppercase outline-none md:pl-5 md:text-xl md:tracking-[0.22em]"
            >
              Tasarım Uygulama
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
