# ADR-004: Tailwind CSS v4 with semantic tokens

- Status: Accepted
- Date: 2026-07-17

## Context

A single growing stylesheet would couple unrelated templates and make a site of this size difficult to change safely. A utility framework alone would also allow arbitrary values and inconsistent visual decisions.

## Decision

- Use Tailwind CSS v4 through the official Vite plugin.
- Keep one small global CSS entry for Tailwind import, document defaults, accessibility foundations, font declarations, and approved design tokens.
- Define semantic tokens for colors, type, spacing, widths, radius, shadows, and motion only after `shape.md` is approved.
- Keep reusable layout and component decisions in Astro components rather than global selectors.
- Reject raw one-off CSS and repeated arbitrary values when a semantic token or component variant exists.

## Consequences

- The current scaffold contains no brand palette or production typography.
- Component APIs and tokens will control consistency across templates.
- CSS review must check responsive behavior, contrast, focus, and reduced motion at component creation time.
- Tailwind classes are implementation syntax, not the design system itself.
