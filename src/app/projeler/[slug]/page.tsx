import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProjectDetailView } from "@/components/ProjectDetailView";
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

  return <ProjectDetailView slug={slug} />;
}
