import { Heart, Laptop, Leaf, TrendingUp, Lightbulb } from 'lucide-react'

const resultados = [
  {
    titulo: 'Mayor acceso a salud',
    descripcion: 'Ampliación de servicios de salud integral y accesibles para comunidades urbanas, periurbanas y rurales.',
    icono: Heart,
  },
  {
    titulo: 'Reducción de brechas',
    descripcion: 'Cierre progresivo de brechas digitales y educativas en poblaciones vulnerables y territorios rezagados.',
    icono: Laptop,
  },
  {
    titulo: 'Sostenibilidad económica',
    descripcion: 'Uso más eficiente y sostenible de tecnología productiva en minería, agropecuaria y pequeño comercio.',
    icono: Leaf,
  },
  {
    titulo: 'Fortalecimiento de competencias',
    descripcion: 'Mejora significativa de habilidades tecnológicas, educativas y de salud para mayor autonomía.',
    icono: TrendingUp,
  },
  {
    titulo: 'Modelos innovadores',
    descripcion: 'Enfoques innovadores, replicables y escalables de intervención social en la región latinoamericana.',
    icono: Lightbulb,
  },
]

export default function ResultadosEsperadosSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
              Cambios esperados
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight mt-3">
              Resultados esperados
            </h2>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed max-w-md md:pb-1">
            Cambios concretos que esperamos lograr a través de nuestro trabajo integrado en tecnología, educación y salud.
          </p>
        </div>

        {/* Large-number editorial grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {resultados.map((resultado, i) => {
            const Icon = resultado.icono
            return (
              <div key={i} className="group">
                <div className="text-5xl font-bold text-border group-hover:text-secondary transition-colors mb-5 tracking-tighter">
                  0{i + 1}
                </div>
                <div className="space-y-3 pt-5 border-t border-border">
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-primary/50 flex-shrink-0" />
                    <h3 className="text-base font-bold text-primary tracking-tight">
                      {resultado.titulo}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {resultado.descripcion}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
