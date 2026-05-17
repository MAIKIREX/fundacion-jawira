'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function ArticulacionSection() {
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

      tl.from('.art-subtitle', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power3.out' })
        .from('.art-title', { y: 30, autoAlpha: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
        .from('.art-desc', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power2.out' }, '-=0.4')
        .from('.art-btn', { y: 20, autoAlpha: 0, duration: 0.5, stagger: 0.15, ease: 'back.out(1.5)' }, '-=0.2')
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-muted border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="art-subtitle text-xs font-bold tracking-widest uppercase text-secondary block mb-4">
            Articulación estratégica
          </span>
          <h2 className="art-title text-4xl md:text-5xl font-bold text-primary tracking-tighter leading-tight">
            Parte del modelo integral de JAWIRA
          </h2>

          <p className="art-desc text-xl text-foreground/70 mt-8 leading-relaxed font-medium">
            El Centro Integral JAWIRA es el{" "}
            <span className="font-bold text-foreground">corazón operativo</span> de la Fundación JAWIRA. Aquí
            convergen y se articulan nuestras tres{" "}
            <span className="font-bold text-foreground">áreas de trabajo estratégicas</span>: tecnología productiva,
            educación y salud, generando sinergias que multiplican el impacto en comunidades vulnerables.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <div className="art-btn">
              <Button asChild variant="cta" size="lg" className="w-full sm:w-auto text-base h-14 px-8 rounded-xl shadow-lg">
                <Link href="/areas-de-trabajo">
                  Ver áreas de trabajo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="art-btn">
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base h-14 px-8 rounded-xl border-2 border-primary/20 hover:border-primary/50 text-primary">
                <Link href="/fundacion">
                  Conocer la fundación
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
