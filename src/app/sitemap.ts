import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const siteUrl = "https://www.kenetmimarlik.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "/", priority: 1, changeFrequency: "monthly" as const },
    { path: "/hakkimizda", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/hizmetler", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/projeler", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/iletisim", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "/en", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/en/about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/en/services", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/en/projects", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/en/contact", priority: 0.6, changeFrequency: "yearly" as const },
  ];

  const projectRoutes = projects.flatMap((project) => [
    {
      url: `${siteUrl}/projeler/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.7,
      images: [`${siteUrl}${project.cover}`],
    },
    {
      url: `${siteUrl}/en/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.6,
      images: [`${siteUrl}${project.cover}`],
    },
  ]);

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...projectRoutes,
  ];
}
