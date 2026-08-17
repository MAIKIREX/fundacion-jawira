'use client'

import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { NutrientUptakeArt, TankMixingArt } from '@/components/impact-section'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export interface MisionVisionItem {
  number: string
  title: string
  subtitle: string
  description?: string
  illustration: 'mision' | 'vision'
}

const ITEMS: MisionVisionItem[] = [
  {
    number: '01',
    title: 'Nuestra Misión',
    subtitle: 'Articular tecnología productiva, educación integral y prevención de la salud para comunidades vulnerables, promoviendo desarrollo sostenible en zonas urbanas, periurbanas y rurales del Departamento de La Paz.',
    illustration: 'mision',
  },
  {
    number: '02',
    title: 'Nuestra Visión',
    subtitle: 'Ser una organización no gubernamental referente en Bolivia por la generación de transformaciones sostenibles, impulsando comunidades resilientes con equidad, innovación y justicia social.',
    illustration: 'vision',
  },
]

export default function MisionVisionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsGridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 200)

    const cards = cardsGridRef.current?.querySelectorAll('.mv-impact-card')
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
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
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

  return (
    <section
      ref={sectionRef}
      data-header-theme="light"
      className="relative w-full py-24 sm:py-28 md:py-32 overflow-hidden bg-[#F5F2EB] dark:bg-[#0D1524] text-[#1B361F] dark:text-[#F8FAFC] border-b border-[#1B361F]/10 dark:border-white/10"
    >
      <div className="w-full px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        
        {/* =========================================================
            1. ENCABEZADO EDITORIAL ESTILO IMPACTSECTION
            ========================================================= */}
        <div className="max-w-3xl space-y-3 mb-16 sm:mb-20 md:mb-24">
          <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#50AA1E] dark:text-[#68CE2B] block">
            NUESTRA BRÚJULA
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-sans font-medium text-[#1B361F] dark:text-white tracking-[-0.03em] leading-[1.08]">
            Misión y Visión
          </h2>
          <p className="text-base sm:text-lg text-[#4A634E] dark:text-slate-300 max-w-2xl leading-relaxed font-normal pt-1">
            La brújula que guía nuestro trabajo y el compromiso institucional con el desarrollo integral en Bolivia.
          </p>
        </div>

        {/* =========================================================
            2. GRILLA DE 2 TARJETAS (MISIÓN Y VISIÓN) ESTILO IMPACTSECTION
            ========================================================= */}
        <div
          ref={cardsGridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-14 md:gap-12 lg:gap-20 items-start max-w-5xl"
        >
          {ITEMS.map((item) => (
            <div
              key={item.number}
              className="mv-impact-card group flex flex-col justify-between h-full min-h-[380px] lg:min-h-[420px] p-8 sm:p-10 rounded-3xl bg-white/60 dark:bg-white/5 border border-[#1B361F]/10 dark:border-white/10 backdrop-blur-xs transition-all duration-300 hover:shadow-xl hover:bg-white dark:hover:bg-white/10"
            >
              {/* Contenido Superior: Número + Título + Descripción */}
              <div className="space-y-4">
                {/* Número Verde Salvia (01, 02) */}
                <span className="block text-4xl sm:text-5xl font-sans font-normal text-[#8FA382] dark:text-[#A1B694] tracking-tight">
                  {item.number}
                </span>

                {/* Título */}
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1B361F] dark:text-white tracking-tight leading-snug">
                  {item.title}
                </h3>

                {/* Subtítulo / Descripción */}
                <p className="text-sm sm:text-base text-[#3E5642] dark:text-slate-300 font-normal leading-relaxed">
                  {item.subtitle}
                </p>
              </div>

              {/* Ilustración Vectorial en Parte Inferior */}
              <div className="mt-8 sm:mt-12 w-full flex items-center justify-center text-[#2A482E] dark:text-slate-200 transition-transform duration-500 group-hover:scale-105">
                {item.illustration === 'mision' ? (
                  <NutrientUptakeArt />
                ) : (
                  <TankMixingArt badgeLabel="2034" />
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
