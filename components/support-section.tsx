"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Users, Handshake, ArrowRight } from "lucide-react"

const supportOptions = [
  {
    icon: Heart,
    title: "Donar",
    description:
      "Tu aporte económico nos permite continuar desarrollando proyectos que transforman vidas y comunidades.",
    details:
      "Cada donación, sin importar su monto, contribuye directamente a financiar tecnología, educación y salud en comunidades vulnerables.",
    image: "/people-donating-helping-charity-hands.png",
    accentColor: "bg-accent",
  },
  {
    icon: Users,
    title: "Voluntariado",
    description:
      "Comparte tus conocimientos, tiempo y habilidades para apoyar nuestras iniciativas en terreno.",
    details:
      "Buscamos profesionales, estudiantes y personas comprometidas que quieran aportar desde sus áreas de experiencia.",
    image: "/volunteers-working-together-community-teamwork.png",
    accentColor: "bg-secondary",
  },
  {
    icon: Handshake,
    title: "Alianzas",
    description:
      "Establece alianzas estratégicas con tu organización o empresa para co-crear soluciones de impacto.",
    details:
      "Trabajamos con instituciones públicas, privadas y organizaciones sociales que comparten nuestra visión de desarrollo integral.",
    image: "/business-partnership-handshake-collaboration-profe.png",
    accentColor: "bg-primary",
  },
]

export default function SupportSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
            Súmate a nuestra misión
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight mt-3">
            Cómo puedes apoyar
          </h2>
          <p className="text-base text-muted-foreground mt-4 leading-relaxed">
            Tu apoyo es fundamental para seguir impulsando el desarrollo de comunidades a través de la tecnología, la educación y la salud.
          </p>
        </div>

        {/* Support Options */}
        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
          {supportOptions.map((option, i) => {
            const Icon = option.icon
            return (
              <div key={i} className="group">
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden h-[220px] mb-6">
                  <Image
                    src={option.image}
                    alt={option.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                  <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl ${option.accentColor} flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-primary tracking-tight">{option.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{option.description}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{option.details}</p>

                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:gap-3 transition-all pt-2 group/link"
                  >
                    Quiero {option.title.toLowerCase()}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Trust message */}
        <div className="mt-16 md:mt-20 pt-10 border-t border-border">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
            <p className="text-base text-foreground/70 leading-relaxed max-w-2xl">
              Con tu apoyo, más de <span className="font-semibold text-primary">500 familias</span> han accedido a servicios
              de tecnología, educación y salud. Juntos podemos multiplicar este impacto.
            </p>
            <Button asChild variant="cta" size="lg" className="flex-shrink-0">
              <Link href="/quiero-apoyar">Quiero apoyar</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
