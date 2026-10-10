# Adarsh Agarwala's Portfolio

Next.js, TypeScript, Tailwind and Framer Motion. Based on the layout of [MitchellSparrow/portfolioWebsite](https://github.com/MitchellSparrow/portfolioWebsite), with the CMS replaced by a local data file.

## Edit your content

All text, links and image paths live in [`content/data.ts`](content/data.ts). Put images in `public/images/` and reference them as `/images/<file>`.

## Run

```bash
npm install
npm run dev
```

## Deploy

Static export: `npm run build && npx next export` (outputs `out/`). For a sub-path host such as GitHub Pages set `NEXT_PUBLIC_BASE_PATH=/portfolio-website-v2` before building. On Vercel, no env var is needed.
