# Plan de Implementación: Rediseño Cinemático de la Sección "Transparencia"

## 1. Resumen del estado actual
Actualmente, la sección "Transparencia" (ubicada en `app/transparencia/page.tsx` y `components/transparencia/*`) presenta una estructura funcional, semántica y limpia utilizando Tailwind CSS. No obstante, la experiencia es completamente estática; no incluye animaciones de entrada, interactividad avanzada, ni efectos de desplazamiento (scroll). No se detecta el uso de Framer Motion en estos componentes, por lo que la refactorización será limpia.

## 2. Problemas detectados
*   **Falta de ritmo narrativo:** Todos los elementos cargan simultáneamente, lo cual aplana la experiencia de lectura de datos que deberían ser asimilados progresivamente.
*   **Diseño de componentes genéricos:** Algunas tarjetas y listas lucen como grillas estándar. Falta "materialidad" (haptic aesthetics), como refracción de luz o contenedores anidados (Double-Bezel).
*   **Interacciones pobres:** Los "hover states" se limitan a simples cambios de color o fondo, perdiendo la oportunidad de proveer feedback táctil.
*   **Estancamiento visual en tablas:** La sección de presupuestos podría sentirse densa al no tener un proceso de entrada secuencial.

## 3. Objetivo visual del rediseño
Elevar la sección a un estándar Awwwards/Agency. Transformaremos la presentación de datos en una narrativa fluida mediante "ScrollTelling" cinemático, utilizando físicas de animación Premium (GSAP) para brindar peso, gravedad y asimetría a los componentes, manteniendo una jerarquía visual impecable y una paleta sobria de alto contraste. 

## 4. Propuesta de dirección de arte
*   **Vibe & Texture (Soft Structuralism / Ethereal):** Fondos limpios y neutros, pero introduciremos micro-ruido o bordes sutiles con iluminación interna (refracción tipo cristal) a las tarjetas de documentos y presupuesto.
*   **Motion Choreography:** Uso exclusivo de transiciones curvas avanzadas (`expo.out`, `power3.out`). Nada de movimiento lineal. Revelado progresivo (stagger) para listas y grillas al entrar en el viewport con `ScrollTrigger`.
*   **Microinteracciones:** Efectos sutiles de escalado magnético y desplazamiento direccional en botones y enlaces.

## 5. Componentes que se modificarán
La refactorización afectará los siguientes componentes:
1.  `transparencia-hero-section.tsx`
2.  `compromiso-section.tsx`
3.  `presupuesto-section.tsx`
4.  `fuentes-financiamiento-section.tsx`
5.  `informes-documentos-section.tsx`
6.  `evaluacion-seguimiento-section.tsx`
7.  `politicas-principios-section.tsx`
8.  `cta-transparencia-section.tsx`

## 6. Animaciones GSAP propuestas por componente
*   **TransparenciaHeroSection:** 
    *   Animación de `clip-path` (inset) o un `yPercent` stagger sobre la tipografía de gran escala para una entrada majestuosa.
    *   Los pilares laterales entrarán con un sutil fade-up (`autoAlpha: 0, y: 30`) en secuencia.
*   **CompromisoSection:** 
    *   El "Header" pegajoso (sticky) puede quedarse estático y los párrafos revelarse a través de scroll ligado al trigger (`ScrollTrigger` o con onEnter).
*   **PresupuestoSection:** 
    *   El contenedor de la tabla entrará con una revelación estructural. Los ítem de presupuesto se animarán en `stagger` utilizando `onEnter` de `ScrollTrigger.batch` o un trigger propio.
*   **FuentesFinanciamientoSection:** 
    *   La lista de fuentes usará un revelado de secuencia con físicas `back.out(1.2)` en el icono al mismo tiempo que el texto hace fade-up.
*   **InformesDocumentosSection / EvaluacionSeguimientoSection:** 
    *   Implementar revelados escalonados en la grilla (`stagger: 0.1`) cuando crucen el threshold de visualización. Mejora visual aplicando un "hover magnético" suave en las tarjetas.
*   **PoliticasPrincipiosSection:** 
    *   Dada la importancia institucional, usar un fade expansivo para el fondo oscuro, mientras los valores se revelan como cascadas.
*   **CtaTransparenciaSection:** 
    *   Fade-up majestuoso para la llamada a la acción. Botones con entrada controlada por escala.

## 7. Estrategia de accesibilidad
Toda la lógica de GSAP estará encapsulada dentro de `gsap.matchMedia()`. Verificaremos `(prefers-reduced-motion: no-preference)` para inyectar animaciones, de modo que en caso de estar activado el "reduced motion", los usuarios vean la versión estática que existe actualmente.

## 8. Estrategia de performance
*   Se animará exclusivamente el `transform` (`x`, `y`, `scale`) y el `opacity` / `autoAlpha`.
*   Cualquier filtrado de capa (e.g. glassmorphism) se limitará y no será sobre un contendor animable para evitar layout thrashing.
*   Se usará la propiedad `will-change: transform` de ser estrictamente necesario en elementos hero.
*   Todo uso de `gsap` se realizará a través del hook oficial `useGSAP` para correcta limpieza de memoria y soporte SSR de Next.js.

## 9. Riesgos técnicos
*   **Hidratación SSR (Next.js):** Requerimos usar `'use client'` al principio de cada componente que invoque el `useGSAP`. 
*   **Flickering inicial:** Se requerirá establecer el CSS inicial (e.g., `opacity: 0`, `visibility: hidden`) usando una convención segura (o `immediateRender`) para evitar parpadeos antes del montaje de React.

## 10. Orden recomendado de implementación
1. Refactorización de `transparencia-hero-section.tsx` y `compromiso-section.tsx` (Componentes superiores).
2. Refactorización de `presupuesto-section.tsx` y `fuentes-financiamiento-section.tsx` (Datos y listas).
3. Refactorización de grillas en `informes-documentos-section.tsx` y `evaluacion-seguimiento-section.tsx`.
4. Cierre con `politicas-principios-section.tsx` y `cta-transparencia-section.tsx`.
5. Ejecución de `npm run build` para asegurar que todo es estable en build-time.
