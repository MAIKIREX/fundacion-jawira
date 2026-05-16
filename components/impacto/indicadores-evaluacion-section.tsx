import { BarChart3, TrendingUp, CheckSquare, MessageCircle, FileText } from 'lucide-react'

const indicadores = [
  {
    titulo: 'Evaluaciones mensuales',
    descripcion: 'Monitoreo sistemático de actividades y desempeño del equipo para asegurar calidad en la ejecución.',
    icono: BarChart3,
  },
  {
    titulo: 'Monitoreo trimestral',
    descripcion: 'Análisis de indicadores clave de participación, cobertura y resultados en tecnología, educación y salud.',
    icono: TrendingUp,
  },
  {
    titulo: 'Evaluación anual',
    descripcion: 'Medición integral del impacto social y económico de nuestros proyectos y programas en el territorio.',
    icono: CheckSquare,
  },
  {
    titulo: 'Encuestas de satisfacción',
    descripcion: 'Retroalimentación de personas beneficiarias e instituciones aliadas para mejora continua.',
    icono: MessageCircle,
  },
  {
    titulo: 'Informes y auditorías',
    descripcion: 'Elaboración de informes técnicos y auditorías externas para garantizar transparencia.',
    icono: FileText,
  },
]

export default function IndicadoresEvaluacionSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">

          {/* Left: Header + context */}
          <div className="lg:sticky lg:top-32 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
                Evaluación y seguimiento
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight">
                Cómo medimos nuestro impacto
              </h2>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              Contamos con un sistema robusto de evaluación y seguimiento que garantiza transparencia y mejora continua. Los datos recolectados nos permiten identificar fortalezas, desafíos y oportunidades de innovación.
            </p>
          </div>

          {/* Right: Indicators list */}
          <div className="space-y-0">
            {indicadores.map((indicador, i) => {
              const Icon = indicador.icono
              return (
                <div
                  key={i}
                  className={`flex items-start gap-5 py-7 group ${
                    i !== 0 ? 'border-t border-border/60' : ''
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/6 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-5 h-5 text-primary/70" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-primary tracking-tight">
                      {indicador.titulo}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                      {indicador.descripcion}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
