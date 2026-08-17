"use client"

import React, { useRef, useEffect } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// ============================================================================
// 1. ILUSTRACIONES VECTORIALES ARTESANALES (SVG) DE ALTA PRECISIÓN
// ============================================================================

/**
 * Ilustración 01: Vaso / Disolución / Temporizador (Tank Mixing)
 */
export function TankMixingArt({
  className = "w-full max-w-[240px] h-44 sm:h-48",
  badgeLabel = "10m",
}: {
  className?: string
  badgeLabel?: string
}) {
  return (
    <svg
      viewBox="0 0 200 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Vaso / Cilindro lineal */}
      <ellipse
        cx="72"
        cy="40"
        rx="52"
        ry="14"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Nivel de agua y menisco */}
      <path
        d="M20 72 C20 80, 124 80, 124 72"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="3 3"
        opacity="0.6"
      />
      <path
        d="M20 72 C20 64, 124 64, 124 72"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Paredes laterales del cilindro */}
      <line
        x1="20"
        y1="40"
        x2="20"
        y2="135"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <line
        x1="124"
        y1="40"
        x2="124"
        y2="135"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Base curva inferior */}
      <path
        d="M20 135 C20 152, 124 152, 124 135"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Tableta sumergida con emblema botánico floral */}
      <g transform="translate(64, 110) rotate(10)">
        <rect
          x="-15"
          y="-12"
          width="30"
          height="24"
          rx="7"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
        {/* Pétalos centrales estilizados */}
        <path
          d="M-5 -2 C-3 -6, 3 -6, 5 -2 C3 2, -3 2, -5 -2 Z"
          stroke="currentColor"
          strokeWidth="0.9"
        />
        <path
          d="M-2 -5 C-6 -3, -6 3, -2 5 C2 3, 2 -3, -2 -5 Z"
          stroke="currentColor"
          strokeWidth="0.9"
        />
        <circle cx="0" cy="0" r="1.5" fill="#8FA382" />
      </g>

      {/* Micro-burbujas efervescentes ascendentes */}
      <circle cx="56" cy="94" r="1.5" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="76" cy="86" r="2.2" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="68" cy="74" r="1.2" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="86" cy="100" r="1" stroke="currentColor" strokeWidth="0.8" />

      {/* Insignia Circular de Tiempo / Medición con cuadrante verde salvia */}
      <g transform="translate(136, 46)">
        {/* Círculo base */}
        <circle
          cx="0"
          cy="0"
          r="22"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
        {/* Cuadrante relleno en verde salvia */}
        <path
          d="M0 0 L0 -22 A22 22 0 0 1 22 0 Z"
          fill="#8FA382"
          opacity="0.85"
        />
        {/* Manecillas del reloj */}
        <line
          x1="0"
          y1="0"
          x2="0"
          y2="-13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="0"
          y1="0"
          x2="7"
          y2="0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Etiqueta textual del temporizador (ej. 10m) */}
        <text
          x="0"
          y="11"
          textAnchor="middle"
          fill="currentColor"
          fontSize="9.5"
          fontFamily="ui-monospace, monospace"
          fontWeight="600"
          letterSpacing="-0.03em"
        >
          {badgeLabel}
        </text>
      </g>
    </svg>
  )
}

/**
 * Ilustración 02: Cápsula / Suspensión de Carbono y Partículas (Capsule suspension)
 */
