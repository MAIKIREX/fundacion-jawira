'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function TransparenciaRendicionSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse'
        }
      })

      // Left Column
      tl.from('.tr-subtitle', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power3.out' })
        .from('.tr-title', { y: 30, autoAlpha: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')

      // Right Column
      tl.from('.tr-desc', { y: 20, autoAlpha: 0, duration: 0.5, stagger: 0.15, ease: 'power2.out' }, '-=0.4')
        .from('.tr-btn', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'back.out(1.5)' }, '-=0.2')
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-24 items-start">

          {/* Left */}
          <div className="space-y-4">
            <span className="tr-subtitle text-xs font-bold tracking-widest uppercase text-secondary block">
              Compromiso institucional
            </span>
            <h2 className="tr-title text-4xl md:text-5xl font-bold text-primary tracking-tighter leading-tight max-w-sm">
              Transparencia y rendición de cuentas
            </h2>
          </div>

          {/* Right */}
          <div className="space-y-8">
            <div className="space-y-6 text-lg text-foreground/70 leading-relaxed font-medium">
              <p className="tr-desc">
                La Fundación JAWIRA se compromete a usar los recursos de forma responsable, eficiente y
                ética. Cada peso que recibimos de donantes, gobiernos o aliados es destinado directamente
                al impacto en las comunidades.
              </p>
              <p className="tr-desc">
                La transparencia es fundamental en nuestro trabajo. Creemos que la comunidad tiene derecho
                a conocer qué hacemos, cómo lo hacemos, cuánto gastamos y qué resultados logramos. Esta
                apertura genera confianza y nos responsabiliza ante las personas que nos apoyan y las
                comunidades que servimos.
              </p>
            </div>

            <div className="tr-btn pt-6">
              <Button asChild variant="cta" size="lg" className="h-14 px-8 text-base rounded-xl shadow-lg">
                <Link href="/transparencia">
                  Ver información de transparencia
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
