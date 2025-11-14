'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle, Calendar, TrendingUp, Users, RefreshCw } from 'lucide-react'

export default function EvaluacionSeguimientoSection() {
  const evaluaciones = [
    {
      icon: Calendar,
      titulo: 'Evaluación mensual',
      descripcion: 'Revisión de actividades ejecutadas, desempeño del personal y cumplimiento de metas operativas.',
      color: 'from-blue-100 to-blue-50',
      textColor: 'text-blue-600'
    },
    {
      icon: TrendingUp,
      titulo: 'Monitoreo trimestral',
      descripcion: 'Análisis de indicadores clave en tecnología, educación y salud para evaluar el progreso de iniciativas.',
      color: 'from-green-100 to-green-50',
      textColor: 'text-green-600'
    },
    {
      icon: CheckCircle,
      titulo: 'Evaluación anual',
      descripcion: 'Valoración integral del impacto social y económico de nuestros proyectos durante el año.',
      color: 'from-orange-100 to-orange-50',
      textColor: 'text-orange-600'
    },
    {
      icon: Users,
      titulo: 'Encuestas de satisfacción',
      descripcion: 'Consulta a beneficiarios, instituciones aliadas y comunidades sobre percepción y satisfacción con nuestras iniciativas.',
      color: 'from-purple-100 to-purple-50',
      textColor: 'text-purple-600'
    },
    {
      icon: RefreshCw,
      titulo: 'Mejora continua',
      descripcion: 'Uso de la información recolectada para mejorar programas, decisiones estratégicas y gestión organizacional.',
      color: 'from-teal-100 to-teal-50',
      textColor: 'text-teal-600'
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Evaluación y seguimiento
            </h2>
            <p className="text-lg text-foreground/70">
              Un sistema integral de evaluación continua que nos permite medir resultados, identificar mejoras y rendir cuentas del impacto generado.
            </p>
          </div>

          {/* Grid de Evaluaciones */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {evaluaciones.map((item, idx) => {
              const Icon = item.icon
              return (
                <Card
                  key={idx}
                  className={`p-6 bg-gradient-to-br ${item.color} border-2 border-gray-200 hover:shadow-md transition-all`}
                >
                  <Icon className={`w-10 h-10 ${item.textColor} mb-4`} />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.titulo}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {item.descripcion}
                  </p>
                </Card>
              )
            })}
          </div>

          {/* Info complementaria */}
          <Card className="p-6 md:p-8 bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200">
            <h3 className="text-xl font-semibold text-primary mb-4">
              ✓ Ciclo de aprendizaje y mejora
            </h3>
            <p className="text-foreground/70">
              Cada resultado de evaluación genera aprendizajes que retroalimentan nuestros procesos. Estos ciclos de evaluación y mejora continua nos permiten ajustar estrategias, aumentar efectividad y garantizar que cada recurso sea utilizado de forma óptima en beneficio de las comunidades.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
