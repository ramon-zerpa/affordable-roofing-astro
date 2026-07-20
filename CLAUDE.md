## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Responsive content policy

- Use one content source for each semantic element across all breakpoints.
- Responsive breakpoints may change layout, order, spacing, sizing, and presentation, but must not rewrite substantive copy.
- Do not create separate mobile and desktop translation keys for the same message.
- Decorative icons or arrows may vary by breakpoint when they are hidden from assistive technology.
- When using progressive disclosure, preserve the complete content and its meaning instead of shortening or deleting it for smaller screens.
