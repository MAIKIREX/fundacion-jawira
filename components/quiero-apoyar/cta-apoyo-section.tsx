'use client'

import { useRef } from 'react'
import { JawiraButton } from '@/components/ui/jawira-button'
import { ArrowRight, Heart } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export default function CtaApoyoSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })

        tl.from('.cta-apoyo-badge', {
          scale: 0.85,
          autoAlpha: 0,
          duration: 0.5,
          ease: 'back.out(1.5)',
        })
          .from(
            '.cta-apoyo-title',
            { y: 35, autoAlpha: 0, duration: 0.8, ease: 'power3.out' },
            '-=0.3'
          )
          .from(
            '.cta-apoyo-desc',
            { y: 20, autoAlpha: 0, duration: 0.6, ease: 'power2.out' },
            '-=0.5'
          )
          .from(
            '.cta-apoyo-button',
            {
              y: 20,
              autoAlpha: 0,
              duration: 0.5,
              stagger: 0.15,
              ease: 'power2.out',
            },
            '-=0.3'
          )
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      data-header-theme="dark"
      className="py-24 md:py-36 bg-[#1B361F] text-white relative overflow-hidden border-t border-white/10"
    >
      {/* Resplandor ambiental de fondo */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-radial-[circle_at_50%_50%] from-[#2C5233] via-[#1B361F] to-[#122415]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        <div className="space-y-4">
          <span className="cta-apoyo-badge inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold tracking-widest uppercase text-[#68CE2B]">
            Haz la diferencia
          </span>
          <h2 className="cta-apoyo-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold tracking-[-0.03em] leading-[1.06] text-white">
            Apoya nuestra <br className="hidden sm:block" />
            misión hoy
          </h2>
        </div>

        <p className="cta-apoyo-desc text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-normal">
          Cada contribución, sin importar su tamaño, genera un impacto real y medible en la vida de
          las personas y comunidades que servimos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 items-center">
          <div className="cta-apoyo-button">
            <JawiraButton
              href="/contacto"
              variant="secondary"
              size="lg"
              className="inline-flex items-center gap-2"
            >
              <span>Contactar</span>
              <ArrowRight className="w-4 h-4" />
            </JawiraButton>
          </div>

          <div className="cta-apoyo-button">
            <JawiraButton
              href="/contacto"
              variant="outline-white"
              size="lg"
              className="inline-flex items-center gap-2"
            >
              <Heart className="w-4 h-4 text-[#68CE2B]" />
              <span>Donar ahora</span>
            </JawiraButton>
          </div>
        </div>
      </div>
    </section>
  )
}