export function CapsuleSuspensionArt({
  className = "w-full max-w-[240px] h-44 sm:h-48",
}: {
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 200 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Constelación de esferas y partículas flotantes en verde salvia */}
      <circle cx="82" cy="28" r="6.5" fill="#8FA382" />
      <circle cx="48" cy="46" r="4.5" fill="#8FA382" />
      <circle cx="128" cy="42" r="5" fill="#8FA382" />
      <circle cx="152" cy="62" r="6.5" fill="#8FA382" />
      <circle cx="34" cy="80" r="5.5" fill="#8FA382" />
      <circle cx="42" cy="118" r="7" fill="#8FA382" />
      <circle cx="78" cy="140" r="4.5" fill="#8FA382" />
      <circle cx="120" cy="148" r="8" fill="#8FA382" />
      <circle cx="150" cy="116" r="3.5" fill="#8FA382" />
      <circle cx="162" cy="136" r="2.5" fill="#8FA382" />
      <circle cx="138" cy="86" r="4" fill="#8FA382" />
      <circle cx="60" cy="154" r="2" fill="#8FA382" />

      {/* Tableta Isométrica Redondeada */}
      <g transform="translate(98, 92) rotate(-8)">
        {/* Bisel inferior 3D */}
        <path
          d="M-36 12 C-36 28, -20 38, 0 38 C20 38, 36 28, 36 12 L36 18 C36 34, 20 44, 0 44 C-20 44, -36 34, -36 18 Z"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
        {/* Cuerpo principal redondeado */}
        <rect
          x="-36"
          y="-30"
          width="72"
          height="60"
          rx="22"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
        />

        {/* Emblema botánico floral grabado en el centro */}
        <g transform="translate(0, 0) scale(1.15)">
          <path
            d="M0 -3 C-5 -13, 5 -13, 0 -3"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M0 3 C-6 13, 6 13, 0 3"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M-3 0 C-13 -6, -13 6, -3 0"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 0 C13 -5, 13 5, 3 0"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Hojas diagonales secundarias */}
          <path
            d="M-2 -2 C-8 -8, -4 -11, -2 -2"
            stroke="currentColor"
            strokeWidth="0.9"
            strokeLinecap="round"
          />
          <path
            d="M2 -2 C8 -8, 11 -4, 2 -2"
            stroke="currentColor"
            strokeWidth="0.9"
            strokeLinecap="round"
          />
          <path
            d="M2 2 C8 8, 4 11, 2 2"
            stroke="currentColor"
            strokeWidth="0.9"
            strokeLinecap="round"
          />
        </g>
      </g>
    </svg>
  )
}

/**
 * Ilustración 03: Brote Botánico / Raíces / Absorción de Nutrientes (Nutrient uptake)
 */
export function NutrientUptakeArt({
  className = "w-full max-w-[240px] h-44 sm:h-48",
}: {
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 200 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Tallo central */}
      <line
        x1="100"
        y1="34"
        x2="100"
        y2="122"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />

      {/* Hoja superior */}
      <path
        d="M100 62 C85 45, 80 20, 100 22 C108 35, 104 52, 100 62 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Hoja lateral derecha */}
      <path
        d="M100 58 C115 42, 138 42, 142 62 C125 74, 108 68, 100 58 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Hoja lateral izquierda */}
      <path
        d="M100 86 C82 72, 58 72, 54 94 C72 108, 92 98, 100 86 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Nervaduras sutiles de las hojas */}
      <path
        d="M66 88 C78 86, 92 86, 98 87"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M130 55 C120 57, 108 58, 102 58"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Arco de nivel de suelo */}
      <path
        d="M48 134 C78 120, 122 120, 152 134"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Sistema radicular en el subsuelo */}
      <path
        d="M100 124 C100 136, 102 148, 102 158"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M98 132 C90 140, 80 146, 74 150"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M96 142 C90 148, 86 156, 82 160"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <path
        d="M102 132 C110 140, 120 146, 126 150"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M104 142 C110 148, 114 156, 118 160"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />

      {/* Partículas de nutrientes y tierra en verde salvia */}
      <circle cx="68" cy="138" r="3.5" fill="#8FA382" />
      <circle cx="82" cy="132" r="2.5" fill="#8FA382" />
      <circle cx="88" cy="148" r="4.5" fill="#8FA382" />
      <circle cx="72" cy="154" r="2" fill="#8FA382" />
      <circle cx="60" cy="148" r="3" fill="#8FA382" />
      <circle cx="102" cy="146" r="3.5" fill="#8FA382" />
      <circle cx="106" cy="162" r="2.5" fill="#8FA382" />
      <circle cx="114" cy="136" r="3" fill="#8FA382" />
      <circle cx="122" cy="148" r="4.5" fill="#8FA382" />
      <circle cx="134" cy="140" r="3.5" fill="#8FA382" />
      <circle cx="138" cy="154" r="2" fill="#8FA382" />
      <circle cx="144" cy="144" r="2.5" fill="#8FA382" />
    </svg>
  )
}

// ============================================================================
// 2. TIPOS E INTERFACES DEL COMPONENTE REUTILIZABLE
// ============================================================================

export type ImpactIllustrationType =
  | "tank-mixing"
  | "capsule-suspension"
  | "nutrient-uptake"

