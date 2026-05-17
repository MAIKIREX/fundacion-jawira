# Plan de Implementación: Rediseño Cinemático con GSAP - Inicio (Hero)

## 1. Resumen del estado actual
La sección de "Inicio" (`hero-section.tsx`) es una vista estática, desarrollada como un Server/Client Component básico con Next.js y Tailwind CSS. Utiliza un diseño de tipo "Editorial Split" (texto a la izquierda, métricas a la derecha) y una imagen de fondo con opacidad baja. Actualmente carece de movimiento, interactividad fluida o narrativa visual, dependiendo de un contenedor `ScrollReveal` genérico (en `page.tsx`) que solo aporta un desplazamiento mínimo en y.

## 2. Problemas detectados
- **Estático y Genérico:** La entrada de los elementos (texto, estadísticas, imagen de fondo) es abrupta y carece de intencionalidad o peso.
- **Microinteracciones Ausentes:** Los botones y tarjetas de estadísticas carecen de respuestas táctiles sofisticadas al `:hover` o `:active`.
- **Falta de Profundidad (Parallax):** La imagen de fondo no responde al desplazamiento, desperdiciando una oportunidad para lograr inmersión espacial.
- **FOUC / Renderizado Abrupto:** No hay control de estado pre-animado que prepare la escena de manera cinemática.

## 3. Objetivo visual del rediseño
Implementar una experiencia **Awwwards-Tier**, elevando la sección Hero para que se sienta inmersiva, refinada y con física realista. Se abandonarán las transiciones estáticas y se introducirá un coreógrafo de movimiento mediante **GSAP** (`gsap-core`, `gsap-scrolltrigger`). El objetivo es lograr una sensación de sofisticación y profesionalidad al estilo agencia de alto nivel.

## 4. Propuesta de dirección de arte
- **Arquitectura Visual (Archetype):** "Editorial Split" refinado. Tipografía masiva y estructurada con espacios en blanco (Macro-Whitespace) muy definidos.
- **Tipografía y Tipografía Enmascarada:** Las líneas de los títulos se revelarán utilizando la técnica de enmascaramiento tipográfico (`clip-path: polygon` o `overflow: hidden` en contenedores de línea) y animaciones de `yPercent` para simular un alzamiento desde abajo.
- **Materialidad (Double-Bezel y Líneas Finas):** Los elementos estadísticos en la derecha usarán acentos finos, revelando progresivamente sus bordes (lines) y contenido numérico en cascada (`stagger`).
- **Profundidad Espacial (Z-Axis):** La imagen de fondo se cargará con un `scale` inicial y luego interactuará fluidamente en respuesta al scroll mediante ScrollTrigger (Parallax), usando `scrub`.

## 5. Componentes que se modificarán
- `components/hero-section.tsx` (Componente principal y único afectado).

## 6. Animaciones GSAP propuestas
Todo encapsulado de forma segura en `useGSAP()` usando un `scope` apuntando al contenedor raíz:
1. **Entrance Sequence (Load):**
   - **Imagen de fondo:** Animación lenta y continua (ej. escala de 1.1 a 1.05) usando un ease `power2.out`, creando una sensación inmediata de "respiración".
   - **Textos (Eyebrow, H1, Párrafo):** Stagger de elementos, utilizando `.fromTo` de `yPercent: 100`, `autoAlpha: 0` a `0`, `1` con eases profundos (`expo.out` o `power4.out`).
   - **Métricas:** Animación en cascada escalonada (stagger) para revelar las 3 estadísticas de impacto.
2. **Scroll Parallax:**
   - La imagen de fondo se vinculará al scroll (`ScrollTrigger` con `scrub: 1`) para crear un suave movimiento en `yPercent` (Parallax) que profundiza la inmersión al hacer scroll hacia las siguientes secciones.

## 7. Estrategia de accesibilidad
- Integración estricta de `gsap.matchMedia().add("(prefers-reduced-motion: no-preference)")`.
- Si el usuario tiene `reduced-motion` activado, los estilos iniciales se mantendrán estáticos y legibles, sin desplazamiento vertical, solo un opcional y muy sutil fade-in.

## 8. Estrategia de performance
- **GPU Acceleration:** Sólo se animarán propiedades óptimas como `transform` (`yPercent`, `scale`, `y`) y `opacity` / `autoAlpha`.
- **Evitar Thrashing:** Nunca se animará `top`, `left`, `margin`, ni `height`.
- **Cleanup:** `useGSAP()` automáticamente manejará el `ctx.revert()` en unmount, eliminando posibles memory leaks y comportamientos erráticos con el SSR de Next.js.
- **Will-Change:** Se usará limitadamente (solo en elementos pesados en la animación como la imagen de fondo durante el scroll).

## 9. Riesgos técnicos
- SSR Mismatch: Usar estado inicial en CSS (ej. opacidad inicial o utilidades Tailwind) y gestionar la animación post-mount correctamente con `useGSAP`.
- Conflictos con `ScrollReveal` de `page.tsx`: Validar si el wrapper global `ScrollReveal` interfiere con el Hero; dado que el hero ocupa todo el viewport de entrada, se manejará la orquestación internamente en `HeroSection`.

## 10. Orden recomendado de implementación
1. Refactorizar `components/hero-section.tsx`.
2. Incluir referencias a los elementos clave con `useRef`.
3. Estructurar el marcado para permitir animaciones de líneas/texto (overflow oculto).
4. Implementar las animaciones de entrada (`timeline` de carga) y validarlo.
5. Añadir `ScrollTrigger` para la imagen (Parallax) y validarlo.
6. Aplicar `gsap.matchMedia` para proteger preferencias del usuario.
