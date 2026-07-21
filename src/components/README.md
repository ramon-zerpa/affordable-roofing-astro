# Components

Production components are intentionally deferred until `shape.md` is approved.

Planned groups:

- `base/`: primitives with small APIs.
- `layout/`: containers and composition helpers.
- `navigation/`: header, menus, breadcrumbs, and footer.
- `sections/`: reusable page sections.
- `forms/`: accessible form presentation.
- `seo/`: metadata and structured-data helpers.

## Semantic conventions

- Every `h1` and `h2` ID is derived from its visible heading: lowercase,
  punctuation removed, and words separated with hyphens. The heading ID uses
  the `${heading-slug}-title` pattern so its parent section can use
  `${heading-slug}` and reference the heading with `aria-labelledby`.
- Eyebrows are presentational labels and must always use a `div`, never a `p`.