export interface ImpactCardItem {
  /** Número en verde salvia ('01', '02', '03', etc.) */
  number: string
  /** Título principal de la tarjeta en negrita */
  title: string
  /** Subtítulo o descripción corta complementaria */
  subtitle: string
  /** Descripción secundaria o contextual adicional (opcional) */
  description?: string
  /** Tipo de ilustración predefinida o componente SVG personalizado */
  illustration?: ImpactIllustrationType | React.ReactNode
  /** Etiqueta opcional para el badge del temporizador (ej. '10m' o '+2.8M') */
  badgeLabel?: string
  /** Enlace opcional */
  link?: {
    text: string
    href: string
  }
}

export interface ImpactSectionProps {
  /** Etiqueta superior del encabezado */
  tagline?: string
  /** Título principal de la sección */
  title?: string
  /** Texto descriptivo bajo el título */
  description?: string
  /** Lista de tarjetas de impacto (si no se especifica, usa los datos predeterminados de JAWIRA) */
  items?: ImpactCardItem[]
  /** Clases CSS adicionales para la sección */
  className?: string
  /** Color de fondo del contenedor */
  background?: "sand" | "white" | "dark" | "transparent"
  /** Mostrar u ocultar botón de llamada a la acción inferior */
  showCta?: boolean
  /** Texto del botón CTA */
  ctaText?: string
  /** Enlace del botón CTA */
  ctaHref?: string
}

// ============================================================================
// 3. DATOS PREDETERMINADOS (FUNDACIÓN JAWIRA)
// ============================================================================

export const DEFAULT_IMPACT_ITEMS: ImpactCardItem[] = [
  {
    number: "01",
    title: "Población objetivo",
    subtitle: "+2.800.000 habitantes en el Departamento de La Paz con potencial de beneficiarse de nuestros programas.",
    illustration: "tank-mixing",
    badgeLabel: "10m",
  },
  {
    number: "02",
    title: "Áreas de cobertura",
    subtitle: "Alcance en 3 zonas estratégicas: urbanas, periurbanas y rurales del departamento para un impacto integral.",
    illustration: "capsule-suspension",
  },
  {
    number: "03",
    title: "Horizonte de impacto",
    subtitle: "Plan 2026–2034: fase inicial de implementación seguida de consolidación y expansión territorial.",
    illustration: "nutrient-uptake",
  },
]

// ============================================================================
// 4. COMPONENTE PRINCIPAL REUTILIZABLE
// ============================================================================

