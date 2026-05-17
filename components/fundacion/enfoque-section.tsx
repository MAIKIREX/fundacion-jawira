'use client'

import { useRef } from 'react'
import { Zap, Lightbulb, Users, TrendingUp, Heart } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const enfoques = [
  {
    icon: Zap,
    title: 'Articulación Integral',
    descripcion: 'Conectamos tecnología productiva, educación y salud para crear soluciones comprehensivas.',
  },
  {
    icon: Lightbulb,
    title: 'Investigación e Innovación',
    descripcion: 'Diseñamos proyectos basados en diagnósticos rigurosos y soluciones innovadoras.',
  },
  {
    icon: Users,
    title: 'Comunidades Prioritarias',
    descripcion: 'Priorizamos nuestro trabajo en poblaciones vulnerables y marginalizadas.',
  },
  {
    icon: TrendingUp,
    title: 'ODS Alineados',
    descripcion: 'Contribuimos a los Objetivos de Desarrollo Sostenible 3 (Salud), 4 (Educación) y 9 (Innovación).',
  },
  {
    icon: Users,
    title: 'Enfoque Interdisciplinario',
    descripcion: 'Trabajamos con profesionales de diversas disciplinas para abordar la complejidad de los desafíos sociales.',
  },
  {
    icon: Heart,
    title: 'Participación Comunitaria',
    descripcion: 'Las comunidades son protagonistas de las decisiones y procesos que las afectan.',
  },
]

export default function EnfoqueSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // --- Header reveal ---
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.enfoque-header',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        },
      })

      headerTl
        .from('.enfoque-subtitle', {
          y: 20,
          autoAlpha: 0,
          duration: 0.5,
          ease: 'power3.out',
        })
        .from('.enfoque-title', {
          y: 30,
          autoAlpha: 0,
          duration: 0.6,
          ease: 'power3.out',
        }, '-=0.3')
        .from('.enfoque-desc', {
          y: 20,
          autoAlpha: 0,
          duration: 0.5,
          ease: 'power2.out',
        }, '-=0.2')

      // --- Enfoque items staggered reveal ---
      gsap.from('.enfoque-item', {
        x: -30,
        autoAlpha: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.enfoque-grid',
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        },
      })

      // --- Icon entrance ---
      gsap.from('.enfoque-icon', {
        scale: 0,
        duration: 0.5,
        ease: 'back.out(1.7)',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.enfoque-grid',
          start: 'top 78%',
          toggleActions: 'play reverse play reverse',
        },
      })

      // --- Territorial callout slide-up ---
      gsap.from('.enfoque-callout', {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.enfoque-callout',
          start: 'top 88%',
          toggleActions: 'play reverse play reverse',
        },
      })
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="enfoque-header mb-16 max-w-2xl">
          <span className="enfoque-subtitle text-xs font-semibold tracking-widest uppercase text-secondary">
            Metodología
          </span>
          <h2 className="enfoque-title text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight mt-3">
            Nuestro enfoque
          </h2>
          <p className="enfoque-desc text-base text-muted-foreground mt-4 leading-relaxed">
            La metodología y principios que guían el diseño e implementación de nuestros proyectos.
          </p>
        </div>

        {/* Enfoque items */}
        <div className="enfoque-grid grid md:grid-cols-2 gap-x-16 gap-y-10">
          {enfoques.map((enfoque) => {
            const IconComponent = enfoque.icon
            return (
              <div key={enfoque.title} className="enfoque-item flex items-start gap-5 group">
                <div className="enfoque-icon w-10 h-10 rounded-xl bg-primary/6 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/10 transition-colors" style={{ willChange: 'transform' }}>
                  <IconComponent className="w-5 h-5 text-primary/70" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-primary tracking-tight">
                    {enfoque.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {enfoque.descripcion}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Territorial focus callout */}
        <div className="enfoque-callout mt-16 pt-10 border-t border-border">
          <div className="grid lg:grid-cols-[auto_1fr] gap-6 items-start">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent whitespace-nowrap pt-1">
              Enfoque territorial
            </span>
            <div className="space-y-4 text-base text-foreground/70 leading-relaxed">
              <p>
                La Fundación JAWIRA tiene su principal foco de acción en el{" "}
                <span className="font-medium text-foreground">Departamento de La Paz</span>, particularmente en
                sus zonas urbanas, periurbanas y rurales. Con sede en la ciudad de La Paz, en la Zona Gran Poder,
                somos una institución con raíces territoriales profundas y vocación de expansión nacional.
              </p>
              <p>
                Trabajamos en alianza con actores locales, gobiernos municipales, organizaciones comunitarias e
                instituciones educativas y de salud para generar impacto sostenible en la región.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
