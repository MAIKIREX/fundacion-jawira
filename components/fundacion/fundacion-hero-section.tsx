'use client'

import { useRef } from 'react'
import { ArrowDownRight, Building2, FileCheck, Globe } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin, useGSAP)

const identityCards = [
  {
    icon: Building2,
    title: 'Sede Principal',
    description: 'Zona Gran Poder, La Paz, Bolivia.',
    bgClass: 'bg-primary/6',
    iconClass: 'text-primary/70',
  },
  {
    icon: Globe,
    title: 'Alcance Territorial',
    description: 'Áreas urbanas, periurbanas y rurales del Departamento de La Paz.',
    bgClass: 'bg-secondary/8',
    iconClass: 'text-secondary/70',
  },
  {
    icon: FileCheck,
    title: 'Estatus Legal',
    description: 'Organización no gubernamental, sin fines de lucro, legalmente establecida.',
    bgClass: 'bg-accent/8',
    iconClass: 'text-accent/70',
  },
]

export default function FundacionHeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add(
      {
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { reduceMotion } = context.conditions!

        if (reduceMotion) return

        // --- SplitText on heading ---
        const split = SplitText.create('.hero-heading', {
          type: 'chars, words',
          mask: 'words',
          autoSplit: true,
          onSplit(self) {
            return gsap.from(self.chars, {
              y: '100%',
              autoAlpha: 0,
              duration: 0.7,
              ease: 'power3.out',
              stagger: 0.025,
              delay: 0.2,
            })
          },
        })

        // --- Subtitle & description entrance ---
        const tl = gsap.timeline({ delay: 0.1 })

        tl.from('.hero-subtitle', {
          y: 20,
          autoAlpha: 0,
          duration: 0.6,
          ease: 'power3.out',
        })
        .from('.hero-description', {
          y: 25,
          autoAlpha: 0,
          duration: 0.7,
          ease: 'power3.out',
        }, '-=0.3')
        .from('.hero-cta', {
          y: 15,
          autoAlpha: 0,
          duration: 0.5,
          ease: 'power2.out',
        }, '-=0.3')

        // --- Identity cards stagger from right ---
        tl.from('.identity-label', {
          y: 15,
          autoAlpha: 0,
          duration: 0.5,
          ease: 'power2.out',
        }, '-=0.2')
        .from('.identity-card', {
          x: 60,
          autoAlpha: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.12,
        }, '-=0.3')

        // --- Decorative SVG path draw ---
        gsap.from('.hero-svg-path', {
          drawSVG: '0%',
          duration: 2.5,
          ease: 'power2.inOut',
          stagger: 0.3,
          delay: 0.8,
        })
      }
    )
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-background border-b border-border"
    >
      {/* Subtle decorative element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.03] pointer-events-none -mr-[200px] -mt-[100px]">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M50 20 Q80 40 60 80 Q70 120 50 160"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="hero-svg-path text-primary"
          />
          <path
            d="M60 30 Q90 50 70 90 Q80 130 60 170"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            className="hero-svg-path text-secondary"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-20 items-start">
          
          {/* Left: Massive Typography */}
          <div>
            <span className="hero-subtitle text-xs font-semibold tracking-widest uppercase text-secondary block mb-6">
              Conócenos
            </span>
            <h1 className="hero-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary tracking-tighter leading-[1.05]">
              La Fundación <br className="hidden md:block" />
              <span className="text-secondary">JAWIRA</span>
            </h1>
            <p className="hero-description text-lg md:text-xl text-muted-foreground mt-8 leading-relaxed max-w-xl">
              Una fundación sin fines de lucro que articula tecnología productiva, educación y salud 
              para el desarrollo integral en el Departamento de La Paz, Bolivia.
            </p>

            <div className="hero-cta flex items-center gap-2 text-sm font-semibold text-primary/60 uppercase tracking-widest mt-12">
              <ArrowDownRight className="w-4 h-4" />
              Nuestra historia
            </div>
          </div>

          {/* Right: Institutional Data */}
          <div className="space-y-6 lg:pt-8">
            <h3 className="identity-label text-xs font-bold tracking-widest uppercase text-secondary">Identidad institucional</h3>
            
            <div className="grid gap-px bg-border/40 border border-border/40 rounded-xl overflow-hidden">
              {identityCards.map((card) => {
                const IconComponent = card.icon
                return (
                  <div key={card.title} className="identity-card bg-background p-6 flex items-start gap-5">
                    <div className={`w-10 h-10 rounded-xl ${card.bgClass} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <IconComponent className={`w-4 h-4 ${card.iconClass}`} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary tracking-tight">{card.title}</p>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{card.description}</p>
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
