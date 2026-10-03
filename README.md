# Portfolio — Manuel Cattoni

Personal portfolio site: a single page listing my projects grouped by category, each one expandable into a description, tech stack, feature highlights and a screenshot gallery. Trilingual (English, Italian, German) with automatic browser-language detection, and a light/dark theme.

**Live:** https://manuelcattoni.com/

## Stack

| | |
|---|---|
| UI | React 19 |
| Build | Vite 8, plus a small plugin that pre-renders one page per project |
| i18n | i18next + react-i18next + browser language detector |
| Lint | Oxlint |
| Hosting | GitHub Pages (`gh-pages` branch) |

No CSS framework — styling is hand-written in `src/index.css` using CSS custom properties for theming.

## Getting started

```bash
npm install
npm run dev        # dev server with HMR
```

### Scripts

| Script | What it does |
|---|---|
| `npm run dev` | Vite dev server |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run lint` | Oxlint over the source |

## Project structure

```
.
├─ index.html                  Entry HTML, mounts #root
├─ vite.config.js              Vite + React, and the project-pages plugin
│                               (per-project HTML, 404.html, sitemap.xml)
├─ .github/workflows/deploy.yml  CI: build + publish to gh-pages on push to master
├─ docs/
│  └─ portfolio-package-prompt.md   Reusable prompt for generating a project's
│                                   screenshot package from its own repo
├─ public/                     Copied verbatim into the build
│  ├─ CNAME                    Custom domain for GitHub Pages
│  ├─ robots.txt
│  ├─ favicon.svg / .ico       MC monogram: tab icon, bookmarks, Google result
│  ├─ icon-192.png             Same mark as a PNG, for Google and Android
│  ├─ apple-touch-icon.png     Same mark for the iOS home screen
│  ├─ avatar.png               Homepage share image (the portrait)
│  ├─ og/<slug>.jpg            Per-project share images, from scripts/og-images.mjs
│  └─ Cattoni_Resume.pdf       Linked from the CV button
└─ src/
   ├─ main.jsx                 React root, imports index.css + i18n
   ├─ App.jsx                  The whole UI: asset imports, galleries,
   │                           project definitions, components
   ├─ i18n.js                  i18next setup
   ├─ locales.js               All copy for all three languages
   ├─ projectRoutes.js         Project id → /projects/<slug>/ address
   ├─ index.css                Every style rule + theme tokens
   └─ assets/
      ├─ icons/                Small icons used as project card badges
      └─ projects/<project>/   Gallery screenshots, one folder per project
