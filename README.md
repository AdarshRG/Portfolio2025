# Adarsh RG Portfolio

This repository contains the editable React, TypeScript, and Vite source for the portfolio. Edit the page sections in `src/components/` and the page layout in `src/pages/Index.tsx`. Global styling is in `src/index.css`; component styles are in `src/App.css` and `src/`.

## Run locally

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. The development server uses the `/Portfolio2025/` base path configured for GitHub Pages.

## Build and deploy

```sh
npm run build
npm run deploy
```

`npm run deploy` builds the site and publishes the generated `dist/` directory to the `gh-pages` branch. The hashed files in `dist/assets/` are generated during the build; make edits in `src/`, not in those generated files.
