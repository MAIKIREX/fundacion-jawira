'use client'

import React, { useState, useRef } from 'react'
import { LucideIcon } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export interface MechanismStep {
  id: string
  number: string
  title: string
  fullDesc: string
  tag?: string
  icon: LucideIcon
}

export interface MechanismSectionProps {
  id?: string
  eyebrow?: string
  title?: string
  description?: string
  steps: MechanismStep[]
  footerBadgeText?: string
  className?: string
}

export default function MechanismSection({
  id = 'como-funciona',
  eyebrow = 'Proceso de Implementación',
  title = '¿Cómo funciona el Centro Integral?',
  description = 'Nuestra metodología articula fases clave para asegurar la viabilidad técnica, la sostenibilidad comunitaria y la calidad en cada intervención.',
  steps,
  footerBadgeText = 'Garantía de Sostenibilidad Comunitaria',
  className = '',
}: MechanismSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.mechanism-header', {
        y: 40,
        autoAlpha: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })

      gsap.from('.mechanism-body', {
        y: 40,
        autoAlpha: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.mechanism-body',
          start: 'top 85%',
        },
      })
    })
  }, { scope: sectionRef })

  if (!steps || steps.length === 0) return null

  const currentStep = steps[activeIndex] || steps[0]
  const StepIcon = currentStep.icon

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`py-24 md:py-36 bg-[#FBFDFE] dark:bg-[#0A121E] border-t border-border/40 transition-colors ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado Principal */}
        <div className="mechanism-header mb-16 md:mb-20 max-w-3xl">
          {eyebrow && (
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#50AA1E] dark:text-[#68CE2B] block mb-4">
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-[#1B361F] dark:text-white tracking-[-0.03em] leading-[1.08]">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-base sm:text-lg text-[#2D4A32]/80 dark:text-slate-300 mt-6 leading-relaxed font-sans font-normal">
              {description}
            </p>
          )}
        </div>

        {/* Rejilla de 3 Columnas Estilo Mechanism of Action */}
        <div className="mechanism-body grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Columna 1: Lista Vertical de Pasos (Navegación) */}
          <div className="lg:col-span-4 relative border-r-0 lg:border-r border-black/10 dark:border-white/10 pr-0 lg:pr-6 space-y-2">
            {steps.map((paso, index) => {
              const isActive = activeIndex === index
              return (
                <button
                  key={paso.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 relative group flex flex-col justify-center cursor-pointer ${
                    isActive
                      ? 'bg-[#F2F2EC] dark:bg-[#121D2F]'
                      : 'hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  <span
                    className={`text-xs font-mono font-bold tracking-widest block transition-colors ${
                      isActive
                        ? 'text-[#50AA1E] dark:text-[#68CE2B]'
                        : 'text-muted-foreground/60 group-hover:text-foreground'
                    }`}
                  >
                    {paso.number}
                  </span>
                  <span
                    className={`text-base sm:text-lg font-sans font-medium mt-1 leading-snug transition-colors ${
                      isActive
                        ? 'text-[#1B361F] dark:text-white'
                        : 'text-[#2D4A32]/70 dark:text-slate-400 group-hover:text-foreground'
                    }`}
                  >
                    {paso.title}
                  </span>

                  {/* Barra Verde de Indicador Activo a la Derecha */}
                  {isActive && (
                    <div className="absolute right-0 top-3 bottom-3 w-1.5 bg-[#50AA1E] dark:bg-[#68CE2B] rounded-full" />
                  )}
                </button>
              )
            })}
          </div>

          {/* Columna 2: Ícono Limpio Flotante (Sin Marcos ni Cuadrados) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center py-8 lg:py-0 relative group">
            
            {/* Sutil resplandor ambiental circular */}
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#50AA1E]/10 dark:bg-[#68CE2B]/10 blur-3xl pointer-events-none transition-all duration-700 group-hover:scale-125" />

            {/* Ícono Verde Flotante Orgánico */}
            <div className="relative z-10 flex items-center justify-center p-4 transition-all duration-500 transform group-hover:scale-110">
              <StepIcon className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 text-[#50AA1E] dark:text-[#68CE2B] stroke-[1.15] drop-shadow-[0_12px_28px_rgba(80,170,30,0.22)]" />
            </div>

            {/* Etiqueta Minimalista en Tipografía Monoespaciada */}
            {currentStep.tag && (
              <div className="relative z-10 mt-6 text-center">
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#50AA1E] dark:text-[#68CE2B]">
                  {currentStep.tag}
                </span>
              </div>
            )}

          </div>

          {/* Columna 3: Explicación Detallada del Paso Activo */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              {currentStep.tag && (
                <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#50AA1E] dark:text-[#68CE2B] block mb-3">
                  {currentStep.tag}
                </span>
              )}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-sans font-medium text-[#1B361F] dark:text-white tracking-tight leading-snug">
                {currentStep.title}
              </h3>
            </div>

            <p className="text-base sm:text-lg text-[#2D4A32]/80 dark:text-slate-300 leading-relaxed font-sans font-normal">
              {currentStep.fullDesc}
            </p>

            {footerBadgeText && (
              <div className="pt-4 border-t border-black/10 dark:border-white/10">
                <div className="p-4 rounded-2xl bg-[#50AA1E]/10 border border-[#50AA1E]/20 text-[#1B361F] dark:text-white text-xs font-mono font-semibold uppercase tracking-wider flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#50AA1E] dark:bg-[#68CE2B] animate-pulse" />
                  {footerBadgeText}
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  )
}
