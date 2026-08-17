# Guía de Estilos, Tipografía y Paleta de Colores — Fundación JAWIRA

Este documento especifica el sistema de diseño, la jerarquía tipográfica, el estilo arquitectónico de la página principal (`index`) y la paleta de colores oficial manejada en el sitio web de la **Fundación JAWIRA**.

---

## 1. Sistema Tipográfico (Typography)

El sitio web utiliza una combinación de tipografías cargadas mediante `next/font/google` para garantizar máxima velocidad de carga, legibilidad y jerarquía visual institucional.

### 1.1. Fuentes Principales

| Fuente | Variable CSS | Tipo | Uso Principal |
| :--- | :--- | :--- | :--- |
| **Geist Sans** | `--font-geist` (`--font-sans`) | Sans-Serif Geométrica | Cuerpo de texto (`body`), descripciones, párrafos y encabezados generales (`h1`-`h6`). |
| **Geist Mono** | `--font-geist-mono` (`--font-mono`) | Monospaced | Botones institucionales (`.btn-jawira`), etiquetas *eyebrow*, insignias, códigos de color y datos técnicos. |
| **Outfit** | `--font-outfit` | Display Sans-Serif | Títulos destacados, métricas de impacto y tarjetas con fuerte presencia visual. |

### 1.2. Reglas de Jerarquía y Estilos Tipográficos

```css
/* Configuración Base en Tailwind / CSS */
body {
  font-family: var(--font-sans);
  letter-spacing: -0.01em;
  color: var(--foreground);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-sans);
  letter-spacing: -0.03em;
  font-weight: 500;
}
```

* **Títulos Principales (`H1`)**:
  * Tamaño: `4xl` (36px) a `7xl` (72px) según el dispositivo.
  * *Tracking*: Tight (`-0.03em`) para un aspecto moderno y arquitectónico.
  * Interlineado: Ajustado (`leading-[1.06]`).
* **Subtítulos y Encabezados Secundarios (`H2`, `H3`)**:
  * Peso: `font-bold` (700) o `font-black` (900).
  * Uso de contraste cromático en palabras clave (ej. acentos en Verde `#68CE2B` o Ámbar `#EA9010`).
* **Etiquetas y Badges (*Eyebrow*)**:
  * Tipo: `font-mono`, mayúsculas (`uppercase`), tamaño reducido (`text-xs`), espaciado amplio (`tracking-widest`).
* **Cuerpo de Texto (`Body`)**:
  * Tamaños: `text-base` (16px) a `text-lg` (18px) para lectura fluida.
  * Interlineado: Relajado (`leading-relaxed`).

---

## 2. Estilo Visual de la Página Principal (`index` / `app/page.tsx`)

La página de inicio refleja la identidad de la **Fundación JAWIRA** (tecnología, educación y salud para comunidades vulnerables en Bolivia) combinando estética editorial moderna, animaciones fluida y diseño responsivo.

### 2.1. Filosofía de Diseño

* **Estética Institucional Cinematográfica**: Gradientes profundos (como el verde orgánico `#1B361F` en el Hero y el azul marino `#0A2850` en secciones clave), combinados con tarjetas limpias sobre fondos claros en modo *Light*.
* **Movimiento Choreografiado (GSAP & ScrollTrigger)**: Entradas cinematográficas con revelación progresiva de títulos y textos (`reveal-title`, `reveal-desc`), respetando la preferencia de reducción de movimiento del usuario (`prefers-reduced-motion`).
* **Distribución de Rejilla Asimétrica y Bento Grids**: Organización de contenidos mediante módulos visuales bien delimitados por bordes semánticos (`var(--border)`).
* **Modo Claro / Modo Oscuro Integrado**: Adaptación automática de contraste basada en tokens OKLCH que cumplen con estándares de accesibilidad WCAG AAA/AA.

### 2.2. Estructura de Secciones de la Página Index

