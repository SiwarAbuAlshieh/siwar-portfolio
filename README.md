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

All text on the site lives in **`src/content/site.ts`**: hero, highlights, every section, experience, skills, contact and footer. Change the text there and the components update automatically. Components in `src/components/` only render that data.

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
src/app/                   layout, page, icon, OG image, robots, sitemap
src/components/            reusable UI components
src/content/site.ts        all site text
src/lib/                   site URL helper, OG image renderer
```
