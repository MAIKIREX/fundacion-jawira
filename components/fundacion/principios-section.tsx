'use client'

import React, { useState, useRef } from 'react'
import { Plus, Minus, Scale, Shield, Users, Sparkles, Heart, Users2, Waves, Sun } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

interface PrincipleCard {
  title: string
  description: string
  icon: any
}

interface LawAccordionItem {
  id: string
  title: string
  description: string
  principles: PrincipleCard[]
}

const LAWS_DATA: LawAccordionItem[] = [
  {
    id: 'ley045',
    title: 'Ley 045 — Contra el Racismo y Toda Forma de Discriminación',
    description: 'Marco normativo que garantiza la igualdad de derechos y prohíbe toda forma de distinción en nuestras acciones.',
    principles: [
      {
        title: 'Igualdad',
        description: 'Garantizamos que todas las personas tienen iguales derechos y oportunidades sin distinción alguna.',
        icon: Scale,
      },
      {
        title: 'No Discriminación',
        description: 'Rechazamos y prevenimos activamente cualquier barrera o prejuicio en nuestras intervenciones.',
        icon: Shield,
      },
      {
        title: 'Interculturalidad',
        description: 'Respetamos y enriquecemos el diálogo con las cosmovisiones de los pueblos originarios.',
        icon: Users,
      },
      {
        title: 'Diversidad',
        description: 'Reconocemos la pluralidad cultural como fortaleza fundamental del desarrollo comunitario.',
        icon: Sparkles,
      },
    ],
  },
  {
    id: 'ley348',
    title: 'Ley 348 — Garantizar a las Mujeres una Vida Libre de Violencia',
    description: 'Compromiso institucional irrestricto con la protección integral y la equidad de género.',
    principles: [
      {
        title: 'Vida Libre de Violencia',
        description: 'Promovemos espacios seguros y libres de violencia física, psicológica o patrimonial.',
        icon: Heart,
      },
      {
        title: 'Equidad de Género',
        description: 'Fomentamos la igualdad de oportunidades y liderazgo compartido entre hombres y mujeres.',
        icon: Users2,
      },
      {
        title: 'Cultura de Paz',
        description: 'Impulsamos relaciones dialógicas y armónicas en cada comunidad donde intervenimos.',
        icon: Waves,
      },
      {
        title: 'Dignidad Humana',
        description: 'Reconocemos el valor inherente de cada persona y el trato con respeto absoluto.',
        icon: Sun,
      },
    ],
  },
]

export default function PrincipiosSection() {
  // Estado para controlar qué acordeones están abiertos (por defecto el primero está abierto)
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    ley045: true,
    ley348: false,
  })

  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.principios-header', {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.principios-header',
          start: 'top 85%',
          once: true,
        },
      })

      gsap.from('.accordion-item', {
        y: 35,
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.accordion-list',
          start: 'top 85%',
          once: true,
        },
      })
    })
  }, { scope: sectionRef })

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <section
      id="principios"
      ref={sectionRef}
      data-header-theme="light"
      className="relative w-full py-24 sm:py-28 md:py-32 bg-[#F5F2EB] dark:bg-[#0D1524] text-[#1B361F] dark:text-[#F8FAFC] border-b border-[#1B361F]/10 dark:border-white/10"
    >
      <div className="w-full px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        
        {/* =========================================================
            1. ENCABEZADO EDITORIAL
            ========================================================= */}
        <div className="principios-header max-w-3xl space-y-3 mb-16 sm:mb-20 md:mb-24">
          <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#50AA1E] dark:text-[#68CE2B] block">
            MARCO NORMATIVO Y ÉTICO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-sans font-medium text-[#1B361F] dark:text-white tracking-[-0.03em] leading-[1.08]">
            Principios Institucionales
          </h2>
          <p className="text-base sm:text-lg text-[#4A634E] dark:text-slate-300 max-w-2xl leading-relaxed font-normal pt-1">
            Nuestras acciones se fundamentan en la legislación boliviana y en la garantía permanente de los derechos humanos.
          </p>
        </div>

        {/* =========================================================
            2. CONTENEDORES ACCORDION ESTILO EXACTO DE LA IMAGEN DE REFERENCIA
            ========================================================= */}
        <div className="accordion-list space-y-6 sm:space-y-8">
          {LAWS_DATA.map((law) => {
            const isOpen = openItems[law.id]

            return (
              <div
                key={law.id}
                className="accordion-item bg-[#ECE8DF] dark:bg-[#152033] rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-300"
              >
                {/* Accordion Header Button */}
                <button
                  onClick={() => toggleItem(law.id)}
                  className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-xl sm:text-2xl md:text-3xl font-sans font-medium text-[#1B361F] dark:text-white tracking-tight group-hover:text-[#50AA1E] dark:group-hover:text-[#68CE2B] transition-colors">
                    {law.title}
                  </span>

                  <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/60 dark:bg-white/10 flex items-center justify-center text-[#1B361F] dark:text-white flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {isOpen ? (
                      <Minus className="w-5 h-5 stroke-[2]" />
                    ) : (
                      <Plus className="w-5 h-5 stroke-[2]" />
                    )}
                  </span>
                </button>

                {/* Accordion Collapsible Body */}
                {isOpen && (
                  <div className="pt-6 sm:pt-8 transition-all duration-300">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                      {law.principles.map((principle) => {
                        const IconComp = principle.icon
                        return (
                          <div
                            key={principle.title}
                            className="bg-white dark:bg-[#0D1524] rounded-2xl p-6 flex flex-col justify-between min-h-[220px] shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
                          >
                            {/* Card Title */}
                            <h4 className="text-lg font-bold text-[#1B361F] dark:text-white tracking-tight">
                              {principle.title}
                            </h4>

                            {/* Centered Line Art Icon */}
                            <div className="my-6 w-full flex justify-center text-[#4D6934] dark:text-[#68CE2B]">
                              <div className="w-12 h-12 rounded-full bg-[#F5F2EB] dark:bg-[#162238] flex items-center justify-center">
                                <IconComp className="w-6 h-6 stroke-[1.5]" />
                              </div>
                            </div>

                            {/* Bottom Concise Description Label */}
                            <p className="text-xs sm:text-sm text-[#3E5642] dark:text-slate-300 font-normal leading-relaxed">
                              {principle.description}
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
