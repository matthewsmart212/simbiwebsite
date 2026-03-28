# Simbi Website

Placeholder site for the Simbi iOS app, built with [Astro](https://astro.build).

## Development

```bash
npm install
npm run dev       # Start dev server at localhost:4321
npm run build     # Build to dist/
npm run preview   # Preview production build locally
```

## Deploy to Cloudflare Pages

### Option 1: Git integration (recommended)

1. Push this repo to GitHub
2. Go to [Cloudflare Pages](https://dash.cloudflare.com/) > Workers & Pages > Create
3. Connect your GitHub repo
4. Astro is auto-detected — defaults are correct:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Add your custom domain under Custom Domains

### Option 2: Direct upload

1. Run `npm run build`
2. Go to Cloudflare Pages > Create > Upload assets
3. Drag and drop the `dist/` folder
