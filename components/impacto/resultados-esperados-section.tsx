'use client'

import { Card } from '@/components/ui/card'
import { Heart, Laptop, Leaf, TrendingUp, Lightbulb } from 'lucide-react'

export default function ResultadosEsperadosSection() {
  const resultados = [
    {
      titulo: 'Mayor acceso a salud',
      descripcion: 'Ampliación de servicios de salud integral y accesibles para comunidades urbanas, periurbanas y rurales del Departamento de La Paz.',
      icono: Heart,
      color: 'from-red-100 to-red-50',
      borderColor: 'border-red-300',
    },
    {
      titulo: 'Reducción de brechas',
      descripcion: 'Cierre progresivo de brechas digitales y educativas, especialmente en poblaciones vulnerables y territorios rezagados.',
      icono: Laptop,
      color: 'from-blue-100 to-blue-50',
      borderColor: 'border-blue-300',
    },
    {
      titulo: 'Sostenibilidad económica',
      descripcion: 'Uso más eficiente y sostenible de tecnología productiva, especialmente en minería, agropecuaria y pequeño comercio.',
      icono: Leaf,
      color: 'from-green-100 to-green-50',
      borderColor: 'border-green-300',
    },
    {
      titulo: 'Fortalecimiento de competencias',
      descripcion: 'Mejora significativa de habilidades tecnológicas, educativas y de salud en la población objetivo para mayor autonomía.',
      icono: TrendingUp,
      color: 'from-orange-100 to-orange-50',
      borderColor: 'border-orange-300',
    },
    {
      titulo: 'Modelos innovadores',
      descripcion: 'Generación de enfoques innovadores, replicables y escalables de intervención social en la región latinoamericana.',
      icono: Lightbulb,
      color: 'from-yellow-100 to-yellow-50',
      borderColor: 'border-yellow-300',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Resultados esperados
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Estos son los cambios concretos que esperamos lograr a través de nuestro trabajo integrado en tecnología, educación y salud.
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resultados.map((resultado, index) => {
              const Icon = resultado.icono
              return (
                <Card
                  key={index}
                  className={`bg-gradient-to-br ${resultado.color} border-2 ${resultado.borderColor} p-6 hover:shadow-lg transition-shadow`}
                >
                  <div className="space-y-4">
                    <div className="p-3 bg-white rounded-lg w-fit">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-primary">{resultado.titulo}</h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {resultado.descripcion}
                      </p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
