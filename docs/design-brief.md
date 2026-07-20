# Design brief — Affordable Roofing Systems

**Estado:** aprobado explícitamente por el usuario el 2026-07-17.

## Homepage fidelity lock

El homepage diseñado en Pencil es una especificación aprobada, no una inspiración abierta. Pencil gobierna su apariencia visual, contenido y orden de secciones. El brief sirve para traducir ese diseño a un sistema mantenible y para extenderlo al resto del sitio; no autoriza eliminar, añadir, condensar o reordenar secciones del homepage.

El piloto Astro se utilizará solo como donante de datos y assets que superen la auditoría. La implementación definitiva se hará desde cero en el repositorio limpio, sin reutilizar su arquitectura ni su CSS. Cualquier cambio visible material frente a Pencil requerirá aprobación explícita.

## Contrato responsive aprobado

- **1440 px:** referencia visual de Pencil y checkpoint prioritario de fidelidad.
- **360 px:** referencia visual de Pencil y checkpoint prioritario de fidelidad.
- **768 px:** única vista adicional requerida; se diseñará y construirá posteriormente directamente en Astro, sin crear otra pantalla en Pencil.
- La primera implementación y crítica visual se harán en 1440 y 360. El trabajo específico de 768 queda diferido hasta que las dos referencias existentes sean sólidas.
- El código debe seguir siendo fluido y no producir overflow entre tamaños, pero 390 y 1024 no son checkpoints de diseño independientes.

## 1. Scene sentence

Un propietario o administrador de Tampa Bay revisa el sitio en su teléfono después de una tormenta fuerte de la tarde, con luz brillante de Florida y preocupación por daños y costo; necesita identificar su problema, comprobar que ARS es real y confiable, y saber cuál es el siguiente paso sin sentirse presionado.

## 2. Three anti-references

Al extender el lenguaje del homepage a las páginas internas, el sistema no debe derivar hacia:

1. [Tampa Roofing Company](https://tamparoofing.com/) — brochure legacy con navegación extensa, foto residencial full-bleed oscurecida y titular superpuesto; no repetiremos la fórmula “foto genérica + overlay + CTA”.
2. [Acoma Roofing](https://www.acomaroofing.com/) — utility header verde/azul muy cargado y catálogo convencional de servicios/materiales; no organizaremos toda la experiencia como una sucesión uniforme de categorías.
3. [Baldwin Roofing](https://www.baldwinroofing.com/) — tratamiento cinematográfico negro, fotografía aérea oscura, gran titular de lujo y tracking muy abierto; ARS debe sentirse accesible y operativo, no exclusivo o distante.

Las tres referencias representan reflejos distintos del sector. Esta restricción gobierna nuevas plantillas y componentes; no se utilizará para reconfigurar el homepage aprobado en Pencil.

## 3. Color strategy

- [ ] Restrained
- [x] Committed
- [ ] Full palette
- [ ] Drenched

La distribución visual azul, naranja y clara definida en Pencil se conservará en el homepage. En código se mapeará a roles semánticos y se comprobará WCAG AA sobre el fondo real. Si una combinación de Pencil no alcanza contraste, primero se buscará una corrección técnica que conserve su apariencia; cualquier ajuste perceptible de tono, tamaño o peso se presentará para aprobación.

## 4. Type intent

Se conservarán la personalidad, jerarquía y pairing Jost/Inter definidos en Pencil para el homepage. La implementación reducirá duplicaciones técnicas mediante roles tipográficos semánticos, sin aplanar diferencias visibles deliberadas del diseño aprobado.

## 5. Emotional register

**Calm, proven, ready.**

## 6. One deliberate risk

Se preservará el riesgo que ya toma Pencil: un hero asimétrico con copy y acciones a la izquierda, retrato documental del equipo real a la derecha, plano diagonal inspirado en la geometría de cubierta y una línea base compacta de pruebas. La implementación responsive deberá recomponerlo sin sustituirlo por un hero genérico full-bleed.

## 7. Section rhythm

El orden de Pencil queda bloqueado:

1. **Header + Hero**
2. **Service Shortcuts**
3. **Reviews + Financing**
4. **Residential + Commercial Decision**
5. **Residential Roofing Tampa**
6. **Architectural Shingle Roofing**
7. **Roofing Material Guide**
8. **Commercial Roofing Tampa**
9. **Among Top 3 Percent**
10. **Experience + Protection**
11. **Accredited + Certified**
12. **Roof Financing**
13. **Roofing Services**
14. **Roofing FAQs**
15. **Footer**

El contenido y la secuencia se trasladarán completos. La componentización, carga de imágenes, responsive, semántica y metadata podrán cambiar internamente sin alterar esta composición visible.

## 8. Anti-slop self-check

- **First-order reflex:** No. El homepage ya resuelve el reflejo mediante su composición asimétrica, equipo real, diagonales de cubierta y secuencia editorial propia; no se reemplazará por una plantilla genérica de roofing.
- **Second-order reflex:** No. Las páginas internas heredarán señales reconocibles de Pencil sin copiar mecánicamente el hero o convertir cada composición en una grilla repetida.

No se añadirán al sistema nuevos patrones de gradient text, glassmorphism, hero metrics tipo SaaS o motion decorativo. Esta regla no autoriza eliminar elementos ya aprobados del homepage.
