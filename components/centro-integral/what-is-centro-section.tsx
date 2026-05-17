'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)

export default function WhatIsCentroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // 1. Text Reveal Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.what-text-container',
          start: 'top 80%',
          toggleActions: 'play reverse play reverse'
        }
      })

      tl.from('.what-subtitle', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power3.out' })
        .from('.what-title', { y: 30, autoAlpha: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
        .from('.what-desc', { y: 20, autoAlpha: 0, duration: 0.5, stagger: 0.15, ease: 'power2.out' }, '-=0.4')
        .from('.what-badge', { scale: 0.9, autoAlpha: 0, duration: 0.4, stagger: 0.1, ease: 'back.out(1.5)' }, '-=0.2')

      // 2. Cinematic Image Entrance (Mask + Scale)
      gsap.fromTo('.what-image-wrapper',
        { clipPath: 'inset(100% 0% 0% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.2,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: '.what-image-container',
            start: 'top 80%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )

      // 3. Parallax effect inside image
      gsap.fromTo('.what-image', 
        { y: -30, scale: 1.1 },
        {
          y: 30,
          scale: 1.1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.what-image-container',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        }
      )

      // 4. Image overlay text reveal
      gsap.from('.what-img-text', {
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.what-image-container',
          start: 'top 60%',
          toggleActions: 'play reverse play reverse'
        }
      })
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">

          {/* Left: Text */}
          <div className="what-text-container space-y-6 lg:pr-8">
            <div className="space-y-4">
              <span className="what-subtitle text-xs font-bold tracking-widest uppercase text-secondary block">
                Proyecto transformador
              </span>
              <h2 className="what-title text-4xl md:text-5xl font-bold text-primary tracking-tighter leading-tight">
                ¿Qué es el Centro Integral JAWIRA?
              </h2>
            </div>

            <div className="space-y-5 text-lg text-foreground/70 leading-relaxed font-medium">
              <p className="what-desc">
                El Centro Integral JAWIRA es un proyecto transformador creado por la Fundación JAWIRA para articular,
                en un mismo lugar, servicios de tecnología productiva, educación de calidad y salud preventiva. Es un
                espacio físico y digital diseñado para brindar atención integral a poblaciones urbanas, periurbanas y
                rurales del Departamento de La Paz.
              </p>
              <p className="what-desc">
                Se presenta como un{" "}
                <span className="font-bold text-foreground">proyecto piloto replicable</span>, cuyo modelo y
                metodología pueden adaptarse e implementarse en otras regiones del país, generando oportunidades de
                desarrollo sostenible.
              </p>
            </div>

            {/* Key attributes */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-border/50">
              {["Espacio físico y digital", "Modelo piloto", "Replicable a nivel nacional"].map((item) => (
                <span key={item} className="what-badge text-xs font-bold text-muted-foreground tracking-widest uppercase flex items-center gap-2 bg-muted/40 px-3 py-1.5 rounded border border-border/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Visual — photo with overlay */}
          <div className="what-image-container relative rounded-3xl overflow-hidden h-[450px] lg:h-[550px] shadow-2xl border border-border/50 bg-black">
            <div className="what-image-wrapper absolute inset-0" style={{ willChange: 'clip-path' }}>
              <Image
                src="/urban-rural-landscape-bolivia-coverage-areas-map.png"
                alt="Centro Integral JAWIRA"
                fill
                className="what-image object-cover opacity-80"
                style={{ willChange: 'transform' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <span className="what-img-text text-3xl md:text-4xl font-bold text-white tracking-tighter block leading-tight">
                  Centro Integral
                </span>
                <span className="what-img-text text-secondary font-black text-xl md:text-2xl mt-1 block tracking-tight">
                  JAWIRA
                </span>
                <span className="what-img-text text-[10px] text-white/70 font-bold tracking-widest uppercase mt-4 block">
                  Tecnología · Educación · Salud
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
