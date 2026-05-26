'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { Calendar, Clock, MapPin, Users, CheckCircle } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

interface Actividad {
  id: string
  tipo: string
  titulo: string
  subtitulo?: string
  descripcion: string
  fecha: string
  hora: string
  lugar: string
  temas: string[]
  expositores?: { nombre: string; cargo: string }[]
  incluye?: string[]
  imagen: string
  estado: 'proximo' | 'en-curso' | 'finalizado'
}

const actividades: Actividad[] = [
  {
    id: 'dialogos-que-transforman',
    tipo: 'Encuentro',
    titulo: 'Diálogos que Transforman:',
    subtitulo: 'Tu voz, tu espacio',
    descripcion:
      'Organizado por Fundación Jawira junto al Tribunal Electoral Departamental de La Paz y organizaciones aliadas, este encuentro busca fortalecer la participación ciudadana, el diálogo democrático y la incidencia pública a través de un espacio abierto de reflexión e intercambio de ideas.',
    fecha: '28 de mayo de 2026',
    hora: '18:00 – 21:00',
    lugar: 'Salón de Honor — Calle Yanacocha N.º 628, frente al Colegio Ayacucho',
    temas: [
      'Participación ciudadana',
      'Lucha contra la desinformación',
      'Procesos electorales',
      'Espacios de diálogo',
      'Control social e incidencia pública',
    ],
    expositores: [
      {
        nombre: 'Lic. Capac Antonio Callisaya Valeriano',
        cargo: 'Politólogo, especialista en procesos democráticos y formulación de políticas públicas',
      },
    ],
    incluye: ['Certificado de participación', 'Material de apoyo', '¡Cupo limitado!'],
    imagen: '/actividades/uno/703105150_122104516274339138_6484863401707773038_n.jpg',
    estado: 'proximo',
  },
]

const estadoBadge: Record<Actividad['estado'], { label: string; className: string }> = {
  proximo: { label: 'Próximo', className: 'bg-primary/10 text-primary border border-primary/20' },
  'en-curso': { label: 'En curso', className: 'bg-green-500/10 text-green-600 border border-green-500/20' },
  finalizado: { label: 'Finalizado', className: 'bg-muted text-muted-foreground border border-border' },
}

export default function ActividadesListSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.act-card', {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {actividades.map((actividad) => {
            const badge = estadoBadge[actividad.estado]
            return (
              <article
                key={actividad.id}
                className="act-card group grid lg:grid-cols-[420px_1fr] gap-0 rounded-3xl border border-border bg-background overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
              >
                {/* Poster image */}
                <div className="relative aspect-[3/4] lg:aspect-auto lg:min-h-[560px] overflow-hidden bg-muted">
                  <Image
                    src={actividad.imagen}
                    alt={`Afiche de ${actividad.titulo} ${actividad.subtitulo ?? ''}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-between gap-8">
                  <div className="space-y-6">
                    {/* Tipo + estado */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-bold tracking-widest uppercase text-secondary">
                        {actividad.tipo}
                      </span>
                      <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full ${badge.className}`}>
                        {badge.label}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight leading-tight">
                        {actividad.titulo}
                      </h2>
                      {actividad.subtitulo && (
                        <p className="text-2xl lg:text-3xl font-bold text-primary mt-1">
                          {actividad.subtitulo}
                        </p>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-foreground/70 leading-relaxed">{actividad.descripcion}</p>

                    {/* Meta */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Fecha</p>
                          <p className="font-semibold text-foreground">{actividad.fecha}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Hora</p>
                          <p className="font-semibold text-foreground">{actividad.hora}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 sm:col-span-2">
                        <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Lugar</p>
                          <p className="font-semibold text-foreground">{actividad.lugar}</p>
                        </div>
                      </div>
                    </div>

                    {/* Temas */}
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Temas a abordar</p>
                      <ul className="flex flex-wrap gap-2">
                        {actividad.temas.map((tema) => (
                          <li
                            key={tema}
                            className="text-sm font-medium px-3 py-1.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20"
                          >
                            {tema}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Expositores */}
                    {actividad.expositores && actividad.expositores.length > 0 && (
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                          <Users className="w-4 h-4" /> Expositores
                        </p>
                        <div className="space-y-2">
                          {actividad.expositores.map((e) => (
                            <div key={e.nombre} className="p-4 rounded-2xl bg-muted/50 border border-border">
                              <p className="font-bold text-foreground">{e.nombre}</p>
                              <p className="text-sm text-muted-foreground mt-0.5">{e.cargo}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Incluye */}
                  {actividad.incluye && actividad.incluye.length > 0 && (
                    <div className="pt-6 border-t border-border">
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Incluye</p>
                      <ul className="flex flex-wrap gap-3">
                        {actividad.incluye.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm font-semibold text-foreground">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
