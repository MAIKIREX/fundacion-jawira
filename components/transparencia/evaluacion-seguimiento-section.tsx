'use client'

import { useRef } from 'react'
import { Calendar, TrendingUp, CheckSquare, Users, RefreshCw } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const evaluaciones = [
  {
    icon: Calendar,
    titulo: 'Evaluación mensual',
    descripcion: 'Revisión de actividades ejecutadas, desempeño del personal y cumplimiento de metas operativas.',
  },
  {
    icon: TrendingUp,
    titulo: 'Monitoreo trimestral',
    descripcion: 'Análisis de indicadores clave en tecnología, educación y salud para evaluar progreso.',
  },
  {
    icon: CheckSquare,
    titulo: 'Evaluación anual',
    descripcion: 'Valoración integral del impacto social y económico de nuestros proyectos durante el año.',
  },
  {
    icon: Users,
    titulo: 'Encuestas de satisfacción',
    descripcion: 'Consulta a beneficiarios e instituciones aliadas sobre percepción y satisfacción.',
  },
  {
    icon: RefreshCw,
    titulo: 'Mejora continua',
    descripcion: 'Uso de la información recolectada para mejorar programas y decisiones estratégicas.',
  },
]

export default function EvaluacionSeguimientoSection() {
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

      tl.from(".eval-header > *", {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      })

      // The large numbers slide up with a clip mask effect
      tl.from(".eval-num", {
        yPercent: 100,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      }, "-=0.4")
      
      tl.from(".eval-content", {
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.6")

      tl.from(".eval-note", {
        autoAlpha: 0,
        duration: 1
      }, "-=0.2")

    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="eval-header mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
              Sistema de medición
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight leading-tight mt-4">
              Evaluación y seguimiento
            </h2>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed max-w-md md:pb-2">
            Un sistema integral de evaluación continua que nos permite medir resultados e identificar mejoras.
          </p>
        </div>

        {/* Large-number editorial grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {evaluaciones.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="group flex flex-col">
                <div className="overflow-hidden mb-6">
                  <div className="eval-num text-6xl lg:text-7xl font-bold text-border group-hover:text-secondary transition-colors tracking-tighter leading-none">
                    0{i + 1}
                  </div>
                </div>
                <div className="eval-content space-y-4 pt-6 border-t-2 border-border/60">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary/60" />
                    </div>
                    <h3 className="text-lg font-bold text-primary tracking-tight">
                      {item.titulo}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.descripcion}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Cycle note */}
        <div className="eval-note mt-24 pt-8 border-t border-border max-w-3xl">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-bold text-primary uppercase tracking-wider text-xs block mb-2">Ciclo de aprendizaje y mejora</span>
            Cada resultado de evaluación genera aprendizajes que retroalimentan nuestros procesos,
            permitiendo ajustar estrategias y garantizar que cada recurso sea utilizado de forma
            óptima en beneficio de las comunidades.
          </p>
        </div>

      </div>
    </section>
  )
}
