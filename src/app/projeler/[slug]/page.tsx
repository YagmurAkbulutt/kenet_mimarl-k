import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ProjectGallery } from "@/components/ProjectGallery";
import { getProject, projects } from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Proje bulunamadı — Kenet Mimarlık",
      robots: { index: false },
    };
  }

  const title = `${project.title} — Kenet Mimarlık`;
  return {
    title,
    description: project.summary,
    openGraph: {
      title,
      description: project.summary,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length] ?? projects[0]!;

  return (
    <article>
      <div className="relative h-[70dvh] min-h-[420px] w-full overflow-hidden">
        <Image
          src={project.cover}
          alt={`${project.title} kapak görseli`}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover"
        />
        <div className="scrim absolute inset-0" />
        <div className="relative mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-14 text-primary-foreground md:px-10">
          <Link
            href="/projeler"
            className="inline-flex min-h-11 w-fit items-center gap-2 eyebrow text-primary-foreground/80 transition-opacity hover:text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Projeler
          </Link>
          <h1 className="mt-6 font-display text-5xl font-light md:text-8xl">{project.title}</h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/85">
            {project.summary}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-16 md:grid-cols-[1fr_1.5fr]">
          <dl className="space-y-6 border-t border-border pt-6">
            {[
              ["Kategori", project.category],
              ["Konum", project.location],
              ["Yıl", project.year],
              ["Alan", project.area],
              ["İşveren", project.client],
              ["Durum", project.status],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-border pb-4">
                <dt className="eyebrow text-muted-foreground">{k}</dt>
                <dd className="text-sm">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="space-y-6 border-t border-border pt-6">
            {project.description.map((p) => (
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
          href={`/projeler/${next.slug}`}
          className="group mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-6 px-6 py-16 md:px-10"
        >
          <div>
            <p className="eyebrow text-muted-foreground">Sonraki proje</p>
            <p className="mt-3 font-display text-4xl font-light md:text-6xl">{next.title}</p>
          </div>
          <ArrowRight className="h-8 w-8 transition-transform group-hover:translate-x-2" />
        </Link>
      </div>
    </article>
  );
}
