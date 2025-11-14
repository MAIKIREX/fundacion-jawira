'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, Users, Lightbulb, Award } from 'lucide-react'

const resultados = [
  {
    icon: TrendingUp,
    titulo: 'Mayor Acceso a Servicios de Salud',
    descripcion: 'Ampliación del acceso a servicios de salud preventiva y telemedicina para comunidades urbanas, periurbanas y rurales'
  },
  {
    icon: Lightbulb,
    titulo: 'Reducción de Brechas Digitales y Educativas',
    descripcion: 'Disminución de la brecha digital y educativa mediante programas de alfabetización y formación continua'
  },
  {
    icon: Award,
    titulo: 'Soluciones Tecnológicas Adaptadas',
    descripcion: 'Implementación y validación de tecnologías diseñadas específicamente para contextos locales'
  },
  {
    icon: Users,
    titulo: 'Fortalecimiento de Capacidades',
    descripcion: 'Desarrollo del capital humano y fortalecimiento de capacidades en tecnología, educación y salud'
  },
]

export default function ResultadosSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Resultados Esperados
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Impactos concretos que generará el Centro Integral JAWIRA
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {resultados.map((resultado, i) => {
            const Icon = resultado.icon
            return (
              <Card key={i} className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-primary">{resultado.titulo}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{resultado.descripcion}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border-l-4 border-green-500">
          <h3 className="font-semibold text-primary mb-3">Modelo Replicable</h3>
          <p className="text-foreground/80">
            El Centro Integral JAWIRA se diseña como un modelo replicable que puede implementarse en otros municipios y departamentos del país, multiplicando su impacto y generando oportunidades de desarrollo sostenible a nivel nacional.
          </p>
        </div>
      </div>
    </section>
  )
}
