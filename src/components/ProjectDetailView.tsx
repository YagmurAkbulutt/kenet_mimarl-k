"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ProjectGallery } from "@/components/ProjectGallery";
import { getProject, projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

export function ProjectDetailView({ slug }: { slug: string }) {
  const { language, t, getLink } = useLanguage();
  const project = getProject(slug);

  if (!project) return null;

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length] ?? projects[0]!;

  const title = language === "en" && project.titleEn ? project.titleEn : project.title;
  const category = language === "en" && project.categoryEn ? project.categoryEn : project.category;
  const location = language === "en" && project.locationEn ? project.locationEn : project.location;
  const status = language === "en" && project.statusEn ? project.statusEn : project.status;
  const description = language === "en" && project.descriptionEn ? project.descriptionEn : project.description;

  const nextTitle = language === "en" && next.titleEn ? next.titleEn : next.title;

  return (
    <article>
      <div className="relative h-[70dvh] min-h-[420px] w-full overflow-hidden">
        <Image
          src={project.cover}
          alt={`${title} cover`}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover"
        />
        <div className="scrim absolute inset-0" />
        <div className="relative mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-14 text-primary-foreground md:px-10">
          <Link
            href={getLink("/projeler")}
            className="inline-flex min-h-11 w-fit items-center gap-2 eyebrow text-primary-foreground/80 transition-opacity hover:text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> {t("back_to_projects")}
          </Link>
          <h1 className="mt-6 font-display text-5xl font-light md:text-8xl">{title}</h1>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-16 md:grid-cols-[1fr_1.5fr]">
          <dl className="space-y-6 border-t border-border pt-6">
            {[
              [t("nav_services"), category],
              [t("meta_location"), location],
              [t("meta_status"), status],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-border pb-4">
                <dt className="eyebrow text-muted-foreground">{k}</dt>
                <dd className="text-sm">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="space-y-6 border-t border-border pt-6">
            {description.map((p) => (
              <p key={p} className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>

      <ProjectGallery project={project} />

      <div className="border-t border-border">
        <Link
          href={getLink(`/projeler/${next.slug}`)}
          className="group mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-6 px-6 py-16 md:px-10"
        >
          <div>
            <p className="eyebrow text-muted-foreground">{language === "en" ? "Next project" : "Sonraki proje"}</p>
            <p className="mt-3 font-display text-4xl font-light md:text-6xl">{nextTitle}</p>
          </div>
          <ArrowRight className="h-8 w-8 transition-transform group-hover:translate-x-2" />
        </Link>
      </div>
    </article>
  );
}
