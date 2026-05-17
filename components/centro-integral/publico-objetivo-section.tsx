'use client'

import { useRef } from 'react'
import { Users, Heart, Home, Building } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const publicos = [
  {
    icon: Users,
    titulo: 'Niñas, niños y adolescentes',
    descripcion: 'Acceso a educación digital, formación en competencias del siglo XXI y servicios de salud preventiva.',
  },
  {
    icon: Heart,
    titulo: 'Mujeres y grupos vulnerables',
    descripcion: 'Oportunidades de formación, empoderamiento y acceso a servicios de salud integral.',
  },
  {
    icon: Home,
    titulo: 'Población urbana, periurbana y rural',
    descripcion: 'Del Departamento de La Paz, con énfasis en comunidades con acceso limitado a servicios.',
  },
  {
    icon: Building,
    titulo: 'Instituciones y organizaciones',
    descripcion: 'Educativas, centros de salud y organizaciones comunitarias que buscan fortalecer capacidades.',
  },
]

export default function PublicoObjetivoSection() {
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

        // 1. Text Reveal
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: leftColRef.current,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse'
          }
        })

        tl.from('.po-subtitle', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power3.out' })
          .from('.po-title', { y: 30, autoAlpha: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
          .from('.po-desc', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power2.out' }, '-=0.4')

        // 2. Audience segments reveal (Batch)
        gsap.set('.po-segment', { y: 40, autoAlpha: 0 })
        ScrollTrigger.batch('.po-segment', {
          onEnter: (elements) => gsap.to(elements, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out', overwrite: true }),
          onLeave: (elements) => gsap.set(elements, { autoAlpha: 0, y: 40, overwrite: true }),
          onEnterBack: (elements) => gsap.to(elements, { autoAlpha: 1, y: 0, duration: 0.7, stagger: -0.15, ease: 'power3.out', overwrite: true }),
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
    const segments = gsap.utils.toArray<HTMLElement>('.po-segment')
    segments.forEach(seg => {
      const icon = seg.querySelector('.po-icon')
      if (!icon) return
      seg.addEventListener('mouseenter', () => gsap.to(icon, { scale: 1.15, duration: 0.4, ease: 'back.out(2)' }))
      seg.addEventListener('mouseleave', () => gsap.to(icon, { scale: 1, duration: 0.4, ease: 'power2.out' }))
    })

  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background border-t border-border/50 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start relative h-full">

          {/* Left: Header */}
          <div ref={leftColRef} className="space-y-6 lg:py-10">
            <div className="space-y-4">
              <span className="po-subtitle text-xs font-bold tracking-widest uppercase text-secondary block">
                Alcance social
              </span>
              <h2 className="po-title text-4xl md:text-5xl font-bold text-primary tracking-tighter leading-tight">
                ¿A quién beneficia el Centro Integral?
              </h2>
            </div>
            <p className="po-desc text-lg text-foreground/70 leading-relaxed font-medium">
              Nuestros servicios están diseñados para poblaciones específicas del Departamento de La Paz, priorizando comunidades con mayor vulnerabilidad y necesidad de atención integral.
            </p>
          </div>

          {/* Right: Audience segments */}
          <div ref={rightColRef} className="space-y-0 lg:py-10">
            {publicos.map((publico, i) => {
              const Icon = publico.icon
              return (
                <div
                  key={i}
                  className={`po-segment flex items-start gap-6 py-10 group ${
                    i !== 0 ? 'border-t border-border/60' : ''
                  }`}
                >
                  <div className="po-icon w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center flex-shrink-0 border border-border/50 shadow-sm" style={{ willChange: 'transform' }}>
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-3 pt-1">
                    <h3 className="text-2xl font-bold text-primary tracking-tight group-hover:text-secondary transition-colors">
                      {publico.titulo}
                    </h3>
                    <p className="text-base text-foreground/70 leading-relaxed font-medium">
                      {publico.descripcion}
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
