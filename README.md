# Affordable Roofing Systems — Astro Redesign

Production-grade Astro foundation for the Affordable Roofing Systems website redesign.
The repository currently contains the completed homepage implementation, reusable site
shell, typed content models, structured data, responsive behavior, automated quality
checks, and the architecture needed to expand the site to its service, material,
location, campaign, general, and blog pages.

> [!IMPORTANT]
> This is a redesign preview. Crawling is intentionally blocked in `public/robots.txt`
> until the URL migration, redirects, canonical URLs, and production launch have been
> approved.

## Current status

- Homepage rebuilt from the approved Pencil design at the 1440 px and 360 px targets.
- Tablet composition at 768 px remains an Astro-only implementation task.
- Shared header, footer, navigation, CTAs, FAQ accordion, certification slider, and
  structured data are implemented.
- Six repeatable page families have executable content schemas and pilot fixtures.
- Final URL architecture and the complete legacy-content migration remain pending.
- Vercel is used for review deployments; the existing production domain is not changed
  by deploying this repository.

## Technology

- [Astro](https://astro.build/) with static output
- TypeScript in strict mode
- Tailwind CSS v4 available through the Vite integration
- Component-scoped Astro CSS plus global design tokens and base styles
- Astro Content Collections with typed schemas
- Vitest for content and structured-data tests
- ESLint and Prettier
- GitHub Actions quality gate
- Vercel preview deployments

The styling approach is documented in
[`docs/architecture/ADR-004-tailwind-and-css.md`](docs/architecture/ADR-004-tailwind-and-css.md).
Global CSS is reserved for tokens, resets, typography, and genuinely site-wide rules;
section-specific styling stays colocated with its Astro component.

## Requirements

- Node.js 24 (`.nvmrc`)
- npm 11 or a compatible npm version

## Local development

```bash
npm ci
npm run dev
```

The local site is available at `http://localhost:4321/` by default.

| Command                | Purpose                                             |
| ---------------------- | --------------------------------------------------- |
| `npm run dev`          | Start the Astro development server                  |
| `npm run sync`         | Synchronize content collections and generated types |
| `npm run check`        | Run Astro and TypeScript diagnostics                |
| `npm run lint`         | Lint JavaScript, TypeScript, and Astro files        |
| `npm run format`       | Format supported files                              |
| `npm run format:check` | Verify formatting without modifying files           |
| `npm run test`         | Run the automated test suite                        |
| `npm run build`        | Generate the static production build in `dist/`     |
| `npm run preview`      | Preview the generated production build locally      |
| `npm run validate`     | Run every required quality gate                     |

Run `npm run validate` before every push. GitHub Actions repeats the same validation on
pushes to `main` and on pull requests.

## Project structure

```text
src/
├── assets/                 Optimized source images
├── components/
│   ├── navigation/         Shared header and footer
│   └── sections/home/      Homepage sections
├── content/                Typed pilot content entries
│   └── schemas/            Reusable page and support schemas
├── data/                   Site-wide content and business data
├── i18n/                   Locale-ready UI copy and utilities
├── layouts/                Shared page layouts
├── lib/                    Structured-data and shared utilities
├── pages/                  Astro routes
└── styles/                 Global tokens and base styles

docs/
├── architecture/           Architecture decision records
├── design/                 Design inventories and implementation references
└── qa/                     Quality-assurance documentation
```

## Content architecture

Primary page collections:

- `services`
- `materials`
- `locations`
- `posts`
- `pages`
- `campaigns`

Supporting collections:

- `media`
- `authors`
- `forms`
- `claims`
- `faqs`
- `testimonials`

Each entry uses a permanent `contentId`, a logical `routeKey`, and `legacyUrls` for
migration history. Final paths are intentionally not embedded in the content models;
they will be attached after the URL architecture is approved.

## Implementation rules

- Keep one semantic content source across desktop, tablet, and mobile.
- Breakpoints may change layout, order, spacing, sizing, and presentation—not meaning.
- Preserve valuable legacy content unless removal is explicitly approved.
- Prefer reusable components and data models over page-specific duplication.
- Keep JavaScript optional and narrowly scoped; ship static HTML and CSS by default.
- Respect `prefers-reduced-motion` and accessibility requirements.
- Preserve one clear H1, descriptive landmarks, useful alternative text, and keyboard
  operability.
- Add or update tests whenever content schemas or structured data change.

## SEO and launch safety

The Astro configuration currently uses `https://www.affordableroofingflorida.com` as
the canonical site origin so generated metadata reflects the intended production
domain. Preview deployments must remain non-indexable until all of the following are
approved:

1. Final URL matrix and redirect map.
2. Canonical and hreflang strategy.
3. Complete page and post migration.
4. Metadata and structured-data audit.
5. Accessibility, visual-regression, and Core Web Vitals checks.
6. Production-domain cutover plan.

Do not remove the `Disallow: /` rule from `public/robots.txt` during ordinary preview
work.

## Deployment

Review deployment: <https://affordable-roofing-astro.vercel.app>

Vercel builds the project with:

```text
Build command: npm run build
Output directory: dist
Node.js: 24
```

Pushes should pass the GitHub Actions quality gate before a preview is treated as ready
for review. Promoting a deployment to production or connecting the live domain requires
an explicit launch decision.

## Project documentation

- [`docs/design-brief.md`](docs/design-brief.md) — approved redesign direction
- [`docs/design/PENCIL_PATTERN_INVENTORY.md`](docs/design/PENCIL_PATTERN_INVENTORY.md) — Pencil patterns
- [`docs/architecture/`](docs/architecture/) — architecture decisions
- [`docs/qa/README.md`](docs/qa/README.md) — QA strategy
- [`AGENTS.md`](AGENTS.md) — repository-specific agent instructions
