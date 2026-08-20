"use client";

import { ProjectsFilter } from "@/components/ProjectsFilter";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-[1600px] px-6 pt-36 pb-24 md:px-10 md:pt-48">
      <p className="eyebrow text-muted-foreground">{t("projects_eyebrow")}</p>
      <h1 className="mt-6 font-display text-5xl font-light md:text-8xl">{t("projects_title")}</h1>

      <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
        {t("projects_desc")}
      </p>

      <ProjectsFilter projects={projects} />
    </div>
  );
}
