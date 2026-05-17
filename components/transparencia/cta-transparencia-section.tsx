'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Mail } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export default function CtaTransparenciaSection() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        }
      })

      tl.from(".cta-left > *", {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      })

      tl.from(".cta-right > div", {
        y: 20,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      }, "-=0.6")

    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-background border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-20 items-start">

          {/* Left: Main CTA */}
          <div className="cta-left space-y-8">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-secondary block mb-4">
                Diálogo abierto
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight leading-[1.1]">
                ¿Tienes dudas o quieres saber más?
              </h2>
            </div>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-lg">
              La transparencia también es diálogo. Cualquier persona, institución o donante
              interesado en conocer más sobre la información financiera, programática o de impacto
              puede contactarnos para solicitar detalles o aclaraciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild variant="cta" size="lg" className="group rounded-full px-8 py-6 text-sm">
                <Link href="/contacto">
                  Contactar a la Fundación
                  <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center ml-3 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-sm border-2">
                <Link href="/impacto">
                  Ver nuestro impacto
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Contact info */}
          <div className="cta-right space-y-0 lg:pt-4">
            <div className="p-8 rounded-[2rem] bg-muted/30 border border-border/40 hover:bg-muted/50 transition-colors duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-sm">
                  <Mail className="w-5 h-5 text-primary/60" />
                </div>
                <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground/50">
                  Por correo
                </span>
              </div>
              <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                Envíanos tus preguntas o solicitudes de información técnica o financiera a:
              </p>
              <a
                href="mailto:info@fundacionjawira.org"
                className="text-lg font-bold text-primary hover:text-secondary transition-colors"
              >
                info@fundacionjawira.org
              </a>
            </div>

            <div className="p-8 mt-6">
              <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground/50 block mb-4">
                Colaborar o donar
              </span>
              <p className="text-sm text-foreground/70 mb-6 leading-relaxed">
                Si deseas conocer opciones para apoyar nuestro trabajo y el Centro Integral JAWIRA:
              </p>
              <Link
                href="/quiero-apoyar"
                className="group text-sm font-bold text-primary hover:text-secondary transition-colors inline-flex items-center gap-3"
              >
                Ver opciones de apoyo
                <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
