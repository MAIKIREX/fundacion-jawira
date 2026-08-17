'use client'

import React, { useRef } from 'react'
import { Heart, Hand as Hands, Smile, Target, Scale, Lightbulb, Shield, Leaf } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const valores = [
  {
    icon: Heart,
    title: 'Esperanza',
    descripcion: 'Creemos firmemente en el potencial transformador de cada persona y comunidad en Bolivia.',
  },
  {
    icon: Hands,
    title: 'Solidaridad',
    descripcion: 'Trabajamos unidos en la construcción de un futuro compartido con equidad y apoyo mutuo.',
  },
  {
    icon: Smile,
    title: 'Empatía',
    descripcion: 'Escuchamos y comprendemos a profundidad las verdaderas necesidades de las familias.',
  },
  {
    icon: Target,
    title: 'Compromiso',
    descripcion: 'Nos responsabilizamos éticamente de nuestras acciones y resultados de alto impacto.',
  },
  {
    icon: Scale,
    title: 'Integridad',
    descripcion: 'Actuamos con transparencia absoluta, honestidad y coherencia en cada territorio.',
  },
  {
    icon: Lightbulb,
    title: 'Innovación',
    descripcion: 'Buscamos soluciones creativas y tecnológicas a problemas sociales complejos.',
  },
  {
    icon: Shield,
    title: 'Inclusión',
    descripcion: 'Valoramos la diversidad cultural y garantizamos participación justa sin discriminación.',
  },
  {
    icon: Leaf,
    title: 'Sostenibilidad',
    descripcion: 'Generamos proyectos con impacto duradero para las generaciones presentes y futuras.',
  },
]

export default function ValoresSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Reveal del encabezado
      gsap.from('.valores-header', {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.valores-header',
          start: 'top 85%',
          once: true,
        },
      })

      // Reveal escalonado de los ítems de valores
      gsap.from('.valor-item', {
        y: 35,
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.valores-grid',
          start: 'top 85%',
          once: true,
        },
      })
    })
  }, { scope: sectionRef })

  return (
    <section
      id="valores"
      ref={sectionRef}
      data-header-theme="light"
      className="relative w-full py-24 sm:py-28 md:py-32 bg-[#F5F2EB] dark:bg-[#0D1524] text-[#1B361F] dark:text-[#F8FAFC] border-b border-[#1B361F]/10 dark:border-white/10"
    >
      <div className="w-full px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        
        {/* =========================================================
            1. ENCABEZADO EDITORIAL
            ========================================================= */}
        <div className="valores-header max-w-3xl space-y-3 mb-16 sm:mb-20 md:mb-24">
          <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#50AA1E] dark:text-[#68CE2B] block">
            NUESTRO ADN INSTITUCIONAL
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-sans font-medium text-[#1B361F] dark:text-white tracking-[-0.03em] leading-[1.08]">
            Valores que mueven nuestro cauce
          </h2>
          <p className="text-base sm:text-lg text-[#4A634E] dark:text-slate-300 max-w-2xl leading-relaxed font-normal pt-1">
            Los pilares éticos y humanos que guían cada proyecto, alianza y decisión en la Fundación JAWIRA.
          </p>
        </div>

        {/* =========================================================
            2. GRILLA MINIMALISTA DE VALORES (ESTILO EXACTO DE LA REFERENCIA)
            ========================================================= */}
        <div className="valores-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 lg:gap-x-12 lg:gap-y-16">
          {valores.map((item) => {
            const IconComponent = item.icon
            return (
              <div key={item.title} className="valor-item space-y-3.5 group">
                {/* Icono circular lineal de precisión */}
                <div className="w-9 h-9 rounded-full border border-[#4A634E]/50 dark:border-[#68CE2B]/60 flex items-center justify-center text-[#2D4A32] dark:text-[#68CE2B] transition-transform duration-300 group-hover:scale-110">
                  <IconComponent className="w-4 h-4 stroke-[1.6]" />
                </div>

                {/* Título en negrita con dos puntos + descripción continua */}
                <div className="text-sm sm:text-base leading-relaxed font-sans">
                  <span className="font-bold text-[#1B361F] dark:text-white block mb-1">
                    {item.title}:
                  </span>
                  <span className="text-[#3E5642] dark:text-slate-300 font-normal">
                    {item.descripcion}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
