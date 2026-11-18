/* The single source of truth for the site's identity: domain, profiles, contact
   and the CV file. Change a value here and it follows everywhere.

   Plain JS with no imports, because it is read by three different runtimes:
   - the app (src/App.jsx),
   - the build (vite.config.js, which also fills the %PLACEHOLDERS% in
     index.html and writes robots.txt, CNAME and sitemap.xml),
   - scripts/og-images.mjs.

   To swap the CV, drop the new PDF in public/ and change CV_FILE. */

export const NAME = 'Manuel Cattoni';

export const SITE_TITLE = `${NAME} - AI Engineer Portfolio`;
export const SITE_DESCRIPTION =
  `${NAME} — student and software developer from Varese. Data & AI, mobile apps, websites and games.`;

export const DOMAIN = 'manuelcattoni.com';
export const SITE_URL = `https://${DOMAIN}`;

export const CV_FILE = 'cattoni_manuel_cv.pdf';
export const CV_PATH = `/${CV_FILE}`;

export const EMAIL = 'manuel.cattoni93@gmail.com';

export const GITHUB_USER = 'ManuCa93';
export const GITHUB_URL = `https://github.com/${GITHUB_USER}`;
export const githubRepo = name => `${GITHUB_URL}/${name}`;

export const LINKEDIN_URL = 'https://www.linkedin.com/in/manuel-cattoni-169631339/';
export const INSTAGRAM_URL = 'https://instagram.com/cattonii';
export const HEVY_URL = 'https://hevy.com/user/mmanuca';
export const STRAVA_URL = 'https://www.strava.com/athletes/184003417';

// Cookieless analytics; the dashboard lives at <GOATCOUNTER_CODE>.goatcounter.com.
export const GOATCOUNTER_CODE = 'manuca';

// Homepage link-preview image and its size.
export const AVATAR_URL = `${SITE_URL}/avatar.png`;
