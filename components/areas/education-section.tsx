'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { BookOpen } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP)

const educationLines = [
  {
    title: 'Capacitación docente',
    description: 'Programas de formación continua para maestros en herramientas digitales, pedagogía innovadora y educación inclusiva.'
  },
  {
    title: 'Alfabetización digital',
    description: 'Formación para estudiantes y adultos en competencias digitales, pensamiento crítico y resolución de problemas.'
  },
  {
    title: 'Contenidos educativos',
    description: 'Desarrollo de materiales didácticos digitales, cursos en línea y recursos accesibles de código abierto.'
  },
  {
    title: 'Educación inclusiva',
    description: 'Programas especializados para poblaciones rurales, mujeres y grupos históricamente excluidos.'
  }
]

export default function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // 1. Header Reveal
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.edu-header',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse'
        }
      })

      headerTl.from('.edu-badge', { scale: 0.8, autoAlpha: 0, duration: 0.5, ease: 'back.out(1.5)' })
              .from('.edu-title', { y: 30, autoAlpha: 0, duration: 0.7, ease: 'power3.out' }, '-=0.3')
              .from('.edu-desc', { y: 20, autoAlpha: 0, duration: 0.5, stagger: 0.15, ease: 'power2.out' }, '-=0.4')

      // 2. Immersive Image
      gsap.from('.edu-image', {
        scale: 1.15,
        filter: 'brightness(0.5)',
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.edu-image-container',
          start: 'top 80%',
          toggleActions: 'play reverse play reverse'
        }
      })

      // 3. DrawSVG Timeline Line
      gsap.fromTo('.edu-timeline-line',
        { drawSVG: '0%' },
        {
          drawSVG: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: '.edu-timeline-container',
            start: 'top 50%',
            end: 'bottom 60%',
            scrub: 1
          }
        }
      )

      // 4. Timeline Nodes Reveal
      const nodes = gsap.utils.toArray<HTMLElement>('.edu-node')
      nodes.forEach((node) => {
        gsap.from(node, {
          autoAlpha: 0,
          x: 30,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: node,
            start: 'top 75%',
            toggleActions: 'play reverse play reverse'
          }
        })

        const dot = node.querySelector('.edu-dot')
        gsap.from(dot, {
          scale: 0,
          boxShadow: '0 0 0px rgba(0,0,0,0)',
          duration: 0.5,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: node,
            start: 'top 65%',
            toggleActions: 'play reverse play reverse'
          }
        })
      })
    })
  }, { scope: sectionRef })

  return (
    <section id="educacion" ref={sectionRef} className="py-24 md:py-32 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-start">
          
          {/* Left: Text & Image Content */}
          <div className="space-y-12 lg:sticky lg:top-32">
            <div className="edu-header">
              <div className="edu-badge flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shadow-lg">
                  <BookOpen className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
                  Eje de Acción 02
                </span>
              </div>
              
              <h2 className="edu-title text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tighter leading-[1.05]">
                Educación integral y formativa
              </h2>

              <div className="space-y-5 text-lg text-foreground/70 leading-relaxed font-medium mt-8">
                <p className="edu-desc text-lg font-bold text-foreground/90">
                  Fortalecemos capacidades educativas y digitales para docentes, estudiantes y comunidades.
                </p>
                <p className="edu-desc text-base text-muted-foreground">
                  Este eje trabaja en formación docente continua, desarrollo de competencias digitales y la integración estratégica de tecnología en el aula escolar.
                </p>
              </div>
            </div>

            <div className="edu-image-container relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-border/60">
              <Image 
                src="/education-students-learning-classroom-workshop.png"
                alt="Educación Integral"
                fill
                className="edu-image object-cover"
              />
            </div>
          </div>

          {/* Right: Vertical Process List (DrawSVG Timeline) */}
          <div className="edu-timeline-container relative pl-8 md:pl-12 lg:pt-20">
            {/* SVG Vertical Line */}
            <svg className="absolute left-0 top-0 w-2 h-full" preserveAspectRatio="none">
              <path 
                className="edu-timeline-line text-secondary/50"
                d="M 4 0 L 4 10000" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none" 
              />
            </svg>
            
            <div className="space-y-16">
              {educationLines.map((line, index) => (
                <div key={index} className="edu-node relative">
                  {/* Timeline Glowing Dot */}
                  <div className="edu-dot absolute -left-[37px] md:-left-[53px] top-1.5 w-4 h-4 rounded-full bg-secondary border-4 border-background shadow-[0_0_15px_rgba(var(--secondary),0.5)]" />
                  
                  <div className="space-y-3">
                    <span className="text-xs font-bold tracking-widest text-secondary uppercase bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                      Fase 0{index + 1}
                    </span>
                    <h3 className="text-2xl font-bold text-primary tracking-tight mt-3">
                      {line.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {line.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
