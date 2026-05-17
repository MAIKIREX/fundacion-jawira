'use client'

import { useRef } from 'react'
import { Zap, BookOpen, Heart } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const componentes = [
  {
    title: 'Tecnología Productiva',
    description: 'Desarrollo y prueba de soluciones tecnológicas para minería, agropecuaria e industria.',
    details: [
      'Laboratorios de innovación y diseño de prototipos',
      'Herramientas digitales y desarrollo de software',
      'Aplicaciones y plataformas para educación y salud'
    ],
    icon: Zap,
    accent: 'border-primary/30',
  },
  {
    title: 'Educación',
    description: 'Aulas TIC y espacios de formación continua para comunidades.',
    details: [
      'Programas de alfabetización digital básica y avanzada',
      'Talleres, cursos y diplomados en competencias del siglo XXI',
      'Contenidos educativos digitales adaptados'
    ],
    icon: BookOpen,
    accent: 'border-secondary/30',
  },
  {
    title: 'Salud',
    description: 'Servicios de salud preventiva y telemedicina para comunidades.',
    details: [
      'Consultas presenciales y por telemedicina',
      'Programas de prevención y promoción de la salud',
      'Formación de promotores/as de salud comunitaria'
    ],
    icon: Heart,
    accent: 'border-accent/30',
  },
]

export default function ComponentesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // 1. Header Reveal
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.comp-header',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse'
        }
      })

      headerTl.from('.comp-subtitle', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power3.out' })
              .from('.comp-title', { y: 30, autoAlpha: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
              .from('.comp-desc', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power2.out' }, '-=0.4')

      // 2. Batch reveal for component rows
      gsap.set('.comp-row', { autoAlpha: 0, y: 40 })
      ScrollTrigger.batch('.comp-row', {
        onEnter: (elements) => {
          gsap.to(elements, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', overwrite: true })
          
          // Animate the huge numbers inside
          elements.forEach(el => {
            const num = el.querySelector('.comp-number')
            if (num) {
              gsap.fromTo(num, { y: '100%' }, { y: '0%', duration: 0.8, ease: 'expo.out', overwrite: true })
            }
          })
        },
        onLeave: (elements) => {
          gsap.set(elements, { autoAlpha: 0, y: 40, overwrite: true })
        },
        onEnterBack: (elements) => {
          gsap.to(elements, { autoAlpha: 1, y: 0, duration: 0.8, stagger: -0.15, ease: 'power3.out', overwrite: true })
          elements.forEach(el => {
            const num = el.querySelector('.comp-number')
            if (num) {
              gsap.fromTo(num, { y: '100%' }, { y: '0%', duration: 0.8, ease: 'expo.out', overwrite: true })
            }
          })
        },
        onLeaveBack: (elements) => {
          gsap.set(elements, { autoAlpha: 0, y: 40, overwrite: true })
        },
        start: 'top 85%'
      })

      // Hover Micro-interactions
      const rows = gsap.utils.toArray<HTMLElement>('.comp-row')
      rows.forEach(row => {
        const icon = row.querySelector('.comp-icon')
        if (!icon) return
        row.addEventListener('mouseenter', () => gsap.to(icon, { scale: 1.15, rotation: 5, duration: 0.4, ease: 'back.out(2)' }))
        row.addEventListener('mouseleave', () => gsap.to(icon, { scale: 1, rotation: 0, duration: 0.4, ease: 'power2.out' }))
      })
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-muted border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="comp-header mb-20 max-w-2xl">
          <span className="comp-subtitle text-xs font-bold tracking-widest uppercase text-secondary block mb-4">
            Estructura del centro
          </span>
          <h2 className="comp-title text-4xl md:text-5xl font-bold text-primary tracking-tighter leading-tight">
            Tres componentes que trabajan juntos
          </h2>
          <p className="comp-desc text-lg text-foreground/70 mt-6 leading-relaxed font-medium">
            El Centro Integral JAWIRA se organiza alrededor de tres componentes interconectados que generan impacto integral.
          </p>
        </div>

        {/* Vertical stack — editorial list */}
        <div className="space-y-0">
          {componentes.map((comp, i) => {
            const Icon = comp.icon
            return (
              <div
                key={comp.title}
                className={`comp-row group grid lg:grid-cols-[auto_1fr_1.2fr] gap-8 lg:gap-16 items-start py-12 ${
                  i !== 0 ? 'border-t border-border/60' : ''
                }`}
              >
                {/* Huge Number with Mask */}
                <div className="hidden lg:flex items-start pt-1 overflow-hidden h-[80px]">
                  <span className="comp-number text-7xl font-black text-border group-hover:text-primary transition-colors tracking-tighter leading-none" style={{ willChange: 'transform' }}>
                    0{i + 1}
                  </span>
                </div>

                {/* Title + Description */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="comp-icon w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 shadow-lg" style={{ willChange: 'transform' }}>
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary tracking-tight">
                      {comp.title}
                    </h3>
                  </div>
                  <p className="text-base text-foreground/70 leading-relaxed max-w-md font-medium pt-2">
                    {comp.description}
                  </p>
                </div>

                {/* Details list */}
                <div className="space-y-4 lg:pt-3">
                  {comp.details.map((detail, j) => (
                    <div key={j} className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
                      <span className="text-base text-foreground/80 leading-relaxed font-medium">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
