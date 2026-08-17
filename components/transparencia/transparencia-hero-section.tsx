'use client'

import { useRef } from 'react'
import { ShieldCheck, CheckCircle2, FileSearch, ArrowDown, Sparkles } from 'lucide-react'
import { JawiraButton } from '@/components/ui/jawira-button'
import RiverFlowLines from '@/components/ui/river-flow-lines'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP)
}

const transparenciaHeroCards = [
  {
    icon: ShieldCheck,
    metric: '100% ABIERTO',
    title: 'Presupuesto Abierto',
    description: 'Publicación periódica de asignación de recursos y estados financieros.',
    badgeColor: 'text-[#68CE2B] bg-[#68CE2B]/10 border-[#68CE2B]/30',
  },
  {
    icon: CheckCircle2,
    metric: 'RIGOR',
    title: 'Evaluación Continua',
    description: 'Medición permanente de indicadores de impacto social en territorio.',
    badgeColor: 'text-[#FFA826] bg-[#FFA826]/10 border-[#FFA826]/30',
  },
  {
    icon: FileSearch,
    metric: 'AUDITORÍA',
    title: 'Auditorías Externas',
    description: 'Revisión independiente por firmas autorizadas para garantizar probidad.',
    badgeColor: 'text-sky-400 bg-sky-400/10 border-sky-400/30',
  },
]

export default function TransparenciaHeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })

      tl.fromTo(
        '.reveal-trans-title',
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.1,
          stagger: 0.08,
        },
        0.1
      )

      tl.fromTo(
        '.reveal-trans-desc',
        { y: 25, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          stagger: 0.1,
        },
        0.3
      )

      tl.fromTo(
        '.trans-hero-card-item',
        { x: 40, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.1,
        },
        0.4
      )
    })
  }, { scope: sectionRef })

  const scrollToContent = () => {
    const el = document.getElementById('compromiso') || document.getElementById('presupuesto')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={sectionRef}
      data-header-theme="dark"
      className="relative min-h-[88vh] flex flex-col justify-between overflow-hidden bg-[#1B361F] text-white pt-28 pb-16 md:pt-36 md:pb-24 border-b border-white/10"
    >
      {/* Fondo de Resplandor Radial & Líneas de Río */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-radial-[circle_at_30%_30%] from-[#2C5233] via-[#1B361F] to-[#122415]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#122415]/95 via-transparent to-[#1B361F]/40" />
      </div>

      <RiverFlowLines className="opacity-25 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between">
        
        {/* Rejilla Principal de Contenido */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center my-auto py-8">
          
          {/* Columna Izquierda: Encabezado y Acciones */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Insignia Monospaciada */}
            <div className="overflow-hidden">
              <span className="reveal-trans-title inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold tracking-widest uppercase text-[#68CE2B]">
                <span className="w-2 h-2 rounded-full bg-[#50AA1E] animate-pulse" />
                <span>Compromiso Ético · Rendición de Cuentas</span>
              </span>
            </div>

            {/* Título Principal H1 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold leading-[1.05] tracking-[-0.03em] text-white">
              <div className="overflow-hidden">
                <span className="reveal-trans-title block">Transparencia y</span>
              </div>
              <div className="overflow-hidden">
                <span className="reveal-trans-title block text-[#68CE2B]">Rendición</span>
              </div>
            </h1>

            {/* Descripción del Hero */}
            <div className="overflow-hidden">
              <p className="reveal-trans-desc text-base sm:text-lg md:text-xl text-white/85 leading-relaxed font-normal max-w-2xl">
                Administramos los recursos institucionales con absoluta claridad, ética y compromiso constante ante las comunidades, donantes y aliados.
              </p>
            </div>

            {/* Botones de Acción JawiraButton */}
            <div className="overflow-hidden pt-3">
              <div className="reveal-trans-desc flex flex-wrap items-center gap-4">
                <JawiraButton variant="secondary" size="lg" onClick={scrollToContent}>
                  <span>Ver Información Financiera</span>
                  <ArrowDown className="w-4 h-4" />
                </JawiraButton>

                <JawiraButton variant="outline-white" size="lg" href="#informes">
                  <span>Ver Informes Públicos</span>
                </JawiraButton>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Tarjetas Interactivas de Estándares */}
          <div className="lg:col-span-5 space-y-4">
            <div className="overflow-hidden mb-2">
              <h3 className="reveal-trans-title text-xs font-mono font-bold tracking-widest uppercase text-[#68CE2B] flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Estándares de Gestión</span>
              </h3>
            </div>

            <div className="space-y-3.5">
              {transparenciaHeroCards.map((card) => {
                const IconComponent = card.icon
                return (
                  <div
                    key={card.title}
                    className="trans-hero-card-item w-full text-left bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 flex items-start gap-4 transition-all duration-300 hover:bg-white/20 hover:border-white/30 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5 text-[#68CE2B]" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="text-base font-bold text-white tracking-tight group-hover:text-[#68CE2B] transition-colors">
                          {card.title}
                        </h4>
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${card.badgeColor}`}>
                          {card.metric}
                        </span>
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed font-normal">
                        {card.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

