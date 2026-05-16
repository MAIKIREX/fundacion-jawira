import { Calendar, TrendingUp, CheckSquare, Users, RefreshCw } from 'lucide-react'

const evaluaciones = [
  {
    icon: Calendar,
    titulo: 'Evaluación mensual',
    descripcion: 'Revisión de actividades ejecutadas, desempeño del personal y cumplimiento de metas operativas.',
  },
  {
    icon: TrendingUp,
    titulo: 'Monitoreo trimestral',
    descripcion: 'Análisis de indicadores clave en tecnología, educación y salud para evaluar progreso.',
  },
  {
    icon: CheckSquare,
    titulo: 'Evaluación anual',
    descripcion: 'Valoración integral del impacto social y económico de nuestros proyectos durante el año.',
  },
  {
    icon: Users,
    titulo: 'Encuestas de satisfacción',
    descripcion: 'Consulta a beneficiarios e instituciones aliadas sobre percepción y satisfacción.',
  },
  {
    icon: RefreshCw,
    titulo: 'Mejora continua',
    descripcion: 'Uso de la información recolectada para mejorar programas y decisiones estratégicas.',
  },
]

export default function EvaluacionSeguimientoSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
              Sistema de medición
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight mt-3">
              Evaluación y seguimiento
            </h2>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed max-w-md md:pb-1">
            Un sistema integral de evaluación continua que nos permite medir resultados e identificar mejoras.
          </p>
        </div>

        {/* Large-number editorial grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {evaluaciones.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="group">
                <div className="text-5xl font-bold text-border group-hover:text-secondary transition-colors mb-5 tracking-tighter">
                  0{i + 1}
                </div>
                <div className="space-y-3 pt-5 border-t border-border">
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-primary/50 flex-shrink-0" />
                    <h3 className="text-base font-bold text-primary tracking-tight">
                      {item.titulo}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.descripcion}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Cycle note */}
        <div className="mt-16 pt-8 border-t border-border max-w-3xl">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-medium text-primary">Ciclo de aprendizaje y mejora:</span>{" "}
            Cada resultado de evaluación genera aprendizajes que retroalimentan nuestros procesos,
            permitiendo ajustar estrategias y garantizar que cada recurso sea utilizado de forma
            óptima en beneficio de las comunidades.
          </p>
        </div>

      </div>
    </section>
  )
}
