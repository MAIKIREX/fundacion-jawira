'use client'

import { useRef } from 'react'
import { Heart, Laptop, Leaf, TrendingUp, Lightbulb } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const resultados = [
  {
    titulo: 'Mayor acceso a salud',
    descripcion: 'Ampliación de servicios de salud integral y accesibles para comunidades urbanas, periurbanas y rurales.',
    icono: Heart,
  },
  {
    titulo: 'Reducción de brechas',
    descripcion: 'Cierre progresivo de brechas digitales y educativas en poblaciones vulnerables y territorios rezagados.',
    icono: Laptop,
  },
  {
    titulo: 'Sostenibilidad económica',
    descripcion: 'Uso más eficiente y sostenible de tecnología productiva en minería, agropecuaria y pequeño comercio.',
    icono: Leaf,
  },
  {
    titulo: 'Fortalecimiento de competencias',
    descripcion: 'Mejora significativa de habilidades tecnológicas, educativas y de salud para mayor autonomía.',
    icono: TrendingUp,
  },
  {
    titulo: 'Modelos innovadores',
    descripcion: 'Enfoques innovadores, replicables y escalables de intervención social en la región latinoamericana.',
    icono: Lightbulb,
  },
]

export default function ResultadosEsperadosSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // 1. Header Timeline
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.re-header',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse'
        }
      })

      headerTl.from('.re-subtitle', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power3.out' })
              .from('.re-title', { y: 30, autoAlpha: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
              .from('.re-desc', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power2.out' }, '-=0.4')

      // 2. Batch reveal for grid items
      gsap.set('.re-card', { autoAlpha: 0, y: 40 })
      ScrollTrigger.batch('.re-card', {
        onEnter: (elements) => {
          gsap.to(elements, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', overwrite: true })
          elements.forEach(el => {
            const num = el.querySelector('.re-number')
            if (num) gsap.fromTo(num, { y: '100%' }, { y: '0%', duration: 0.8, ease: 'expo.out', overwrite: true })
          })
        },
        onLeave: (elements) => gsap.set(elements, { autoAlpha: 0, y: 40, overwrite: true }),
        onEnterBack: (elements) => {
          gsap.to(elements, { autoAlpha: 1, y: 0, duration: 0.8, stagger: -0.1, ease: 'power3.out', overwrite: true })
          elements.forEach(el => {
            const num = el.querySelector('.re-number')
            if (num) gsap.fromTo(num, { y: '100%' }, { y: '0%', duration: 0.8, ease: 'expo.out', overwrite: true })
          })
        },
        onLeaveBack: (elements) => gsap.set(elements, { autoAlpha: 0, y: 40, overwrite: true }),
        start: 'top 85%'
      })

      // Hover Micro-interactions
      const cards = gsap.utils.toArray<HTMLElement>('.re-card')
      cards.forEach(card => {
        const icon = card.querySelector('.re-icon')
        if (!icon) return
        card.addEventListener('mouseenter', () => gsap.to(icon, { scale: 1.2, rotation: 10, duration: 0.4, ease: 'back.out(2)' }))
        card.addEventListener('mouseleave', () => gsap.to(icon, { scale: 1, rotation: 0, duration: 0.4, ease: 'power2.out' }))
      })
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-muted border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="re-header mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border/50 pb-10">
          <div className="max-w-2xl space-y-4">
            <span className="re-subtitle text-xs font-bold tracking-widest uppercase text-secondary block">
              Cambios esperados
            </span>
            <h2 className="re-title text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tighter leading-tight">
              Resultados esperados
            </h2>
          </div>
          <p className="re-desc text-lg text-foreground/70 leading-relaxed font-medium max-w-md md:pb-2">
            Cambios concretos que esperamos lograr a través de nuestro trabajo integrado en tecnología, educación y salud.
          </p>
        </div>

        {/* Large-number editorial grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {resultados.map((resultado, i) => {
            const Icon = resultado.icono
            return (
              <div key={i} className="re-card group">
                <div className="overflow-hidden h-[60px] mb-6">
                  <div className="re-number text-6xl font-black text-border group-hover:text-secondary transition-colors tracking-tighter leading-none" style={{ willChange: 'transform' }}>
                    0{i + 1}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-background border border-border/60 flex items-center justify-center flex-shrink-0 shadow-sm" style={{ willChange: 'transform' }}>
                      <Icon className="re-icon w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary tracking-tight">
                      {resultado.titulo}
                    </h3>
                  </div>
                  <p className="text-base text-foreground/70 leading-relaxed font-medium">
                    {resultado.descripcion}
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
