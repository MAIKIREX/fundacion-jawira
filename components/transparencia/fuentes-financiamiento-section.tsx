'use client'

import { Card } from '@/components/ui/card'
import { Globe, Building2, Heart, Package } from 'lucide-react'

export default function FuentesFinanciamientoSection() {
  const fuentes = [
    {
      icon: Globe,
      titulo: 'Cooperación internacional',
      descripcion: 'Convenios con ONG y organizaciones internacionales comprometidas con el desarrollo sostenible en América Latina.',
      color: 'from-blue-100 to-blue-50',
      borderColor: 'border-blue-300',
      textColor: 'text-blue-700'
    },
    {
      icon: Building2,
      titulo: 'Instituciones públicas y privadas',
      descripcion: 'Proyectos colaborativos con entidades gubernamentales y empresas privadas para impulsar iniciativas de impacto social.',
      color: 'from-green-100 to-green-50',
      borderColor: 'border-green-300',
      textColor: 'text-green-700'
    },
    {
      icon: Heart,
      titulo: 'Donaciones de personas naturales',
      descripcion: 'Contribuciones voluntarias de individuos que creen en nuestra misión de transformar comunidades vulnerables.',
      color: 'from-orange-100 to-orange-50',
      borderColor: 'border-orange-300',
      textColor: 'text-orange-700'
    },
    {
      icon: Package,
      titulo: 'Aportes en especie',
      descripcion: 'Equipos, servicios, materiales y recursos que contribuyen al funcionamiento eficiente de nuestras actividades.',
      color: 'from-yellow-100 to-yellow-50',
      borderColor: 'border-yellow-300',
      textColor: 'text-yellow-700'
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Fuentes de financiamiento
            </h2>
            <p className="text-lg text-foreground/70">
              Buscamos recursos a través de múltiples canales para asegurar la sostenibilidad de nuestras iniciativas durante los próximos años.
            </p>
          </div>

          {/* Grid de Fuentes */}
          <div className="grid md:grid-cols-2 gap-6">
            {fuentes.map((fuente, idx) => {
              const Icon = fuente.icon
              return (
                <Card
                  key={idx}
                  className={`p-6 bg-gradient-to-br ${fuente.color} border-2 ${fuente.borderColor} hover:shadow-lg transition-all`}
                >
                  <Icon className={`w-10 h-10 ${fuente.textColor} mb-4`} />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {fuente.titulo}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {fuente.descripcion}
                  </p>
                </Card>
              )
            })}
          </div>

          {/* Objetivo de Sostenibilidad */}
          <Card className="p-6 md:p-8 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Objetivo: Sostenibilidad a 3 años
            </h3>
            <p className="text-foreground/70 mb-4">
              Nuestra meta es asegurar un mínimo de tres años de sostenibilidad financiera para el funcionamiento de la Fundación JAWIRA y el Centro Integral JAWIRA, permitiéndonos consolidar proyectos, demostrar impacto y acceder a mayores fuentes de financiamiento.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-primary">
              <span className="text-xl">→</span>
              Período meta: 2024–2027
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
