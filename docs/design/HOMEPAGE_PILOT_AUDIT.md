# Auditoría del homepage piloto

**Proyecto auditado:** `astro-homepage-clean-pencil`  
**Fecha:** 2026-07-17  
**Alcance:** arquitectura Astro, CSS, semántica, responsive, accesibilidad, SEO, imágenes y performance.  
**Decisión:** Pencil es la especificación visual, de contenido y de orden. El piloto se usa como donante técnico, pero no como repositorio ni arquitectura de producción.

## Resultado ejecutivo

El piloto demuestra que Astro puede entregar el diseño sin JavaScript de cliente y con una puntuación de performance alta. También contiene deuda propia de una prueba visual: una hoja CSS monolítica, secciones demasiado acopladas al homepage, enlaces provisionales, metadata SEO incompleta y un fallo responsive crítico en 768 px.

La base escalable debe vivir en `affordable-roofing-astro`. Allí se reimplementará el homepage con fidelidad a Pencil, aprovechando del piloto únicamente código, datos y assets que ya sean correctos. No se rediseñará ni reordenará el homepage durante esta reconstrucción.

## Evidencia cuantitativa

| Señal                     | Resultado                                                       |
| ------------------------- | --------------------------------------------------------------- |
| Build Astro               | Correcto; 1 página estática en 2.12 s                           |
| JavaScript de cliente     | 0 scripts de aplicación                                         |
| CSS compilado             | 37,346 bytes                                                    |
| CSS fuente                | 3,020 líneas y aproximadamente 262 bloques de selectores        |
| Media queries             | 5; dos bloques separados para `max-width: 767px`                |
| Componentes Astro         | 6 componentes, pero 14 secciones siguen dentro de `index.astro` |
| Enlaces                   | 48 en runtime; 31 apuntan a `#`                                 |
| Assets de imagen          | 77 archivos, 5.82 MB                                            |
| Imágenes no referenciadas | 42 archivos, 4.64 MB copiados igualmente al build               |
| Build total               | 6.02 MB por el copiado completo de `public/`                    |
| Auditoría de dependencias | 0 vulnerabilidades de producción reportadas                     |
| PSI desplegado            | 97 móvil, mediana de 3 ejecuciones                              |

El PSI guardado el 2026-07-16 todavía registra Speed Index de 4.1 s, 1,190 ms estimados por recursos render-blocking y alrededor de 100 KiB de ahorro posible en imágenes. La puntuación es buena, pero no elimina esos trabajos pendientes.

## Hallazgos por prioridad

### P0 — bloquean reutilizar el piloto como base

1. **El breakpoint de tablet está roto.** A 768 × 900 el documento mide 1,085 px de ancho. La navegación de escritorio continúa visible, el CTA sale del viewport y varias grillas mantienen anchuras de desktop. A 390 px y 1440 px no aparece scroll horizontal.
2. **El naranja de marca no cumple como texto normal sobre fondos claros.** `#ff6119` sobre `#ffffff` da 3.01:1; sobre `#f4f6f8`, 2.78:1. El texto blanco de 14 px sobre el mismo naranja también queda en 3.01:1. Los CTA y links pequeños necesitan un tono accesible, otra combinación o tamaño realmente grande.
3. **La navegación todavía no es funcional.** 31 de 48 enlaces renderizados apuntan a `#`. El footer presenta navegación y contacto como texto con saltos de línea, no como links semánticos.
4. **La capa SEO no está lista para producción.** Faltan canonical, Open Graph, Twitter Cards, JSON-LD, robots/meta robots configurable y una política reutilizable de preloads. El título, descripción, `lang="en"`, sitemap y `site` de Astro sí están presentes.
5. **La “estimación” no tiene un flujo real.** Muchos CTA llevan a la sección de financiación y no a una página o formulario de estimate. El piloto no contiene formulario.

### P1 — deben resolverse en el sistema y las plantillas

