'use client'

import { useRef } from 'react'
import { JawiraButton } from '@/components/ui/jawira-button'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function ArticulacionSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse'
        }
      })

      tl.from('.art-subtitle', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power3.out' })
        .from('.art-title', { y: 30, autoAlpha: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
        .from('.art-desc', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power2.out' }, '-=0.4')
        .from('.art-btn', { y: 20, autoAlpha: 0, duration: 0.5, stagger: 0.15, ease: 'back.out(1.5)' }, '-=0.2')
    })
  }, { scope: sectionRef })

  return (
    <section 
      ref={sectionRef} 
      data-header-theme="light"
      className="py-24 sm:py-32 md:py-36 bg-[#F5F2EB] dark:bg-[#0D1524] border-t border-[#1B361F]/15 dark:border-white/15 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          
          {/* Subtítulo / Eyebrow */}
          <span className="art-subtitle text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#50AA1E] dark:text-[#68CE2B] block">
            Articulación Estratégica
          </span>

          {/* Título Principal */}
          <h2 className="art-title text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-[#1B361F] dark:text-white tracking-[-0.03em] leading-[1.08]">
            Parte del modelo integral de JAWIRA
          </h2>

          {/* Descripción */}
          <p className="art-desc text-base sm:text-lg md:text-xl text-[#2D4A32]/80 dark:text-slate-300 leading-relaxed font-sans font-normal pt-2">
            El Centro Integral JAWIRA es el{" "}
            <span className="font-bold text-[#1B361F] dark:text-white">corazón operativo</span> de la Fundación JAWIRA. Aquí
            convergen y se articulan nuestras tres{" "}
            <span className="font-bold text-[#1B361F] dark:text-white">áreas estratégicas</span>: tecnología productiva,
            educación integral y salud preventiva, generando sinergias que multiplican el impacto en comunidades vulnerables del Departamento de La Paz.
          </p>

          {/* Botones de Acción Signature JawiraButton */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <div className="art-btn">
              <JawiraButton
                href="/areas-de-trabajo"
                variant="secondary"
                size="lg"
                bullets
                className="w-full sm:w-auto"
              >
                VER ÁREAS DE TRABAJO
              </JawiraButton>
            </div>

            <div className="art-btn">
              <JawiraButton
                href="/fundacion"
                variant="outline-dark"
                size="lg"
                bullets
                className="w-full sm:w-auto"
              >
                CONOCER LA FUNDACIÓN
              </JawiraButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

