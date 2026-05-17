'use client'

import { useRef } from 'react'
import { Monitor, BookOpen, HeartPulse } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin, useGSAP)

export default function SignificadoJawiraSection() {
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

        // --- Title SplitText ---
        SplitText.create('.significado-title', {
          type: 'words',
          mask: 'words',
          autoSplit: true,
          onSplit(self) {
            return gsap.from(self.words, {
              y: '100%',
              duration: 0.8,
              ease: 'power3.out',
              stagger: 0.06,
              scrollTrigger: {
                trigger: '.significado-title',
                start: 'top 85%',
                toggleActions: 'play reverse play reverse',
              },
            })
          },
        })

        // --- Subtitle ---
        gsap.from('.significado-subtitle', {
          y: 20,
          autoAlpha: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.significado-subtitle',
            start: 'top 90%',
            toggleActions: 'play reverse play reverse',
          },
        })

        // --- Paragraphs stagger ---
        gsap.from('.significado-paragraph', {
          y: 30,
          autoAlpha: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.significado-text-block',
            start: 'top 80%',
            toggleActions: 'play reverse play reverse',
          },
        })

        // --- River SVG DrawSVG with scrub ---
        const riverTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.river-svg-container',
            start: 'top 75%',
            end: 'bottom 30%',
            scrub: 1,
          },
        })

        riverTl
          .from('.river-main-stream', { drawSVG: '0%', duration: 1, ease: 'none' })
          .from('.river-branch-1', { drawSVG: '0%', duration: 0.5, ease: 'none' }, 0.3)
          .from('.river-branch-2', { drawSVG: '0%', duration: 0.5, ease: 'none' }, 0.5)
          .from('.river-branch-3', { drawSVG: '0%', duration: 0.5, ease: 'none' }, 0.7)

        // --- Node icons scale in ---
        gsap.from('.river-node', {
          scale: 0,
          autoAlpha: 0,
          duration: 0.6,
          ease: 'back.out(1.7)',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.river-svg-container',
            start: 'top 60%',
            toggleActions: 'play reverse play reverse',
          },
        })

        // --- Flow particles pulse ---
        gsap.to('.river-particle', {
          autoAlpha: 0.8,
          scale: 1.5,
          duration: 1.5,
          ease: 'sine.inOut',
          stagger: { each: 0.4, repeat: -1, yoyo: true },
        })
      }
    )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="significado-subtitle text-xs font-semibold tracking-widest uppercase text-secondary">
                Nuestro nombre
              </span>
              <h2 className="significado-title text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight">
                ¿Qué significa JAWIRA?
              </h2>
            </div>

            <div className="significado-text-block space-y-4 text-base text-foreground/70 leading-relaxed">
              <p className="significado-paragraph">
                <span className="font-semibold text-primary">JAWIRA</span> significa{" "}
                <span className="italic">&ldquo;río&rdquo;</span> en aymara, uno de los idiomas originarios de Bolivia.
                Esta palabra no es solo una etiqueta, sino una metáfora profunda de nuestra filosofía institucional.
              </p>
              <p className="significado-paragraph">
                Un río representa el <span className="font-medium text-foreground">flujo de vida</span>, la{" "}
                <span className="font-medium text-foreground">conexión continua</span> entre diferentes espacios, y la
                capacidad de <span className="font-medium text-foreground">generar oportunidades</span> a su paso. De la
                misma manera, la Fundación JAWIRA actúa como un cauce que canaliza tecnología productiva, educación y
                salud hacia comunidades vulnerables.
              </p>
              <p className="significado-paragraph">
                Así como el río nutre la tierra y conecta ecosistemas, nuestra fundación busca nutrir el potencial
                humano, conectar actores institucionales y crear caminos hacia el desarrollo sostenible e integral.
              </p>
            </div>
          </div>

          {/* Right: Animated river visualization */}
          <div className="river-svg-container relative h-[420px] flex items-center justify-center">
            <svg viewBox="0 0 320 420" className="w-full h-full max-w-[280px]" aria-hidden="true">
              {/* Main river stream — sinuous path */}
              <path
                d="M160 10 Q170 50 145 90 Q155 130 140 170 Q160 210 145 250 Q155 300 150 340 Q155 380 160 410"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                className="river-main-stream text-primary/30"
                style={{ willChange: 'stroke-dashoffset' }}
              />

              {/* Secondary stream — slightly offset */}
              <path
                d="M168 20 Q178 60 153 100 Q163 140 148 180 Q168 220 153 260 Q163 310 158 350 Q163 390 168 415"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="river-main-stream text-secondary/20"
                style={{ willChange: 'stroke-dashoffset' }}
              />

              {/* Branch 1: Technology — curves right */}
              <path
                d="M153 95 Q180 80 220 70 Q250 65 275 72"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="river-branch-1 text-primary/25"
                style={{ willChange: 'stroke-dashoffset' }}
              />

              {/* Branch 2: Education — curves left */}
              <path
                d="M148 195 Q120 180 80 175 Q55 172 35 178"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="river-branch-2 text-secondary/25"
                style={{ willChange: 'stroke-dashoffset' }}
              />

              {/* Branch 3: Health — curves right */}
              <path
                d="M153 300 Q185 290 225 285 Q255 282 280 290"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="river-branch-3 text-accent/25"
                style={{ willChange: 'stroke-dashoffset' }}
              />

              {/* Flow particles along the river */}
              <circle cx="155" cy="50" r="2.5" className="river-particle fill-primary/40" />
              <circle cx="148" cy="130" r="2" className="river-particle fill-secondary/40" />
              <circle cx="152" cy="220" r="2.5" className="river-particle fill-primary/40" />
              <circle cx="155" cy="330" r="2" className="river-particle fill-secondary/40" />
              <circle cx="158" cy="390" r="2.5" className="river-particle fill-accent/40" />
            </svg>

            {/* Node 1: Technology */}
            <div className="river-node absolute flex items-center gap-2.5" style={{ top: '14%', right: '2%' }}>
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <Monitor className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold text-primary tracking-tight">Tecnología</p>
                <p className="text-[10px] text-muted-foreground">Innovación digital</p>
              </div>
            </div>

            {/* Node 2: Education */}
            <div className="river-node absolute flex items-center gap-2.5" style={{ top: '42%', left: '0%' }}>
              <div className="w-9 h-9 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/20">
                <BookOpen className="w-4 h-4 text-secondary" />
              </div>
              <div>
                <p className="text-xs font-bold text-primary tracking-tight">Educación</p>
                <p className="text-[10px] text-muted-foreground">Formación integral</p>
              </div>
            </div>

            {/* Node 3: Health */}
            <div className="river-node absolute flex items-center gap-2.5" style={{ top: '68%', right: '0%' }}>
              <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
                <HeartPulse className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="text-xs font-bold text-primary tracking-tight">Salud</p>
                <p className="text-[10px] text-muted-foreground">Prevención y bienestar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
