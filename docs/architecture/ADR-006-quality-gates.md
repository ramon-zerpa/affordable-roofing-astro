# ADR-006: Automated quality gates

- Status: Accepted
- Date: 2026-07-17

## Context

Hundreds of content entries and multiple templates make manual regression checking insufficient. Content errors, broken references, formatting drift, type failures, and build failures must be caught before review or deployment.

## Decision

The local and CI baseline is:

1. Prettier format check.
2. ESLint for TypeScript, JavaScript, and Astro rules.
3. Astro check and strict TypeScript diagnostics.
4. Vitest unit/integration tests for schemas and migration invariants.
5. Static production build.

GitHub Actions runs `npm ci` followed by `npm run validate` on pull requests and pushes to `main`.

Later phases add:

- Link and redirect verification.
- Accessibility automation and manual keyboard/screen-reader review.
- Visual regression on representative templates.
- Lighthouse locally and PageSpeed Insights after deployment.
- Form and analytics end-to-end tests.

## Consequences

- A change is not ready for review while any baseline gate fails.
- Tool versions are captured in `package-lock.json` and updated intentionally.
- Mechanical checks do not replace editorial, accessibility, security, or visual judgment.