1. **Header Navigation (`<Header />`)**:
   * Barra flotante con efecto cristal (`backdrop-blur-md`), logotipo institucional, enlaces rápidos de navegación y conmutador de tema claro/oscuro.
2. **Hero Section (`<HeroSection />`)**:
   * Sección de altura completa (`min-h-[100dvh]`) con fondo verde orgánico profundo (`#1B361F`), distribución diagonal (título arriba-izquierda, descripción y CTAs abajo-derecha) y botones con efectos de barrido rotatorio.
3. **Sección Acerca de (`<AboutSection />`)**:
   * Introducción a la misión y visión de la fundación.
4. **Ejes Estratégicos (`<AxesSection />`)**:
   * Presentación de los 3 pilares estratégicos: *Tecnología Productiva*, *Educación Integral* y *Salud Común*.
5. **Centro Integral (`<IntegralCenterSection />`)**:
   * Detalle de la infraestructura y proyectos comunitarios en La Paz, Bolivia.
6. **Tarjetas de Impacto (`<ImpactSection />`)**:
   * Visualización de datos, métricas y beneficiarios con tarjetas interactivas de alto impacto.
7. **Red de Apoyo y Testimonios (`<SupportSection />`)**:
   * Historias de vida y alianzas institucionales.
8. **Quiero Apoyar (`<QuieroApoyarSection />`)**:
   * Bloque de llamada a la acción (CTA) enfocado en voluntariado, donaciones y colaboración.
9. **Contacto (`<ContactSection />`)**:
   * Formulario de contacto, mapa y datos oficiales de la fundación.
10. **Footer (`<Footer />`)**:
    * Pie de página en Azul Jawira `#0A2850` con accesos rápidos, información legal y créditos.

### 2.3. Botón Signature Jawira (`.btn-jawira` / `JawiraButton`)

Un componente interactivo característico que utiliza animaciones de barrido a 90 grados y mezcla cromática en modo `difference`:

```css
/* Ejemplo de clases y estructura del botón Jawira */
.btn-jawira {
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-weight: 900;
  border-radius: 0px; /* Bordes rectos institucionales */
}
```

Variantes principales de color:
* **Primary / Black**: Fondo negro con barrido blanco.
* **Secondary / Green**: Fondo negro con barrido Verde Jawira (`#50AA1E`).
* **Navy**: Fondo Azul Jawira (`#0A2850`) con barrido blanco.
* **Olive**: Fondo verde olivo (`#2B381A`) con barrido blanco.
* **Outline Dark**: Borde oscuro (`#1B361F`) para fondos claros.

---

## 3. Paleta de Colores Oficial

El sistema cromático de la Fundación Jawira está construido utilizando la percepción de color moderna **OKLCH** y mapeado a códigos hexadecimales (**HEX**) y **RGB** para compatibilidad universal.

```
       ADN Cromático Fundación Jawira:
  ┌─────────────────┬─────────────────┬─────────────────┐
  │   AZUL JAWIRA   │ VERDE ESPERANZA │   ÁMBAR SOL     │
  │     #0A2850     │     #50AA1E     │     #EA9010     │
  │ (Agua/Solidez)  │ (Vida/Impacto)  │ (Calidez/Foco)  │
  └─────────────────┴─────────────────┴─────────────────┘
```

### 3.1. Colores Nucleares de Marca (Brand Core)

| Token CSS | Nombre Oficial | Hex (Light) | Hex (Dark) | Valor OKLCH (Light) | Aplicación / Rol |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `--primary` | **Azul Jawira Institucional** | `#0A2850` | `#235A9F` | `oklch(0.25 0.06 260)` | Encabezados principales, navbar, footer, estructura institucional. |
| `--secondary` | **Verde Esperanza & Vida** | `#50AA1E` | `#68CE2B` | `oklch(0.60 0.15 135)` | Botones de llamada a la acción (CTA 'Quiero Apoyar'), logros e insignias activas. |
| `--accent` | **Ámbar / Naranja Sol** | `#EA9010` | `#FFA826` | `oklch(0.65 0.15 50)` | Puntos focales, métricas destacadas, alertas constructivas y detalles cálidos. |

