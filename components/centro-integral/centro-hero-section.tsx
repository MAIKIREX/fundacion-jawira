'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { Zap, BookOpen, Heart, MapPin, Building2, ArrowDownRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)

export default function CentroHeroSection() {
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
        y: 60,
        scale: 1.1,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      })

      // 2. Badges and Text
      tl.from('.hero-badge', { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }, '-=0.8')

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
            stagger: 0.03,
            delay: 1.0 // Sync with image
          })
        }
      })

      // 4. Staggered Subtexts
      tl.from('.hero-desc', { y: 20, autoAlpha: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
        .from('.hero-cta', { y: 15, autoAlpha: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')

      // 5. Right Sidebar Metadata & Axes Grid
      tl.from('.hero-meta-item', { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }, '-=0.5')
        .from('.hero-axis', { y: 20, autoAlpha: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out' }, '-=0.4')

      // Hover Micro-interactions for Axes
      const axes = gsap.utils.toArray<HTMLElement>('.hero-axis')
      axes.forEach(axis => {
        const icon = axis.querySelector('.hero-axis-icon')
        if (!icon) return
        axis.addEventListener('mouseenter', () => gsap.to(icon, { scale: 1.15, duration: 0.3, ease: 'back.out(1.5)' }))
        axis.addEventListener('mouseleave', () => gsap.to(icon, { scale: 1, duration: 0.4, ease: 'power2.out' }))
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
          src="/integrated-center-facility-services-building-modern.png"
          alt="Centro Integral"
          fill
          priority
          className="hero-image object-cover object-center opacity-80 mix-blend-luminosity"
          style={{ willChange: 'transform' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="hero-badge text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded bg-secondary/10 text-secondary border border-secondary/20">
            Proyecto piloto
          </span>
          <span className="hero-badge text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded bg-primary/10 text-primary border border-primary/20">
            Modelo replicable
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16 lg:gap-20 items-start">
          
          {/* Left: Massive Typography */}
          <div>
            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tighter leading-[1.05]">
              Centro <br className="hidden sm:block" />
              Integral <span className="text-secondary">JAWIRA</span>
            </h1>
            <p className="hero-desc text-lg md:text-xl text-foreground/80 mt-8 leading-relaxed max-w-xl font-medium">
              Un espacio que integra tecnología productiva, educación y salud para el desarrollo 
              integral de las comunidades del Departamento de La Paz.
            </p>

            <div className="hero-cta flex items-center gap-2 text-sm font-semibold text-primary/80 uppercase tracking-widest mt-12">
              <ArrowDownRight className="w-4 h-4" />
              Descubrir el centro
            </div>
          </div>

          {/* Right: Metadata & Axes Grid */}
          <div className="space-y-8 lg:pt-2">
            
            {/* Meta Info */}
            <div className="grid grid-cols-2 gap-px bg-border/40 border border-border/40 rounded-2xl overflow-hidden shadow-xl backdrop-blur-md">
              <div className="hero-meta-item bg-background/60 p-6 space-y-1">
                <MapPin className="w-5 h-5 text-primary mb-3" />
                <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground/80">Ubicación</p>
                <p className="text-sm font-bold text-foreground">La Paz, Bolivia</p>
              </div>
              <div className="hero-meta-item bg-background/60 p-6 space-y-1">
                <Building2 className="w-5 h-5 text-secondary mb-3" />
                <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground/80">Enfoque</p>
                <p className="text-sm font-bold text-foreground">Articulación Integral</p>
              </div>
            </div>

            {/* Three axes indicator */}
            <div className="space-y-4">
              <h3 className="hero-axis text-xs font-bold tracking-widest uppercase text-secondary">Pilares del Centro</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: Zap, label: "Tecnología", color: "bg-primary" },
                  { icon: BookOpen, label: "Educación", color: "bg-secondary" },
                  { icon: Heart, label: "Salud", color: "bg-accent" },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="hero-axis p-4 rounded-xl border border-border/50 bg-background/40 backdrop-blur-md flex flex-col items-center text-center gap-3 hover:bg-background/80 transition-colors shadow-sm">
                      <div className={`hero-axis-icon w-10 h-10 rounded-xl ${item.color} flex items-center justify-center shadow-lg`} style={{ willChange: 'transform' }}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-[11px] font-bold tracking-wider uppercase text-foreground">{item.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