export default function ImpactSection({
  tagline = "Nuestro alcance",
  title = "Impacto y Cobertura Territorial",
  description = "Compromiso medible con el desarrollo integral y sostenible en el Departamento de La Paz.",
  items = DEFAULT_IMPACT_ITEMS,
  className = "",
  background = "sand",
  showCta = false,
  ctaText = "Ver diagnóstico completo",
  ctaHref = "/impacto",
}: ImpactSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsGridRef = useRef<HTMLDivElement>(null)

  // ScrollTrigger seguro que no oculta elementos por defecto
  useEffect(() => {
    if (typeof window === "undefined") return

    // Refrescar ScrollTrigger para asegurar el cálculo exacto de alturas en Next.js
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 200)

    const cards = cardsGridRef.current?.querySelectorAll(".impact-card-item")
    if (cards && cards.length > 0 && sectionRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          cards,
          { y: 35, opacity: 0.8 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              once: true,
            },
          }
        )
      }, sectionRef)

      return () => {
        clearTimeout(timer)
        ctx.revert()
      }
    }

    return () => clearTimeout(timer)
  }, [])

  // Mapeo de estilos de fondo
  const bgClasses = {
    sand: "bg-[#F5F2EB] dark:bg-[#0D1524] text-[#1B361F] dark:text-[#F8FAFC]",
    white: "bg-white dark:bg-[#0D1524] text-[#1B361F] dark:text-[#F8FAFC]",
    dark: "bg-[#0D1524] text-[#F8FAFC]",
    transparent: "bg-transparent text-[#1B361F] dark:text-[#F8FAFC]",
  }[background]

  // Renderizador auxiliar de ilustraciones
  const renderIllustration = (item: ImpactCardItem, index: number) => {
    if (React.isValidElement(item.illustration)) {
      return item.illustration
    }

    if (item.illustration === "tank-mixing" || (!item.illustration && index === 0)) {
      return <TankMixingArt badgeLabel={item.badgeLabel || "10m"} />
    }
    if (item.illustration === "capsule-suspension" || (!item.illustration && index === 1)) {
      return <CapsuleSuspensionArt />
    }
    if (item.illustration === "nutrient-uptake" || (!item.illustration && index === 2)) {
      return <NutrientUptakeArt />
    }

    return null
  }

  const activeItems = items && items.length > 0 ? items : DEFAULT_IMPACT_ITEMS

  return (
    <section
      ref={sectionRef}
      data-header-theme={background === "dark" ? "dark" : "light"}
      className={`relative w-full py-24 sm:py-28 md:py-32 overflow-hidden ${bgClasses} ${className}`}
    >
      <div className="w-full px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        
        {/* =========================================================
            1. ENCABEZADO DE SECCIÓN EDITORIAL
            ========================================================= */}
        <div className="max-w-3xl space-y-3 mb-16 sm:mb-20 md:mb-24">
          <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#50AA1E] dark:text-[#68CE2B] block">
            {tagline}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-sans font-medium text-[#1B361F] dark:text-white tracking-[-0.03em] leading-[1.08]">
            {title}
          </h2>
          {description && (
            <p className="text-base sm:text-lg text-[#4A634E] dark:text-slate-300 max-w-2xl leading-relaxed font-normal pt-1">
              {description}
            </p>
          )}
        </div>

        {/* =========================================================
            2. GRILLA DE 3 TARJETAS AL ESTILO EXACTO DE LA REFERENCIA
            ========================================================= */}
        <div
          ref={cardsGridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-14 md:gap-10 lg:gap-16 xl:gap-20 items-start"
        >
          {activeItems.map((item, index) => {
            return (
              <div
                key={item.number || index}
                className="impact-card-item group flex flex-col justify-between h-full min-h-[380px] lg:min-h-[420px] transition-all duration-300 opacity-100 visible"
              >
                {/* Contenido Superior: Número + Título + Subtítulo */}
                <div className="space-y-4">
                  {/* Número Verde Salvia Suave (01, 02, 03) */}
                  <span className="block text-4xl sm:text-5xl font-sans font-normal text-[#8FA382] dark:text-[#A1B694] tracking-tight">
                    {item.number}
                  </span>

                  {/* Título de la tarjeta */}
                  <h3 className="text-2xl sm:text-2xl lg:text-[1.65rem] font-bold text-[#1B361F] dark:text-white tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  {/* Subtítulo / Descripción concisa */}
                  <p className="text-sm sm:text-base text-[#3E5642] dark:text-slate-300 font-normal leading-relaxed">
                    {item.subtitle}
                  </p>

                  {item.description && (
                    <p className="text-xs sm:text-sm text-[#586F5C] dark:text-slate-400 leading-relaxed pt-1">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Contenido Inferior: Ilustración Lineal de Precisión */}
                <div className="mt-8 sm:mt-12 w-full flex items-center justify-center text-[#2A482E] dark:text-slate-200 transition-transform duration-500 group-hover:scale-105">
                  {renderIllustration(item, index)}
                </div>

                {/* Enlace opcional si se incluye */}
                {item.link && (
                  <div className="pt-4 border-t border-[#1B361F]/10 dark:border-white/10 mt-6">
                    <Link
                      href={item.link.href}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#55733A] dark:text-[#68CE2B] hover:underline"
                    >
                      <span>{item.link.text}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* =========================================================
            3. BOTÓN OPCIONAL DE LLAMADA A LA ACCIÓN
            ========================================================= */}
        {showCta && (
          <div className="mt-16 sm:mt-20 pt-8 border-t border-[#1B361F]/10 dark:border-white/10 flex justify-start">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#1B361F]/40 dark:border-white/30 text-xs font-mono font-bold tracking-widest uppercase text-[#1B361F] dark:text-white hover:bg-[#1B361F] hover:text-white dark:hover:bg-white dark:hover:text-[#0D1524] transition-all duration-300 active:scale-95 shadow-xs"
            >
              <span>• {ctaText.toUpperCase()} •</span>
            </Link>
          </div>
        )}

      </div>
    </section>
  )
}