### 3.2. Superficies y Tokens Neutros (UI Tokens)

| Token CSS | Nombre | Hex (Light) | Hex (Dark) | Descripción |
| :--- | :--- | :--- | :--- | :--- |
| `--background` | Background Base | `#FBFDFE` | `#101726` | Lienzo general donde reposa todo el contenido. |
| `--foreground` | Texto Principal | `#0B132B` | `#F8FAFC` | Color principal para textos de lectura, párrafos y títulos. |
| `--card` | Tarjeta / Contenedor | `#FFFFFF` | `#151F33` | Fondo de módulos, cards de proyectos, modales y cajas de contenido. |
| `--muted` | Superficie Atenuada | `#F1F5F9` | `#1C2740` | Fondos secundarios para secciones alternadas y elementos pasivos. |
| `--border` | Borde Estructural | `#E2E8F0` | `#263554` | Líneas sutiles de separación de secciones y contornos de tarjeta. |

### 3.3. Paleta para Gráficos e Indicadores (Charts)

Gama calibrada para reportes de transparencia, donaciones e indicadores de impacto social:

* **`--chart-1` (Azul Institucional)**: `#0A2850` (Light) / `#3B82F6` (Dark)
* **`--chart-2` (Verde Impacto)**: `#50AA1E` (Light) / `#68CE2B` (Dark)
* **`--chart-3` (Ámbar Alerta)**: `#EA9010` (Light) / `#FFA826` (Dark)
* **`--chart-4` (Turquesa Andino)**: `#0284C7` (Light) / `#38BDF8` (Dark)
* **`--chart-5` (Oro Solar)**: `#D97706` (Light) / `#FBBF24` (Dark)

---

## 4. Código de Variables CSS (`app/globals.css`)

```css
:root {
  /* --- Fundación Jawira Design Tokens (Light Mode) --- */
  --background: oklch(0.99 0 0);
  --foreground: oklch(0.15 0.03 260);

  --card: oklch(1 0 0);
  --card-foreground: oklch(0.15 0.03 260);

  /* Primary: #0a2850 — Deep institutional blue */
  --primary: oklch(0.25 0.06 260);
  --primary-foreground: oklch(0.99 0 0);

  /* Secondary: #50aa1e — Green for CTAs and positive impact */
  --secondary: oklch(0.6 0.15 135);
  --secondary-foreground: oklch(0.99 0 0);

  /* Accent: #ea9010 — Orange/Amber for highlights */
  --accent: oklch(0.65 0.15 50);
  --accent-foreground: oklch(0.99 0 0);

  --muted: oklch(0.965 0.003 260);
  --muted-foreground: oklch(0.45 0.02 260);
  --border: oklch(0.92 0.005 260);
  --radius: 0.75rem;
}

.dark {
  /* --- Fundación Jawira Design Tokens (Dark Mode) --- */
  --background: oklch(0.16 0.02 260); 
  --foreground: oklch(0.98 0.01 260);

  --card: oklch(0.18 0.02 260);
  --card-foreground: oklch(0.98 0.01 260);

  --primary: oklch(0.45 0.14 260);
  --primary-foreground: oklch(0.99 0 0);

  --secondary: oklch(0.75 0.18 135);
  --secondary-foreground: oklch(0.16 0.02 260);

  --accent: oklch(0.75 0.18 50);
  --accent-foreground: oklch(0.16 0.02 260);

  --muted: oklch(0.22 0.03 260);
  --muted-foreground: oklch(0.75 0.02 260);
  --border: oklch(0.25 0.03 260);
}
```

---
*Documento generado para la documentación técnica y de marca de la Fundación JAWIRA.*
