"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MapPin, Calendar } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "+2.800.000",
    label: "Población objetivo",
    description: "En el Departamento de La Paz",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    image: "/diverse-community-people-bolivia-population-group.png",
  },
  {
    icon: MapPin,
    value: "3",
    label: "Áreas de cobertura",
    description: "Urbana, periurbana y rural",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/20",
    image: "/urban-rural-landscape-bolivia-coverage-areas-map.png",
  },
  {
    icon: Calendar,
    value: "2026-2034",
    label: "Horizonte de impacto",
    description: "Fase inicial (2026-2028) y consolidación (2029-2034)",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
    image: "/timeline-planning-future-vision-growth-progress.png",
  },
]

export default function ImpactSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">Impacto y alcance</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Números que reflejan nuestro compromiso con el desarrollo sostenible
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <Card
                key={i}
                className={`border-2 ${stat.borderColor} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white rounded-2xl overflow-hidden group`}
              >
                <div className="relative h-32 overflow-hidden bg-muted">
                  <Image src={stat.image || "/placeholder.svg"} alt={stat.label} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                  <div
                    className={`absolute bottom-3 left-3 w-12 h-12 rounded-lg ${stat.bgColor} border-2 ${stat.borderColor} flex items-center justify-center bg-white/95 backdrop-blur-sm`}
                  >
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>

                <CardHeader className="space-y-3 pt-6">
                  <div>
                    <CardTitle className="text-3xl md:text-4xl text-primary mb-2">{stat.value}</CardTitle>
                    <p className="text-base font-semibold text-foreground">{stat.label}</p>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-foreground/75 leading-relaxed">{stat.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
