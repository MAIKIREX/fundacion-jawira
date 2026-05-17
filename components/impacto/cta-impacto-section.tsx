'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)

export default function CtaImpactoSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // 1. Image Background Reveal and Parallax
      gsap.fromTo('.cta-imp-wrapper',
        { clipPath: 'inset(100% 0% 0% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.5,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )

      gsap.fromTo('.cta-imp-image',
        { y: -60, scale: 1.1 },
        {
          y: 60,
          scale: 1.1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        }
      )

      // 2. Pre-title
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.cta-imp-content',
          start: 'top 80%',
          toggleActions: 'play reverse play reverse'
        }
      })

      tl.from('.cta-imp-subtitle', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power3.out' })

      // 3. SplitText Title
      SplitText.create('.cta-imp-title', {
        type: 'chars, words',
        mask: 'words',
        autoSplit: true,
        onSplit(self) {
          return tl.from(self.chars, {
            y: '100%',
            autoAlpha: 0,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.02,
          }, '-=0.2')
        }
      })

      // 4. Content and Buttons
      tl.from('.cta-imp-desc', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2')
        .from('.cta-imp-btn', { y: 20, autoAlpha: 0, duration: 0.5, stagger: 0.1, ease: 'back.out(1.5)' }, '-=0.2')
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden bg-black border-t border-primary-foreground/5">
      {/* Immersive Background */}
      <div className="cta-imp-wrapper absolute inset-0 z-0" style={{ willChange: 'clip-path' }}>
        <Image
          src="/community-development-people-working-together-bolivia.png"
          alt="Colaboración comunitaria"
          fill
          className="cta-imp-image object-cover opacity-70 mix-blend-luminosity"
          style={{ willChange: 'transform' }}
        />
        <div className="absolute inset-0 bg-primary/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
      </div>

      <div className="cta-imp-content max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 relative z-10">

        <div className="space-y-4">
          <span className="cta-imp-subtitle text-xs font-bold tracking-widest uppercase text-secondary block">
            Colaboración
          </span>
          <h2 className="cta-imp-title text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground tracking-tighter leading-[1.08]">
            ¿Quieres ser parte <br className="hidden sm:block" />
            de este impacto?
          </h2>
        </div>

        <p className="cta-imp-desc text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed font-medium">
          Puedes colaborar como voluntario, hacer donaciones, o explorar oportunidades de alianza institucional para ampliar nuestro alcance y profundidad.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <div className="cta-imp-btn">
            <Button asChild variant="cta" size="lg" className="w-full sm:w-auto h-14 px-8 text-base rounded-xl shadow-xl hover:scale-105 transition-transform duration-300">
              <Link href="/contacto">
                Quiero apoyar
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="cta-imp-btn">
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-base border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/40 rounded-xl transition-colors">
              <Link href="/centro-integral">
                Conocer el Centro Integral
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}
