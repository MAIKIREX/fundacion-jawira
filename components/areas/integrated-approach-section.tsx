'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP)

export default function IntegratedApproachSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const benefits = [
    'Mayor impacto y sostenibilidad',
    'Sinergia inter-disciplinaria',
    'Participación comunitaria activa',
    'Respuesta multidimensional',
    'Mejora de indicadores base',
    'Ecosistemas de innovación'
  ]

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // 1. Header Reveal
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.integrated-header',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse'
        }
      })

      headerTl.from('.integrated-subtitle', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power3.out' })
              .from('.integrated-title', { y: 30, autoAlpha: 0, duration: 0.7, ease: 'power3.out' }, '-=0.3')
              .from('.integrated-desc', { y: 20, autoAlpha: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')

      // 2. Abstract Geometry DrawSVG with Scrub
      const svgTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.integrated-svg-container',
          start: 'top 75%',
          end: 'bottom 40%',
          scrub: 1
        }
      })

      svgTl.from('.integ-circle', { drawSVG: '0%', duration: 1, ease: 'none', stagger: 0.2 })
           .from('.integ-line', { drawSVG: '0%', duration: 0.5, ease: 'none', stagger: 0.1 }, '-=0.5')
           .from('.integ-dot', { scale: 0, transformOrigin: 'center center', duration: 0.3, ease: 'back.out(2)' }, '-=0.2')

      // 3. Benefits Stagger Reveal
      gsap.from('.integrated-benefit', {
        x: -20,
        autoAlpha: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.integrated-benefits-grid',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse'
        }
      })
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-primary overflow-hidden relative min-h-[80vh] flex flex-col justify-center">
      {/* Abstract Architectural SVG Background */}
      <div className="integrated-svg-container absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none z-0">
        <svg viewBox="0 0 800 800" className="w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] text-primary-foreground max-w-none">
          <circle className="integ-circle" cx="400" cy="300" r="200" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
          <circle className="integ-circle" cx="250" cy="500" r="200" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
          <circle className="integ-circle" cx="550" cy="500" r="200" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
          
          {/* Connection lines to center */}
          <line className="integ-line" x1="400" y1="300" x2="400" y2="440" stroke="currentColor" strokeWidth="2" />
          <line className="integ-line" x1="250" y1="500" x2="380" y2="460" stroke="currentColor" strokeWidth="2" />
          <line className="integ-line" x1="550" y1="500" x2="420" y2="460" stroke="currentColor" strokeWidth="2" />
          
          {/* Center core */}
          <circle className="integ-dot" cx="400" cy="450" r="12" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="integrated-header max-w-3xl mx-auto text-center">
          <span className="integrated-subtitle text-xs font-semibold tracking-widest uppercase text-secondary">
            Punto de convergencia
          </span>
          <h2 className="integrated-title text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight leading-tight mt-4 mb-8">
            Un enfoque estructuralmente integrado
          </h2>
          <p className="integrated-desc text-lg md:text-xl text-primary-foreground/70 leading-relaxed font-light">
            Los tres ejes no funcionan de manera aislada. Su intersección crea espacios de innovación donde cada área fortalece y potencia a las otras, generando soluciones sistémicas, efectivas y sostenibles.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="integrated-benefits-grid mt-20 max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="integrated-benefit flex items-center gap-4 py-4 border-b border-primary-foreground/10">
                <span className="text-sm font-black text-secondary tracking-tighter">
                  0{index + 1}
                </span>
                <span className="text-base font-medium text-primary-foreground/90">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
