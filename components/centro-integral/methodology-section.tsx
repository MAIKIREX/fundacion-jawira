'use client'

import { useEffect, useRef, useState } from 'react'

const pasos = [
  {
    numero: '01',
    titulo: 'Diagnóstico Participativo',
    descripcion: 'Identificación conjunta de necesidades con comunidades e instituciones locales.',
  },
  {
    numero: '02',
    titulo: 'Diseño de Proyectos Piloto',
    descripcion: 'Creación de iniciativas adaptadas al contexto local y realidad comunitaria.',
  },
  {
    numero: '03',
    titulo: 'Adecuación de Infraestructura',
    descripcion: 'Preparación de espacios físicos y digitales para la implementación.',
  },
  {
    numero: '04',
    titulo: 'Capacitación Continua',
    descripcion: 'Formación de equipos técnicos y fortalecimiento de capacidades comunitarias.',
  },
  {
    numero: '05',
    titulo: 'Plataformas Tecnológicas',
    descripcion: 'Desarrollo e implementación de soluciones digitales de apoyo.',
  },
  {
    numero: '06',
    titulo: 'Participación Comunitaria',
    descripcion: 'Sensibilización y movilización activa de beneficiarios en el proceso.',
  },
  {
    numero: '07',
    titulo: 'Monitoreo y Evaluación',
    descripcion: 'Seguimiento permanente de resultados e indicadores de impacto.',
  },
]

export default function MethodologySection() {
  const [activeSteps, setActiveSteps] = useState<number[]>([0])
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    stepRefs.current.forEach((ref, index) => {
      if (!ref) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSteps((prev) => {
                if (!prev.includes(index)) {
                  return [...prev, index].sort((a, b) => a - b)
                }
                return prev
              })
            }
          })
        },
        { threshold: 0.5, rootMargin: '-80px 0px -80px 0px' },
      )

      observer.observe(ref)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 md:mb-20 max-w-2xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
            Proceso de implementación
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight mt-3">
            ¿Cómo funciona el Centro Integral?
          </h2>
          <p className="text-base text-muted-foreground mt-4 leading-relaxed">
            Nuestra metodología se basa en siete pasos clave que aseguran implementación inclusiva y participativa.
          </p>
        </div>

        {/* Timeline — vertical left-aligned */}
        <div className="relative max-w-3xl pl-8 md:pl-12">
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12 md:space-y-16">
            {pasos.map((paso, index) => {
              const isActive = activeSteps.includes(index)
              return (
                <div
                  key={index}
                  ref={(el) => { stepRefs.current[index] = el }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute -left-[37px] md:-left-[49px] top-1 w-3 h-3 rounded-full border-2 ring-4 ring-background transition-all duration-500 ${
                      isActive
                        ? 'bg-secondary border-secondary'
                        : 'bg-background border-border'
                    }`}
                  />

                  {/* Content */}
                  <div
                    className={`transition-opacity duration-500 ${
                      isActive ? 'opacity-100' : 'opacity-40'
                    }`}
                  >
                    <span className="text-xs font-bold tracking-widest text-secondary/60 block mb-2">
                      PASO {paso.numero}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-primary tracking-tight mb-2">
                      {paso.titulo}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                      {paso.descripcion}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-border max-w-3xl">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-medium text-primary">Metodología integral y participativa</span> que garantiza
            la calidad, sostenibilidad y adaptación cultural de cada proyecto implementado en el Centro Integral JAWIRA.
          </p>
        </div>

      </div>
    </section>
  )
}
