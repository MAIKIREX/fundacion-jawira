'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { Building2, Home, Trees } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const zonas = [
  {
    titulo: 'Zonas urbanas',
    poblacion: '~2.100.000 personas',
    icono: Building2,
  },
  {
    titulo: 'Zonas periurbanas',
    poblacion: '~400.000 personas',
    icono: Home,
  },
  {
    titulo: 'Zonas rurales',
    poblacion: '~375.000 personas',
    icono: Trees,
  },
]

export default function CoberturaTerritorialSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // 1. Header Timeline
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.ct-header',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse'
        }
      })

      headerTl.from('.ct-subtitle', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power3.out' })
              .from('.ct-title', { y: 30, autoAlpha: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
              .from('.ct-desc', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power2.out' }, '-=0.4')

      // 2. Left side text paragraphs
      gsap.from('.ct-text', {
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.ct-content-left',
          start: 'top 80%',
          toggleActions: 'play reverse play reverse'
        }
      })

      // 3. Batch reveal for zones list
      gsap.set('.ct-zone', { autoAlpha: 0, x: -20 })
      ScrollTrigger.batch('.ct-zone', {
        onEnter: (elements) => gsap.to(elements, { autoAlpha: 1, x: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', overwrite: true }),
        onLeave: (elements) => gsap.set(elements, { autoAlpha: 0, x: -20, overwrite: true }),
        onEnterBack: (elements) => gsap.to(elements, { autoAlpha: 1, x: 0, duration: 0.6, stagger: -0.1, ease: 'power3.out', overwrite: true }),
        onLeaveBack: (elements) => gsap.set(elements, { autoAlpha: 0, x: -20, overwrite: true }),
        start: 'top 85%'
      })

      // Total numbers reveal
      gsap.from('.ct-total', {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: '.ct-total-container',
          start: 'top 90%',
          toggleActions: 'play reverse play reverse'
        }
      })

      // 4. Image Map Reveal and Parallax
      gsap.fromTo('.ct-image-wrapper',
        { clipPath: 'inset(100% 0% 0% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.2,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: '.ct-image-container',
            start: 'top 75%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )

      gsap.fromTo('.ct-image',
        { y: -30, scale: 1.1 },
        {
          y: 30,
          scale: 1.1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.ct-image-container',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        }
      )

      // Hover Micro-interactions
      const zones = gsap.utils.toArray<HTMLElement>('.ct-zone')
      zones.forEach(zone => {
        const icon = zone.querySelector('.ct-icon')
        if (!icon) return
        zone.addEventListener('mouseenter', () => gsap.to(icon, { scale: 1.15, rotation: 5, duration: 0.3, ease: 'back.out(2)' }))
        zone.addEventListener('mouseleave', () => gsap.to(icon, { scale: 1, rotation: 0, duration: 0.4, ease: 'power2.out' }))
      })
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-muted border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="ct-header mb-16 max-w-2xl space-y-4">
          <span className="ct-subtitle text-xs font-bold tracking-widest uppercase text-secondary block">
            Alcance geográfico
          </span>
          <h2 className="ct-title text-4xl md:text-5xl font-bold text-primary tracking-tighter leading-tight">
            Cobertura territorial
          </h2>
          <p className="ct-desc text-lg text-foreground/70 mt-6 leading-relaxed font-medium">
            La Fundación JAWIRA tiene su sede inicial en la ciudad de La Paz y trabaja con comunidades de zonas urbanas, periurbanas y rurales del Departamento.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">

          {/* Left: Text + Zones */}
          <div className="ct-content-left space-y-12">
            <div className="space-y-4 text-lg text-foreground/70 leading-relaxed font-medium">
              <p className="ct-text">
                Nuestra estrategia de cobertura comienza con un enfoque piloto en la ciudad de La Paz,
                evaluando nuestros modelos de intervención y ajustándolos según la retroalimentación de
                las comunidades.
              </p>
              <p className="ct-text">
                A partir de esta base sólida, planificamos expandir gradualmente a otros municipios del
                Departamento, llevando nuestro modelo integrado de tecnología, educación y salud a más
                comunidades vulnerables.
              </p>
            </div>

            {/* Zones list */}
            <div className="space-y-0">
              {zonas.map((zona, i) => {
                const Icon = zona.icono
                return (
                  <div
                    key={i}
                    className={`ct-zone flex items-center justify-between py-6 group ${
                      i !== 0 ? 'border-t border-border/60' : ''
                    }`}
                  >
                    <div className="flex items-center gap-5">
                      <div className="ct-icon w-12 h-12 rounded-xl bg-primary/6 border border-border/50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors shadow-sm" style={{ willChange: 'transform' }}>
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-lg font-bold text-primary tracking-tight group-hover:text-secondary transition-colors">
                        {zona.titulo}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-foreground/60 tracking-wider">
                      {zona.poblacion}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Total */}
            <div className="ct-total-container pt-8 border-t border-border/60">
              <div className="ct-total flex flex-wrap items-baseline gap-4">
                <span className="text-5xl md:text-6xl font-bold text-primary tracking-tighter">~2,8M</span>
                <span className="text-base font-bold text-foreground/70 uppercase tracking-widest">
                  personas en el Departamento de La Paz
                </span>
              </div>
            </div>
          </div>

          {/* Right: Map image */}
          <div className="ct-image-container relative rounded-3xl overflow-hidden h-[500px] lg:h-[600px] shadow-2xl bg-black">
            <div className="ct-image-wrapper absolute inset-0" style={{ willChange: 'clip-path' }}>
              <Image
                src="/urban-rural-landscape-bolivia-coverage-areas-map.png"
                alt="Mapa de cobertura territorial — Departamento de La Paz"
                fill
                className="ct-image object-cover opacity-80"
                style={{ willChange: 'transform' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <p className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
                  Departamento de La Paz, Bolivia
                </p>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  <p className="text-xs text-white/80 font-bold uppercase tracking-widest">
                    Zonas urbanas · Periurbanas · Rurales
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
