'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP)

const pasos = [
  {
    numero: '01',
    titulo: 'Diagnóstico Participativo',
    descripcion: 'Identificación conjunta de necesidades con comunidades e instituciones locales.',
  },
  {
    numero: '02',
    titulo: 'Diseño de Proyectos Piloto',
    descripcion: 'Creación de iniciativas adaptadas al contexto local y realidad comunitaria.',
  },
  {
    numero: '03',
    titulo: 'Adecuación de Infraestructura',
    descripcion: 'Preparación de espacios físicos y digitales para la implementación.',
  },
  {
    numero: '04',
    titulo: 'Capacitación Continua',
    descripcion: 'Formación de equipos técnicos y fortalecimiento de capacidades comunitarias.',
  },
  {
    numero: '05',
    titulo: 'Plataformas Tecnológicas',
    descripcion: 'Desarrollo e implementación de soluciones digitales de apoyo.',
  },
  {
    numero: '06',
    titulo: 'Participación Comunitaria',
    descripcion: 'Sensibilización y movilización activa de beneficiarios en el proceso.',
  },
  {
    numero: '07',
    titulo: 'Monitoreo y Evaluación',
    descripcion: 'Seguimiento permanente de resultados e indicadores de impacto.',
  },
]

export default function MethodologySection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // 1. Header
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.meth-header',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse'
        }
      })
      tl.from('.meth-subtitle', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power3.out' })
        .from('.meth-title', { y: 30, autoAlpha: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
        .from('.meth-desc', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power2.out' }, '-=0.4')

      // 2. DrawSVG Timeline Line
      gsap.fromTo('.meth-line-path',
        { drawSVG: '0%' },
        {
          drawSVG: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: '.meth-timeline-container',
            start: 'top 50%',
            end: 'bottom 60%',
            scrub: 1
          }
        }
      )

      // 3. Simple Batch Reveal for Nodes
      gsap.set('.meth-node', { autoAlpha: 0, y: 30 })
      ScrollTrigger.batch('.meth-node', {
        onEnter: (elements) => {
          gsap.to(elements, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out', overwrite: true })
        },
        onLeaveBack: (elements) => {
          gsap.set(elements, { autoAlpha: 0, y: 30, overwrite: true })
        },
        start: 'top 85%'
      })

      // Footer Note
      gsap.from('.meth-footer', {
        y: 20,
        autoAlpha: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.meth-footer',
          start: 'top 90%',
          toggleActions: 'play reverse play reverse'
        }
      })
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="meth-header mb-20 max-w-2xl">
          <span className="meth-subtitle text-xs font-bold tracking-widest uppercase text-secondary block mb-4">
            Proceso de implementación
          </span>
          <h2 className="meth-title text-4xl md:text-5xl font-bold text-primary tracking-tighter leading-tight">
            ¿Cómo funciona el Centro Integral?
          </h2>
          <p className="meth-desc text-lg text-foreground/70 mt-6 leading-relaxed font-medium">
            Nuestra metodología se basa en siete pasos clave que aseguran implementación inclusiva y participativa.
          </p>
        </div>

        {/* Timeline — vertical left-aligned */}
        <div className="meth-timeline-container relative max-w-3xl pl-10 md:pl-16">
          {/* Vertical SVG Line */}
          <svg className="absolute left-0 top-2 bottom-8 w-2 h-[calc(100%-2rem)] overflow-visible">
            <path 
              className="meth-line-path text-secondary"
              d="M 4 0 L 4 10000" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none" 
            />
          </svg>

          <div className="space-y-16">
            {pasos.map((paso, index) => (
              <div key={index} className="meth-node relative">
                {/* Timeline Dot */}
                <div className="meth-dot absolute -left-[43px] md:-left-[67px] top-1.5 w-4 h-4 rounded-full border-2 ring-4 ring-background bg-secondary border-secondary shadow-[0_0_10px_rgba(var(--secondary),0.5)]" />

                {/* Content */}
                <div className="meth-content">
                  <span className="text-xs font-bold tracking-widest text-secondary uppercase bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20 inline-block mb-4">
                    PASO {paso.numero}
                  </span>
                  <h3 className="text-2xl font-bold text-primary tracking-tight mb-3">
                    {paso.titulo}
                  </h3>
                  <p className="text-base text-foreground/70 leading-relaxed max-w-md font-medium">
                    {paso.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="meth-footer mt-24 pt-10 border-t border-border max-w-3xl">
          <p className="text-lg text-foreground/70 leading-relaxed font-medium">
            <span className="font-bold text-primary">Metodología integral y participativa</span> que garantiza
            la calidad, sostenibilidad y adaptación cultural de cada proyecto implementado en el Centro Integral JAWIRA.
          </p>
        </div>

      </div>
    </section>
  )
}
