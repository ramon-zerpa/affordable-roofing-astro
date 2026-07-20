# ADR-001: Redesign intent and source authority

- Status: Accepted
- Date: 2026-07-17

## Context

The legacy WordPress site contains valuable content and organic-search history but is not the visual target. The homepage designed in Pencil is already the approved source for the homepage's visual appearance, content, and section order. The Astro pilot is an initial technical translation of that source, but it is not production architecture.

## Decision

Use a clone-then-redesign migration model relative to the legacy website, with a locked-fidelity exception for the homepage:

1. Approved business facts and URL/redirect decisions govern published claims and routes.
2. The legacy site supplies content, historical URLs, metadata, and migration evidence.
3. Pencil is the binding source of truth for homepage visuals, content, and section order.
4. The approved `shape.md` governs the reusable system and the extrapolation to other page families, but it cannot silently redesign or reorder the locked homepage.
5. The homepage pilot is a donor of useful code, data, and assets, not the production repository or architecture.

## Consequences

- No legacy HTML is imported into production templates.
- Content must be preserved, improved, consolidated, or redirected through an explicit decision.
- Visual fidelity to the legacy UI is not a launch requirement.
- Visual and content-order fidelity to the Pencil homepage is a requirement.
- The homepage will be reimplemented cleanly in the new repository, reusing pilot code only where it already meets the target architecture.
- Pencil supplies the 1440 px and 360 px homepage references. The only additional design checkpoint is 768 px, which will be created later directly in Astro rather than added to Pencil.
- Accessibility, responsive, SEO, and performance corrections may change implementation details. Any material visible change to Pencil requires explicit approval.
- Claim verification, content coverage, accessibility, performance, and SEO continuity are launch requirements.
