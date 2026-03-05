import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://pdfzen.vercel.app",
      lastModified: "2026-03-05",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
