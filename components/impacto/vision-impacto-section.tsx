'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function VisionImpactoSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftColRef = useRef<HTMLDivElement>(null)
  const rightColRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add(
      {
        isDesktop: '(min-width: 1024px)',
        isMobile: '(max-width: 1023px)',
        reduceMotion: '(prefers-reduced-motion: reduce)'
      },
      (context) => {
        const { isDesktop, reduceMotion } = context.conditions!
        if (reduceMotion) return

        // 1. Text Reveal Timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: leftColRef.current,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse'
          }
        })

        tl.from('.vi-subtitle', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power3.out' })
          .from('.vi-title', { y: 30, autoAlpha: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')

        // 2. Right Side Paragraphs Reveal
        gsap.from('.vi-desc', {
          y: 30,
          autoAlpha: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rightColRef.current,
            start: 'top 85%',
            toggleActions: 'play reverse play reverse'
          }
        })

        // 3. Pinning effect (Desktop only)
        if (isDesktop && leftColRef.current && rightColRef.current) {
          ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top 15%',
            end: () => `bottom bottom`,
            pin: leftColRef.current,
            pinSpacing: false,
            invalidateOnRefresh: true,
          })
        }
      }
    )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start relative h-full">

          {/* Left: Header */}
          <div ref={leftColRef} className="space-y-4 lg:py-6">
            <span className="vi-subtitle text-xs font-bold tracking-widest uppercase text-secondary block">
              Visión de impacto
            </span>
            <h2 className="vi-title text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tighter leading-tight">
              Impacto social real, medible y sostenible
            </h2>
          </div>

          {/* Right: Body text */}
          <div ref={rightColRef} className="space-y-8 text-lg text-foreground/70 leading-relaxed font-medium lg:py-6">
            <p className="vi-desc">
              La Fundación JAWIRA busca generar un impacto social real, medible y sostenible en el Departamento
              de La Paz. Nuestro trabajo se orienta hacia poblaciones vulnerables, especialmente niñas, niños,
              adolescentes y mujeres que enfrentan brechas significativas en acceso a tecnología, educación y
              servicios de salud.
            </p>
            <p className="vi-desc">
              El impacto que buscamos se basa en tres pilares fundamentales: la mejora del acceso a tecnología
              productiva e innovadora, el fortalecimiento de la educación de calidad, y la ampliación de servicios
              de salud integral. Estos tres ejes, trabajados de forma articulada, crean sinergias que potencian
              el desarrollo de las comunidades.
            </p>
            <div className="vi-desc bg-muted/40 p-6 rounded-2xl border border-border/50">
              <p>
                No trabajamos en sectores aislados. Nuestro enfoque es{" "}
                <span className="font-bold text-foreground">sistémico e integrado</span>: la tecnología sirve
                para mejorar la educación y la salud; la educación fortalece el uso responsable de tecnología; y la
                salud es la base para que las personas puedan aprovechar las oportunidades de aprendizaje y
                desarrollo económico.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
