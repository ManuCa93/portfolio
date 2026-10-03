import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resources } from './src/locales.js'
import { PROJECT_SLUGS, projectPath } from './src/projectRoutes.js'

const SITE = 'https://manuelcattoni.com'
const PERSON_ID = `${SITE}/#person`

const escapeHtml = s =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// Translations mark emphasis with **double asterisks**; plain text has no use for them.
const plain = s => String(s || '').replace(/\*\*(.+?)\*\*/g, '$1')

// Each swap must hit exactly the tag it targets: if index.html changes shape,
// fail the build instead of shipping project pages with the homepage's metadata.
const swap = (html, pattern, replacement) => {
  if (!pattern.test(html)) throw new Error(`project-pages: ${pattern} not found in index.html`)
  return html.replace(pattern, replacement)
}

const projectPage = (html, id) => {
  const p = resources.en.translation.projects[id]
  const url = SITE + projectPath(id)
  const title = `${p.title} — Manuel Cattoni`
  const description = plain(p.summary)
  // Each project previews with its own card (scripts/og-images.mjs). The
  // portrait stays the homepage's alone, so a search for the name shows the
  // photo linking to the portfolio, never to one of the projects.
  const image = `${SITE}/og/${PROJECT_SLUGS[id]}.jpg`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        name: p.title,
        description,
        url,
        image,
        // a reference to the Person on the homepage, without its portrait
        author: { '@type': 'Person', '@id': PERSON_ID, name: 'Manuel Cattoni', url: `${SITE}/` },
        keywords: p.techStack
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Manuel Cattoni', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: p.title, item: url }
        ]
      }
    ]
  }

  const highlights = Array.isArray(p.highlights)
    ? `<ul>${p.highlights.map(h => `<li>${escapeHtml(plain(h))}</li>`).join('')}</ul>`
    : ''
  const fallback = `<noscript>
      <h1>${escapeHtml(p.title)}</h1>
      <p>${escapeHtml(description)}</p>
      <p>${escapeHtml(plain(p.details))}</p>
      ${highlights}
      <p>Tech stack: ${escapeHtml(p.techStack)}</p>
      <p>A project by <a href="/">Manuel Cattoni</a>.</p>
    </noscript>`

  let out = html
  out = swap(out, /<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`)
  out = swap(out, /(name="description"\s+content=")[^"]*/, `$1${escapeHtml(description)}`)
  out = swap(out, /(rel="canonical" href=")[^"]*/, `$1${url}`)
  out = swap(out, /(property="og:url" content=")[^"]*/, `$1${url}`)
  out = swap(out, /(property="og:title" content=")[^"]*/, `$1${escapeHtml(title)}`)
  out = swap(out, /(property="og:description"\s+content=")[^"]*/, `$1${escapeHtml(description)}`)
  out = swap(out, /(name="twitter:title" content=")[^"]*/, `$1${escapeHtml(title)}`)
  out = swap(out, /(property="og:image" content=")[^"]*/, `$1${image}`)
  out = swap(out, /(property="og:image:width" content=")[^"]*/, '$11200')
  out = swap(out, /(property="og:image:height" content=")[^"]*/, '$1630')
  out = swap(out, /(property="og:image:alt" content=")[^"]*/, `$1${escapeHtml(p.title)}`)
  out = swap(out, /(name="twitter:card" content=")[^"]*/, '$1summary_large_image')
  out = swap(out, /(name="twitter:image" content=")[^"]*/, `$1${image}`)
  out = swap(out, /<noscript>[\s\S]*?<\/noscript>/, fallback)
  // The homepage's structured data (WebSite + the Person with the portrait)
  // is replaced, not appended to: the project page describes the project.
  out = swap(
    out,
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`
  )
  return out
}

/* The app is one page whose projects open in a modal, which left search engines
   a single address to index. After the build this writes a static copy of the
   page per project at /projects/<slug>/ with that project's title, description,
   canonical and structured data (the app opens the modal from the address), a
   404.html so unknown addresses still show the site, and a sitemap listing it all. */
const projectPages = () => {
  let outDir
  return {
    name: 'project-pages',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const html = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8')
      for (const id of Object.keys(PROJECT_SLUGS)) {
        const dir = path.join(outDir, projectPath(id))
        fs.mkdirSync(dir, { recursive: true })
        fs.writeFileSync(path.join(dir, 'index.html'), projectPage(html, id))
      }
      fs.writeFileSync(path.join(outDir, '404.html'), html)

      const urls = [`${SITE}/`, ...Object.keys(PROJECT_SLUGS).map(id => SITE + projectPath(id)), `${SITE}/Cattoni_Resume.pdf`]
      fs.writeFileSync(
        path.join(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>
`
      )
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  // Absolute, not './': project pages live two folders deep and must still
  // resolve /assets/... from the domain root.
  base: '/',
  plugins: [react(), projectPages()],
})
