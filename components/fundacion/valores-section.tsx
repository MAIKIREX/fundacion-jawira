'use client'

import { useRef } from 'react'
import { Heart, Hand as Hands, Lightbulb, Users, Scale, Leaf, Shield, BookOpen, Smile, Anchor, Target } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const valores = [
  { icon: Heart, title: 'Esperanza', descripcion: 'Creemos en el potencial transformador de cada persona y comunidad.' },
  { icon: Hands, title: 'Solidaridad', descripcion: 'Trabajamos unidos en la construcción de un futuro compartido.' },
  { icon: Smile, title: 'Empatía', descripcion: 'Escuchamos y comprendemos las necesidades de las comunidades.' },
  { icon: Target, title: 'Compromiso', descripcion: 'Nos responsabilizamos de nuestras acciones y resultados.' },
  { icon: Scale, title: 'Integridad', descripcion: 'Actuamos con transparencia, honestidad y coherencia ética.' },
  { icon: Users, title: 'Servicio', descripcion: 'Ponemos al servicio de otros nuestros talentos y recursos.' },
  { icon: Anchor, title: 'Humildad', descripcion: 'Reconocemos que tenemos mucho por aprender.' },
  { icon: Lightbulb, title: 'Innovación', descripcion: 'Buscamos soluciones creativas a problemas complejos.' },
  { icon: Shield, title: 'Inclusión', descripcion: 'Valoramos la diversidad y garantizamos participación equitativa.' },
  { icon: Hands, title: 'Colaboración', descripcion: 'Reconocemos que los retos se resuelven en alianza.' },
  { icon: BookOpen, title: 'Aprendizaje Continuo', descripcion: 'Nos adaptamos y mejoramos constantemente.' },
  { icon: Leaf, title: 'Sostenibilidad', descripcion: 'Pensamos en el impacto a largo plazo en personas y planeta.' },
]

export default function ValoresSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // --- Header reveal ---
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.valores-header',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      headerTl
        .from('.valores-subtitle', {
          y: 20,
          autoAlpha: 0,
          duration: 0.5,
          ease: 'power3.out',
        })
        .from('.valores-title', {
          y: 30,
          autoAlpha: 0,
          duration: 0.6,
          ease: 'power3.out',
        }, '-=0.3')
        .from('.valores-desc', {
          y: 20,
          autoAlpha: 0,
          duration: 0.5,
          ease: 'power2.out',
        }, '-=0.2')

      // --- Batch reveal for value cards ---
      gsap.set('.valor-card', { autoAlpha: 0, y: 40 })

      ScrollTrigger.batch('.valor-card', {
        onEnter: (elements) => {
          gsap.to(elements, {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.08,
            overwrite: true,
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
            ease: 'power3.out',
            stagger: -0.08,
            overwrite: true,
          })
        },
        onLeaveBack: (elements) => {
          gsap.set(elements, { autoAlpha: 0, y: 40, overwrite: true })
        },
        start: 'top 88%',
      })

      // --- Icon hover micro-animation setup ---
      const cards = gsap.utils.toArray<HTMLElement>('.valor-card')
      cards.forEach((card) => {
        const icon = card.querySelector('.valor-icon')
        if (!icon) return

        card.addEventListener('mouseenter', () => {
          gsap.to(icon, {
            scale: 1.15,
            duration: 0.3,
            ease: 'back.out(1.7)',
            overwrite: true,
          })
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(icon, {
            scale: 1,
            duration: 0.25,
            ease: 'power2.out',
            overwrite: true,
          })
        })
      })
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="valores-header mb-16 max-w-2xl">
          <span className="valores-subtitle text-xs font-semibold tracking-widest uppercase text-secondary">
            Lo que nos define
          </span>
          <h2 className="valores-title text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight mt-3">
            Nuestros valores
          </h2>
          <p className="valores-desc text-base text-muted-foreground mt-4 leading-relaxed">
            Los principios fundamentales que guían cada decisión y acción en la Fundación JAWIRA.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 rounded-2xl overflow-hidden">
          {valores.map((valor) => {
            const IconComponent = valor.icon
            return (
              <div
                key={valor.title}
                className="valor-card bg-background p-6 md:p-7 space-y-3 group hover:bg-muted/30 transition-colors cursor-default"
              >
                <div className="valor-icon w-10 h-10 rounded-xl bg-primary/6 flex items-center justify-center group-hover:bg-primary/10 transition-colors" style={{ willChange: 'transform' }}>
                  <IconComponent className="w-5 h-5 text-primary/70" />
                </div>
                <h3 className="font-semibold text-base text-primary tracking-tight">
                  {valor.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {valor.descripcion}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
