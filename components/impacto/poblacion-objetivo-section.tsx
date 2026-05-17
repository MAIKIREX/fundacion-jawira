'use client'

import { useRef } from 'react'
import { Users, Zap, Home, BookOpen, Stethoscope } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const grupos = [
  {
    titulo: 'Niñas, niños y adolescentes',
    descripcion: 'Acceso a educación de calidad, competencias digitales y servicios de salud integral.',
    icono: Users,
  },
  {
    titulo: 'Mujeres',
    descripcion: 'Empoderamiento mediante tecnología, educación y salud, con enfoque en equidad de género.',
    icono: Zap,
  },
  {
    titulo: 'Comunidades rurales y periurbanas',
    descripcion: 'Cierre de brechas digitales y educativas, acceso a tecnología productiva y salud.',
    icono: Home,
  },
  {
    titulo: 'Instituciones educativas',
    descripcion: 'Fortalecimiento de capacidades e integración de tecnología innovadora en procesos pedagógicos.',
    icono: BookOpen,
  },
  {
    titulo: 'Centros y redes de salud',
    descripcion: 'Ampliación de servicios, mejora de acceso tecnológico y atención integral coordinada.',
    icono: Stethoscope,
  },
]

export default function PoblacionObjetivoSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // 1. Header Timeline
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.po-header',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse'
        }
      })

      headerTl.from('.po-subtitle', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power3.out' })
              .from('.po-title', { y: 30, autoAlpha: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
              .from('.po-desc', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power2.out' }, '-=0.4')

      // 2. Batch reveal for bento grid cards
      gsap.set('.po-card', { autoAlpha: 0, y: 40 })
      ScrollTrigger.batch('.po-card', {
        onEnter: (elements) => gsap.to(elements, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', overwrite: true }),
        onLeave: (elements) => gsap.set(elements, { autoAlpha: 0, y: 40, overwrite: true }),
        onEnterBack: (elements) => gsap.to(elements, { autoAlpha: 1, y: 0, duration: 0.7, stagger: -0.1, ease: 'power3.out', overwrite: true }),
        onLeaveBack: (elements) => gsap.set(elements, { autoAlpha: 0, y: 40, overwrite: true }),
        start: 'top 85%'
      })

      // 3. Hover Micro-interactions
      const cards = gsap.utils.toArray<HTMLElement>('.po-card')
      cards.forEach(card => {
        const icon = card.querySelector('.po-icon')
        if (!icon) return
        card.addEventListener('mouseenter', () => gsap.to(icon, { scale: 1.15, rotation: 5, duration: 0.4, ease: 'back.out(2)' }))
        card.addEventListener('mouseleave', () => gsap.to(icon, { scale: 1, rotation: 0, duration: 0.4, ease: 'power2.out' }))
      })
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="po-header mb-20 max-w-2xl space-y-4">
          <span className="po-subtitle text-xs font-bold tracking-widest uppercase text-secondary block">
            Beneficiarios
          </span>
          <h2 className="po-title text-4xl md:text-5xl font-bold text-primary tracking-tighter leading-tight">
            Población objetivo
          </h2>
          <p className="po-desc text-lg text-foreground/70 mt-6 leading-relaxed font-medium">
            El impacto de JAWIRA está orientado a personas y comunidades que enfrentan brechas significativas en tecnología, educación y salud.
          </p>
        </div>

        {/* Groups — bento grid with gap-px */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 rounded-3xl overflow-hidden shadow-sm">
          {grupos.map((grupo, i) => {
            const Icon = grupo.icono
            return (
              <div
                key={i}
                className="po-card bg-background p-10 md:p-12 space-y-6 group hover:bg-muted/30 transition-colors"
              >
                <div className="po-icon w-14 h-14 rounded-2xl bg-primary/5 border border-border/50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors shadow-sm" style={{ willChange: 'transform' }}>
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-primary tracking-tight">
                    {grupo.titulo}
                  </h3>
                  <p className="text-base text-foreground/70 leading-relaxed font-medium">
                    {grupo.descripcion}
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
