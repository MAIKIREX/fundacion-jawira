'use client'

import { useRef } from 'react'
import { Cpu, Leaf, Smartphone, Lightbulb, Zap } from 'lucide-react'
import RiverFlowLines from '@/components/ui/river-flow-lines'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const technologyLines = [
  {
    title: 'Innovación productiva',
    description: 'TECNOLOGÍAS LIMPIAS PARA SECTORES PRODUCTIVOS, MONITOREO AMBIENTAL Y TRAZABILIDAD.',
    icon: Leaf,
    metric: '01'
  },
  {
    title: 'Soluciones digitales',
    description: 'PLATAFORMAS DE GESTIÓN, APLICACIONES MÓVILES Y HERRAMIENTAS DE TELEMEDICINA.',
    icon: Smartphone,
    metric: '02'
  },
  {
    title: 'Capacitación TIC',
    description: 'FORMACIÓN EN IA, IOT, CIBERSEGURIDAD Y ALFABETIZACIÓN DIGITAL COMUNITARIA.',
    icon: Cpu,
    metric: '03'
  },
  {
    title: 'Laboratorios Tech',
    description: 'ESPACIOS DE CO-CREACIÓN, PROTOTIPADO Y EXPERIMENTACIÓN COMUNITARIA SOSTENIBLE.',
    icon: Lightbulb,
    metric: '04'
  }
]

export default function TechnologySection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Header Entrance
      gsap.from('.tech-header-item', {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      })

      // Cards Grid Entrance
      gsap.from('.tech-green-card', {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.tech-cards-grid',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      })
    })
  }, { scope: sectionRef })

  return (
    <section 
      id="tecnologia" 
      ref={sectionRef} 
      data-header-theme="dark"
      className="py-24 md:py-36 bg-[#637547] text-white relative z-10 overflow-hidden border-t border-white/10"
    >
      {/* Background Lighting Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-radial-[circle_at_50%_30%] from-[#768A57] via-[#637547] to-[#4F5E38]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#4F5E38]/40 via-transparent to-[#3E4B2B]/60" />
      </div>

      {/* Background River Lines Flow */}
      <RiverFlowLines className="opacity-20 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header (White Text on Green Surface) */}
        <div className="mb-16 md:mb-20 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-end">
          <div>
            <div className="tech-header-item inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-mono text-xs font-bold tracking-widest uppercase text-white">
              <Zap className="w-4 h-4 text-[#A8F074]" />
              <span>Eje de Acción 01 — Tecnología</span>
            </div>
            
            <h2 className="tech-header-item text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
              Tecnología productiva <br className="hidden sm:block" />y digital.
            </h2>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-white/90 leading-relaxed font-medium">
            <p className="tech-header-item">
              Desarrollamos e implementamos soluciones tecnológicas limpias para sectores productivos, monitoreo ambiental y reducción de la brecha digital en el Departamento de La Paz.
            </p>
            <p className="tech-header-item text-white/70 text-sm font-mono uppercase tracking-wider">
              * MODELO DE INNOVACIÓN Y SOSTENIBILIDAD JAWIRA
            </p>
          </div>
        </div>

        {/* 4 Cards Grid (Matching Reference Image Style: Warm Cream Card with Dark Olive Text) */}
        <div className="tech-cards-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologyLines.map((line, index) => {
            const Icon = line.icon
            return (
              <div 
                key={index} 
                className="tech-green-card bg-[#F4F1EA] text-[#213014] p-8 sm:p-9 rounded-2xl border border-[#E0DACB] flex flex-col justify-between min-h-[310px] shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group"
              >
                {/* Top Row: Icon Symbol */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#4A5B30]/10 flex items-center justify-center group-hover:bg-[#4A5B30] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5 text-[#354522] group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#4A5A38]/50 uppercase tracking-widest">
                    {line.metric}
                  </span>
                </div>

                {/* Bottom Content: Large Title + Monospaced Description */}
                <div className="mt-10 space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#213014] leading-tight font-sans group-hover:text-[#4A5B30] transition-colors">
                    {line.title}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm font-semibold text-[#455534]/90 uppercase tracking-wider leading-relaxed">
                    {line.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
