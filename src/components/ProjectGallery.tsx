"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Project, GalleryItem } from "@/data/projects";

export function ProjectGallery({ project }: { project: Project }) {
  const [active, setActive] = useState<number | null>(null);
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
          <p className="eyebrow text-muted-foreground">Proje Galerisi</p>
          <span className="eyebrow text-muted-foreground">
            {String(total).padStart(2, "0")} Görsel
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
              Tüm Mekânlar ({project.gallery.length})
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
                  {room} ({count})
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

          return (
            <button
              key={`${g.caption}-${i}`}
              type="button"
              onClick={() => open(i)}
              className={`group relative block w-full overflow-hidden bg-muted text-left outline outline-offset-[-1px] outline-border ${span}`}
              aria-label={`Görsel büyüt: ${g.caption}`}
            >
              <Image
                src={g.src}
                alt={`${project.title} — ${g.caption}`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />

              {/* Category Badge on top left */}
              {g.room && (
                <div className="absolute top-4 left-4 z-10 bg-background/85 px-3 py-1 text-[10px] uppercase tracking-widest text-foreground backdrop-blur-md border border-border/50">
                  {g.room}
                </div>
              )}

              <div className="scrim absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-end p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                <span className="eyebrow text-primary-foreground/80">{label}</span>
              </div>
            </button>
          );
        })}
      </div>

      {active !== null && (
        <Lightbox
          images={filteredGallery}
          projectTitle={project.title}
          active={active}
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
  onClose,
  onPrev,
  onNext,
}: {
  images: GalleryItem[];
  projectTitle: string;
  active: number;
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
  const prevIdx = (active - 1 + total) % total;
  const nextImage = images[nextIdx];
  const prevImage = images[prevIdx];

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  useEffect(() => {
    setIsLoaded(false);
  }, [active]);

  const label = `${String(active + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md transition-opacity duration-200 ease-out"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Galeri büyütme"
    >
      {/* Hidden preloaders for next & prev images */}
      {nextImage && (
        <div className="hidden" aria-hidden="true">
          <Image src={nextImage.src} alt="" width={1200} height={900} priority sizes="1px" />
        </div>
      )}
      {prevImage && (
        <div className="hidden" aria-hidden="true">
          <Image src={prevImage.src} alt="" width={1200} height={900} priority sizes="1px" />
        </div>
      )}

      {/* Close Button */}
      <button
        type="button"
        ref={closeRef}
        onClick={onClose}
        className="absolute top-4 right-4 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/60 text-foreground backdrop-blur-md border border-border/50 transition-colors duration-300 hover:bg-foreground hover:text-background shadow-md md:top-6 md:right-6 md:h-11 md:w-11 cursor-pointer"
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
        className="absolute left-3 top-1/2 z-50 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/60 text-foreground backdrop-blur-md border border-border/50 transition-colors duration-300 hover:bg-foreground hover:text-background shadow-md md:left-6 md:h-12 md:w-12 cursor-pointer"
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
        className="absolute right-3 top-1/2 z-50 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/60 text-foreground backdrop-blur-md border border-border/50 transition-colors duration-300 hover:bg-foreground hover:text-background shadow-md md:right-6 md:h-12 md:w-12 cursor-pointer"
        aria-label="Sonraki görsel"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      <figure
        className="mx-4 max-h-[92dvh] max-w-[94vw] md:mx-12"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex items-center justify-center min-h-[50dvh]">
          <Image
            key={active}
            src={image.src}
            alt={image.room ? `${projectTitle} — ${image.room}` : projectTitle}
            width={2400}
            height={1800}
            sizes="94vw"
            priority
            quality={90}
            onLoad={() => setIsLoaded(true)}
            className={`max-h-[84dvh] max-w-full object-contain transition-opacity duration-300 ease-out ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
        <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border/40 pt-3">
          <div className="flex items-center gap-3">
            {image.room && (
              <span className="eyebrow bg-foreground text-background px-2.5 py-1 text-[10px]">
                {image.room}
              </span>
            )}
          </div>
          <span className="eyebrow text-muted-foreground">{label}</span>
        </figcaption>
      </figure>
    </div>
  );
}
