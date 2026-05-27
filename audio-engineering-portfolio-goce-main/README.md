# Claire Goce Audio Portfolio

A polished, publish-ready Next.js portfolio for Claire Anne Maxine T. Goce, focused on audio engineering, mixing, dubbing, dialogue editing, and creative multimedia sound work.

## What was improved

- Rebuilt the homepage into a complete one-page portfolio with hero, work, services, workflow, about, and contact sections.
- Added in-page Google Drive preview modals for portfolio samples.
- Replaced unstable random-render animations with deterministic, hydration-safe visual elements.
- Removed corrupted image dependencies and replaced them with CSS-based studio visuals.
- Cleaned the project for deployment by removing unused builder scripts and external CDN loaders.
- Updated SEO metadata, sitemap, robots file, and schema data.
- Added responsive styling for desktop, tablet, and mobile screens.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build for production

```bash
npm run build
npm run start
```

## Deploy

This project is ready for Vercel deployment. Upload the folder to GitHub, import it in Vercel, and deploy using the default Next.js settings.

## Update portfolio links

Edit the `workItems` array in `app/page.tsx` to update Google Drive links, descriptions, titles, or categories.

For Google Drive previews to work, each file should be shared as: **Anyone with the link can view**.

## Update contact and SEO details

Edit `lib/site-config.ts` to update the portfolio name, email, location, social links, site URL, and SEO metadata.
