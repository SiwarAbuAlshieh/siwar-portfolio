import { site } from "@/content/site";

/**
 * The public URL of the site, used for metadata, sitemap and Open Graph tags.
 *
 * Order of preference:
 * 1. `site.url` in src/content/site.ts (TODO: set this after the first Vercel deploy)
 * 2. VERCEL_PROJECT_PRODUCTION_URL — provided automatically by Vercel, no setup needed
 * 3. http://localhost:3000 for local development
 */
export function getSiteUrl(): string {
  if (site.url) return site.url.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}
