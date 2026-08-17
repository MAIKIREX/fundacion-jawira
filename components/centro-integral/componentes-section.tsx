'use client'

import { useState, useRef } from 'react'
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
  LucideIcon,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

interface SubCard {
  title: string
  icon: LucideIcon
  description: string
}

interface ComponentItem {
  id: string
  title: string
  subtitle: string
  cards: SubCard[]
}

const componentesData: ComponentItem[] = [
  {
    id: 'tecnologia',
    title: 'Tecnología Productiva',
    subtitle: 'Desarrollo y prueba de soluciones tecnológicas para minería, agropecuaria e industria.',
    cards: [
      {
        title: 'Innovación & Prototipado',
        icon: Cpu,
        description: 'Laboratorios de diseño y prototipado rápido',
      },
      {
        title: 'Software & Digital',
        icon: Code2,
        description: 'Desarrollo de herramientas y software a medida',
      },
      {
        title: 'Plataformas Sociales',
        icon: Globe,
        description: 'Aplicaciones para educación, salud e impacto social',
      },
      {
        title: 'Sectores Clave',
        icon: Factory,
        description: 'Minería, agropecuaria e industria sostenible',
      },
    ],
  },
  {
    id: 'educacion',
    title: 'Educación Integral',
    subtitle: 'Aulas TIC y espacios de formación continua adaptados a la comunidad.',
    cards: [
      {
        title: 'Alfabetización Digital',
        icon: Laptop,
        description: 'Programas de inclusión digital básica y avanzada',
      },
      {
        title: 'Competencias Siglo XXI',
        icon: GraduationCap,
        description: 'Talleres, cursos y diplomados comunitarios',
      },
      {
        title: 'Contenidos Adaptados',
        icon: FileText,
        description: 'Materiales educativos interactivos e inclusivos',
      },
      {
        title: 'Formación Continua',
        icon: Users,
        description: 'Capacitación para jóvenes, mujeres y familias',
      },
    ],
  },
  {
    id: 'salud',
    title: 'Salud Preventiva',
    subtitle: 'Servicios de salud preventiva y telemedicina para la población urbana y rural.',
    cards: [
      {
        title: 'Telemedicina Comunit.',
        icon: Activity,
        description: 'Consultas médicas presenciales y a distancia',
      },
      {
        title: 'Promoción & Prevención',
        icon: ShieldCheck,
        description: 'Campañas y programas de salud preventiva',
      },
      {
        title: 'Promotores de Salud',
        icon: UserCheck,
        description: 'Formación de lideresas y promotores de salud',
      },
      {
        title: 'Cobertura Territorial',
        icon: PlusCircle,
        description: 'Atención en comunidades vulnerables de La Paz',
      },
    ],
  },
]

export default function ComponentesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.comp-accordion-header', {
        y: 40,
        autoAlpha: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })

      gsap.from('.comp-accordion-item', {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.comp-accordion-list',
          start: 'top 85%',
        },
      })
    })
  }, { scope: sectionRef })

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section 
      id="componentes" 
      ref={sectionRef} 
      data-header-theme="light"
      className="py-24 md:py-36 bg-[#F8F8F5] dark:bg-[#0B1322] border-t border-border/40 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado Editorial Minimalista */}
        <div className="comp-accordion-header mb-14 md:mb-20 max-w-3xl">
          <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#50AA1E] dark:text-[#68CE2B] block mb-4">
            Estructura del Centro Integral
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-[#1B361F] dark:text-white tracking-[-0.03em] leading-[1.08]">
            Tres componentes que trabajan juntos
          </h2>
          <p className="text-base sm:text-lg text-[#2D4A32]/80 dark:text-slate-300 mt-6 leading-relaxed font-sans font-normal">
            El Centro Integral JAWIRA articula soluciones tecnológicas, educativas y de salud preventiva en un sistema integrado para potenciar el desarrollo comunitario en La Paz.
          </p>
        </div>

        {/* Acordeón de Componentes Estilo ElevateFeed */}
        <div className="comp-accordion-list space-y-4 md:space-y-6">
          {componentesData.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={item.id}
                className="comp-accordion-item bg-[#ECECE5] dark:bg-[#121D2F] rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-300 border border-black/5 dark:border-white/5"
              >
                {/* Cabecera del Ítem */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="pr-4 space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-sans font-medium text-[#1B361F] dark:text-white tracking-tight group-hover:text-[#50AA1E] dark:group-hover:text-[#68CE2B] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-[#1B361F] dark:text-white bg-black/5 dark:bg-white/10 group-hover:bg-[#50AA1E]/20 transition-all flex-shrink-0">
                    {isOpen ? (
                      <Minus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
                    ) : (
                      <Plus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
                    )}
                  </div>
                </button>

                {/* Contenido Expandido: Rejilla de 4 Tarjetas */}
                {isOpen && (
                  <div className="mt-8 sm:mt-10 pt-6 border-t border-black/10 dark:border-white/10 animate-in fade-in slide-in-from-top-4 duration-300">
                    <p className="text-sm font-sans text-[#2D4A32]/70 dark:text-slate-400 mb-8 max-w-2xl font-normal">
                      {item.subtitle}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                      {item.cards.map((card) => {
                        const CardIcon = card.icon
                        return (
                          <div
                            key={card.title}
                            className="bg-white dark:bg-[#0A121E] rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-black/5 dark:border-white/5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 min-h-[220px] sm:min-h-[240px]"
                          >
                            {/* Título Superior */}
                            <h4 className="text-base sm:text-lg font-sans font-semibold text-[#1B361F] dark:text-white tracking-tight leading-snug">
                              {card.title}
                            </h4>

                            {/* Icono Minimalista al Centro */}
                            <div className="my-6 flex items-center justify-center text-[#50AA1E] dark:text-[#68CE2B]">
                              <CardIcon className="w-10 h-10 sm:w-12 sm:h-12 stroke-[1.3]" />
                            </div>

                            {/* Descripción al Pie */}
                            <p className="text-xs font-mono font-medium tracking-wide uppercase text-muted-foreground leading-relaxed">
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

