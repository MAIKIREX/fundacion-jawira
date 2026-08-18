'use client'

import React, { useRef } from 'react'
import { Cpu, Leaf, Smartphone, Lightbulb, Zap, ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

interface TechnologyLine {
  metric: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

const technologyLines: TechnologyLine[] = [
  {
    metric: '01',
    title: 'Innovación productiva',
    description: 'TECNOLOGÍAS LIMPIAS PARA SECTORES PRODUCTIVOS, MONITOREO AMBIENTAL Y TRAZABILIDAD.',
    icon: Leaf,
  },
  {
    metric: '02',
    title: 'Soluciones digitales',
    description: 'PLATAFORMAS DE GESTIÓN, APLICACIONES MÓVILES Y HERRAMIENTAS DE TELEMEDICINA.',
    icon: Smartphone,
  },
  {
    metric: '03',
    title: 'Capacitación TIC',
    description: 'FORMACIÓN EN IA, IOT, CIBERSEGURIDAD Y ALFABETIZACIÓN DIGITAL COMUNITARIA.',
    icon: Cpu,
  },
  {
    metric: '04',
    title: 'Laboratorios Tech',
    description: 'ESPACIOS DE CO-CREACIÓN, PROTOTIPADO Y EXPERIMENTACIÓN COMUNITARIA SOSTENIBLE.',
    icon: Lightbulb,
  },
]

export default function TechnologySection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          '.tech-header-block',
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
          '.tech-card-item',
          { y: 35, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            stagger: 0.1,
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

  return (
    <section 
      id="tecnologia" 
      ref={sectionRef} 
      data-header-theme="dark"
      className="py-24 md:py-32 bg-[#4D6033] text-white relative z-10 overflow-hidden border-t border-white/10"
    >
      {/* Atmósfera de Fondo con Resplandor Orgánico */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-radial-[circle_at_50%_20%] from-[#667E44] via-[#4D6033] to-[#3B4A27]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3B4A27]/40 via-transparent to-[#2E3A1E]/70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Encabezado Principal */}
        <div className="tech-header-block mb-14 md:mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-mono text-xs font-bold tracking-widest uppercase text-white">
              <Zap className="w-4 h-4 text-[#C2FF6B]" />
              <span>Eje de Acción 01 — Tecnología</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white leading-[1.05] font-sans">
              Tecnología productiva <br />
              y digital.
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              Desarrollamos e implementamos soluciones tecnológicas limpias para sectores productivos, monitoreo ambiental y reducción de la brecha digital en el Departamento de La Paz.
            </p>
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-white/70">
              * MODELO DE INNOVACIÓN Y SOSTENIBILIDAD JAWIRA
            </p>
          </div>
        </div>

        {/* Rejilla de 4 Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologyLines.map((line, index) => {
            const IconComponent = line.icon

            return (
              <div 
                key={index} 
                className="tech-card-item bg-[#F5F2EA] text-[#1E2D15] p-7 sm:p-8 rounded-3xl border border-[#E3DDCF] flex flex-col justify-between min-h-[320px] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-default"
              >
                {/* Fila Superior: Icono y Métrica */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#4D6033]/15 text-[#354522] flex items-center justify-center group-hover:bg-[#4D6033] group-hover:text-white transition-all duration-300 shadow-sm">
                    <IconComponent className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <span className="font-mono text-xs font-bold text-[#4D6033]/60 uppercase tracking-widest">
                      {line.metric}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#4D6033]/40 group-hover:text-[#4D6033] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>

                {/* Contenido Inferior: Título y Descripción */}
                <div className="mt-8 space-y-3">
                  <h3 className="text-2xl sm:text-[1.7rem] font-bold tracking-tight text-[#1A2813] leading-tight font-sans group-hover:text-[#3B4C25] transition-colors">
                    {line.title}
                  </h3>
                  <p className="font-mono text-xs font-semibold text-[#445532]/90 uppercase tracking-wider leading-relaxed">
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