1. **CSS monolítico y específico del homepage.** `global.css` conoce cada sección y mezcla tokens, reset, layout, arte del hero y excepciones responsive. Esta estructura no escalará de forma segura a las familias de páginas.
2. **La página concentra demasiada implementación.** `index.astro` contiene casi todas las secciones. Los loops y `home.ts` son una buena primera separación de datos, pero faltan componentes de sección y contratos de variantes.
3. **La home es extensa por diseño.** El render mide aproximadamente 10,193 px en desktop y 17,884 px en móvil; Pencil mide 16,420 px en móvil. Esta longitud no autoriza eliminar o reordenar secciones. Exige una implementación eficiente, navegación usable y carga progresiva de assets.
4. **El piloto no implementa todos los estados de navegación de Pencil.** Pencil contiene desktop, sticky, mobile y un ejemplo de mega-menú; el código actual usa ocho links planos y un `details` móvil. La reconstrucción debe trasladar la intención de Pencil con semántica y comportamiento accesibles.
5. **Los preloads son globales.** `BaseLayout.astro` precarga tres imágenes del hero en todas las páginas que usen ese layout. La futura capa SEO/performance debe permitir hints por página y por viewport.
6. **Las imágenes se sirven desde `public/`.** No hay pipeline de Astro Assets para generar dimensiones, formatos y `srcset` a partir de fuentes maestras. Además existen JPG/PNG/WebP duplicados.
7. **La escala tipográfica es demasiado amplia.** El CSS y Pencil contienen muchas decisiones puntuales. El sistema final debe reducirlas a una escala deliberada con pocos pasos semánticos.
8. **Faltan estados de interacción.** Hay un hover de botón y focus visible global, pero no hay `:active`, estados disabled/loading/error/success, reglas `hover: hover` ni ajustes para `pointer: coarse`.
9. **Falta un skip link.** Los landmarks y el único H1 son correctos, pero el salto directo al contenido debe formar parte del shell.
10. **Algunos targets táctiles son menores de 44 px.** Entre ellos el teléfono de utility, links de servicios y links legales. El CTA de financiación queda en 42 px de alto.

### P2 — calidad y gobernanza

1. El teléfono generado como `tel:(813)5428462` debe normalizarse a dígitos/E.164.
2. Dirección, teléfono y email del footer deben usar `address`, `tel:` y `mailto:` apropiadamente.
3. El año del copyright no debe quedar duplicado manualmente en plantillas.
4. Los fondos con `div role="img"` deben reservarse para decoración. Las imágenes significativas necesitan `picture`/`img`, alt editorial y dimensiones.
5. Rating, reviews, “Top 3%”, licencia, seguro, 4.99% APR, FICO y demás cifras no deben publicarse ni convertirse en schema hasta pasar por el registro de claims y validación editorial/legal.
6. El acordeón contiene preguntas sin respuesta en el HTML. El modelo debe rechazar entradas incompletas para publicación o tratarlas como drafts.

## Lo que sí conviene conservar

- Astro estático y ausencia de hidratación innecesaria.
- Separación inicial de datos en `src/data/home.ts`.
- HTML con `header`, `main`, `section`, `footer`, un solo H1 y `aria-labelledby` por sección.
- `details/summary` como base progresiva del FAQ y del menú móvil.
- Dimensiones declaradas, lazy loading y decoding async en imágenes bajo el fold.
- Focus visible global y respeto parcial de `prefers-reduced-motion` en el hero.
- Dirección visual reconocible: azul profundo, naranja de acción, fotografía real del equipo y geometría diagonal inspirada en cubiertas.

## Arquitectura CSS aprobada para el repositorio limpio

La elección correcta para este proyecto es **Tailwind CSS v4 con tokens semánticos**, no Tailwind sin reglas y tampoco otro `global.css` creciente.

1. Un global pequeño: import de Tailwind, fuentes, defaults del documento, accesibilidad, motion reducido y tokens aprobados.
2. Tokens en `@theme` después de aprobar el brief: roles de color, tipografía, espacios, anchos, radios, sombras y motion.
3. Layout y patrones repetibles en componentes Astro; las clases son implementación, no el sistema de diseño.
4. CSS scoped de Astro solo para composiciones art-directed difíciles de expresar limpiamente, como el hero diagonal.
5. Sin selectores globales que conozcan internals de una sección o familia de página.
6. Sin valores arbitrarios repetidos cuando exista un token o variante semántica.

## Jerarquía de construcción recomendada

```text
Shell global
  ├─ metadata, skip link, header, navegación, breadcrumbs, footer
  ├─ primitivas de layout y contenido
  ├─ patrones reutilizables: CTA, proof, media, FAQ, cards, forms
  ├─ secciones con variantes pequeñas
  ├─ plantillas de las familias editoriales
  └─ contenido tipado en colecciones
```

## Criterios que debe superar la reconstrucción

- Sin overflow entre 360 y 1920 px. Los checkpoints de fidelidad son 360 y 1440; la única composición adicional será 768, diferida hasta consolidar esas dos vistas y creada directamente en Astro.
- Contraste WCAG AA medido sobre el fondo real.
- Navegación completa por teclado, targets de 44 px en coarse pointers y estados interactivos documentados.
- Canonical, OG, Twitter, JSON-LD y robots controlados desde un contrato SEO tipado.
- Cero enlaces placeholder en builds publicables.
- Assets usados solamente, con generación responsive y presupuestos por plantilla.
- Fidelidad visual, de contenido y de orden a las 15 secciones definidas en Pencil.
- Ninguna sección específica del homepage se convierte accidentalmente en regla global.
