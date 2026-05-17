'use client'

import { useState, useRef, useCallback } from 'react'
import { Shield, Heart } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const tabs = [
  {
    id: 'ley045',
    icon: Shield,
    label: 'Ley 045',
    title: 'Ley Contra el Racismo y Toda Forma de Discriminación',
    principles: [
      {
        title: 'Igualdad',
        description: 'Garantizamos que todas las personas tienen iguales derechos y oportunidades, sin importar su origen étnico, género, edad o condición social.',
      },
      {
        title: 'No Discriminación',
        description: 'Rechazamos toda forma de discriminación y trabajamos activamente para eliminar barreras que afecten a poblaciones vulnerables.',
      },
      {
        title: 'Interculturalidad',
        description: 'Valoramos y respetamos la diversidad cultural, lingüística y de cosmovisiones de los pueblos originarios y comunidades.',
      },
      {
        title: 'Respeto a la Diversidad',
        description: 'Reconocemos que la diversidad es una fortaleza que enriquece nuestras acciones y visión institucional.',
      },
    ],
  },
  {
    id: 'ley348',
    icon: Heart,
    label: 'Ley 348',
    title: 'Ley Integral contra la Violencia hacia las Mujeres',
    principles: [
      {
        title: 'Vida Libre de Violencia',
        description: 'Trabajamos para garantizar que todas las mujeres puedan vivir sin violencia física, psicológica, sexual o patrimonial.',
      },
      {
        title: 'Equidad de Género',
        description: 'Promovemos la igualdad de derechos y oportunidades entre hombres y mujeres en todos nuestros proyectos.',
      },
      {
        title: 'Cultura de Paz',
        description: 'Fomentamos relaciones respetuosas, dialógicas y libres de violencia en todas las comunidades con las que trabajamos.',
      },
      {
        title: 'Respeto y Dignidad',
        description: 'Reconocemos la dignidad inherente de todas las personas y el derecho al trato respetuoso y sin discriminación.',
      },
    ],
  },
]

export default function PrincipiosSection() {
  const [activeTab, setActiveTab] = useState('ley045')
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const activeData = tabs.find(t => t.id === activeTab)!

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // --- Header reveal ---
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.principios-header',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        },
      })

      headerTl
        .from('.principios-subtitle', {
          y: 20,
          autoAlpha: 0,
          duration: 0.5,
          ease: 'power3.out',
        })
        .from('.principios-title', {
          y: 30,
          autoAlpha: 0,
          duration: 0.6,
          ease: 'power3.out',
        }, '-=0.3')
        .from('.principios-desc', {
          y: 20,
          autoAlpha: 0,
          duration: 0.5,
          ease: 'power2.out',
        }, '-=0.2')

      // --- Tab buttons entrance ---
      gsap.from('.principios-tab-btn', {
        y: 15,
        autoAlpha: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.principios-tabs',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        },
      })

      // --- Content block entrance ---
      gsap.from('.principios-content', {
        y: 40,
        autoAlpha: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.principios-content',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        },
      })
    })
  }, { scope: sectionRef })

  const handleTabChange = useCallback((tabId: string) => {
    if (tabId === activeTab || !contentRef.current) return

    const contentEl = contentRef.current

    // Animate out current content
    gsap.to(contentEl, {
      autoAlpha: 0,
      y: -15,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        setActiveTab(tabId)
        // Animate in new content after state update
        gsap.fromTo(contentEl,
          { autoAlpha: 0, y: 15 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.35,
            ease: 'power3.out',
            delay: 0.05,
          }
        )

        // Stagger principle cards
        gsap.fromTo('.principle-card',
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.4,
            ease: 'power2.out',
            stagger: 0.08,
            delay: 0.15,
          }
        )
      },
    })
  }, [activeTab])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="principios-header mb-16 max-w-2xl">
          <span className="principios-subtitle text-xs font-semibold tracking-widest uppercase text-secondary">
            Marco normativo
          </span>
          <h2 className="principios-title text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight mt-3">
            Principios institucionales
          </h2>
          <p className="principios-desc text-base text-muted-foreground mt-4 leading-relaxed">
            Alineados con la normativa boliviana y el compromiso con los derechos humanos.
          </p>
        </div>

        {/* Custom tab switcher */}
        <div className="principios-tabs flex gap-2 mb-10">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`principios-tab-btn flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-background text-muted-foreground hover:bg-background/80 border border-border/60'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Content */}
        <div ref={contentRef} className="principios-content bg-background rounded-2xl border border-border/60 overflow-hidden">
          <div className="p-8 md:p-10 border-b border-border/60">
            <h3 className="text-xl font-bold text-primary tracking-tight">
              {activeData.title}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border/40">
            {activeData.principles.map((principle) => (
              <div key={principle.title} className="principle-card bg-background p-8 md:p-10 space-y-3">
                <h4 className="text-base font-semibold text-primary tracking-tight">
                  {principle.title}
                </h4>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
