# Inventario de patrones Pencil

**Documento inspeccionado:** `/C:/Users/user/Downloads/new-redesign-ars/ux-ars-redesign`  
**Fecha:** 2026-07-17  
**Frames principales:** sistema visual, homepage desktop 1440 px y homepage mobile 360 px.

## Diagnóstico

Pencil contiene una dirección visual coherente y una biblioteca de ejemplos bien nombrada. Sin embargo, todavía no es un sistema reutilizable dentro de Pencil:

- 26 variables definidas: 13 colores, 11 números y 2 familias tipográficas.
- 0 nodos marcados como `reusable`.
- 15 secciones desktop y 15 secciones mobile duplicadas como frames independientes.
- No existe variante tablet o intermedia.
- `snapshot_layout` no reporta clipping o solapamientos en los frames estáticos actuales.

Los rótulos “Synced” describen intención visual, pero no hay refs que propaguen cambios. Un cambio de componente debe editarse manualmente en varias pantallas.

## Evidencia estructural

| Vista        | Nodos leídos | Frames | Frames absolutos | Frames con auto-layout | Referencias a variables | Estilos literales | Tamaños tipográficos distintos |
| ------------ | -----------: | -----: | ---------------: | ---------------------: | ----------------------: | ----------------: | -----------------------------: |
| Desktop 1440 |          492 |     89 |               85 |                      4 |                      44 |               706 |                             25 |
| Mobile 360   |          360 |    110 |              108 |                      2 |                     286 |               303 |                             19 |

El posicionamiento absoluto es válido para arte editorial puntual, pero no como fundamento de todas las secciones. La cantidad de tamaños tipográficos también confirma que falta una escala semántica compacta.

## Variables existentes

### Color

- Azul: 100, 700, 800 y 900.
- Naranja: 600 y 700.
- Gris: 100, 200, 500 y 700.
- Ink: 900 y 950.
- White.

La paleta es útil como materia prima, no como decisión final. `ars-white` es blanco puro y el naranja actual falla contraste para texto normal sobre fondos claros. Los roles finales deben ser semánticos, no nombres de tonos únicamente.

### Layout y forma

- Container desktop: 1200.
- Grid gap desktop: 24.
- Radios de button y card.
- Escala de espacios: 8, 12, 16, 24, 32, 48 y 64.

### Tipografía

- Heading: Jost.
- Body: Inter.

## Patrones visuales disponibles

### Deben convertirse en sistema global

- Button: primary, secondary, outline/ghost y matriz de estados.
- Section Header con eyebrow, título y copy opcional.
- Header: desktop, sticky, mobile cerrado y drawer abierto.
- Mega Menu de servicios.
- Footer global.
- Mobile Sticky CTA.
- Trust Badge y proof/stat.
- FAQ abierto y cerrado.
- CTA bar.
- Media collage.
- Cards de servicio, material, certificación, testimonial, financiación y artículo.

Estos nodos son actualmente prototipos. Tras aprobar el brief deben recrearse como componentes reutilizables reales, con slots/refs y variantes mínimas.

### Deben vivir a nivel de plantilla o familia

- Hero de servicio/material/ciudad/post/general.
- Breadcrumbs y cabecera editorial.
- Navegación relacionada y contenido recomendado.
- Bloques de prueba local para Service Area City.
- Metadata visible del post, autor y fechas.
- Formularios de contacto/estimate con estados completos.
- Blog listing y paginación.
- Shell de campaña con header/footer alternativos.

### Excepciones exclusivas del homepage

- Hero con plano diagonal, foto del equipo y cuatro pruebas en la línea base.
- Secuencia narrativa que mezcla selector de necesidad, residencial/comercial y materiales.
- Composición conjunta de reviews y financiación.
- Tratamiento editorial del resumen de certificaciones.

La geometría diagonal puede ser un motivo de marca, pero no debe convertirse en decoración obligatoria de todas las plantillas.

### Excepciones de campaña

- Header/footer simplificados.
- Densidad y orden de CTA distintos.
- Tracking y metadata separados por campaña.
- Posible paleta de campaña siempre dentro de roles aprobados.

## Diferencia entre Pencil y la implementación Astro piloto

| Pencil                     | Piloto Astro                           | Decisión para producción                                |
| -------------------------- | -------------------------------------- | ------------------------------------------------------- |
| Mega-menu diseñado         | Ocho links planos                      | Agrupar navegación en 4–5 destinos principales          |
| Estados de header visuales | `details` móvil y desktop fijo         | Componente accesible con variantes y contrato de nav    |
| Biblioteca visual de cards | Secciones inline y CSS global          | Patrones Astro tipados, no una card universal           |
| Desktop 1440 + mobile 360  | Breakpoint principal en 767            | Fidelidad primero en 1440/360; 768 se resuelve en Astro |
| Variables de color/spacing | Variables CSS globales                 | Tokens semánticos Tailwind tras aprobación              |
| Footer visual              | Listas convertidas en texto con `<br>` | Links, address y datos de contacto semánticos           |

## Contrato de implementación posterior a la aprobación

1. Pencil permanece intacto como referencia visual del homepage en 1440 y 360 px.
2. Button, section header, header, footer, trust proof, FAQ y CTA se convertirán en componentes reales dentro de Astro, no en nuevos componentes de Pencil.
3. Los roles de color accesibles y la escala tipográfica reducida vivirán en tokens semánticos de código.
4. La única vista adicional requerida es 768 px; se diseñará y construirá más adelante directamente en Astro.
5. Los estados default, hover, focus, active, disabled, loading, error y success se documentarán y probarán en la implementación.
6. El sistema se probará en homepage, roof repair, roofers Lutz y un blog post antes de ampliar la biblioteca.

## Regla de autoridad

- Para el homepage, Pencil gobierna apariencia, contenido y orden de secciones.
- El brief aprobado gobierna la traducción a sistema y la extensión a otras familias, sin poder reconfigurar silenciosamente el homepage.
- Los componentes Astro implementan el contrato.
- El piloto Astro es donante de código, datos y assets, no la arquitectura definitiva.
- El legacy conserva contenido y señales SEO, no autoridad visual.
