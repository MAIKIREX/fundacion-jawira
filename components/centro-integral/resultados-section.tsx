'use client'

import { useRef } from 'react'
import { TrendingUp, Lightbulb, Award, Users } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const resultados = [
  {
    icon: TrendingUp,
    titulo: 'Mayor acceso a servicios de salud',
    descripcion: 'Ampliación del acceso a servicios de salud preventiva y telemedicina para comunidades urbanas, periurbanas y rurales.',
  },
  {
    icon: Lightbulb,
    titulo: 'Reducción de brechas digitales',
    descripcion: 'Disminución de la brecha digital y educativa mediante programas de alfabetización y formación continua.',
  },
  {
    icon: Award,
    titulo: 'Soluciones tecnológicas adaptadas',
    descripcion: 'Implementación y validación de tecnologías diseñadas específicamente para contextos locales y comunitarios.',
  },
  {
    icon: Users,
    titulo: 'Fortalecimiento de capacidades',
    descripcion: 'Desarrollo del capital humano y fortalecimiento de capacidades técnicas en tecnología, educación y salud.',
  },
]

export default function ResultadosSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // 1. Header Reveal
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.res-header',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse'
        }
      })

      headerTl.from('.res-subtitle', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power3.out' })
              .from('.res-title', { y: 30, autoAlpha: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
              .from('.res-desc', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power2.out' }, '-=0.4')

      // 2. Results grid batch reveal
      gsap.set('.res-card', { y: 40, autoAlpha: 0 })
      ScrollTrigger.batch('.res-card', {
        onEnter: (elements) => gsap.to(elements, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', overwrite: true }),
        onLeave: (elements) => gsap.set(elements, { autoAlpha: 0, y: 40, overwrite: true }),
        onEnterBack: (elements) => gsap.to(elements, { autoAlpha: 1, y: 0, duration: 0.7, stagger: -0.1, ease: 'power3.out', overwrite: true }),
        onLeaveBack: (elements) => gsap.set(elements, { autoAlpha: 0, y: 40, overwrite: true }),
        start: 'top 85%'
      })

      // 3. Callout reveal
      gsap.from('.res-callout', {
        scale: 0.95,
        autoAlpha: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.res-callout',
          start: 'top 90%',
          toggleActions: 'play reverse play reverse'
        }
      })
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Decorative dark background elements */}
      <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-primary-foreground/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="res-header text-center mb-20">
          <span className="res-subtitle text-xs font-bold tracking-widest uppercase text-secondary block mb-4">
            Impacto proyectado
          </span>
          <h2 className="res-title text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tighter leading-tight">
            Resultados esperados
          </h2>
          <p className="res-desc text-lg text-primary-foreground/70 mt-6 max-w-2xl mx-auto leading-relaxed font-medium">
            Impactos concretos, medibles y sostenibles que generará el Centro Integral JAWIRA en su entorno de intervención.
          </p>
        </div>

        {/* Results grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {resultados.map((resultado, i) => {
            const Icon = resultado.icon
            return (
              <div key={i} className="res-card bg-primary-foreground/10 p-8 md:p-10 rounded-3xl border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors group">
                <div className="w-14 h-14 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 ease-out">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground tracking-tight mb-4">
                  {resultado.titulo}
                </h3>
                <p className="text-base text-primary-foreground/60 leading-relaxed font-medium">
                  {resultado.descripcion}
                </p>
              </div>
            )
          })}
        </div>

        {/* Replicable model callout */}
        <div className="res-callout mt-20 md:mt-24 max-w-3xl mx-auto text-center bg-primary-foreground/5 p-8 rounded-2xl border border-primary-foreground/10 backdrop-blur-sm">
          <p className="text-lg text-primary-foreground/80 leading-relaxed font-medium">
            El Centro Integral JAWIRA se diseña como un{" "}
            <span className="font-bold text-primary-foreground">modelo piloto replicable</span> que puede
            implementarse en otros municipios y departamentos del país, multiplicando su impacto a nivel nacional.
          </p>
        </div>

      </div>
    </section>
  )
}
