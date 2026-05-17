'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const opciones = [
  { titulo: 'Voluntariado', descripcion: 'Aporta tu tiempo y talento en alguna de las áreas del Centro Integral.' },
  { titulo: 'Donaciones', descripcion: 'Apoya infraestructura, equipos o programas específicos del centro.' },
  { titulo: 'Alianzas', descripcion: 'Colabora como institución aliada con nuestros proyectos integrales.' },
]

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // 1. Image Background Reveal and Parallax
      gsap.fromTo('.cta-image-wrapper',
        { clipPath: 'inset(100% 0% 0% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.5,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )

      gsap.fromTo('.cta-image',
        { y: -50, scale: 1.1 },
        {
          y: 50,
          scale: 1.1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        }
      )

      // 2. Left side text reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.cta-content-left',
          start: 'top 80%',
          toggleActions: 'play reverse play reverse'
        }
      })

      tl.from('.cta-subtitle', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power3.out' })
        .from('.cta-title', { y: 30, autoAlpha: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
        .from('.cta-desc', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power2.out' }, '-=0.4')
        .from('.cta-btn', { scale: 0.9, autoAlpha: 0, duration: 0.5, ease: 'back.out(1.5)' }, '-=0.2')

      // 3. Right side options reveal
      gsap.from('.cta-option', {
        y: 30,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.cta-content-right',
          start: 'top 80%',
          toggleActions: 'play reverse play reverse'
        }
      })
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden bg-black">
      {/* Immersive Background */}
      <div className="cta-image-wrapper absolute inset-0 z-0" style={{ willChange: 'clip-path' }}>
        <Image
          src="/community-development-people-working-together-bolivia.png"
          alt="Comunidad trabajando junta"
          fill
          className="cta-image object-cover opacity-80 mix-blend-luminosity"
          style={{ willChange: 'transform' }}
        />
        <div className="absolute inset-0 bg-primary/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-center">

          {/* Left: Message */}
          <div className="cta-content-left space-y-8">
            <div className="space-y-4">
              <span className="cta-subtitle text-xs font-bold tracking-widest uppercase text-secondary block">
                Súmate al proyecto
              </span>
              <h2 className="cta-title text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tighter leading-tight">
                ¿Quieres apoyar el Centro Integral JAWIRA?
              </h2>
            </div>
            <p className="cta-desc text-lg text-primary-foreground/70 leading-relaxed max-w-lg font-medium">
              Existen múltiples formas de ser parte de este proyecto transformador. Tu participación fortalece directamente nuestros programas de tecnología, educación y salud.
            </p>
            <div className="cta-btn pt-4">
              <Button asChild variant="cta" size="lg" className="h-14 px-8 text-base rounded-xl shadow-xl hover:scale-105 transition-transform duration-300">
                <Link href="/contacto">
                  Quiero apoyar
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Support options as simple list */}
          <div className="cta-content-right space-y-0 bg-primary-foreground/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-primary-foreground/10">
            {opciones.map((opcion, i) => (
              <div
                key={i}
                className={`cta-option py-8 ${
                  i !== 0 ? 'border-t border-primary-foreground/10' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-secondary font-black text-sm uppercase tracking-widest mt-1">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-foreground tracking-tight mb-3">
                      {opcion.titulo}
                    </h3>
                    <p className="text-base text-primary-foreground/60 leading-relaxed font-medium">
                      {opcion.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
