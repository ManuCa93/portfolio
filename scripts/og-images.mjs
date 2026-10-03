/* Builds the link-preview image (og:image) for every project page into
   public/og/<slug>.jpg, 1200x630. Without these, every shared or indexed
   project showed the homepage's portrait instead of the project.

   The art sits in the middle of the canvas on purpose: Google and most chat
   apps crop previews to a centred square or 16:9, so the edges may be lost.

     node scripts/og-images.mjs

   Needs Google Chrome on the PATH (headless, for rendering) and ImageMagick
   (`magick`, for the PNG to JPEG step). Re-run it after adding a project or
   changing a cover, then commit the images. */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { resources } from '../src/locales.js';
import { PROJECT_SLUGS } from '../src/projectRoutes.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const asset = p => `file://${path.join(root, 'src/assets/projects', p)}`;
const outDir = path.join(root, 'public/og');

// Same hues as the category accents in index.css.
const ACCENT = { data_ai: '#0a84ff', mobile: '#bf5af2', websites: '#30d5c8', games: '#ff9f0a' };

/* What each card shows. `shot`: one landscape screenshot as a window;
   `phones`: three phone screens side by side; `text`: no screenshots, so the
   monogram and the title. */
const CARDS = {
  adosDashboard: { category: 'data_ai', shot: 'ados/01_dashboard_overview.png' },
  motogp: { category: 'data_ai', shot: 'motogp/01_live_time_attack_leaderboard.jpg' },
  uni: { category: 'data_ai', shot: 'uni/16_mri_tumor_annotations.jpg' },
  football: { category: 'data_ai' },
  f1: { category: 'data_ai' },
  pantrypilot: {
    category: 'mobile',
    phones: ['alimenti/02_pantry_inventory.png', 'alimenti/01_home_dashboard.png', 'alimenti/04_recipes_cookbook.png']
  },
  driving: {
    category: 'mobile',
    phones: ['enjoythenight/01_onboarding_welcome.png', 'enjoythenight/03_dashboard_overview.png', 'enjoythenight/05_dashboard_over_limit_warning.png']
  },
  polify: { category: 'websites', shot: 'polify/home-desktop-scuro.jpg' },
  pomodoro: { category: 'websites', shot: 'pomodoro/main_dashboard.jpg' },
  priceTracker: { category: 'websites' },
  brickbreakers: { category: 'games' }
};

// The monogram's shapes, lifted from the favicon so the two never drift apart.
const logoPaths = fs
  .readFileSync(path.join(root, 'public/favicon.svg'), 'utf8')
  .match(/<path[^>]*\/>/g)
  .join('');
const logo = size =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="285 279.5 461.5 306" width="${size}" height="${(size * 306) / 461.5}">${logoPaths}</svg>`;

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

const page = (id, card) => {
  const accent = ACCENT[card.category];
  const t = resources.en.translation;
  const title = t.projects[id].title;
  const section = t.sections[card.category];

  let art;
  if (card.shot) {
    art = `<div class="window"><img src="${asset(card.shot)}"></div>`;
  } else if (card.phones) {
    art = `<div class="phones">${card.phones.map(p => `<img src="${asset(p)}">`).join('')}</div>`;
  } else {
    art = `<div class="text">
      ${logo(150)}
      <p class="eyebrow"><span class="dot"></span>${esc(section)}</p>
      <h1>${esc(title)}</h1>
      <p class="by">Manuel Cattoni · manuelcattoni.com</p>
    </div>`;
  }

  return `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700;800&display=block" rel="stylesheet">
<style>
  * { margin: 0; box-sizing: border-box; }
  html, body { width: 1200px; height: 630px; overflow: hidden; }
  body {
    font-family: Inter, sans-serif;
    color: #0b0b0b;
    background:
      radial-gradient(900px 500px at 50% 120%, color-mix(in srgb, ${accent} 22%, transparent), transparent),
      #f5f5f5;
    display: grid;
    place-items: center;
  }
  .window {
    position: absolute; left: 70px; right: 70px; top: 56px; bottom: -40px;
    border-radius: 18px; overflow: hidden; background: #fff;
    box-shadow: 0 0 0 1px rgba(11,11,11,.08), 0 30px 70px -20px rgba(11,11,11,.35);
  }
  .window::before {
    content: ''; position: absolute; inset: 0 0 auto 0; height: 5px; background: ${accent}; z-index: 1;
  }
  .window img { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; }
  .phones { display: flex; gap: 34px; align-items: center; }
  .phones img {
    height: 560px; border-radius: 30px; display: block;
    box-shadow: 0 0 0 1px rgba(11,11,11,.08), 0 30px 60px -20px rgba(11,11,11,.4);
  }
  .phones img:nth-child(2) { height: 600px; }
  .text { display: grid; justify-items: center; text-align: center; gap: 18px; max-width: 900px; }
  .text svg { margin-bottom: 18px; }
  .eyebrow {
    display: inline-flex; align-items: center; gap: 12px;
    font-size: 24px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase;
    color: color-mix(in srgb, ${accent} 70%, #0b0b0b);
  }
  .dot { width: 14px; height: 14px; border-radius: 50%; background: ${accent}; }
  h1 { font-size: 76px; font-weight: 800; letter-spacing: -.035em; line-height: 1.02; }
  .by { font-size: 24px; font-weight: 500; color: #6b6b6b; }
</style></head><body>${art}</body></html>`;
};

fs.mkdirSync(outDir, { recursive: true });
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'og-'));

for (const [id, card] of Object.entries(CARDS)) {
  const slug = PROJECT_SLUGS[id];
  const html = path.join(tmp, `${slug}.html`);
  const png = path.join(tmp, `${slug}.png`);
  fs.writeFileSync(html, page(id, card));
  execFileSync('google-chrome', [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--allow-file-access-from-files',
    '--force-device-scale-factor=1',
    '--window-size=1200,630',
    '--virtual-time-budget=5000',
    `--screenshot=${png}`,
    `file://${html}`
  ], { stdio: 'ignore' });
  execFileSync('magick', [png, '-strip', '-quality', '84', path.join(outDir, `${slug}.jpg`)]);
  console.log(`og/${slug}.jpg`);
}

fs.rmSync(tmp, { recursive: true, force: true });
