# Uday Barman — Portfolio

A React + Vite portfolio site with a **Netflix-inspired dark UI**: deep black background, red accent, bold poster-style headlines, and horizontal-scrolling content rows for projects and GitHub repos — the same browsing pattern Netflix uses for title rows, hover-scale cards included. Positioned as **Java Full Stack Developer · MERN Stack Developer** throughout, since the project work spans both.

## What's dynamic

The **Live Feed** section (`GithubFeed.jsx`) calls the real GitHub REST API on every page load:

```
https://api.github.com/users/UdayBarman001/repos?sort=updated&per_page=100
```

- No auth token, no backend — it's a plain client-side `fetch()`, so it works on any static host.
- Renders repo name, description, primary language (color-coded dot), star count, and "synced Xd ago" from `pushed_at`.
- Shows a skeleton loading state, then a friendly rate-limit message if GitHub's unauthenticated 60-req/hour limit is hit (each real visitor has their own limit based on their IP, so this is rare in practice).
- The three curated project cards (Nexus, Electrotem, Listing-App) also try to match themselves to a real live repo by name (via `repoHint` in `data.js`) — when a match is found, the card's GitHub link points to the real repo and shows a "LIVE ON GITHUB" badge with star count instead of a static link.

If you ever want to swap in a different GitHub account, change `githubUsername` in `src/data.js` — everything downstream updates automatically.

## Structure

```
src/
  data.js               <- ALL content lives here (name, projects, experience, skills). Edit this file to update the site.
  index.css             <- design tokens (black/red palette, fonts) + global styles
  App.jsx               <- page layout, wires sections together
  useReveal.js           <- scroll-reveal hook used by section components
  useGithubRepos.js      <- live GitHub API hook + repo-matching helper
  components/
    Navbar.jsx/css        <- top nav, black-on-scroll, red wordmark, mobile hamburger menu
    Hero.jsx/css          <- Netflix-style featured banner (backdrop glow, big title, CTA buttons)
    Projects.jsx/css      <- horizontal-scrolling row of curated project cards, matched to live repos where possible
    GithubFeed.jsx/css    <- horizontal-scrolling row pulling all public repos from the GitHub API live
    Experience.jsx/css    <- internship bullets styled as a commit/change log
    Skills.jsx/css        <- tech stack chips + education/achievements
    Contact.jsx/css        <- contact section
    SiteFooter.jsx/css     <- closing site footer bar
```

## Responsive behavior

- **Desktop:** full-width black navbar (transparent at top, solid black on scroll); project/repo rows scroll horizontally with visible red-tinted scrollbars; hover-scale on cards.
- **Tablet/Mobile (<760px):** navbar collapses into a hamburger menu; horizontal rows keep scrolling (touch swipe works natively) with smaller card widths; hero stat strip wraps; all vertical sections go single-column.
- Respects `prefers-reduced-motion` (disables the pulsing live-dot, shimmer skeletons, and scroll-reveal animation).

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
```

Outputs static files to `dist/`. This is a static site — no server/backend required (the GitHub data is fetched client-side at runtime).

## Deploy (pick one)

### Vercel (recommended, easiest)
1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output dir `dist`. (Already configured via `vercel.json`.)
4. Deploy. You'll get a live URL in ~30 seconds; add a custom domain later from the project settings if you want.

### Netlify
1. Push to GitHub.
2. [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**.
3. Build command `npm run build`, publish directory `dist` (already set in `netlify.toml`).
4. Deploy.

### GitHub Pages
1. `npm install -D gh-pages`
2. Add to `package.json` scripts: `"deploy": "vite build && gh-pages -d dist"`
3. Set `base: '/<your-repo-name>/'` in `vite.config.js` if deploying to `username.github.io/repo-name`.
4. Run `npm run deploy`.

## Updating content

You almost never need to touch a component file. Everything text-based — your name, tagline, project descriptions, metrics, stack tags, experience bullets, skills, education, achievements — lives in **`src/data.js`**. Edit that file, save, and every section updates automatically. The GitHub repo feed needs no editing at all — it just reflects whatever is actually in your account.

To add a 4th project, copy one of the objects in the `projects` array in `data.js` and fill in your own `metrics`, `stack`, `stackType` (`'JAVA STACK'` or `'MERN STACK'`), `repoHint` (lowercase repo name to try to auto-match), and `links`.

## Notes

- Phone number was intentionally left off this public site (email + LinkedIn are enough for a recruiter to reach you, and a phone number sitting in a public GitHub repo is scraped by bots). Add it back in `data.js` and `Contact.jsx` if you want it visible.
- Demo links are currently `null` for all three curated projects — add real deployed URLs in `data.js` (`links.demo`) as soon as you have them live; a "GitHub only" project reads as less finished to a recruiter doing an 11-second scan.
- Respects `prefers-reduced-motion` and has visible keyboard focus states throughout.

