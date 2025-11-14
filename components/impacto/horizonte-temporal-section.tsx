'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export default function HorizonteTemporalSection() {
  const fases = [
    {
      periodo: '2026–2028',
      titulo: 'Fase inicial y piloto',
      objetivos: [
        'Implementación del Centro Integral JAWIRA en La Paz',
        'Puesta en marcha de programas en tecnología, educación y salud',
        'Validación de metodologías y modelos de intervención',
        'Construcción de alianzas iniciales con instituciones locales',
        'Establecimiento de sistemas de monitoreo y evaluación',
      ],
    },
    {
      periodo: '2029–2034',
      titulo: 'Fase de consolidación y expansión',
      objetivos: [
        'Ampliación de cobertura a más municipios del Departamento',
        'Fortalecimiento y réplica del modelo del Centro Integral',
        'Escalamiento de programas con resultados comprobados',
        'Búsqueda de alianzas nacionales e internacionales',
        'Consolidación como referencia de innovación social en la región',
      ],
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Horizonte temporal 2026–2034
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl">
              La Fundación JAWIRA planifica su trabajo en dos fases estratégicas que permiten crecer de manera ordenada y sostenible.
            </p>
          </div>

          {/* Timeline */}
          <div className="grid md:grid-cols-2 gap-8">
            {fases.map((fase, index) => (
              <Card
                key={index}
                className="border-2 border-primary/20 p-8 hover:shadow-lg transition-shadow"
              >
                <div className="space-y-6">
                  <div>
                    <span className="inline-block px-4 py-2 bg-yellow-100 text-primary font-semibold rounded-full text-sm mb-4">
                      {fase.periodo}
                    </span>
                    <h3 className="text-2xl font-bold text-primary">{fase.titulo}</h3>
                  </div>

                  <div className="space-y-3">
                    {fase.objetivos.map((objetivo, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <p className="text-foreground/80">{objetivo}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
