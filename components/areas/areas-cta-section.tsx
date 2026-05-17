'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function AreasCtaSection() {
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

      tl.from('.cta-badge', { scale: 0.8, autoAlpha: 0, duration: 0.5, ease: 'back.out(1.5)' })
        .from('.cta-title', { y: 40, autoAlpha: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3')
        .from('.cta-desc', { y: 20, autoAlpha: 0, duration: 0.6, ease: 'power2.out' }, '-=0.5')
        .from('.cta-button', { 
          y: 20, 
          autoAlpha: 0, 
          duration: 0.5, 
          stagger: 0.15, 
          ease: 'power2.out' 
        }, '-=0.3')
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background border-t border-border/40 overflow-hidden relative">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 relative z-10">
        
        <div className="space-y-6">
          <span className="cta-badge inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-semibold tracking-widest uppercase text-secondary">
            Colaboración
          </span>
          <h2 className="cta-title text-4xl md:text-5xl lg:text-7xl font-bold text-primary tracking-tighter leading-[1.05]">
            ¿Te gustaría sumarte <br className="hidden sm:block" />
            a nuestra misión?
          </h2>
        </div>
        
        <p className="cta-desc text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed font-medium">
          Somos una organización abierta a la colaboración. Si eres voluntario, aliado institucional o donante interesado en potenciar alguno de estos ejes, conversemos.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
          <div className="cta-button">
            <Button asChild variant="cta" size="lg" className="w-full sm:w-auto text-base h-14 px-8 rounded-xl">
              <Link href="/contacto">
                Contactar ahora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="cta-button">
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base h-14 px-8 rounded-xl border-2 hover:bg-muted/50">
              <Link href="/fundacion">
                Conocer la fundación
              </Link>
            </Button>
          </div>
        </div>
        
      </div>
    </section>
  )
}
