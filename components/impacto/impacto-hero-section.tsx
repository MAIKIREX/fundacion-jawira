'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { ArrowDownRight, TrendingUp, Users, Map } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)

export default function ImpactoHeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const tl = gsap.timeline()

      // 1. Immersive Image Reveal
      tl.fromTo('.hero-image-wrapper', 
        { clipPath: 'inset(100% 0% 0% 0%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: 'power4.inOut' }
      )

      // Parallax for image
      gsap.to('.hero-image', {
        y: 80,
        scale: 1.1,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      })

      // 2. Pre-title
      tl.from('.hero-pretitle', { y: 20, autoAlpha: 0, duration: 0.6, ease: 'power2.out' }, '-=0.8')

      // 3. SplitText Title
      SplitText.create('.hero-title', {
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
            delay: 1.0 // Sync with image
          })
        }
      })

      // 4. Description and CTA
      tl.from('.hero-desc', { y: 20, autoAlpha: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
        .from('.hero-cta', { y: 15, autoAlpha: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')

      // 5. Right Sidebar Metrics
      tl.from('.hero-metric-title', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power3.out' }, '-=0.5')
        .from('.hero-metric-item', { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }, '-=0.4')

      // Hover Micro-interactions for Metrics
      const metrics = gsap.utils.toArray<HTMLElement>('.hero-metric-item')
      metrics.forEach(metric => {
        const icon = metric.querySelector('.hero-metric-icon')
        if (!icon) return
        metric.addEventListener('mouseenter', () => gsap.to(icon, { scale: 1.15, duration: 0.3, ease: 'back.out(1.5)' }))
        metric.addEventListener('mouseleave', () => gsap.to(icon, { scale: 1, duration: 0.4, ease: 'power2.out' }))
      })
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-background overflow-hidden border-b border-border min-h-[90vh] flex items-center">
      
      {/* Immersive Image Background Wrapper */}
      <div className="hero-image-wrapper absolute inset-0 z-0 overflow-hidden" style={{ willChange: 'clip-path' }}>
        <div className="absolute inset-0 bg-background/85 md:bg-background/75 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        
        <Image 
          src="/urban-rural-landscape-bolivia-coverage-areas-map.png"
          alt="Impacto territorial Fundación Jawira"
          fill
          priority
          className="hero-image object-cover object-center opacity-80 mix-blend-luminosity"
          style={{ willChange: 'transform' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-20 items-start">
          
          {/* Left: Massive Typography */}
          <div>
            <span className="hero-pretitle text-xs font-bold tracking-widest uppercase text-secondary block mb-6">
              Visión 2026 – 2034
            </span>
            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tighter leading-[1.05]">
              Impacto y <br className="hidden md:block" />
              cobertura
            </h1>
            <p className="hero-desc text-lg md:text-xl text-foreground/80 mt-8 leading-relaxed max-w-xl font-medium">
              Trabajamos por el desarrollo integral en el Departamento de La Paz, con una visión de impacto sostenible y equitativo.
            </p>

            <div className="hero-cta flex items-center gap-2 text-sm font-bold text-primary/80 uppercase tracking-widest mt-12">
              <ArrowDownRight className="w-5 h-5" />
              Conoce los resultados
            </div>
          </div>

          {/* Right: Data/Metric Grid */}
          <div className="space-y-6 lg:pt-8">
            <h3 className="hero-metric-title text-xs font-bold tracking-widest uppercase text-secondary">Proyecciones principales</h3>
            
            <div className="grid gap-px bg-border/40 border border-border/40 rounded-2xl overflow-hidden shadow-xl backdrop-blur-md">
              <div className="hero-metric-item bg-background/60 p-6 flex items-center gap-5 group hover:bg-background/80 transition-colors">
                <div className="hero-metric-icon w-12 h-12 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0 shadow-lg" style={{ willChange: 'transform' }}>
                  <Map className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground tracking-tight">La Paz</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-1">Foco territorial</p>
                </div>
              </div>

              <div className="hero-metric-item bg-background/60 p-6 flex items-center gap-5 group hover:bg-background/80 transition-colors">
                <div className="hero-metric-icon w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0 shadow-lg" style={{ willChange: 'transform' }}>
                  <TrendingUp className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground tracking-tight">3 Áreas</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-1">Ejes de intervención</p>
                </div>
              </div>

              <div className="hero-metric-item bg-background/60 p-6 flex items-center gap-5 group hover:bg-background/80 transition-colors">
                <div className="hero-metric-icon w-12 h-12 rounded-2xl bg-accent flex items-center justify-center flex-shrink-0 shadow-lg" style={{ willChange: 'transform' }}>
                  <Users className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground tracking-tight">Largo plazo</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-1">Horizonte temporal</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
