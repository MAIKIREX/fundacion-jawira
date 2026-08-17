'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { JawiraButton } from '@/components/ui/jawira-button'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export default function SignificadoJawiraSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Parallax sutil de la imagen al hacer scroll
      gsap.to(imageRef.current, {
        scale: 1.06,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      })

      // Revelación elegante del encabezado superior
      gsap.from('.significado-headline', {
        y: 50,
        autoAlpha: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 75%',
        },
      })

      // Revelación de los bloques de texto inferiores
      gsap.from('.significado-details', {
        y: 40,
        autoAlpha: 0,
        duration: 1,
        delay: 0.15,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 75%',
        },
      })
    })
  }, { scope: sectionRef })

  return (
    <section
      id="significado-jawira"
      ref={sectionRef}
      data-header-theme="light"
      className="relative w-full min-h-[100dvh] bg-[#F5F2EB] dark:bg-[#0D1524] overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[100dvh]">
        
        {/* =========================================================
            COLUMNA DE CONTENIDO EDITORIAL (IZQUIERDA)
            ========================================================= */}
        <div 
          ref={contentRef}
          className="flex flex-col justify-between p-8 sm:p-14 md:p-18 lg:p-20 xl:p-24 bg-[#F5F2EB] dark:bg-[#0D1524] text-[#1B361F] dark:text-[#F8FAFC] min-h-[500px] lg:min-h-[100dvh] order-2 lg:order-1"
        >
          {/* 1. Título Superior Masivo */}
          <div className="max-w-xl space-y-4">
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#50AA1E] dark:text-[#68CE2B] block">
              NUESTRO NOMBRE · FILOSOFÍA INSTITUCIONAL
            </span>
            <h2 className="significado-headline text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-sans font-medium leading-[1.08] tracking-[-0.03em] text-[#1B361F] dark:text-white">
              ¿Qué significa JAWIRA?
            </h2>
          </div>

          {/* 2. Textos Inferiores Estructurados & Botón Minimalista */}
          <div className="max-w-xl space-y-6 pt-10 sm:pt-16">
            <p className="significado-details text-xs sm:text-[13px] md:text-sm font-mono tracking-wider uppercase text-[#2D4A32] dark:text-slate-300 leading-relaxed">
              JAWIRA SIGNIFICA &ldquo;RÍO&rdquo; EN AYMARA, UN IDIOMA ORIGINARIO DE BOLIVIA. UN RÍO REPRESENTA EL FLUJO CONTINUO DE VIDA, LA CONEXIÓN ENTRE COMUNIDADES Y LA CAPACIDAD DE GENERAR OPORTUNIDADES A SU PASO.
            </p>
            
            <p className="significado-details text-xs sm:text-[13px] md:text-sm font-mono tracking-wider uppercase text-[#4A634E] dark:text-slate-400 leading-relaxed">
              DE LA MISMA MANERA, NUESTRA FUNDACIÓN ACTÚA COMO UN CAUCE QUE CANALIZA TECNOLOGÍA PRODUCTIVA, EDUCACIÓN INTEGRAL Y SALUD PREVENTIVA PARA NUTRIR EL POTENCIAL HUMANO Y CREAR CAMINOS HACIA EL DESARROLLO SOSTENIBLE.
            </p>

            {/* Botón de Acción Estilo JawiraButton */}
            <div className="significado-details pt-2">
              <JawiraButton
                href="/areas-de-trabajo"
                variant="outline-dark"
                size="default"
                bullets
                className="w-fit"
              >
                CONOCE NUESTROS EJES
              </JawiraButton>
            </div>
          </div>
        </div>

        {/* =========================================================
            COLUMNA DE IMAGEN A SANGRE COMPLETA A LA DERECHA
            ========================================================= */}
        <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-full min-h-[420px] lg:min-h-[100dvh] overflow-hidden order-1 lg:order-2">
          <div ref={imageRef} className="absolute inset-0 w-full h-full will-change-transform">
            <Image
              src="/community-development-people-working-together-bolivia.png"
              alt="Comunidad en Bolivia trabajando unida por el desarrollo integral"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  )
}
