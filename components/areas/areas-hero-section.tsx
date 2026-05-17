'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { BookOpen, Zap, Heart, ArrowDownRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin, useGSAP)

export default function AreasHeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add(
      {
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
        reduceMotion: '(prefers-reduced-motion: reduce)'
      },
      (context) => {
        const { reduceMotion } = context.conditions!

        if (reduceMotion) return

        const tl = gsap.timeline()

        // 1. Initial image mask reveal (Cinematic opening)
        tl.fromTo('.hero-image-wrapper', 
          { clipPath: 'inset(100% 0% 0% 0%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: 'power4.inOut' }
        )

        // 2. Parallax scaling on image
        gsap.to('.hero-image', {
          scale: 1.15,
          y: 50,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        })

        // 3. SplitText reveal on title
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
              delay: 1.0 // Delayed to sync with image mask
            })
          }
        })

        // 4. Fade in subtitle, paragraph, and lines
        tl.from('.hero-subtitle', { y: 20, autoAlpha: 0, duration: 0.6, ease: 'power2.out' }, '-=0.1')
          .from('.hero-desc', { y: 20, autoAlpha: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
          .from('.hero-axis-item', { y: 20, autoAlpha: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }, '-=0.3')
          .from('.hero-cta', { y: 15, autoAlpha: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2')

        // 5. DrawSVG decorative abstract lines
        gsap.from('.hero-svg-path', {
          drawSVG: '0%',
          duration: 3,
          ease: 'power2.inOut',
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse'
          }
        })
      }
    )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-background overflow-hidden border-b border-border min-h-[90vh] flex items-center">
      {/* Immersive Image Background Wrapper */}
      <div className="hero-image-wrapper absolute inset-0 z-0 overflow-hidden" style={{ willChange: 'clip-path' }}>
        <div className="absolute inset-0 bg-background/80 md:bg-background/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        
        <Image 
          src="/urban-rural-landscape-bolivia-coverage-areas-map.png"
          alt="Paisaje boliviano"
          fill
          priority
          className="hero-image object-cover object-right opacity-80 mix-blend-luminosity"
          style={{ willChange: 'transform' }}
        />
      </div>

      {/* Decorative SVG */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <svg className="absolute right-0 top-0 w-full h-full text-primary opacity-[0.04]" viewBox="0 0 400 400" fill="none" preserveAspectRatio="xMaxYMin slice">
          <path className="hero-svg-path" d="M300 0 Q350 100 300 200 Q250 300 300 400" stroke="currentColor" strokeWidth="80" />
          <path className="hero-svg-path" d="M400 50 Q450 150 400 250 Q350 350 400 450" stroke="currentColor" strokeWidth="40" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16 lg:gap-20 items-center">
          
          {/* Left: Huge Cinematic Title */}
          <div>
            <span className="hero-subtitle text-xs font-semibold tracking-widest uppercase text-secondary block mb-6">
              Nuestro trabajo
            </span>
            <h1 className="hero-title text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-foreground tracking-tighter leading-[1.02]">
              Áreas de <br className="hidden md:block" />
              trabajo
            </h1>
            <p className="hero-desc text-lg md:text-xl text-foreground/80 mt-8 leading-relaxed max-w-xl font-medium">
              Articulamos tres ejes estratégicos: tecnología productiva, educación y salud, 
              para impulsar el desarrollo integral en el Departamento de La Paz.
            </p>

            <div className="hero-cta flex items-center gap-2 text-sm font-semibold text-primary/80 uppercase tracking-widest mt-12">
              <ArrowDownRight className="w-4 h-4" />
              Explorar áreas
            </div>
          </div>

          {/* Right: Editorial Context List */}
          <div className="space-y-0 lg:pl-10">
            {/* Three axes indicator - Vertical list */}
            <div className="space-y-0 backdrop-blur-md bg-background/40 p-6 md:p-8 rounded-2xl border border-border/50 shadow-xl">
              {[
                { icon: Zap, label: "Tecnología", desc: "Productiva y herramientas digitales", color: "bg-primary" },
                { icon: BookOpen, label: "Educación", desc: "Integral y formación de capacidades", color: "bg-secondary" },
                { icon: Heart, label: "Salud", desc: "Prevención y bienestar comunitario", color: "bg-accent" },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className={`hero-axis-item flex items-start gap-5 py-5 ${i !== 0 ? 'border-t border-border/40' : ''}`}>
                    <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground tracking-tight">{item.label}</h3>
                      <p className="text-sm text-foreground/70 mt-1">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
