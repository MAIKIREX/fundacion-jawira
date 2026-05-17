'use client'

import { useRef } from 'react'
import { Shield, Users, Heart } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const valores = [
  { title: 'Integridad', descripcion: 'Actuar con honestidad, transparencia y coherencia en nuestras decisiones y acciones.' },
  { title: 'Responsabilidad social', descripcion: 'Comprometerse con el bienestar de las comunidades y la sostenibilidad del planeta.' },
  { title: 'Servicio', descripcion: 'Poner el bien común y las necesidades comunitarias al centro de nuestro trabajo.' },
  { title: 'Respeto', descripcion: 'Reconocer la dignidad, derechos y diversidad de todas las personas.' },
]

const politicas = [
  {
    icon: Shield,
    titulo: 'Política de protección de datos',
    descripcion: 'Protección de información personal y confidencial de beneficiarios, aliados y colaboradores.',
  },
  {
    icon: Users,
    titulo: 'Política de prevención de violencia y acoso',
    descripcion: 'Compromiso con espacios seguros, libres de violencia y discriminación en todas nuestras iniciativas.',
  },
  {
    icon: Heart,
    titulo: 'Código de ética institucional',
    descripcion: 'Marco de principios y valores que guían el comportamiento y toma de decisiones de toda la organización.',
  },
]

const principios = [
  { title: 'No discriminación', descripcion: 'Acceso equitativo a nuestros servicios sin importar género, raza, religión u origen.' },
  { title: 'Equidad de género', descripcion: 'Compromiso con la igualdad de derechos y oportunidades entre hombres y mujeres.' },
  { title: 'Respeto a derechos humanos', descripcion: 'Protección y promoción de derechos fundamentales en todas nuestras iniciativas.' },
  { title: 'Interculturalidad', descripcion: 'Reconocimiento y valoración de la diversidad cultural en La Paz y el Departamento.' },
]

export default function PoliticasPrincipiosSection() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      
      gsap.from(".politicas-header > *", {
        scrollTrigger: {
          trigger: ".politicas-header",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      })

      gsap.from(".valor-item", {
        scrollTrigger: {
          trigger: ".valores-grid",
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out"
      })

      gsap.from(".politica-item", {
        scrollTrigger: {
          trigger: ".politicas-grid",
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      })

      gsap.from(".principio-item", {
        scrollTrigger: {
          trigger: ".principios-list",
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
        x: -20,
        autoAlpha: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out"
      })

    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="politicas-header text-center mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
            Marco ético
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-tight leading-tight mt-4">
            Políticas y principios
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/50 mt-6 max-w-2xl mx-auto leading-relaxed">
            La transparencia de JAWIRA se apoya en sus valores institucionales y principios de no discriminación, equidad e inclusión.
          </p>
        </div>

        {/* Values — gap-px grid */}
        <div className="valores-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10 rounded-3xl overflow-hidden mb-20 shadow-2xl">
          {valores.map((valor, i) => (
            <div key={i} className="valor-item bg-primary p-8 md:p-10 space-y-4 hover:bg-primary-foreground/5 transition-colors duration-300">
              <h3 className="text-lg font-bold text-primary-foreground tracking-tight">
                {valor.title}
              </h3>
              <p className="text-sm text-primary-foreground/50 leading-relaxed">
                {valor.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* Policies in development */}
        <div className="mb-20">
          <h3 className="text-xs font-bold tracking-widest uppercase text-primary-foreground/30 mb-8 ml-2">
            Políticas en desarrollo
          </h3>
          <div className="politicas-grid grid md:grid-cols-3 gap-px bg-primary-foreground/10 rounded-3xl overflow-hidden shadow-2xl">
            {politicas.map((pol, i) => {
              const Icon = pol.icon
              return (
                <div key={i} className="politica-item bg-primary p-8 md:p-10 space-y-6 hover:bg-primary-foreground/5 transition-colors duration-300">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary-foreground/70" />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-primary-foreground/25 bg-primary-foreground/5 px-2 py-1 rounded-md">
                      En desarrollo
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-foreground tracking-tight mb-2">
                      {pol.titulo}
                    </h3>
                    <p className="text-sm text-primary-foreground/50 leading-relaxed">
                      {pol.descripcion}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Related principles */}
        <div className="principios-list max-w-3xl ml-2">
          <h3 className="text-xs font-bold tracking-widest uppercase text-primary-foreground/30 mb-6">
            Principios relacionados
          </h3>
          <div className="space-y-0">
            {principios.map((p, i) => (
              <div
                key={i}
                className={`principio-item flex items-start gap-5 py-6 ${
                  i !== 0 ? 'border-t border-primary-foreground/10' : ''
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(var(--secondary),0.5)]" />
                <div>
                  <span className="text-base font-semibold text-primary-foreground">{p.title}: </span>
                  <span className="text-base text-primary-foreground/50">{p.descripcion}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