```

Two things worth knowing up front:

- **All user-facing text lives in `src/locales.js`**, never in `App.jsx`. `App.jsx` only holds structure and `t()` keys.
- **`src/index.css` is the only stylesheet.** There is no `App.css`.

## The project model

`App.jsx` defines four arrays, rendered in this order by `<ProjectGrid>`:

| Array | Section heading key |
|---|---|
| `dataAiProjects` | `sections.data_ai` |
| `mobileProjects` | `sections.mobile` |
| `webProjects` | `sections.websites` |
| `gameProjects` | `sections.games` |

Each entry is an object:

```js
{
  id: 'polify',              // i18n key: all copy is read from projects.<id>.*
  link: null,                // external URL, or null for no link
  badgeKey: 'in_progress',   // key under badges.* in locales.js
  badgeClass: 'badge-in-progress',
  iconType: 'svg',           // 'svg' → inline JSX | 'img' → an imported image
  iconContent: <svg .../>,
  gallery: polifyGallery,    // optional
  hasHighlights: true,       // reads projects.<id>.highlights as an array
  galleryOrientation: 'vertical'  // optional; use for phone screenshots
}
```

A gallery is an array pairing an imported image with a caption key:

```js
const polifyGallery = [
  { src: polifyHome,      captionKey: 'home' },
  { src: polifySondaggio, captionKey: 'sondaggio' }
];
```

`captionKey` resolves to `projects.<id>.gallery.<captionKey>` in every language.

## Adding a project

1. Drop the screenshots in `src/assets/projects/<project>/`. Name them so that
   **alphabetical order equals the order you want them shown** (`01_…`, `02_…`)
   — the gallery renders in array order, and that convention keeps the two in sync.
2. Import them at the top of `App.jsx` and define a `<project>Gallery` array.
3. Add the entry to the right `…Projects` array.
4. Add a `projects.<id>` block to **all three languages** in `src/locales.js`:
   `title`, `summary`, `techStack`, `details`, optional `highlights[]`, and a
   `gallery` object with one caption per `captionKey`.
5. Give it a slug in `src/projectRoutes.js`. That becomes its address,
   `/projects/<slug>/`: the build writes a page there with the project's own
   title and description, and adds it to `sitemap.xml`. Don't rename a slug
   once it's live, since it breaks links already shared or indexed.
6. Add it to `CARDS` in `scripts/og-images.mjs` and run
   `node scripts/og-images.mjs` to make its link-preview image
   (`public/og/<slug>.jpg`), then commit it. The build does not check for it,
   and without it the project's page points at a missing image. Project pages
   deliberately never use the portrait: Google would pair the photo with the
   project instead of with the homepage.

A missing key falls back to English (`fallbackLng: 'en'`), so a forgotten
translation degrades quietly rather than crashing — worth double-checking.

### Featuring a project with a video

A project with a `video: { src, poster }` entry is shown as a full-width row led
by a looping preview instead of a grid card. It plays only while on screen and
never autoplays for reduced motion or Data Saver.

1. Record 10–20 s of the app in 16:9, one action, no idle start. Raw recordings
   in the repo root are gitignored.
2. Encode it next to the project's screenshots (speed up with `setpts=PTS/1.5`
   if it runs long), then take the first frame as the poster:

   ```sh
   ffmpeg -i raw.mp4 -an -vf "fps=30,scale=1440:-2" -c:v libx264 -preset slow \
     -crf 28 -pix_fmt yuv420p -movflags +faststart src/assets/projects/<p>/preview.mp4
   ffmpeg -i src/assets/projects/<p>/preview.mp4 -frames:v 1 -q:v 4 \
     src/assets/projects/<p>/preview-poster.jpg
   ```

   Aim for 2–4 MB; raise `-crf` for dense, colourful screens.
3. Import both in `App.jsx` and add the `video` entry to the project.

### Screenshot sizing

Gallery screenshots are displayed large, so full-resolution is correct for them.
**Icons are rendered at 24px** — keep anything in `src/assets/icons/` (and project
logos used as icons) at 256×256 or smaller. An unscaled 2048px logo adds
megabytes to the bundle for no visible gain.

## Adding a language

Add a top-level key to `resources` in `src/locales.js` mirroring the `en` block in
full. The language detector picks it up from the browser automatically; the
switcher in `App.jsx` reads from the same list.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which runs
`npm ci && npm run build` on Node 22 and publishes `dist/` to the `gh-pages`
branch via `peaceiris/actions-gh-pages`. To redeploy without a push, run the
workflow by hand from the Actions tab (it has `workflow_dispatch`).

## Repo conventions

- `dist/` and `node_modules/` are generated; never commit them.
- `*.zip` is gitignored. Screenshot deliveries arrive as archives — unzip, move
  the images into `src/assets/projects/<project>/`, then delete the archive
  instead of leaving it in the repo.
- Raw screenshots dumped in the repo root (`Immagine*.jpg`, `*_screen.jpg`) are
  gitignored too: sort them into `src/assets/projects/` before committing.

## License

Two-part license, see [`LICENSE`](LICENSE): the **source code** is MIT, while the
**personal content** (photos, résumé, screenshots, logos and the site's written
text in every language) is all rights reserved. Reusing the code is fine;
swap in your own content.
