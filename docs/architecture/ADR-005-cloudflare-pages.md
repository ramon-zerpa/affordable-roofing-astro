# ADR-005: Cloudflare Pages hosting baseline

- Status: Accepted
- Date: 2026-07-17

## Context

The static site requires global delivery, redirects, preview deployments, and a small server-side surface for secure forms. The migration workflow already defines Cloudflare-compatible redirects and Pages Functions.

## Decision

- Use Cloudflare Pages as the deployment baseline.
- Publish Astro's static `dist/` output.
- Store redirects in `public/_redirects` after the URL matrix is approved.
- Implement secure form handlers as top-level Pages Functions during the forms phase.
- Keep secrets in the hosting environment and `.dev.vars` locally; never commit them.

## Consequences

- The frontend remains static even when forms require server-side validation.
- Preview and production environments must have separate domain-aware anti-spam configuration.
- Deployment verification must run against the actual preview and production URLs.
- Changing hosts remains possible but requires a superseding ADR covering redirects and functions.
