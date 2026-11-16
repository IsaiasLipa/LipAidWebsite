# LIPAID Transportation Website

The marketing website for **LIPAID**, a family-owned non-emergency medical transportation company serving Medicaid and Medicare patients. The site introduces the company, explains why patients choose it, and tells them how to book rides through **MAS** (Medical Answering Services).

**Live:** https://lipaid-transportation.com/

## Features

- Single-page layout with **Home**, **About** and **Contact** sections, linked by in-page anchors
- **English / Spanish toggle**: one button switches all site copy
- Responsive header with a mobile menu
- No backend: a static build deployed to GitHub Pages

## Tech stack

- React 19
- Vite 7
- Plain CSS (one stylesheet per component)
- `gh-pages` for deployment

## Project structure

```
src/
├── App.jsx            # Page layout + language state
├── i18n.js            # All site copy, keyed by language (en / es)
├── components/
│   ├── Header.jsx     # Logo, nav, mobile menu
│   ├── Home.jsx       # Hero + "Book your trip" CTA
│   ├── About.jsx      # Who we are / why pick us
│   └── Contact.jsx    # How to book through MAS
└── assets/            # Logos and section images
```

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Editing content

All text lives in `src/i18n.js`, under `translations.en` and `translations.es`. To change copy, edit both languages there. The components contain no hard-coded text.

To add a language:

1. Add another key to `translations` in `src/i18n.js`.
2. Update the toggle in `App.jsx`. It currently switches between `en` and `es` only.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build and publish `dist/` to the `gh-pages` branch |

## Deployment

`npm run deploy` builds the site and pushes it to the `gh-pages` branch. GitHub Pages serves it on the custom domain **lipaid-transportation.com**. `vite.config.js` sets `base: './'` so assets load from relative paths.
