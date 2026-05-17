'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)

const healthLines = [
  {
    title: 'Telemedicina digital',
    description: 'Plataformas para consultas a distancia y acceso a servicios desde zonas remotas.'
  },
  {
    title: 'Prevención y bienestar',
    description: 'Iniciativas en nutrición, salud mental, y estilos de vida saludables.'
  },
  {
    title: 'Capacitación comunitaria',
    description: 'Formación continua en atención primaria y primeros auxilios para promotores.'
  },
  {
    title: 'Análisis de datos',
    description: 'Herramientas para recolección que mejoran la toma de decisiones en salud pública.'
  }
]

export default function HealthSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // 1. Header Reveal
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.health-header',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse'
        }
      })

      headerTl.from('.health-badge', { scale: 0.8, autoAlpha: 0, duration: 0.5, ease: 'back.out(1.5)' })
              .from('.health-title', { y: 30, autoAlpha: 0, duration: 0.7, ease: 'power3.out' }, '-=0.3')
              .from('.health-desc', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power2.out' }, '-=0.4')

      // 2. Cinematic Image Entrance
      gsap.fromTo('.health-image',
        { scale: 1.2, filter: 'brightness(0)' },
        {
          scale: 1,
          filter: 'brightness(1)',
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.health-image-container',
            start: 'top 85%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )

      // 3. Huge Numbers Mask Reveal
      const numbers = gsap.utils.toArray<HTMLElement>('.health-number-wrap')
      numbers.forEach((wrap) => {
        const num = wrap.querySelector('.health-number')
        gsap.fromTo(num, 
          { y: '100%' },
          {
            y: '0%',
            duration: 0.8,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: wrap,
              start: 'top 85%',
              toggleActions: 'play reverse play reverse'
            }
          }
        )
      })

      // 4. Texts under numbers
      gsap.from('.health-card-content', {
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.health-grid',
          start: 'top 80%',
          toggleActions: 'play reverse play reverse'
        }
      })
    })
  }, { scope: sectionRef })

  return (
    <section id="salud" ref={sectionRef} className="py-24 md:py-32 bg-muted border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="health-header mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-2xl">
            <div className="health-badge flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                Eje de Acción 03
              </span>
            </div>
            
            <h2 className="health-title text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tighter leading-[1.05]">
              Prevención de la <br className="hidden sm:block" />salud comunitaria
            </h2>
          </div>

          <div className="health-desc max-w-md text-base text-foreground/70 leading-relaxed font-medium md:pb-2">
            <p>
              Promovemos salud preventiva, telemedicina y soluciones digitales para acercar la atención. Implementamos sistemas de gestión que optimizan recursos, capacitando promotores locales bajo un enfoque integral.
            </p>
          </div>
        </div>

        {/* Cinematic Image */}
        <div className="health-image-container relative w-full h-[40vh] md:h-[50vh] mb-20 rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-black">
          <Image 
            src="/healthcare-wellness-doctors-prevention-medical.png"
            alt="Salud Preventiva"
            fill
            className="health-image object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Large Number Editorial List */}
        <div className="health-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
          {healthLines.map((line, index) => (
            <div key={index} className="group">
              {/* Masked Huge Number */}
              <div className="health-number-wrap overflow-hidden mb-6 pb-2 border-b-2 border-border group-hover:border-accent transition-colors">
                <div className="health-number text-7xl md:text-8xl font-black text-border group-hover:text-accent transition-colors tracking-tighter leading-none" style={{ willChange: 'transform' }}>
                  0{index + 1}
                </div>
              </div>
              
              <div className="health-card-content space-y-3">
                <h3 className="text-xl font-bold text-primary tracking-tight group-hover:text-accent transition-colors">
                  {line.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {line.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
