import type { Metadata } from "next";
import ProjectDetailPage, { generateStaticParams as originalGenerateStaticParams } from "@/app/projeler/[slug]/page";
import { getProject } from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return originalGenerateStaticParams();
}

export async function generateMetadata(props: PageProps) {
  const { slug } = await props.params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found — KENET", robots: { index: false } } satisfies Metadata;
  }

  const title = `${project.titleEn ?? project.title} — KENET`;
  const description = project.summaryEn ?? project.summary;
  return {
    title,
    description,
    alternates: {
      canonical: `/en/projects/${project.slug}`,
      languages: {
        "tr-TR": `/projeler/${project.slug}`,
        "en-US": `/en/projects/${project.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: String(project.cover), alt: project.titleEn ?? project.title }],
    },
  } satisfies Metadata;
}

export default async function EnglishProjectDetailPage(props: PageProps) {
  return <ProjectDetailPage {...props} />;
}
