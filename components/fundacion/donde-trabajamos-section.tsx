'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { MapPin, Navigation, Globe } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const locations = [
  {
    icon: MapPin,
    title: 'Foco principal: La Paz',
    description: 'El Departamento de La Paz es nuestro territorio prioritario de acción, con énfasis en zonas urbanas, periurbanas y rurales donde existe mayor vulnerabilidad.',
    accent: 'border-primary/30',
  },
  {
    icon: Navigation,
    title: 'Sede institucional',
    description: 'Ubicada en la ciudad de La Paz, Zona Gran Poder. Desde aquí coordinamos nuestros programas y nos conectamos con actores locales e institucionales.',
    accent: 'border-secondary/30',
  },
  {
    icon: Globe,
    title: 'Vocación de expansión',
    description: 'Con aprendizajes sólidos en La Paz, aspiramos a expandir nuestro modelo a otras regiones del país, replicando nuestro enfoque integral de desarrollo.',
    accent: 'border-accent/30',
  },
]

export default function DondeTrabajamoSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // --- Header reveal ---
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.donde-header',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        },
      })

      headerTl
        .from('.donde-subtitle', {
          y: 20,
          autoAlpha: 0,
          duration: 0.5,
          ease: 'power3.out',
        })
        .from('.donde-title', {
          y: 30,
          autoAlpha: 0,
          duration: 0.6,
          ease: 'power3.out',
        }, '-=0.3')
        .from('.donde-desc', {
          y: 20,
          autoAlpha: 0,
          duration: 0.5,
          ease: 'power2.out',
        }, '-=0.2')

      // --- Location items stagger reveal ---
      gsap.from('.location-item', {
        x: -40,
        autoAlpha: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.locations-list',
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        },
      })

      // --- Map image reveal with parallax ---
      gsap.from('.map-image-container', {
        autoAlpha: 0,
        scale: 0.95,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.map-image-container',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        },
      })

      // --- Parallax effect on map image ---
      gsap.to('.map-image-inner', {
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: '.map-image-container',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="donde-header mb-16 max-w-2xl">
          <span className="donde-subtitle text-xs font-semibold tracking-widest uppercase text-secondary">
            Presencia territorial
          </span>
          <h2 className="donde-title text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight mt-3">
            Dónde trabajamos
          </h2>
          <p className="donde-desc text-base text-muted-foreground mt-4 leading-relaxed">
            Una institución con presencia territorial comprometida con La Paz.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
          {/* Left: Location items */}
          <div className="locations-list space-y-6">
            {locations.map((loc) => {
              const Icon = loc.icon
              return (
                <div
                  key={loc.title}
                  className={`location-item flex items-start gap-5 border-l-2 ${loc.accent} pl-6 py-3`}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-primary/70" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-primary tracking-tight">
                      {loc.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {loc.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right: Map image with parallax */}
          <div className="map-image-container relative rounded-2xl overflow-hidden h-[380px] lg:h-[420px]">
            <div className="map-image-inner absolute inset-0" style={{ willChange: 'transform', top: '-15px', bottom: '-15px' }}>
              <Image
                src="/urban-rural-landscape-bolivia-coverage-areas-map.png"
                alt="Mapa de cobertura territorial de Fundación JAWIRA"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="text-sm text-white/80 font-medium">
                Departamento de La Paz, Bolivia
              </p>
              <p className="text-xs text-white/50 mt-1">
                Zonas urbanas, periurbanas y rurales
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
