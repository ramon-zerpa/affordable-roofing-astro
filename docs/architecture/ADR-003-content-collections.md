# ADR-003: Typed content collections and route-independent IDs

- Status: Accepted
- Date: 2026-07-17

## Context

The site has hundreds of entries, repeated relationships, uncertain final URLs, and claims that can expire. Hand-authored page files and untyped page-builder objects would make migration and maintenance unsafe.

## Decision

- Use Astro build-time Content Collections with Zod schemas.
- Maintain six primary collections: services, materials, locations, posts, pages, and campaigns.
- Maintain support collections for media, authors, forms, claims, FAQs, and testimonials.
- Use permanent `contentId` values and logical `routeKey` values independent of pathnames.
- Record all historical paths in `legacyUrls`.
- Use a restricted discriminated union for optional section blocks; prohibit raw HTML escape hatches.
- Store relationships as typed collection references.

## Consequences

- Invalid fields and missing collection references fail synchronization/build.
- URLs can be finalized later without renaming business entities.
- Claims and testimonials can be updated or blocked centrally.
- A future CMS can replace local loaders without changing template contracts.
- Schema changes require fixture and migration-script updates.
