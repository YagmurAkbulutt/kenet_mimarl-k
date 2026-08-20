import ProjectDetailPage, {
  generateMetadata as originalGenerateMetadata,
  generateStaticParams as originalGenerateStaticParams,
} from "@/app/projeler/[slug]/page";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return originalGenerateStaticParams();
}

export async function generateMetadata(props: PageProps) {
  return originalGenerateMetadata(props);
}

export default async function EnglishProjectDetailPage(props: PageProps) {
  return <ProjectDetailPage {...props} />;
}
