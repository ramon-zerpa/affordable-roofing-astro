# ADR-007: English-first, locale-ready architecture

- Status: Accepted
- Date: 2026-07-17

## Context

Only English content is currently confirmed. Adding speculative translations now would increase editorial and QA scope, while hardcoding locale assumptions into components would make future expansion expensive.

## Decision

- Launch planning is English-first until a second locale is explicitly approved.
- Every content entry records `locale`.
- Permanent IDs and relationships do not contain the future public path.
- Shared UI copy will move into typed locale dictionaries before component development.
- Astro route-level i18n configuration will be enabled when a second locale and its URL policy are approved.

## Consequences

- No duplicate placeholder language routes are generated now.
- Components built in Phase 4 must receive locale context from their caller.
- Adding a locale requires content ownership, translation QA, hreflang, canonical, sitemap, and layout-resilience work.
