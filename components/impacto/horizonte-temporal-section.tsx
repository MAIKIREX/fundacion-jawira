'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const fases = [
  {
    periodo: '2026 – 2028',
    titulo: 'Fase inicial y piloto',
    objetivos: [
      'Implementación del Centro Integral JAWIRA en La Paz',
      'Puesta en marcha de programas en tecnología, educación y salud',
      'Validación de metodologías y modelos de intervención',
      'Construcción de alianzas iniciales con instituciones locales',
      'Establecimiento de sistemas de monitoreo y evaluación',
    ],
  },
  {
    periodo: '2029 – 2034',
    titulo: 'Fase de consolidación y expansión',
    objetivos: [
      'Ampliación de cobertura a más municipios del Departamento',
      'Fortalecimiento y réplica del modelo del Centro Integral',
      'Escalamiento de programas con resultados comprobados',
      'Búsqueda de alianzas nacionales e internacionales',
      'Consolidación como referencia de innovación social en la región',
    ],
  },
]

export default function HorizonteTemporalSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // 1. Header timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.ht-header',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse'
        }
      })
      tl.from('.ht-subtitle', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power3.out' })
        .from('.ht-title', { y: 30, autoAlpha: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
        .from('.ht-desc', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power2.out' }, '-=0.4')

      // 2. Batch reveal for phases columns
      gsap.set('.ht-phase', { autoAlpha: 0, y: 50 })
      ScrollTrigger.batch('.ht-phase', {
        onEnter: (elements) => {
          gsap.to(elements, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out', overwrite: true })
          elements.forEach(el => {
            const items = el.querySelectorAll('.ht-item')
            gsap.fromTo(items, { autoAlpha: 0, x: -20 }, { autoAlpha: 1, x: 0, duration: 0.5, stagger: 0.1, delay: 0.3, ease: 'power2.out', overwrite: true })
          })
        },
        onLeaveBack: (elements) => {
          gsap.set(elements, { autoAlpha: 0, y: 50, overwrite: true })
        },
        start: 'top 80%'
      })
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="ht-header text-center mb-20 space-y-4">
          <span className="ht-subtitle text-xs font-bold tracking-widest uppercase text-secondary block">
            Planificación estratégica
          </span>
          <h2 className="ht-title text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tighter leading-tight">
            Horizonte temporal <span className="text-secondary">2026 – 2034</span>
          </h2>
          <p className="ht-desc text-lg text-primary-foreground/70 mt-6 max-w-xl mx-auto leading-relaxed font-medium">
            Dos fases estratégicas que permiten crecer de manera ordenada, sistemática y con impacto sostenible.
          </p>
        </div>

        {/* Two phases — gap-px split */}
        <div className="grid md:grid-cols-2 gap-px bg-primary-foreground/15 rounded-3xl overflow-hidden shadow-2xl">
          {fases.map((fase, index) => (
            <div key={index} className="ht-phase bg-primary p-8 md:p-14 space-y-10 group hover:bg-primary-foreground/5 transition-colors duration-500">
              
              <div className="space-y-4">
                <span className="text-sm font-black tracking-widest uppercase text-secondary bg-secondary/10 px-4 py-2 rounded-full border border-secondary/20">
                  {fase.periodo}
                </span>
                <h3 className="text-3xl font-bold text-primary-foreground tracking-tight pt-2">
                  {fase.titulo}
                </h3>
              </div>

              <div className="space-y-2 pt-4 border-t border-primary-foreground/10">
                {fase.objetivos.map((objetivo, i) => (
                  <div
                    key={i}
                    className="ht-item flex items-start gap-5 py-4 border-b border-primary-foreground/5 last:border-0"
                  >
                    <span className="text-sm font-black text-secondary/70 mt-0.5 w-6 flex-shrink-0">
                      0{i + 1}
                    </span>
                    <span className="text-base text-primary-foreground/80 leading-relaxed font-medium group-hover:text-primary-foreground transition-colors">
                      {objetivo}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
