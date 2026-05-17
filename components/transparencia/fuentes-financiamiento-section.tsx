'use client'

import { useRef } from 'react'
import { Globe, Building2, Heart, Package } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const fuentes = [
  {
    icon: Globe,
    titulo: 'Cooperación internacional',
    descripcion: 'Convenios con ONG y organizaciones internacionales comprometidas con el desarrollo sostenible en América Latina.',
  },
  {
    icon: Building2,
    titulo: 'Instituciones públicas y privadas',
    descripcion: 'Proyectos colaborativos con entidades gubernamentales y empresas para impulsar iniciativas de impacto social.',
  },
  {
    icon: Heart,
    titulo: 'Donaciones de personas naturales',
    descripcion: 'Contribuciones voluntarias de individuos que creen en nuestra misión de transformar comunidades vulnerables.',
  },
  {
    icon: Package,
    titulo: 'Aportes en especie',
    descripcion: 'Equipos, servicios, materiales y recursos que contribuyen al funcionamiento eficiente de nuestras actividades.',
  },
]

export default function FuentesFinanciamientoSection() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play reverse play reverse",
        }
      })

      tl.from(".fuentes-left > *", {
        y: 40,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
      })

      const rightTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".fuentes-right",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        }
      })

      rightTl.from(".fuentes-item", {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      })
      .from(".fuentes-icon", {
        scale: 0.5,
        rotation: -15,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.5)"
      }, "-=0.8")

    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">

          {/* Left: Header + Sustainability */}
          <div className="fuentes-left lg:sticky lg:top-32 space-y-10">
            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
                Recursos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight">
                Fuentes de financiamiento
              </h2>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              Buscamos recursos a través de múltiples canales para asegurar la sostenibilidad de nuestras iniciativas.
            </p>

            {/* Sustainability callout */}
            <div className="pt-8 border-t border-border space-y-4">
              <span className="text-xs font-bold tracking-widest uppercase text-accent">
                Objetivo: Sostenibilidad a 3 años
              </span>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Nuestra meta es asegurar un mínimo de tres años de sostenibilidad financiera
                para el funcionamiento de la Fundación y el Centro Integral JAWIRA.
              </p>
              <span className="inline-block px-3 py-1 bg-muted/50 rounded text-xs font-semibold text-muted-foreground">
                Período meta: 2024 – 2027
              </span>
            </div>
          </div>

          {/* Right: Sources list */}
          <div className="fuentes-right space-y-2">
            {fuentes.map((fuente, i) => {
              const Icon = fuente.icon
              return (
                <div
                  key={i}
                  className={`fuentes-item flex items-start gap-6 py-6 group ${
                    i !== 0 ? 'border-t border-border/40' : ''
                  }`}
                >
                  <div className="fuentes-icon w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/10 group-hover:-translate-y-1 transition-all duration-300 ease-out">
                    <Icon className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors" />
                  </div>
                  <div className="space-y-2.5">
                    <h3 className="text-lg font-bold text-primary tracking-tight">
                      {fuente.titulo}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                      {fuente.descripcion}
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
