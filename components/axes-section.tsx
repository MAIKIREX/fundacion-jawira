"use client"

import Image from "next/image"
import Link from "next/link"
import { BookOpen, Zap, Heart, ArrowRight } from "lucide-react"

const axes = [
  {
    id: 1,
    title: "Tecnología Productiva",
    subtitle: "Innovación digital para el desarrollo",
    description:
      "Impulsamos la innovación tecnológica y digital para fortalecer capacidades productivas en comunidades vulnerables, cerrando la brecha digital con soluciones prácticas y accesibles.",
    icon: Zap,
    image: "/technology-innovation-computers-lab-digitalv.png",
    iconColor: "text-primary",
    accentColor: "bg-primary",
  },
  {
    id: 2,
    title: "Educación Integral",
    subtitle: "Formación para transformar vidas",
    description:
      "Promovemos acceso a educación de calidad con programas de alfabetización digital, formación técnica y capacitación continua para todas las edades.",
    icon: BookOpen,
    image: "/education-students-learning-classroom-workshop.png",
    iconColor: "text-secondary",
    accentColor: "bg-secondary",
  },
  {
    id: 3,
    title: "Prevención de la Salud",
    subtitle: "Bienestar accesible para todos",
    description:
      "Facilitamos acceso a servicios de salud preventiva, telemedicina y programas de bienestar para comunidades desatendidas, priorizando la prevención y la atención temprana.",
    icon: Heart,
    image: "/healthcare-wellness-doctors-prevention-medical.png",
    iconColor: "text-accent",
    accentColor: "bg-accent",
  },
]

export default function AxesSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header — Left aligned */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
            Nuestros ejes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight mt-3">
            Tres áreas clave para el
            <br className="hidden sm:block" />
            desarrollo integral
          </h2>
          <p className="text-base text-muted-foreground mt-4 leading-relaxed">
            Articulamos tecnología, educación y salud para generar impacto sostenible en las comunidades del Departamento de La Paz.
          </p>
        </div>

        {/* Axes — Zig-zag layout */}
        <div className="space-y-16 md:space-y-24">
          {axes.map((axis, i) => {
            const Icon = axis.icon
            const isReversed = i % 2 === 1
            return (
              <div
                key={axis.id}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  isReversed ? "lg:direction-rtl" : ""
                }`}
                style={isReversed ? { direction: "rtl" } : undefined}
              >
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden h-[320px] md:h-[380px]" style={{ direction: "ltr" }}>
                  <Image
                    src={axis.image}
                    alt={axis.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                  <div className={`absolute top-5 left-5 w-11 h-11 rounded-xl ${axis.accentColor} flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-5" style={{ direction: "ltr" }}>
                  <div className="space-y-2">
                    <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                      {axis.subtitle}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
                      {axis.title}
                    </h3>
                  </div>

                  <p className="text-base text-foreground/70 leading-relaxed max-w-[52ch]">
                    {axis.description}
                  </p>

                  <Link
                    href="/areas-de-trabajo"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:gap-3 transition-all group"
                  >
                    Conocer más
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
