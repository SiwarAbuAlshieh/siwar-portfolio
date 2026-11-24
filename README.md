# Siwar Abu Alshieh — Portfolio

Personal portfolio website for **Siwar Abu Alshieh**, Shopify Developer & Technical CRO Specialist.

A single-page, static site built with Next.js (App Router), TypeScript and Tailwind CSS. No server, database, API routes, environment variables, analytics or paid services. It runs on Vercel's free Hobby plan.

## Run locally

Requires [Node.js](https://nodejs.org) 20.9 or newer.

```bash
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

| Command | What it does |
|---|---|
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check (`tsc --noEmit`) |
| `npm run optimize:portrait` | Re-create the web-optimized portrait from `public/portrait.png` |

## Edit the content

The site has two language versions built from the same components:

| Version | URL | Text file |
|---|---|---|
| English | `/` | **`src/content/site.ts`** |
| Arabic (right-to-left) | `/ar` | **`src/content/site.ar.ts`** |

Each file holds all the text for one language: hero, highlights, every section, experience, skills, contact, footer and the small interface labels. Change the text there and the page updates automatically. Components in `src/components/` only render that data. Shared details (email, LinkedIn, photo, CV, site URL) are set once in `site.ts`; the Arabic file reuses them. When you add or remove an item in one language, do the same in the other, because TypeScript checks that both files have the same structure.

## Replace the photo

1. Replace `public/portrait.png` with the new photo (keep the file name).
2. Run `npm run optimize:portrait`. This creates `public/portrait-optimized.webp` (only re-encoded: no crop, no filters).
3. If the new photo has a different size, update `portrait.width` and `portrait.height` in `src/content/site.ts`.

The Open Graph / LinkedIn share image (`src/app/opengraph-image.tsx`) is generated from `public/portrait.png` at build time.

## Replace the CV

Replace `public/Siwar-Abu-Alshieh-CV.pdf` with the new PDF, keeping the same file name.

## Deploy on Vercel (free Hobby plan)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub (choose the free **Hobby** plan).
2. Click **Add New… → Project** and import the `siwar-portfolio` repository.
3. Keep the defaults (Framework Preset: **Next.js**) and click **Deploy**. No environment variables are needed.
4. After the deploy, copy your `*.vercel.app` URL, set it as `url` in `src/content/site.ts` (see the TODO comment), then commit and push. Vercel redeploys automatically on every push to `main`.

No custom domain is required.

## Project structure

```
public/                    portrait (original + optimized) and CV
scripts/optimize-portrait.mjs
src/app/(en)/              English layout + page  (/)
src/app/(ar)/ar/           Arabic layout + page   (/ar, right-to-left)
src/app/                   share image, favicon, robots, sitemap, 404 page
src/components/            reusable UI components (HomePage renders either language)
src/content/site.ts        English text + shared details
src/content/site.ar.ts     Arabic text
src/lib/                   fonts, metadata, site URL helper, share-image renderer
```
