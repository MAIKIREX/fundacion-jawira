'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { FileText } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const documentos = [
  {
    titulo: 'Informe anual 2026',
    tipo: 'Informe de gestión',
    anno: 2026,
  },
  {
    titulo: 'Informe de impacto 2027',
    tipo: 'Evaluación de resultados',
    anno: 2027,
  },
  {
    titulo: 'Resumen financiero 2026',
    tipo: 'Información financiera agregada',
    anno: 2026,
  },
  {
    titulo: 'Resultados de evaluación 2027',
    tipo: 'Evaluación programática',
    anno: 2027,
  },
]

export default function InformesDocumentosSection() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play reverse play reverse",
        }
      })

      tl.from(".informes-header > *", {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      })
      .from(".informe-card", {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      }, "-=0.4")
      .from(".informes-note", {
        autoAlpha: 0,
        y: 10,
        duration: 1,
        ease: "power2.out"
      }, "-=0.2")

    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="informes-header mb-16 max-w-2xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
            Documentación pública
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight mt-3">
            Informes y documentos
          </h2>
          <p className="text-base text-muted-foreground mt-4 leading-relaxed">
            La Fundación publicará periódicamente informes anuales, resúmenes de proyectos, información financiera y resultados de auditorías.
          </p>
        </div>

        {/* Documents grid - Double-Bezel nested architecture */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {documentos.map((doc, i) => (
            <div key={i} className="informe-card p-1.5 rounded-[2rem] bg-black/5 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 group cursor-default">
              <div className="bg-background rounded-[calc(2rem-0.375rem)] p-7 md:p-8 h-full flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] group-hover:-translate-y-[2px] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary/60" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground bg-muted/60 px-3 py-1.5 rounded-full">
                    Próximamente
                  </span>
                </div>
                <div className="space-y-2 mt-auto">
                  <span className="text-xs font-medium text-muted-foreground/50 block mb-1">
                    Año: {doc.anno}
                  </span>
                  <h3 className="text-xl font-bold text-primary tracking-tight group-hover:text-secondary transition-colors">
                    {doc.titulo}
                  </h3>
                  <p className="text-sm text-muted-foreground">{doc.tipo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="informes-note mt-16 pt-8 border-t border-border max-w-3xl">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Los documentos estarán disponibles progresivamente conforme se completen los ciclos de evaluación.{" "}
            <Link href="/contacto" className="font-medium text-secondary hover:underline underline-offset-4">
              Contáctanos
            </Link>{" "}
            si deseas recibir notificaciones sobre nuevas publicaciones.
          </p>
        </div>

      </div>
    </section>
  )
}
