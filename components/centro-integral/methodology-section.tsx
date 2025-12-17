"use client"

import { useEffect, useRef, useState } from "react"

const pasos = [
  {
    numero: "1",
    titulo: "Diagnóstico Participativo",
    descripcion: "Identificación conjunta de necesidades con comunidades e instituciones locales",
    icon: "🔍",
  },
  {
    numero: "2",
    titulo: "Diseño de Proyectos Piloto",
    descripcion: "Creación de iniciativas adaptadas al contexto local y realidad comunitaria",
    icon: "📋",
  },
  {
    numero: "3",
    titulo: "Adecuación de Infraestructura",
    descripcion: "Preparación de espacios físicos y digitales para la implementación",
    icon: "🏗️",
  },
  {
    numero: "4",
    titulo: "Capacitación Continua",
    descripcion: "Formación de equipos técnicos y fortalecimiento de capacidades comunitarias",
    icon: "👥",
  },
  {
    numero: "5",
    titulo: "Plataformas Tecnológicas",
    descripcion: "Desarrollo e implementación de soluciones digitales de apoyo",
    icon: "💻",
  },
  {
    numero: "6",
    titulo: "Participación Comunitaria",
    descripcion: "Sensibilización y movilización activa de beneficiarios en el proceso",
    icon: "🤝",
  },
  {
    numero: "7",
    titulo: "Monitoreo y Evaluación",
    descripcion: "Seguimiento permanente de resultados e indicadores de impacto",
    icon: "📊",
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
        {
          threshold: 0.5,
          rootMargin: "-100px 0px -100px 0px",
        },
      )

      observer.observe(ref)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">¿Cómo funciona el Centro Integral?</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Nuestra metodología se basa en siete pasos clave que aseguran implementación inclusiva y participativa
          </p>
        </div>

        {/* Vertical Flow Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden md:block">
            {pasos.map((_, index) => {
              const isActive = activeSteps.includes(index) || activeSteps.includes(index + 1)
              return (
                <div
                  key={index}
                  className="absolute w-full transition-all duration-700 ease-out"
                  style={{
                    top: `${(index / pasos.length) * 100}%`,
                    height: `${(1 / pasos.length) * 100}%`,
                    backgroundColor: isActive ? "#50aa1e" : "#e5e7eb",
                  }}
                />
              )
            })}
          </div>

          {/* Steps */}
          <div className="space-y-24 md:space-y-32">
            {pasos.map((paso, index) => {
              const isActive = activeSteps.includes(index)
              const isLeft = index % 2 === 0

              return (
                <div
                  key={index}
                  ref={(el) => {
                    stepRefs.current[index] = el
                  }}
                  className="relative"
                >
                  {/* Mobile Layout */}
                  <div className="md:hidden flex items-start gap-4">
                    {/* Circle */}
                    <div
                      className={`flex-shrink-0 w-16 h-16 rounded-full border-4 flex items-center justify-center font-bold text-xl transition-all duration-500 ${
                        isActive
                          ? "bg-[#50aa1e] border-[#50aa1e] text-white scale-110 shadow-lg shadow-[#50aa1e]/30"
                          : "bg-muted border-muted-foreground/20 text-muted-foreground scale-100"
                      }`}
                    >
                      {paso.numero}
                    </div>

                    {/* Content */}
                    <div
                      className={`flex-1 bg-card rounded-2xl p-6 shadow-sm transition-all duration-500 ${
                        isActive ? "opacity-100 translate-x-0" : "opacity-60"
                      }`}
                    >
                      <div className="text-4xl mb-3">{paso.icon}</div>
                      <h3 className="text-xl font-bold text-primary mb-2">{paso.titulo}</h3>
                      <p className="text-foreground/70 leading-relaxed">{paso.descripcion}</p>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:grid md:grid-cols-2 md:gap-16 items-center">
                    {/* Left Content */}
                    <div
                      className={`${isLeft ? "order-1" : "order-2"} transition-all duration-700 ease-out ${
                        isActive
                          ? "opacity-100 translate-x-0"
                          : isLeft
                            ? "opacity-0 -translate-x-8"
                            : "opacity-0 translate-x-8"
                      }`}
                    >
                      <div
                        className={`bg-card rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow ${
                          isLeft ? "text-right" : "text-left"
                        }`}
                      >
                        <div className={`text-5xl mb-4 ${isLeft ? "text-right" : "text-left"}`}>{paso.icon}</div>
                        <h3 className="text-2xl font-bold text-primary mb-3">{paso.titulo}</h3>
                        <p className="text-foreground/70 leading-relaxed text-lg">{paso.descripcion}</p>
                      </div>
                    </div>

                    {/* Center Circle */}
                    <div
                      className={`${
                        isLeft ? "order-2" : "order-1"
                      } flex justify-center absolute left-1/2 -translate-x-1/2 z-10`}
                    >
                      <div
                        className={`w-20 h-20 rounded-full border-4 flex items-center justify-center font-bold text-2xl transition-all duration-500 ${
                          isActive
                            ? "bg-[#50aa1e] border-[#50aa1e] text-white scale-125 shadow-2xl shadow-[#50aa1e]/40"
                            : "bg-muted border-muted-foreground/20 text-muted-foreground scale-100"
                        }`}
                      >
                        {paso.numero}
                      </div>
                    </div>

                    {/* Right Content (empty space for layout) */}
                    <div className={isLeft ? "order-2" : "order-1"} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 p-6 bg-accent/10 border-2 border-accent/30 rounded-2xl max-w-3xl mx-auto">
          <p className="text-center text-foreground/80 leading-relaxed">
            <span className="font-semibold text-primary">Metodología integral y participativa</span> que garantiza la
            calidad, sostenibilidad y adaptación cultural de cada proyecto implementado en el Centro Integral JAWIRA.
          </p>
        </div>
      </div>
    </section>
  )
}
