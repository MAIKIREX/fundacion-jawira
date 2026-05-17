'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { BookOpen, Zap, Heart, ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const axes = [
  {
    id: 'tecnologia',
    title: 'Tecnología',
    description: 'Soluciones tecnológicas para impulsar la producción, proteger el medio ambiente y cerrar la brecha digital.',
    icon: Zap,
  },
  {
    id: 'educacion',
    title: 'Educación',
    description: 'Fortalecemos capacidades educativas y digitales para docentes, estudiantes y comunidades.',
    icon: BookOpen,
  },
  {
    id: 'salud',
    title: 'Salud',
    description: 'Promovemos salud preventiva, telemedicina y soluciones digitales para acercar la atención.',
    icon: Heart,
  },
]

export default function AreasIntroductionSection() {
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

        // 1. Text reveal timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse',
          }
        })

        tl.from('.intro-subtitle', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power3.out' })
          .from('.intro-title', { y: 30, autoAlpha: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
          .from('.intro-desc', { y: 20, autoAlpha: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }, '-=0.2')

        // 2. Axes cards entrance
        gsap.from('.axis-card', {
          x: 40,
          autoAlpha: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rightColRef.current,
            start: 'top 75%',
            toggleActions: 'play reverse play reverse'
          }
        })

        // 3. Pinning effect (Desktop only)
        if (isDesktop && leftColRef.current && rightColRef.current) {
          ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top 10%',
            end: () => `bottom bottom`,
            pin: leftColRef.current,
            pinSpacing: false,
            invalidateOnRefresh: true,
          })
        }
      }
    )

    // Magnetic button effect setup
    const cards = gsap.utils.toArray<HTMLElement>('.axis-card')
    cards.forEach((card) => {
      const iconWrap = card.querySelector('.axis-icon-wrap')
      if (!iconWrap) return
      
      card.addEventListener('mouseenter', () => {
        gsap.to(iconWrap, { scale: 1.1, duration: 0.3, ease: 'back.out(1.5)' })
      })
      card.addEventListener('mouseleave', () => {
        gsap.to(iconWrap, { scale: 1, x: 0, y: 0, duration: 0.4, ease: 'power2.out' })
      })
      card.addEventListener('mousemove', (e) => {
        const rect = iconWrap.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        
        gsap.to(iconWrap, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.4,
          ease: 'power2.out',
          overwrite: 'auto'
        })
      })
    })

  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-start relative h-full">
          
          {/* Left: Intro Text (Pinned on Desktop) */}
          <div ref={leftColRef} className="space-y-6 lg:py-10">
            <div className="space-y-3">
              <span className="intro-subtitle text-xs font-semibold tracking-widest uppercase text-secondary">
                Visión holística
              </span>
              <h2 className="intro-title text-3xl md:text-5xl font-bold text-primary tracking-tight leading-tight">
                Tres ejes para un desarrollo integral
              </h2>
            </div>
            
            <div className="space-y-5 text-lg text-foreground/70 leading-relaxed font-medium">
              <p className="intro-desc">
                Fundación JAWIRA integra tecnología productiva, educación y salud de forma coordinada, no como áreas aisladas. Nuestro enfoque integral busca reducir brechas en comunidades urbanas, periurbanas y rurales del Departamento de La Paz.
              </p>
              <p className="intro-desc">
                Cada eje se fortalece con los otros, generando sinergias que multiplican el impacto y promueven el desarrollo sostenible desde una perspectiva unificada.
              </p>
            </div>
          </div>

          {/* Right: Axes List (Scrolls) */}
          <div ref={rightColRef} className="flex flex-col lg:py-10">
            {axes.map((axis, i) => {
              const Icon = axis.icon
              return (
                <div 
                  key={axis.id}
                  className={`axis-card group flex items-start gap-6 py-10 ${i !== 0 ? 'border-t border-border/60' : ''}`}
                >
                  <div className="axis-icon-wrap w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors border border-border/50" style={{ willChange: 'transform' }}>
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="space-y-4 flex-1 pt-1">
                    <h3 className="text-2xl font-bold text-primary tracking-tight">
                      {axis.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {axis.description}
                    </p>
                    <div className="pt-2">
                      <Link
                        href={`#${axis.id}`}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary hover:text-primary transition-colors group/link"
                      >
                        Explorar área
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
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
