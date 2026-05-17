"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Parallax: bg image drifts up slowly while pinned
      gsap.to(bgRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      })

      // Entrance Choreography
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } })

      tl.fromTo(".hero-bg-img", 
        { scale: 1.1 },
        {
          scale: 1,
          duration: 3,
          ease: "power2.out",
        }, 0)

      tl.fromTo(".reveal-item", 
        { yPercent: 120, autoAlpha: 0 },
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 1.4,
          stagger: 0.1,
        }, 0.2)

      tl.fromTo(".stat-item", 
        { autoAlpha: 0, x: 30 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
        }, 0.6)
    })
  }, { scope: containerRef, dependencies: [] })

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-primary"
    >
      {/* Background Image Container */}
      <div ref={bgRef} className="absolute inset-0 z-0 will-change-transform">
        <Image
          src="/community-development-people-working-together-bolivia.png"
          alt="Comunidad trabajando junta en desarrollo"
          fill
          className="hero-bg-img object-cover opacity-25 will-change-transform"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32 w-full">
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="overflow-hidden">
                <span className="reveal-item block text-xs font-semibold tracking-widest uppercase text-secondary">
                  Fundación sin fines de lucro — La Paz, Bolivia
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-primary-foreground">
                <div className="overflow-hidden">
                  <span className="reveal-item block">Tecnología, educación</span>
                </div>
                <div className="overflow-hidden pb-1">
                  <span className="reveal-item block">y salud que fluyen</span>
                </div>
                <div className="overflow-hidden">
                  <span className="reveal-item block text-secondary">hacia el desarrollo</span>
                </div>
              </h1>
            </div>

            <div className="overflow-hidden">
              <p className="reveal-item block text-base md:text-lg text-primary-foreground/70 leading-relaxed max-w-[52ch]">
                Articulamos tecnología productiva, educación integral y prevención de la salud para comunidades vulnerables, promoviendo desarrollo sostenible en zonas urbanas, periurbanas y rurales.
              </p>
            </div>

            <div className="overflow-hidden pt-2">
              <div className="reveal-item flex flex-col sm:flex-row gap-4">
                <Button asChild variant="cta" size="lg" className="group">
                  <Link href="/fundacion">
                    Conoce la fundación
                    <span className="ml-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="group border-2 border-primary-foreground/30 bg-transparent text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/10 active:scale-[0.98]"
                >
                  <Link href="/quiero-apoyar">Quiero apoyar</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Stats/Impact Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-5 mt-8 lg:mt-0 pt-8 lg:pt-0 border-t border-primary-foreground/10 lg:border-t-0">
            {[
              { value: "+2.8M", label: "Población objetivo en La Paz", accent: "border-secondary/40" },
              { value: "3 ejes", label: "Tecnología · Educación · Salud", accent: "border-accent/40" },
              { value: "2026–2034", label: "Horizonte de impacto proyectado", accent: "border-primary-foreground/20" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`stat-item border-l-2 ${stat.accent} pl-6 py-2 lg:py-4`}
              >
                <p className="text-2xl font-bold text-primary-foreground tracking-tight">{stat.value}</p>
                <p className="text-sm text-primary-foreground/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
