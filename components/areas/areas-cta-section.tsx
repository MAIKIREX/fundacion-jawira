'use client'

import { useRef } from 'react'
import { JawiraButton } from '@/components/ui/jawira-button'
import { ArrowRight, Sparkles } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export default function AreasCtaSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          once: true,
        }
      })

      tl.fromTo('.cta-badge', { scale: 0.8, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.5, ease: 'back.out(1.5)' })
        .fromTo('.cta-title', { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out' }, '-=0.3')
        .fromTo('.cta-desc', { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, ease: 'power2.out' }, '-=0.5')
        .fromTo('.cta-button', 
          { y: 20, autoAlpha: 0 },
          { 
            y: 0, 
            autoAlpha: 1, 
            duration: 0.5, 
            stagger: 0.12, 
            ease: 'power2.out' 
          }, 
          '-=0.3'
        )
    })
  }, { scope: sectionRef, dependencies: [] })

  return (
    <section
      ref={sectionRef}
      data-header-theme="light"
      className="py-20 md:py-28 lg:py-32 bg-[#FBFDFE] dark:bg-background border-t border-border/40 overflow-hidden relative"
    >
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        
        <div className="space-y-4">
          <span className="cta-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-semibold tracking-widest uppercase text-secondary font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Colaboración & Alianzas</span>
          </span>
          <h2 className="cta-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary dark:text-foreground tracking-tight leading-[1.05] font-sans">
            ¿Te gustaría sumarte <br className="hidden sm:block" />
            a nuestra misión?
          </h2>
        </div>
        
        <p className="cta-desc text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed font-medium">
          Somos una organización abierta a la colaboración. Si eres voluntario, aliado institucional o donante interesado en potenciar alguno de estos ejes, conversemos.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6 items-center">
          <div className="cta-button">
            <JawiraButton href="/contacto" variant="green" size="lg" className="inline-flex items-center gap-2">
              Contactar ahora
              <ArrowRight className="w-4 h-4 ml-1 inline-block" />
            </JawiraButton>
          </div>
          
          <div className="cta-button">
            <JawiraButton href="/fundacion" variant="outline-dark" size="lg">
              Conocer la fundación
            </JawiraButton>
          </div>
        </div>
        
      </div>
    </section>
  )
}

