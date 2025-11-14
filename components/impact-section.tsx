'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, MapPin, Calendar } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '+2.800.000',
    label: 'Población objetivo',
    description: 'En el Departamento de La Paz',
    color: 'text-blue-600'
  },
  {
    icon: MapPin,
    value: '3',
    label: 'Áreas de cobertura',
    description: 'Urbana, periurbana y rural',
    color: 'text-green-600'
  },
  {
    icon: Calendar,
    value: '2026-2034',
    label: 'Horizonte de impacto',
    description: 'Fase inicial (2026-2028) y consolidación (2029-2034)',
    color: 'text-orange-600'
  },
]

export default function ImpactSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Impacto y alcance
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Números que reflejan nuestro compromiso con el desarrollo sostenible
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <Card 
                key={i}
                className="border-2 border-border hover:shadow-lg transition-all duration-300 bg-white"
              >
                <CardHeader className="space-y-3">
                  <div className={`w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-primary">{stat.value}</CardTitle>
                    <p className="text-sm font-semibold text-foreground mt-1">{stat.label}</p>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-foreground/70">{stat.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
