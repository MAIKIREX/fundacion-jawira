'use client'

import { Card } from '@/components/ui/card'
import { BarChart3, TrendingUp, CheckSquare, MessageCircle, FileText } from 'lucide-react'

export default function IndicadoresEvaluacionSection() {
  const indicadores = [
    {
      titulo: 'Evaluaciones mensuales',
      descripcion: 'Monitoreo sistemático de actividades y desempeño del equipo para asegurar calidad en la ejecución.',
      icono: BarChart3,
      color: 'from-blue-100 to-blue-50',
      borderColor: 'border-blue-300',
    },
    {
      titulo: 'Monitoreo trimestral',
      descripcion: 'Análisis de indicadores clave de participación, cobertura y resultados en tecnología, educación y salud.',
      icono: TrendingUp,
      color: 'from-green-100 to-green-50',
      borderColor: 'border-green-300',
    },
    {
      titulo: 'Evaluación anual',
      descripcion: 'Medición integral del impacto social y económico de nuestros proyectos y programas en el territorio.',
      icono: CheckSquare,
      color: 'from-orange-100 to-orange-50',
      borderColor: 'border-orange-300',
    },
    {
      titulo: 'Encuestas de satisfacción',
      descripcion: 'Recogida de retroalimentación de personas beneficiarias e instituciones aliadas para mejora continua.',
      icono: MessageCircle,
      color: 'from-purple-100 to-purple-50',
      borderColor: 'border-purple-300',
    },
    {
      titulo: 'Informes y auditorías',
      descripcion: 'Elaboración de informes técnicos y, cuando sea posible, auditorías externas para garantizar transparencia.',
      icono: FileText,
      color: 'from-teal-100 to-teal-50',
      borderColor: 'border-teal-300',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Cómo medimos nuestro impacto
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Contamos con un sistema robusto de evaluación y seguimiento que garantiza transparencia y mejora continua.
            </p>
          </div>

          {/* Indicators Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {indicadores.map((indicador, index) => {
              const Icon = indicador.icono
              return (
                <Card
                  key={index}
                  className={`bg-gradient-to-br ${indicador.color} border-2 ${indicador.borderColor} p-6 hover:shadow-lg transition-shadow`}
                >
                  <div className="space-y-4">
                    <div className="p-3 bg-white rounded-lg w-fit">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-primary">{indicador.titulo}</h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {indicador.descripcion}
                      </p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-xl p-8 border border-primary/20">
            <p className="text-foreground/80 leading-relaxed">
              La evaluación es una herramienta central para mejorar continuamente nuestros programas y asegurar la máxima efectividad. Los datos recolectados nos permiten identificar fortalezas, desafíos y oportunidades de innovación, mientras que la transparencia en nuestros resultados genera confianza con las comunidades, instituciones aliadas y donantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
