'use client'

import React, { useState, useRef } from 'react'
import {
  Plus,
  Minus,
  Cpu,
  Code2,
  Globe,
  Factory,
  Laptop,
  GraduationCap,
  FileText,
  Users,
  Activity,
  ShieldCheck,
  UserCheck,
  PlusCircle,
  type LucideIcon,
  Sparkles,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

interface SubCard {
  title: string
  icon: LucideIcon
  description: string
}

interface ComponentItem {
  id: string
  number: string
  title: string
  subtitle: string
  cards: SubCard[]
}

const componentesData: ComponentItem[] = [
  {
    id: 'tecnologia',
    number: '01',
    title: 'Tecnología Productiva',
    subtitle: 'Desarrollo y prueba de soluciones tecnológicas limpias para minería, agropecuaria e industria.',
    cards: [
      {
        title: 'Innovación & Prototipado',
        icon: Cpu,
        description: 'Laboratorios de diseño y prototipado rápido para soluciones locales.',
      },
      {
        title: 'Software & Digital',
        icon: Code2,
        description: 'Desarrollo de herramientas y plataformas digitales a medida.',
      },
      {
        title: 'Plataformas Sociales',
        icon: Globe,
        description: 'Aplicaciones para educación, salud y diagnóstico comunitario.',
      },
      {
        title: 'Sectores Clave',
        icon: Factory,
        description: 'Minería responsable, agropecuaria sostenible y producción local.',
      },
    ],
  },
  {
    id: 'educacion',
    number: '02',
    title: 'Educación Integral',
    subtitle: 'Aulas TIC, formación técnica continua y competencias del siglo XXI adaptadas a la comunidad.',
    cards: [
      {
        title: 'Alfabetización Digital',
        icon: Laptop,
        description: 'Programas de inclusión digital práctica para todas las edades.',
      },
      {
        title: 'Competencias de Futuro',
        icon: GraduationCap,
        description: 'Talleres de programación, robótica y habilidades aplicadas.',
      },
      {
        title: 'Contenidos Adaptados',
        icon: FileText,
        description: 'Guías pedagógicas interactivas y contextualizadas a Bolivia.',
      },
      {
        title: 'Formación Continua',
        icon: Users,
        description: 'Capacitación para jóvenes, mujeres emprendedoras y familias.',
      },
    ],
  },
  {
    id: 'salud',
    number: '03',
    title: 'Salud Preventiva',
    subtitle: 'Servicios de orientación médica preventiva y telemedicina comunitaria para áreas urbanas y rurales.',
    cards: [
      {
        title: 'Telemedicina Comunit.',
        icon: Activity,
        description: 'Consultas de orientación médica primaria presenciales y virtuales.',
      },
      {
        title: 'Promoción & Prevención',
        icon: ShieldCheck,
        description: 'Campañas periódicas de nutrición, higiene y bienestar integral.',
      },
      {
        title: 'Promotores de Salud',
        icon: UserCheck,
        description: 'Capacitación comunitaria a lideresas y promotores barriales.',
      },
      {
        title: 'Cobertura Territorial',
        icon: PlusCircle,
        description: 'Atención articulada en distritos y municipios del Departamento.',
      },
    ],
  },
]

export default function ComponentesSection() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    tecnologia: true,
    educacion: false,
    salud: false,
  })
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          '.comp-accordion-header',
          { y: 30, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        )

        gsap.fromTo(
          '.comp-accordion-item',
          { y: 25, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        )
      })
    },
    { scope: sectionRef, dependencies: [] }
  )

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <section 
      id="componentes" 
      ref={sectionRef} 
      data-header-theme="light"
      className="py-20 md:py-32 bg-[#FAF8F5] dark:bg-[#0B1322] border-t border-[#1B361F]/10 dark:border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado Editorial */}
        <div className="comp-accordion-header mb-12 md:mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#50AA1E]/10 dark:bg-[#68CE2B]/10 border border-[#50AA1E]/20 text-xs font-mono font-bold tracking-widest uppercase text-[#3B7F16] dark:text-[#68CE2B] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Estructura del Centro Integral</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-[#1B361F] dark:text-white tracking-[-0.03em] leading-[1.08]">
            Tres componentes que trabajan juntos
          </h2>
          <p className="text-base sm:text-lg text-[#2D4A32]/80 dark:text-slate-300 mt-4 leading-relaxed font-sans font-normal">
            El Centro Integral JAWIRA articula soluciones tecnológicas, educativas y de salud preventiva en un sistema integrado para potenciar el desarrollo comunitario en La Paz.
          </p>
        </div>

        {/* Acordeón de Componentes */}
        <div className="comp-accordion-list space-y-4 md:space-y-6">
          {componentesData.map((item) => {
            const isOpen = !!openItems[item.id]

            return (
              <div
                key={item.id}
                className="comp-accordion-item bg-[#ECECE5] dark:bg-[#121D2F] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-9 transition-all duration-300 border border-black/5 dark:border-white/10 shadow-sm"
              >
                {/* Cabecera del Ítem */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 pr-4">
                    <span className="text-xs sm:text-sm font-mono font-bold text-[#50AA1E] dark:text-[#68CE2B] px-2.5 py-1 rounded-lg bg-white/60 dark:bg-white/10 border border-black/5 dark:border-white/10">
                      {item.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-sans font-medium text-[#1B361F] dark:text-white tracking-tight group-hover:text-[#50AA1E] dark:group-hover:text-[#68CE2B] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-[#1B361F] dark:text-white bg-white/80 dark:bg-white/10 group-hover:bg-[#50AA1E] group-hover:text-white transition-all flex-shrink-0 shadow-sm">
                    {isOpen ? (
                      <Minus className="w-5 h-5 stroke-[2]" />
                    ) : (
                      <Plus className="w-5 h-5 stroke-[2]" />
                    )}
                  </div>
                </button>

                {/* Contenido Expandido: Rejilla de 4 Tarjetas */}
                {isOpen && (
                  <div className="mt-6 sm:mt-8 pt-6 border-t border-black/10 dark:border-white/10">
                    <p className="text-sm sm:text-base font-sans text-[#2D4A32]/80 dark:text-slate-300 mb-6 max-w-2xl font-normal">
                      {item.subtitle}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                      {item.cards.map((card) => {
                        const CardIcon = card.icon
                        return (
                          <div
                            key={card.title}
                            className="bg-white dark:bg-[#0A121E] rounded-xl sm:rounded-2xl p-5 sm:p-6 flex flex-col justify-between border border-black/5 dark:border-white/10 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 min-h-[210px] sm:min-h-[230px] group/card"
                          >
                            {/* Título Superior */}
                            <h4 className="text-base font-sans font-semibold text-[#1B361F] dark:text-white tracking-tight leading-snug">
                              {card.title}
                            </h4>

                            {/* Icono Minimalista */}
                            <div className="my-5 flex items-center justify-center text-[#50AA1E] dark:text-[#68CE2B]">
                              <div className="w-12 h-12 rounded-xl bg-[#50AA1E]/10 dark:bg-[#68CE2B]/10 flex items-center justify-center group-hover/card:scale-110 transition-transform">
                                <CardIcon className="w-6 h-6 stroke-[1.75]" />
                              </div>
                            </div>

                            {/* Descripción al Pie */}
                            <p className="text-xs text-[#2D4A32]/70 dark:text-slate-400 leading-relaxed font-normal">
                              {card.description}
                            </p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

