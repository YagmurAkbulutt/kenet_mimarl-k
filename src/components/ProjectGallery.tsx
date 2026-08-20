"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Project, GalleryItem } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

const roomTranslations: Record<string, { tr: string; en: string }> = {
  "Tüm Mekânlar": { tr: "Tüm Mekânlar", en: "All Rooms" },
  Salon: { tr: "Salon", en: "Living Room" },
  Mutfak: { tr: "Mutfak", en: "Kitchen" },
  "Oturma Odası": { tr: "Oturma Odası", en: "Lounge" },
  "Yatak Odası": { tr: "Yatak Odası", en: "Bedroom" },
  Koridor: { tr: "Koridor", en: "Hallway" },
  Balkon: { tr: "Balkon", en: "Balcony" },
};

export function ProjectGallery({ project }: { project: Project }) {
  const { language, t } = useLanguage();
  const [active, setActive] = useState<number | null>(null);

  const getRoomLabel = (room: string) => {
    const item = roomTranslations[room];
    if (!item) return room;
    return language === "en" ? item.en : item.tr;
  };

  const allRoomsLabel = getRoomLabel("Tüm Mekânlar");
  const [activeRoom, setActiveRoom] = useState<string>("Tüm Mekânlar");

  // Extract unique room categories present in this project
  const roomCategories = Array.from(
    new Set(project.gallery.map((g) => g.room).filter((r): r is string => Boolean(r))),
  );
  const hasMultipleRooms = roomCategories.length > 1;

  const filteredGallery =
    activeRoom === "Tüm Mekânlar"
      ? project.gallery
      : project.gallery.filter((g) => g.room === activeRoom);

  const total = filteredGallery.length;

  const open = (i: number) => setActive(i);
  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((n) => (n === null ? null : (n - 1 + total) % total)),
    [total],
  );
  const next = useCallback(() => setActive((n) => (n === null ? null : (n + 1) % total)), [total]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    document.body.setAttribute("data-lightbox-active", "true");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.body.removeAttribute("data-lightbox-active");
    };
  }, [active, close, next, prev]);

  return (
    <section className="mx-auto max-w-[1600px] px-6 py-6 pb-24 md:px-10 md:pb-32">
      {/* Header & Filter Controls */}
      <div className="mb-10 border-b border-border pb-6">
        <div className="flex items-baseline justify-between">
          <p className="eyebrow text-muted-foreground">{t("gallery_title")}</p>
          <span className="eyebrow text-muted-foreground">
            {String(total).padStart(2, "0")} {language === "en" ? "Images" : "Görsel"}
          </span>
        </div>

        {hasMultipleRooms && (
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setActiveRoom("Tüm Mekânlar");
                setActive(null);
              }}
              className={`min-h-10 px-4 py-2 text-xs uppercase tracking-wider transition-colors ${
                activeRoom === "Tüm Mekânlar"
                  ? "border border-foreground bg-primary text-primary-foreground font-medium"
                  : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {allRoomsLabel} ({project.gallery.length})
            </button>
            {roomCategories.map((room) => {
              const count = project.gallery.filter((g) => g.room === room).length;
              return (
                <button
                  key={room}
                  type="button"
                  onClick={() => {
                    setActiveRoom(room);
                    setActive(null);
                  }}
                  className={`min-h-10 px-4 py-2 text-xs uppercase tracking-wider transition-colors ${
                    activeRoom === room
                      ? "border border-foreground bg-primary text-primary-foreground font-medium"
                      : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {getRoomLabel(room)} ({count})
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-12 auto-rows-[240px] md:auto-rows-[260px]">
        {filteredGallery.map((g, i) => {
          const isPatternLarge = i % 5 === 0;
          const isPatternMedium = i % 5 === 1;
          const label = String(i + 1).padStart(2, "0");

          const span = isPatternLarge
            ? "md:col-span-8 md:row-span-2"
            : isPatternMedium
              ? "md:col-span-4 md:row-span-2"
              : "md:col-span-4 md:row-span-2";

          const caption = language === "en" && g.captionEn ? g.captionEn : g.caption;
          const projectTitle = language === "en" && project.titleEn ? project.titleEn : project.title;

          return (
            <button
              key={`${g.caption}-${i}`}
              type="button"
              onClick={() => open(i)}
              className={`group relative block w-full overflow-hidden bg-muted text-left outline outline-offset-[-1px] outline-border ${span}`}
              aria-label={`${caption}`}
            >
              <Image
                src={g.src}
                alt={`${projectTitle} — ${caption}`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />

              {/* Category Badge on top left */}
              {g.room && (
                <div className="absolute top-4 left-4 z-10 bg-background/85 px-3 py-1 text-[10px] uppercase tracking-widest text-foreground backdrop-blur-md border border-border/50">
                  {getRoomLabel(g.room)}
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-end p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                <span className="eyebrow text-white drop-shadow-sm">{label}</span>
              </div>
            </button>
          );
        })}
      </div>

      {active !== null && (
        <Lightbox
          images={filteredGallery}
          projectTitle={language === "en" && project.titleEn ? project.titleEn : project.title}
          active={active}
          getRoomLabel={getRoomLabel}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
}

function Lightbox({
  images,
  projectTitle,
  active,
  getRoomLabel,
  onClose,
  onPrev,
  onNext,
}: {
  images: GalleryItem[];
  projectTitle: string;
  active: number;
  getRoomLabel: (room: string) => string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const image = images[active]!;
  const closeRef = useRef<HTMLButtonElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload next and prev images for 0ms instant transition
  const total = images.length;
  const nextIdx = (active + 1) % total;
  const next2Idx = (active + 2) % total;
  const prevIdx = (active - 1 + total) % total;
  const preloadList = Array.from(new Set([nextIdx, next2Idx, prevIdx]))
    .map((idx) => images[idx])
    .filter((img): img is GalleryItem => Boolean(img));

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  useEffect(() => {
    setIsLoaded(false);
  }, [active]);

  const label = `${String(active + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xl transition-opacity duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Galeri büyütme"
    >
      {/* Hidden preloaders for next & prev images */}
      {preloadList.map((img, i) => (
        <div className="hidden" key={i} aria-hidden="true">
          <Image src={img.src} alt="" width={2400} height={1800} priority quality={80} sizes="94vw" />
        </div>
      ))}

      {/* Close Button */}
      <button
        type="button"
        ref={closeRef}
        onClick={onClose}
        className="absolute top-4 right-4 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md border border-white/30 transition-colors duration-200 hover:bg-white hover:text-black shadow-lg md:top-6 md:right-6 md:h-11 md:w-11 cursor-pointer"
        aria-label="Kapat"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Prev Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 top-1/2 z-50 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md border border-white/30 transition-colors duration-200 hover:bg-white hover:text-black shadow-lg md:left-6 md:h-12 md:w-12 cursor-pointer"
        aria-label="Önceki görsel"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 top-1/2 z-50 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md border border-white/30 transition-colors duration-200 hover:bg-white hover:text-black shadow-lg md:right-6 md:h-12 md:w-12 cursor-pointer"
        aria-label="Sonraki görsel"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      <figure
        className="mx-4 max-h-[92dvh] max-w-[94vw] md:mx-12"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex items-center justify-center min-h-[40dvh] md:min-h-[50dvh]">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            </div>
          )}
          <Image
            key={active}
            src={image.src}
            alt={image.room ? `${projectTitle} — ${getRoomLabel(image.room)}` : projectTitle}
            width={2400}
            height={1800}
            sizes="94vw"
            priority
            quality={80}
            onLoad={() => setIsLoaded(true)}
            className={`h-auto w-auto max-h-[82dvh] max-w-full rounded-xl border border-white/10 shadow-2xl transition-opacity duration-200 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
        <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/20 pt-3">
          <div className="flex items-center gap-3">
            {image.room && (
              <span className="eyebrow bg-white/20 text-white border border-white/30 px-2.5 py-1 text-[10px] tracking-widest uppercase backdrop-blur-sm">
                {getRoomLabel(image.room)}
              </span>
            )}
          </div>
          <span className="eyebrow text-white/80 tracking-widest">{label}</span>
        </figcaption>
      </figure>
    </div>
  );
}
