"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AboutDrawingImage } from "@/components/AboutDrawingImage";
import { SplitHero } from "@/components/SplitHero";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
  const { language, t, getLink } = useLanguage();
  const featured = projects.slice(0, 4);

  return (
    <div>
      <SplitHero />

      <section className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-center">
          <p className="eyebrow text-muted-foreground">{t("home_approach_eyebrow")}</p>
          <h2 className="max-w-4xl font-display text-3xl leading-tight font-light md:text-4xl">
            {t("home_approach_text")}
          </h2>
          <Link
            href={getLink("/studyo")}
            className="inline-flex min-h-11 w-fit items-center gap-3 border-b border-foreground pb-1 eyebrow transition-opacity hover:opacity-60"
          >
            {t("home_about_link")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-4xl font-light md:text-6xl">{t("home_selected_projects")}</h2>
            <Link
              href={getLink("/projeler")}
              className="link-underline eyebrow text-muted-foreground hover:text-foreground"
            >
              {t("home_all_projects")}
            </Link>
          </div>

          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
            {featured.map((p, i) => {
              const projectTitle = language === "en" && p.titleEn ? p.titleEn : p.title;
              const projectCategory = language === "en" && p.categoryEn ? p.categoryEn : p.category;
              return (
                <Link
                  key={p.slug}
                  href={getLink(`/projeler/${p.slug}`)}
                  className={`group block ${i % 2 === 1 ? "md:mt-14" : ""}`}
                >
                  <div className="photo-frame bg-muted">
                    <Image
                      src={p.cover}
                      alt={`${projectTitle} — ${projectCategory}`}
                      width={1400}
                      height={1000}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="aspect-[16/10] w-full object-cover"
                    />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl font-light transition-opacity group-hover:opacity-60 md:text-3xl">
                      {projectTitle}
                    </h3>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {projectCategory} · {p.location}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-[1600px] px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1fr] md:items-center">
          <AboutDrawingImage />
          <div className="md:pl-8 lg:pl-14">
            <p className="eyebrow text-muted-foreground">{t("home_about_eyebrow")}</p>
            <h2 className="mt-6 font-display text-4xl leading-tight font-light md:text-5xl">
              {t("home_about_title")}
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              {t("home_about_desc")}
            </p>
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                [t("home_stat1_n"), t("home_stat1_l")],
                [t("home_stat2_n"), t("home_stat2_l")],
                [t("home_stat3_n"), t("home_stat3_l")],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="font-display text-4xl font-light">{n}</p>
                  <p className="mt-1 eyebrow text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-[1600px] gap-8 px-6 py-24 md:grid-cols-[1.2fr_auto] md:items-end md:px-10 md:py-32">
          <div>
            <p className="eyebrow text-muted-foreground">{t("home_contact_eyebrow")}</p>
            <h2 className="mt-6 max-w-2xl font-display text-4xl leading-tight font-light md:text-6xl">
              {t("home_contact_title")}
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              {t("home_contact_desc")}
            </p>
          </div>
          <Link
            href={getLink("/iletisim")}
            className="group inline-flex min-h-12 w-fit items-center gap-3 bg-primary px-8 py-4 eyebrow text-primary-foreground transition-opacity hover:opacity-85"
          >
            {t("home_contact_btn")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
