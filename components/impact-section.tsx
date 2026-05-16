"use client"

import { Users, MapPin, Calendar } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "+2.800.000",
    label: "Población objetivo",
    description: "Habitantes en el Departamento de La Paz con potencial de beneficiarse de nuestros programas.",
    accentColor: "text-primary",
    borderColor: "border-primary/30",
  },
  {
    icon: MapPin,
    value: "3 zonas",
    label: "Áreas de cobertura",
    description: "Alcance en zonas urbanas, periurbanas y rurales del departamento para impacto integral.",
    accentColor: "text-secondary",
    borderColor: "border-secondary/30",
  },
  {
    icon: Calendar,
    value: "2026–2034",
    label: "Horizonte de impacto",
    description: "Fase inicial de implementación (2026-2028) seguida de consolidación y expansión (2029-2034).",
    accentColor: "text-accent",
    borderColor: "border-accent/30",
  },
]

export default function ImpactSection() {
  return (
    <section className="py-24 md:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
            Nuestro alcance
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground tracking-tight leading-tight mt-3">
            Impacto y alcance
          </h2>
          <p className="text-base text-primary-foreground/50 mt-4 max-w-xl mx-auto leading-relaxed">
            Números que reflejan nuestro compromiso con el desarrollo sostenible en Bolivia
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-px bg-primary-foreground/10 rounded-2xl overflow-hidden">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div
                key={i}
                className="bg-primary p-8 md:p-10 flex flex-col items-center text-center space-y-4"
              >
                <div className={`w-12 h-12 rounded-xl bg-primary-foreground/8 flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${stat.accentColor === "text-primary" ? "text-primary-foreground" : stat.accentColor}`} />
                </div>
                <div className="space-y-2">
                  <p className="text-3xl md:text-4xl font-bold text-primary-foreground tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-sm font-semibold text-primary-foreground/80 tracking-wide">
                    {stat.label}
                  </p>
                </div>
                <p className="text-sm text-primary-foreground/45 leading-relaxed max-w-[32ch]">
                  {stat.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
