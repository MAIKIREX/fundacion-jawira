import { TrendingUp, Lightbulb, Award, Users } from 'lucide-react'

const resultados = [
  {
    icon: TrendingUp,
    titulo: 'Mayor acceso a servicios de salud',
    descripcion: 'Ampliación del acceso a servicios de salud preventiva y telemedicina para comunidades urbanas, periurbanas y rurales.',
  },
  {
    icon: Lightbulb,
    titulo: 'Reducción de brechas digitales',
    descripcion: 'Disminución de la brecha digital y educativa mediante programas de alfabetización y formación continua.',
  },
  {
    icon: Award,
    titulo: 'Soluciones tecnológicas adaptadas',
    descripcion: 'Implementación y validación de tecnologías diseñadas específicamente para contextos locales.',
  },
  {
    icon: Users,
    titulo: 'Fortalecimiento de capacidades',
    descripcion: 'Desarrollo del capital humano y fortalecimiento de capacidades en tecnología, educación y salud.',
  },
]

export default function ResultadosSection() {
  return (
    <section className="py-24 md:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
            Impacto proyectado
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground tracking-tight leading-tight mt-3">
            Resultados esperados
          </h2>
          <p className="text-base text-primary-foreground/50 mt-4 max-w-xl mx-auto leading-relaxed">
            Impactos concretos que generará el Centro Integral JAWIRA.
          </p>
        </div>

        {/* Results grid — gap-px dividers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10 rounded-2xl overflow-hidden">
          {resultados.map((resultado, i) => {
            const Icon = resultado.icon
            return (
              <div key={i} className="bg-primary p-8 md:p-10 space-y-4">
                <div className="w-11 h-11 rounded-xl bg-primary-foreground/8 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary-foreground/80" />
                </div>
                <h3 className="text-base font-bold text-primary-foreground tracking-tight">
                  {resultado.titulo}
                </h3>
                <p className="text-sm text-primary-foreground/45 leading-relaxed">
                  {resultado.descripcion}
                </p>
              </div>
            )
          })}
        </div>

        {/* Replicable model callout */}
        <div className="mt-16 md:mt-20 max-w-3xl mx-auto text-center">
          <p className="text-base text-primary-foreground/60 leading-relaxed">
            El Centro Integral JAWIRA se diseña como un{" "}
            <span className="font-semibold text-primary-foreground">modelo replicable</span> que puede
            implementarse en otros municipios y departamentos del país, multiplicando su impacto y generando
            oportunidades de desarrollo sostenible a nivel nacional.
          </p>
        </div>

      </div>
    </section>
  )
}
