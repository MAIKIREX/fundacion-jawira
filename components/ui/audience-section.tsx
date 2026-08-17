'use client'

import React, { useRef } from 'react'
import { LucideIcon } from 'lucide-react'
import { JawiraButton } from '@/components/ui/jawira-button'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export interface AudienceItem {
  number?: string
  title: string
  description: string
  icon: LucideIcon
}

export interface AudienceSectionProps {
  id?: string
  eyebrow?: string
  title?: string
  description?: string
  items: AudienceItem[]
  ctaButtonText?: string
  ctaButtonHref?: string
  className?: string
}

export default function AudienceSection({
  id = 'a-quien-beneficia',
  eyebrow = 'Alcance Social',
  title = '¿A quién beneficia el Centro Integral?',
  description = 'Nuestros servicios están diseñados para poblaciones específicas del Departamento de La Paz, priorizando comunidades vulnerables que requieren una atención integral en salud, educación y tecnología.',
  items,
  ctaButtonText,
  ctaButtonHref,
  className = '',
}: AudienceSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const leftColRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.po-subtitle', {
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: leftColRef.current,
          start: 'top 80%',
        },
      })

      gsap.from('.po-title', {
        y: 30,
        autoAlpha: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: leftColRef.current,
          start: 'top 80%',
        },
      })

      gsap.from('.po-desc', {
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: leftColRef.current,
          start: 'top 80%',
        },
      })

      gsap.from('.po-segment', {
        y: 35,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.po-right-col',
          start: 'top 85%',
        },
      })
    })
  }, { scope: sectionRef })

  if (!items || items.length === 0) return null

  return (
    <section 
      id={id}
      ref={sectionRef} 
      className={`py-24 sm:py-32 md:py-36 bg-[#F5F2EB] dark:bg-[#0D1524] border-t border-[#1B361F]/15 dark:border-white/15 transition-colors ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">

          {/* Columna Izquierda: Encabezado */}
          <div ref={leftColRef} className="space-y-6 lg:sticky lg:top-28">
            <div className="space-y-4">
              {eyebrow && (
                <span className="po-subtitle text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#50AA1E] dark:text-[#68CE2B] block">
                  {eyebrow}
                </span>
              )}
              {title && (
                <h2 className="po-title text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-[#1B361F] dark:text-white tracking-[-0.03em] leading-[1.08]">
                  {title}
                </h2>
              )}
            </div>
            {description && (
              <p className="po-desc text-base sm:text-lg text-[#2D4A32]/80 dark:text-slate-300 leading-relaxed font-sans font-normal">
                {description}
              </p>
            )}

            {ctaButtonText && ctaButtonHref && (
              <div className="po-desc pt-4">
                <JawiraButton
                  href={ctaButtonHref}
                  variant="secondary"
                  size="lg"
                  bullets
                  className="w-full sm:w-auto"
                >
                  {ctaButtonText}
                </JawiraButton>
              </div>
            )}
          </div>

          {/* Columna Derecha: Opciones Divididas por Líneas Horizontales Notables */}
          <div className="po-right-col divide-y divide-[#1B361F]/20 dark:divide-white/20 border-t border-b border-[#1B361F]/20 dark:border-white/20">
            {items.map((item, index) => {
              const Icon = item.icon
              const itemNumber = item.number || `0${index + 1}`

              return (
                <div
                  key={item.title || index}
                  className="po-segment py-10 md:py-12 flex items-start gap-6 sm:gap-8 group transition-colors hover:bg-black/5 dark:hover:bg-white/5 px-4 sm:px-6 rounded-2xl"
                >
                  {/* Ícono Verde en Fondo Suave */}
                  <div className="po-icon w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#50AA1E]/10 dark:bg-[#68CE2B]/15 text-[#50AA1E] dark:text-[#68CE2B] flex items-center justify-center flex-shrink-0 border border-[#50AA1E]/20 shadow-xs transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.5]" />
                  </div>

                  {/* Detalle del Ítem */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-mono font-bold text-[#50AA1E] dark:text-[#68CE2B] tracking-widest uppercase">
                        {itemNumber}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-sans font-semibold text-[#1B361F] dark:text-white tracking-tight group-hover:text-[#50AA1E] dark:group-hover:text-[#68CE2B] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#2D4A32]/80 dark:text-slate-300 font-sans leading-relaxed font-normal pt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
