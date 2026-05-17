'use client'

import { useState, useRef } from 'react'
import { Zap, BookOpen, Heart } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const tabs = [
  {
    id: 'tecnologia',
    label: 'Tecnología',
    icon: Zap,
    title: 'Servicios de Tecnología Productiva',
    servicios: [
      'Laboratorios de innovación tecnológica',
      'Desarrollo de herramientas para minería, agropecuaria e industria',
      'Plataformas y soluciones digitales para educación y salud',
      'Asesoría y acompañamiento técnico en implementación de tecnología',
      'Diseño e iteración de prototipos adaptados al contexto local'
    ],
  },
  {
    id: 'educacion',
    label: 'Educación',
    icon: BookOpen,
    title: 'Servicios de Educación',
    servicios: [
      'Alfabetización digital básica y avanzada',
      'Programas de formación docente en TIC',
      'Diplomados, cursos y talleres sobre competencias digitales',
      'Acompañamiento a unidades educativas y organizaciones sociales',
      'Contenidos educativos abiertos y accesibles'
    ],
  },
  {
    id: 'salud',
    label: 'Salud',
    icon: Heart,
    title: 'Servicios de Salud',
    servicios: [
      'Consultas presenciales y telemedicina',
      'Programas de prevención (nutrición, salud mental, salud sexual y reproductiva)',
      'Capacitación de promotores/as comunitarios de salud',
      'Uso de plataformas digitales para seguimiento y orientación',
      'Servicios de orientación en salud preventiva'
    ],
  },
]

export default function ServiciosSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentWrapRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState('tecnologia')
  const [isAnimating, setIsAnimating] = useState(false)
  
  const activeData = tabs.find(t => t.id === activeTab)!

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // 1. Header Reveal
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.servicios-header',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse'
        }
      })

      headerTl.from('.servicios-subtitle', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power3.out' })
              .from('.servicios-title', { y: 30, autoAlpha: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
              .from('.servicios-desc', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power2.out' }, '-=0.4')

      // 2. Tab buttons reveal
      gsap.from('.tab-btn', {
        x: -20,
        autoAlpha: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.servicios-header',
          start: 'top 70%',
          toggleActions: 'play reverse play reverse'
        }
      })

      // 3. Initial Content Reveal
      gsap.from(contentWrapRef.current, {
        y: 20,
        autoAlpha: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.servicios-header',
          start: 'top 70%',
          toggleActions: 'play reverse play reverse'
        }
      })
    })
  }, { scope: sectionRef })

  const handleTabChange = (newTabId: string) => {
    if (newTabId === activeTab || isAnimating) return
    setIsAnimating(true)

    // Fade out current
    gsap.to(contentWrapRef.current, {
      autoAlpha: 0,
      y: -15,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        setActiveTab(newTabId)
        
        // Fade in new
        gsap.fromTo(contentWrapRef.current, 
          { autoAlpha: 0, y: 15 }, 
          { 
            autoAlpha: 1, 
            y: 0, 
            duration: 0.4, 
            ease: 'power3.out',
            onComplete: () => setIsAnimating(false)
          }
        )
      }
    })
  }

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-muted border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="servicios-header mb-20 max-w-2xl">
          <span className="servicios-subtitle text-xs font-bold tracking-widest uppercase text-secondary block mb-4">
            Oferta de servicios
          </span>
          <h2 className="servicios-title text-4xl md:text-5xl font-bold text-primary tracking-tighter leading-tight">
            Servicios del Centro Integral
          </h2>
          <p className="servicios-desc text-lg text-foreground/70 mt-6 leading-relaxed font-medium">
            Acceso a servicios especializados en cada una de nuestras áreas de trabajo. Nuestro equipo técnico garantiza atención de calidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-20">

          {/* Left: Tab Switcher */}
          <div className="flex lg:flex-col gap-3">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  disabled={isAnimating}
                  className={`tab-btn flex items-center gap-4 px-6 py-5 rounded-2xl text-base font-bold text-left transition-all w-full border ${
                    isActive
                      ? 'bg-primary text-primary-foreground border-primary shadow-lg scale-[1.02]'
                      : 'bg-background text-foreground/70 hover:bg-muted/60 hover:text-foreground border-border/60 hover:border-primary/30'
                  }`}
                  style={{ willChange: 'transform' }}
                >
                  <Icon className={`w-5 h-5 flex-shrink-0 transition-colors ${isActive ? 'text-primary-foreground' : 'text-primary/70'}`} />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Right: Content Wrapper */}
          <div ref={contentWrapRef} className="bg-background rounded-3xl p-8 md:p-12 border border-border/60 shadow-xl" style={{ willChange: 'opacity, transform' }}>
            <h3 className="text-2xl font-bold text-primary tracking-tight mb-10 pb-6 border-b border-border/50">
              {activeData.title}
            </h3>

            <div className="space-y-0">
              {activeData.servicios.map((servicio, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-6 py-6 group ${
                    i !== 0 ? 'border-t border-border/40' : ''
                  }`}
                >
                  <span className="text-xs font-black text-secondary tracking-widest uppercase mt-1 w-8 flex-shrink-0">
                    0{i + 1}
                  </span>
                  <span className="text-lg text-foreground/80 leading-relaxed font-medium group-hover:text-primary transition-colors">
                    {servicio}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
