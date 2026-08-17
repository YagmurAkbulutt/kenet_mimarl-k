"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/data/projects";

export function ProjectsFilter({ projects }: { projects: Project[] }) {
  const categories = ["Tümü", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [active, setActive] = useState("Tümü");
  const list = active === "Tümü" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="mt-12 flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div
          role="group"
          aria-label="Projeleri kategoriye göre filtrele"
          className="flex flex-wrap items-center gap-3"
        >
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={active === c}
              onClick={() => setActive(c)}
              className={`inline-flex min-h-11 items-center border px-5 eyebrow transition-colors ${
                active === c
                  ? "border-foreground bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <span aria-live="polite" className="shrink-0 eyebrow text-muted-foreground">
          {String(list.length).padStart(2, "0")} Proje
        </span>
      </div>

      <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2">
        {list.map((p) => (
          <Link
            key={p.slug}
            href={`/projeler/${p.slug}`}
            className="group block focus-visible:outline-offset-8"
          >
            <div className="photo-frame bg-muted">
              <Image
                src={p.cover}
                alt={`${p.title} — ${p.category} projesi, ${p.location}`}
                width={1400}
                height={1000}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="mt-5 flex items-baseline justify-between gap-4">
              <h2 className="font-display text-2xl font-light transition-opacity group-hover:opacity-60 md:text-3xl">
                {p.title}
              </h2>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {p.category} · {p.location}
            </p>
          </Link>
        ))}
      </div>

      {list.length === 0 && (
        <p className="mt-16 text-sm text-muted-foreground">
          Bu kategoride henüz yayınlanmış bir proje yok.
        </p>
      )}
    </>
  );
}
