'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { Cpu, Leaf, Smartphone, Lightbulb } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const technologyLines = [
  {
    title: 'Innovación productiva',
    description: 'Tecnologías limpias para sectores productivos, monitoreo ambiental y trazabilidad.',
    icon: Leaf
  },
  {
    title: 'Soluciones digitales',
    description: 'Plataformas de gestión, aplicaciones móviles y herramientas de telemedicina.',
    icon: Smartphone
  },
  {
    title: 'Capacitación TIC',
    description: 'Formación en IA, IoT, ciberseguridad y alfabetización digital.',
    icon: Cpu
  },
  {
    title: 'Laboratorios Tech',
    description: 'Espacios de co-creación, prototipado y experimentación comunitaria.',
    icon: Lightbulb
  }
]

export default function TechnologySection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // 1. Header Reveal
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.tech-header',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      })

      headerTl.from('.tech-badge', { scale: 0.8, autoAlpha: 0, duration: 0.5, ease: 'back.out(1.5)' })
              .from('.tech-title', { y: 30, autoAlpha: 0, duration: 0.7, ease: 'power3.out' }, '-=0.3')
              .from('.tech-desc', { y: 20, autoAlpha: 0, duration: 0.5, stagger: 0.15, ease: 'power2.out' }, '-=0.4')

      // 2. Immersive Image Reveal with Parallax
      gsap.fromTo('.tech-image-wrapper', 
        { clipPath: 'inset(100% 0% 0% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.2,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: '.tech-image-container',
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      )

      gsap.to('.tech-image', {
        y: 40,
        scale: 1.1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.tech-image-container',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })

      // 3. Bento Grid Batch Reveal
      gsap.set('.tech-bento-card', { y: 40, autoAlpha: 0 })
      ScrollTrigger.batch('.tech-bento-card', {
        onEnter: (elements) => {
          gsap.to(elements, {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            overwrite: true
          })
        },
        onLeave: (elements) => {
          gsap.set(elements, { autoAlpha: 0, y: 40, overwrite: true })
        },
        onEnterBack: (elements) => {
          gsap.to(elements, {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            stagger: -0.1,
            ease: 'power3.out',
            overwrite: true
          })
        },
        onLeaveBack: (elements) => {
          gsap.set(elements, { autoAlpha: 0, y: 40, overwrite: true })
        },
        start: 'top 85%',
      })

      // Icon hover micro-animations
      gsap.utils.toArray<HTMLElement>('.tech-bento-card').forEach(card => {
        const icon = card.querySelector('.tech-icon')
        if (!icon) return
        card.addEventListener('mouseenter', () => gsap.to(icon, { scale: 1.15, duration: 0.3, ease: 'back.out(1.5)' }))
        card.addEventListener('mouseleave', () => gsap.to(icon, { scale: 1, duration: 0.3, ease: 'power2.out' }))
      })
    })
  }, { scope: sectionRef })

  return (
    <section id="tecnologia" ref={sectionRef} className="py-24 md:py-32 bg-muted border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="tech-header mb-16 md:mb-20 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-end">
          <div>
            <div className="tech-badge flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                <Cpu className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                Eje de Acción 01
              </span>
            </div>
            
            <h2 className="tech-title text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tighter leading-[1.05]">
              Tecnología productiva <br className="hidden sm:block" />y digital
            </h2>
          </div>

          <div className="space-y-5 text-lg text-foreground/70 leading-relaxed font-medium">
            <p className="tech-desc">
              Soluciones tecnológicas para impulsar la producción, proteger el medio ambiente y cerrar la brecha digital. Este eje se enfoca en desarrollar e implementar tecnologías innovadoras para sectores productivos.
            </p>
            <p className="tech-desc text-base text-muted-foreground">
              Buscamos reducir el impacto ambiental de las actividades productivas y promover modelos de producción sostenible, generando ecosistemas de innovación.
            </p>
          </div>
        </div>

        {/* Immersive Image */}
        <div className="tech-image-container w-full h-[40vh] md:h-[50vh] relative mb-16 overflow-hidden rounded-3xl border border-border/50 shadow-2xl">
          <div className="tech-image-wrapper absolute inset-0" style={{ willChange: 'clip-path' }}>
            <Image 
              src="/technology-innovation-computers-lab-digitalv.png"
              alt="Innovación Tecnológica"
              fill
              className="tech-image object-cover opacity-90"
              style={{ willChange: 'transform' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {technologyLines.map((line, index) => {
            const Icon = line.icon
            return (
              <div key={index} className="tech-bento-card bg-background p-8 rounded-2xl border border-border/60 shadow-sm hover:shadow-md transition-shadow">
                <div className="tech-icon w-12 h-12 rounded-xl bg-primary/6 flex items-center justify-center mb-6" style={{ willChange: 'transform' }}>
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary tracking-tight mb-3">
                  {line.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {line.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
