# ADR-002: Astro static rendering baseline

- Status: Accepted
- Date: 2026-07-17

## Context

The site is primarily marketing and editorial content. Most pages do not require per-request server rendering, authenticated state, or client-side application behavior.

## Decision

- Use Astro 7 with explicit `output: "static"`.
- Generate collection-driven routes during the build once final URLs exist.
- Keep JavaScript at zero by default and add hydrated islands only for interaction that cannot be delivered with semantic HTML and CSS.
- Keep forms outside the static rendering path through a hosting function or approved external service.
- Inline built CSS using `build.inlineStylesheets: "always"` and verify its effect during performance work.

## Consequences

- Pages are cacheable static assets with a small runtime surface.
- Dynamic routes must enumerate production paths at build time.
- A requirement for SSR must be justified in a superseding ADR.
- Third-party scripts, maps, analytics, and anti-spam code must load only when needed.
