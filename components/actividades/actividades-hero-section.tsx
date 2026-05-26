'use client'

import { useRef } from 'react'
import { CalendarDays, ArrowDownRight } from 'lucide-react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(SplitText, useGSAP)

export default function ActividadesHeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const tl = gsap.timeline()

      tl.from('.act-hero-pretitle', { y: 20, autoAlpha: 0, duration: 0.6, ease: 'power2.out' })

      SplitText.create('.act-hero-title', {
        type: 'chars, words',
        mask: 'words',
        autoSplit: true,
        onSplit(self) {
          return gsap.from(self.chars, {
            y: '100%',
            autoAlpha: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.02,
            delay: 0.3,
          })
        },
      })

      tl.from('.act-hero-desc', { y: 20, autoAlpha: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
        .from('.act-hero-cta', { y: 15, autoAlpha: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
    })
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-background overflow-hidden border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="act-hero-pretitle text-xs font-bold tracking-widest uppercase text-secondary block mb-6">
            Fundación Jawira
          </span>
          <h1 className="act-hero-title text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tighter leading-[1.05]">
            Actividades
          </h1>
          <p className="act-hero-desc text-lg md:text-xl text-foreground/80 mt-8 leading-relaxed max-w-2xl font-medium">
            Espacios de encuentro, diálogo y formación para fortalecer la participación ciudadana
            y el desarrollo comunitario en Bolivia.
          </p>
          <div className="act-hero-cta flex items-center gap-2 text-sm font-bold text-primary/80 uppercase tracking-widest mt-12">
            <ArrowDownRight className="w-5 h-5" />
            <CalendarDays className="w-4 h-4" />
            Próximos eventos
          </div>
        </div>
      </div>
    </section>
  )
}
