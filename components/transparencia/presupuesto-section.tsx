'use client'

import { useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const presupuestoCategorias = [
  { nombre: 'Alquiler de oficina y espacios', porcentaje: 30 },
  { nombre: 'Servicios básicos (luz, agua, internet)', porcentaje: 15 },
  { nombre: 'Materiales y suministros de oficina', porcentaje: 12 },
  { nombre: 'Insumos médicos básicos', porcentaje: 15 },
  { nombre: 'Transporte y movilidad', porcentaje: 12 },
  { nombre: 'Comunicación y difusión', porcentaje: 10 },
  { nombre: 'Otros gastos operativos', porcentaje: 6 },
]

const presupuestoTotal = 20000
const years = ['2024', '2025']

export default function PresupuestoSection() {
  const [activeYear, setActiveYear] = useState('2024')
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        }
      })

      tl.from(".presupuesto-header > *", {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      })
      .from(".presupuesto-table-wrapper", {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      .from(".presupuesto-row", {
        x: -20,
        autoAlpha: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out"
      }, "-=0.4")

    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="presupuesto-header mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
              Información financiera
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight mt-3">
              Presupuesto inicial
            </h2>
            <p className="text-base text-muted-foreground mt-4 leading-relaxed">
              En su etapa inicial, JAWIRA cuenta con un presupuesto base de{" "}
              <span className="font-medium text-foreground">Bs. 20.000,00</span> por año.
            </p>
          </div>

          {/* Year Switcher */}
          <div className="flex gap-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeYear === year
                    ? 'bg-primary text-primary-foreground shadow-md scale-100'
                    : 'bg-background text-muted-foreground hover:bg-background/80 border border-border/60 hover:scale-95'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Budget Table */}
        <div className="presupuesto-table-wrapper rounded-2xl border border-border/60 overflow-hidden bg-background shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
          {/* Header Row */}
          <div className="grid grid-cols-[1fr_auto_auto] gap-4 px-6 md:px-8 py-5 bg-muted/40 text-xs font-semibold tracking-widest uppercase text-muted-foreground border-b border-border/40">
            <span>Categoría</span>
            <span className="w-24 text-right">Monto</span>
            <span className="w-16 text-right">%</span>
          </div>

          {/* Rows */}
          {presupuestoCategorias.map((cat, i) => {
            const monto = (presupuestoTotal * cat.porcentaje) / 100
            return (
              <div
                key={i}
                className={`presupuesto-row grid grid-cols-[1fr_auto_auto] gap-4 px-6 md:px-8 py-5 items-center hover:bg-muted/20 transition-colors ${
                  i !== 0 ? 'border-t border-border/40' : ''
                }`}
              >
                <span className="text-sm text-foreground/80">{cat.nombre}</span>
                <span className="text-sm font-semibold text-primary w-24 text-right">
                  Bs. {monto.toLocaleString('es-ES')}
                </span>
                <span className="text-xs font-medium text-muted-foreground w-16 text-right">
                  {cat.porcentaje}%
                </span>
              </div>
            )
          })}

          {/* Total Row */}
          <div className="grid grid-cols-[1fr_auto_auto] gap-4 px-6 md:px-8 py-6 bg-primary items-center">
            <span className="text-sm font-bold text-primary-foreground">
              Presupuesto total anual {activeYear}
            </span>
            <span className="text-base font-bold text-primary-foreground w-24 text-right">
              Bs. {presupuestoTotal.toLocaleString('es-ES')}
            </span>
            <span className="text-xs font-semibold text-primary-foreground/60 w-16 text-right">
              100%
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
