'use client'

import { useRef } from 'react'
import { ArrowDownRight, CheckCircle2, ShieldCheck, FileSearch } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export default function TransparenciaHeroSection() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      
      tl.from(".hero-element", {
        y: 40,
        autoAlpha: 0,
        duration: 1.2,
        stagger: 0.15,
      })
      .from(".hero-card", {
        y: 20,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.1,
      }, "-=0.8")
      .from(".hero-bg-svg", {
        rotation: 15,
        scale: 0.95,
        autoAlpha: 0,
        duration: 2,
        ease: "power2.out"
      }, 0)
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-background overflow-hidden border-b border-border">
      {/* Subtle decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="hero-bg-svg absolute right-0 top-0 w-[600px] h-[600px] text-primary opacity-[0.02] -mr-[100px] -mt-[100px]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M50 50 Q100 100 50 150 Q80 160 100 140 Q110 130 105 110"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-20 items-start">
          
          {/* Left: Massive Typography */}
          <div>
            <span className="hero-element text-xs font-semibold tracking-widest uppercase text-secondary block mb-6">
              Compromiso institucional
            </span>
            <h1 className="hero-element text-5xl md:text-6xl lg:text-7xl font-bold text-primary tracking-tighter leading-[1.05]">
              Transparencia y <br className="hidden md:block" />
              rendición
            </h1>
            <p className="hero-element text-lg md:text-xl text-muted-foreground mt-8 leading-relaxed max-w-xl">
              Administramos los recursos con responsabilidad, claridad y compromiso con las comunidades a las que servimos.
            </p>

            <div className="hero-element flex items-center gap-2 text-sm font-semibold text-primary/60 uppercase tracking-widest mt-12 group cursor-default">
              <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-primary/10 group-hover:scale-110">
                <ArrowDownRight className="w-4 h-4" />
              </div>
              Ver información financiera
            </div>
          </div>

          {/* Right: Key pillars */}
          <div className="space-y-6 lg:pt-8">
            <h3 className="hero-element text-xs font-bold tracking-widest uppercase text-secondary">Estándares de gestión</h3>
            
            <div className="space-y-4">
              <div className="hero-card p-1.5 rounded-[2rem] bg-black/5 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10">
                <div className="bg-background rounded-[calc(2rem-0.375rem)] p-6 flex items-start gap-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] hover:-translate-y-[2px] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  <div className="w-10 h-10 rounded-xl bg-primary/6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-primary/70" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary tracking-tight">Presupuesto Abierto</p>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">Publicación de asignación de recursos y fuentes de financiamiento.</p>
                  </div>
                </div>
              </div>

              <div className="hero-card p-1.5 rounded-[2rem] bg-black/5 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10">
                <div className="bg-background rounded-[calc(2rem-0.375rem)] p-6 flex items-start gap-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] hover:-translate-y-[2px] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  <div className="w-10 h-10 rounded-xl bg-secondary/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-secondary/70" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary tracking-tight">Evaluación Continua</p>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">Medición rigurosa de impacto y resultados en todos los proyectos.</p>
                  </div>
                </div>
              </div>

              <div className="hero-card p-1.5 rounded-[2rem] bg-black/5 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10">
                <div className="bg-background rounded-[calc(2rem-0.375rem)] p-6 flex items-start gap-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] hover:-translate-y-[2px] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  <div className="w-10 h-10 rounded-xl bg-accent/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileSearch className="w-4 h-4 text-accent/70" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary tracking-tight">Auditorías Externas</p>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">Revisión independiente para garantizar el uso óptimo de fondos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
