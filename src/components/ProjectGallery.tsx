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
  "Yemek Alanı": { tr: "Yemek Alanı", en: "Dining Area" },
  Banyo: { tr: "Banyo", en: "Bathroom" },
};

function arrangeGalleryItems(items: GalleryItem[]): GalleryItem[] {
  const pool = [...items];
  const arranged: GalleryItem[] = [];

  while (pool.length > 0) {
    const first = pool[0]!;
    const fRatio = first.aspectRatio ?? "portrait";

    if (fRatio === "landscape") {
      const landscapeItem = pool.shift()!;
      arranged.push(landscapeItem);
      // Pair with 1 portrait item to complete 3-column row (2 + 1)
      const pIdx = pool.findIndex((item) => (item.aspectRatio ?? "portrait") === "portrait");
      if (pIdx !== -1) {
        const pItem = pool.splice(pIdx, 1)[0]!;
        arranged.push(pItem);
      }
    } else {
      // First is portrait (1 col)
      // Check if 2nd item is landscape (1 + 2 = 3 cols)
      if (pool.length > 1 && (pool[1]!.aspectRatio ?? "portrait") === "landscape") {
        const pItem = pool.shift()!;
        const lItem = pool.shift()!;
        arranged.push(pItem);
        arranged.push(lItem);
      } else {
        // Fill row with 3 portraits (1 + 1 + 1 = 3 cols)
        const p1 = pool.shift()!;
        arranged.push(p1);

        const p2Idx = pool.findIndex((item) => (item.aspectRatio ?? "portrait") === "portrait");
        if (p2Idx !== -1) {
          const p2 = pool.splice(p2Idx, 1)[0]!;
          arranged.push(p2);

          const p3Idx = pool.findIndex((item) => (item.aspectRatio ?? "portrait") === "portrait");
          if (p3Idx !== -1) {
            const p3 = pool.splice(p3Idx, 1)[0]!;
            arranged.push(p3);
          }
        }
      }
    }
  }

  return arranged;
}

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

  const arrangedGallery = arrangeGalleryItems(filteredGallery);

  const total = arrangedGallery.length;

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

      {/* Gallery Grid - Smart gap-free 3-column row packing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[340px] sm:auto-rows-[400px] md:auto-rows-[480px]">
        {arrangedGallery.map((g, i) => {
          const isLandscape = g.aspectRatio === "landscape";
          const spanClass = isLandscape
            ? "sm:col-span-2 md:col-span-2"
            : "sm:col-span-1 md:col-span-1";
          const label = String(i + 1).padStart(2, "0");
          const caption = language === "en" && g.captionEn ? g.captionEn : g.caption;
          const projectTitle = language === "en" && project.titleEn ? project.titleEn : project.title;

          return (
            <button
              key={`${g.caption}-${i}`}
              type="button"
              onClick={() => open(i)}
              className={`group relative block h-full w-full overflow-hidden bg-muted text-left outline outline-offset-[-1px] outline-border rounded-lg shadow-sm ${spanClass}`}
              aria-label={caption}
            >
              <Image
                src={g.src}
                alt={`${projectTitle} — ${caption}`}
                fill
                sizes={isLandscape ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
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
          images={arrangedGallery}
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

const customMagnifierCursor = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Ccircle cx='10' cy='10' r='6.5' fill='none' stroke='black' stroke-width='3.2'/%3E%3Cline x1='15' y1='15' x2='21' y2='21' stroke='black' stroke-width='3.8' stroke-linecap='round'/%3E%3Ccircle cx='10' cy='10' r='6.5' fill='rgba(0,0,0,0.15)' stroke='white' stroke-width='1.8'/%3E%3Cline x1='15' y1='15' x2='21' y2='21' stroke='white' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E") 10 10, zoom-in`;

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
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });

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
    setIsZoomed(false);
    setZoomPos({ x: 50, y: 50 });
  }, [active]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    setZoomPos({ x, y });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0 && e.touches[0]) {
      const touch = e.touches[0];
      const rect = e.currentTarget.getBoundingClientRect();
      const x = Math.max(0, Math.min(100, ((touch.clientX - rect.left) / rect.width) * 100));
      const y = Math.max(0, Math.min(100, ((touch.clientY - rect.top) / rect.height) * 100));
      setZoomPos({ x, y });
    }
  };

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
        <div
          className="relative flex items-center justify-center min-h-[40dvh] md:min-h-[50dvh] overflow-hidden rounded-xl border border-white/10 shadow-2xl"
          style={{ cursor: customMagnifierCursor }}
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsZoomed(true)}
          onTouchEnd={() => setIsZoomed(false)}
          onTouchMove={handleTouchMove}
        >
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
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
            quality={90}
            onLoad={() => setIsLoaded(true)}
            style={{
              transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
              transform: isZoomed ? "scale(2.3)" : "scale(1)",
              transition: isZoomed ? "transform 0.08s ease-out" : "transform 0.3s ease-out, opacity 0.2s",
              cursor: customMagnifierCursor,
            }}
            className={`h-auto w-auto max-h-[82dvh] max-w-full rounded-xl ${
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
