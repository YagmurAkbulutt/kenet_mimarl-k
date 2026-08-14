"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Project } from "@/data/projects";

export function ProjectGallery({ project }: { project: Project }) {
  const [active, setActive] = useState<number | null>(null);
  const total = project.gallery.length;

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
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  return (
    <section className="mx-auto max-w-[1600px] px-6 py-6 pb-24 md:px-10 md:pb-32">
      <div className="mb-10 flex items-baseline justify-between border-b border-border pb-5">
        <p className="eyebrow text-muted-foreground">Galeri</p>
        <span className="eyebrow text-muted-foreground">
          {String(total).padStart(2, "0")} Görsel
        </span>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-12 auto-rows-[200px] md:auto-rows-[220px]">
        {project.gallery.map((g, i) => {
          const isFirst = i === 0;
          const isSecond = i === 1;
          const label = String(i + 1).padStart(2, "0");
          const span = isFirst
            ? "md:col-span-8 md:row-span-2"
            : isSecond
              ? "md:col-span-4 md:row-span-2"
              : "md:col-span-12 md:row-span-2";

          return (
            <button
              key={g.caption}
              type="button"
              onClick={() => open(i)}
              className={`group relative block w-full overflow-hidden bg-muted text-left outline outline-offset-[-1px] outline-border ${span}`}
              aria-label={`Görsel büyüt: ${g.caption}`}
            >
              <Image
                src={g.src}
                alt={`${project.title} — ${g.caption}`}
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
              <div className="scrim absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                <span className="max-w-[70%] text-sm text-primary-foreground">{g.caption}</span>
                <span className="eyebrow text-primary-foreground/80">{label}</span>
              </div>
            </button>
          );
        })}
      </div>

      {active !== null && (
        <Lightbox
          images={project.gallery}
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
  images: Project["gallery"];
  projectTitle: string;
  active: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const image = images[active]!;
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    closeRef.current?.focus();
  }, []);
  const label = `${String(active + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Galeri büyütme"
    >
      <button
        type="button"
        ref={closeRef}
        onClick={onClose}
        className="absolute top-4 right-4 z-50 inline-flex h-12 w-12 items-center justify-center text-foreground/70 transition-colors hover:text-foreground"
        aria-label="Kapat"
      >
        <X className="h-7 w-7" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-1 top-1/2 z-50 inline-flex h-14 w-14 -translate-y-1/2 items-center justify-center text-foreground/60 transition-colors hover:text-foreground md:left-8"
        aria-label="Önceki görsel"
      >
        <ChevronLeft className="h-9 w-9" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-1 top-1/2 z-50 inline-flex h-14 w-14 -translate-y-1/2 items-center justify-center text-foreground/60 transition-colors hover:text-foreground md:right-8"
        aria-label="Sonraki görsel"
      >
        <ChevronRight className="h-9 w-9" />
      </button>

      <figure
        className="mx-14 max-h-[85dvh] max-w-[88vw] md:mx-20"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={`${projectTitle} — ${image.caption}`}
          width={1400}
          height={1000}
          sizes="88vw"
          className="max-h-[76dvh] max-w-full object-contain"
        />
        <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-2">
          <span className="text-sm text-foreground/80">{image.caption}</span>
          <span className="eyebrow text-muted-foreground">{label}</span>
        </figcaption>
      </figure>
    </div>
  );
}
