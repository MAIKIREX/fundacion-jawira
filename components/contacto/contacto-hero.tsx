"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

export default function ContactoHero() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      
      // Animar la etiqueta (eyebrow)
      tl.from(".hero-badge", {
        y: 20,
        opacity: 0,
        duration: 0.8
      })
      
      // Animar el título
      tl.from(".hero-title-word", {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out"
      }, "-=0.6")
      
      // Animar párrafo
      tl.from(".hero-text", {
        y: 30,
        opacity: 0,
        duration: 1
      }, "-=0.6")
      
      // SVG background animation
      gsap.fromTo(".hero-svg-circle", 
        { strokeDasharray: 500, strokeDashoffset: 500 },
        { 
          strokeDashoffset: 0, 
          duration: 2, 
          ease: "power2.inOut",
          stagger: 0.2
        }
      )
      
      gsap.to(".hero-svg-wrapper", {
        rotation: 360,
        duration: 100,
        repeat: -1,
        ease: "none"
      })
    })

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set([".hero-badge", ".hero-title-word", ".hero-text"], { opacity: 1, y: 0, yPercent: 0 })
    })

  }, { scope: container })

  return (
    <section ref={container} className="relative py-24 md:py-32 bg-background overflow-hidden min-h-[50vh] flex items-center border-b border-border/20">
      <div className="hero-svg-wrapper absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-end pr-20 opacity-[0.03]">
        <svg
          className="w-[500px] h-[500px] text-primary"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle className="hero-svg-circle" cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" />
          <circle className="hero-svg-circle" cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.5" />
          <circle className="hero-svg-circle" cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="overflow-hidden mb-6">
            <span className="hero-badge inline-block rounded-full px-3 py-1 bg-secondary/10 text-[10px] font-semibold tracking-[0.2em] uppercase text-secondary">
              Comunícate con nosotros
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary tracking-tighter leading-[1.05] mt-4 flex flex-wrap gap-x-4 overflow-hidden">
            <span className="hero-title-word inline-block">Contacto</span>
          </h1>
          <p className="hero-text text-lg md:text-xl text-muted-foreground mt-8 leading-relaxed max-w-2xl">
            Estamos aquí para escucharte. Comunícate con nosotros para consultas, sugerencias
            o para conocer más sobre cómo puedes apoyar nuestra misión.
          </p>
        </div>
      </div>
    </section>
  )
}
