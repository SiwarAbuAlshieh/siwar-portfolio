import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = getSiteUrl();
  const languages = { en: url, ar: `${url}/ar` };
  return [
    { url, changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: `${url}/ar`, changeFrequency: "monthly", priority: 0.9, alternates: { languages } },
  ];
}
