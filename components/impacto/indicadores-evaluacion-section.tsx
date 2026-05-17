'use client'

import { useRef } from 'react'
import { BarChart3, TrendingUp, CheckSquare, MessageCircle, FileText } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const indicadores = [
  {
    titulo: 'Evaluaciones mensuales',
    descripcion: 'Monitoreo sistemático de actividades y desempeño del equipo para asegurar calidad en la ejecución.',
    icono: BarChart3,
  },
  {
    titulo: 'Monitoreo trimestral',
    descripcion: 'Análisis de indicadores clave de participación, cobertura y resultados en tecnología, educación y salud.',
    icono: TrendingUp,
  },
  {
    titulo: 'Evaluación anual',
    descripcion: 'Medición integral del impacto social y económico de nuestros proyectos y programas en el territorio.',
    icono: CheckSquare,
  },
  {
    titulo: 'Encuestas de satisfacción',
    descripcion: 'Retroalimentación de personas beneficiarias e instituciones aliadas para mejora continua.',
    icono: MessageCircle,
  },
  {
    titulo: 'Informes y auditorías',
    descripcion: 'Elaboración de informes técnicos y auditorías externas para garantizar transparencia.',
    icono: FileText,
  },
]

export default function IndicadoresEvaluacionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftColRef = useRef<HTMLDivElement>(null)
  const rightColRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add(
      {
        isDesktop: '(min-width: 1024px)',
        isMobile: '(max-width: 1023px)',
        reduceMotion: '(prefers-reduced-motion: reduce)'
      },
      (context) => {
        const { isDesktop, reduceMotion } = context.conditions!
        if (reduceMotion) return

        // 1. Text Reveal Timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: leftColRef.current,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse'
          }
        })

        tl.from('.ie-subtitle', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power3.out' })
          .from('.ie-title', { y: 30, autoAlpha: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
          .from('.ie-desc', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power2.out' }, '-=0.4')

        // 2. Indicators Reveal via Batch
        gsap.set('.ie-item', { y: 40, autoAlpha: 0 })
        ScrollTrigger.batch('.ie-item', {
          onEnter: (elements) => gsap.to(elements, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', overwrite: true }),
          onLeave: (elements) => gsap.set(elements, { autoAlpha: 0, y: 40, overwrite: true }),
          onEnterBack: (elements) => gsap.to(elements, { autoAlpha: 1, y: 0, duration: 0.6, stagger: -0.1, ease: 'power3.out', overwrite: true }),
          onLeaveBack: (elements) => gsap.set(elements, { autoAlpha: 0, y: 40, overwrite: true }),
          start: 'top 85%'
        })

        // 3. Pinning effect (Desktop only)
        if (isDesktop && leftColRef.current && rightColRef.current) {
          ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top 15%',
            end: () => `bottom bottom`,
            pin: leftColRef.current,
            pinSpacing: false,
            invalidateOnRefresh: true,
          })
        }
      }
    )

    // Hover Micro-interactions
    const items = gsap.utils.toArray<HTMLElement>('.ie-item')
    items.forEach(item => {
      const icon = item.querySelector('.ie-icon')
      if (!icon) return
      item.addEventListener('mouseenter', () => gsap.to(icon, { scale: 1.15, rotation: 5, duration: 0.4, ease: 'back.out(2)' }))
      item.addEventListener('mouseleave', () => gsap.to(icon, { scale: 1, rotation: 0, duration: 0.4, ease: 'power2.out' }))
    })

  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background border-t border-border/50 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start relative h-full">

          {/* Left: Header + context */}
          <div ref={leftColRef} className="space-y-6 lg:py-8">
            <div className="space-y-4">
              <span className="ie-subtitle text-xs font-bold tracking-widest uppercase text-secondary block">
                Evaluación y seguimiento
              </span>
              <h2 className="ie-title text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tighter leading-tight">
                Cómo medimos nuestro impacto
              </h2>
            </div>
            <p className="ie-desc text-lg text-foreground/70 leading-relaxed font-medium">
              Contamos con un sistema robusto de evaluación y seguimiento que garantiza transparencia y mejora continua. Los datos recolectados nos permiten identificar fortalezas, desafíos y oportunidades de innovación.
            </p>
          </div>

          {/* Right: Indicators list */}
          <div ref={rightColRef} className="space-y-0 lg:py-8">
            {indicadores.map((indicador, i) => {
              const Icon = indicador.icono
              return (
                <div
                  key={i}
                  className={`ie-item flex items-start gap-6 py-8 group ${
                    i !== 0 ? 'border-t border-border/60' : ''
                  }`}
                >
                  <div className="ie-icon w-14 h-14 rounded-2xl bg-primary/5 border border-border/50 flex items-center justify-center flex-shrink-0 shadow-sm" style={{ willChange: 'transform' }}>
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-3 pt-1">
                    <h3 className="text-xl font-bold text-primary tracking-tight group-hover:text-secondary transition-colors">
                      {indicador.titulo}
                    </h3>
                    <p className="text-base text-foreground/70 leading-relaxed font-medium">
                      {indicador.descripcion}
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
