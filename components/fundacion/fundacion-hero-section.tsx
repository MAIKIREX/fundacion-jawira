'use client'

import { useRef } from 'react'
import { Building2, FileCheck, Globe, ArrowDown } from 'lucide-react'
import { JawiraButton } from '@/components/ui/jawira-button'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP)
}

const identityCards = [
  {
    icon: Building2,
    title: 'Sede Principal',
    description: 'Zona Gran Poder, La Paz, Bolivia.',
    bgClass: 'bg-white/10 text-[#68CE2B] border-white/20',
  },
  {
    icon: Globe,
    title: 'Alcance Territorial',
    description: 'Áreas urbanas, periurbanas y rurales del Departamento de La Paz.',
    bgClass: 'bg-white/10 text-[#FFA826] border-white/20',
  },
  {
    icon: FileCheck,
    title: 'Estatus Legal',
    description: 'Organización no gubernamental, sin fines de lucro, legalmente establecida.',
    bgClass: 'bg-white/10 text-white border-white/20',
  },
]

export default function FundacionHeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })

      tl.fromTo(
        '.reveal-fundacion-title',
        { yPercent: 100, autoAlpha: 0 },
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 1.2,
          stagger: 0.08,
        },
        0.1
      )

      tl.fromTo(
        '.reveal-fundacion-desc',
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          stagger: 0.1,
        },
        0.3
      )

      tl.fromTo(
        '.identity-card-item',
        { x: 40, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.1,
        },
        0.4
      )
    })
  }, { scope: sectionRef })

  const scrollToContent = () => {
    const el = document.getElementById('significado-jawira')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={sectionRef}
      data-header-theme="dark"
      className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden bg-[#1B361F] text-white pt-28 pb-16 md:pt-36 md:pb-24 border-b border-white/10"
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-radial-[circle_at_30%_30%] from-[#2C5233] via-[#1B361F] to-[#122415]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#122415]/90 via-transparent to-[#1B361F]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between">
        
        {/* Top Header Block */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start my-auto py-8">
          
          {/* Left Column: Heading & Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="overflow-hidden">
              <span className="reveal-fundacion-title inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold tracking-widest uppercase text-[#68CE2B]">
                <span className="w-2 h-2 rounded-full bg-[#50AA1E] animate-pulse" />
                <span>Conócenos — Identidad Institucional</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-medium leading-[1.05] tracking-[-0.03em] text-white">
              <div className="overflow-hidden">
                <span className="reveal-fundacion-title block">La Fundación</span>
              </div>
              <div className="overflow-hidden">
                <span className="reveal-fundacion-title block text-[#68CE2B]">JAWIRA</span>
              </div>
            </h1>

            <div className="overflow-hidden">
              <p className="reveal-fundacion-desc text-base sm:text-lg md:text-xl text-white/85 leading-relaxed font-normal max-w-2xl">
                Somos una fundación sin fines de lucro que articula tecnología productiva, educación y salud para promover el desarrollo integral sostenible en el Departamento de La Paz, Bolivia.
              </p>
            </div>

            <div className="overflow-hidden pt-4">
              <div className="reveal-fundacion-desc flex flex-wrap items-center gap-4">
                <JawiraButton variant="secondary" size="lg" onClick={scrollToContent}>
                  <span>Explorar historia</span>
                  <ArrowDown className="w-4 h-4" />
                </JawiraButton>
              </div>
            </div>
          </div>

          {/* Right Column: Identity Cards Grid */}
          <div className="lg:col-span-5 space-y-4">
            <div className="overflow-hidden mb-2">
              <h3 className="reveal-fundacion-title text-xs font-mono font-bold tracking-widest uppercase text-[#68CE2B]">
                Datos de Identidad
              </h3>
            </div>

            <div className="space-y-3">
              {identityCards.map((card) => {
                const IconComponent = card.icon
                return (
                  <div
                    key={card.title}
                    className="identity-card-item bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 flex items-start gap-4 transition-all duration-300 hover:bg-white/15"
                  >
                    <div className={`w-10 h-10 rounded-xl ${card.bgClass} flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-tight">{card.title}</h4>
                      <p className="text-xs text-white/80 mt-1 leading-relaxed">{card.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
