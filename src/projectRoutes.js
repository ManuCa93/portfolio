/* One address per project, so each can be indexed by search engines and shared
   on its own. Read by the app (to keep the address bar in step with the open
   modal) and by the build (to pre-render a page per project), so it stays plain
   JS with no imports. Changing a slug breaks links already out there. */
export const PROJECT_SLUGS = {
  adosDashboard: 'ados-clinical-dashboard',
  motogp: 'motogp-position-estimator',
  uni: 'university-projects',
  football: 'football-predictions',
  f1: 'f1-predictions-2024',
  pantrypilot: 'pantrypilot',
  driving: 'enjoy-the-night',
  polify: 'polify',
  pomodoro: 'pomodoro-timer',
  priceTracker: 'price-tracker',
  brickbreakers: 'brickbreakers-f1'
};

export const projectPath = id => `/projects/${PROJECT_SLUGS[id]}/`;

// GitHub Pages redirects the slash-less form to the slash one; accept both.
export const projectIdFromPath = path => {
  const slug = path.match(/^\/projects\/([^/]+)\/?$/)?.[1];
  return Object.keys(PROJECT_SLUGS).find(id => PROJECT_SLUGS[id] === slug) || null;
};
