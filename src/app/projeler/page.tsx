import type { Metadata } from "next";
import { ProjectsFilter } from "@/components/ProjectsFilter";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projeler — Kenet Mimarlık",
  description:
    "Kenet Mimarlık'ın konut, ofis, kültür ve iç mimari projelerinden oluşan seçki.",
  openGraph: {
    title: "Projeler — Kenet Mimarlık",
    description: "Konut, ofis, otel ve kültür yapılarından seçilmiş mimari projeler.",
  },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-[1600px] px-6 pt-36 pb-24 md:px-10 md:pt-48">
      <p className="eyebrow text-muted-foreground">Portföy</p>
      <h1 className="mt-6 font-display text-5xl font-light md:text-8xl">Projeler</h1>

      <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
        Konut, ofis ve ticari mekânlarda tamamlanmış iç mimari işlerimizden bir seçki.
      </p>

      <ProjectsFilter projects={projects} />
    </div>
  );
}
