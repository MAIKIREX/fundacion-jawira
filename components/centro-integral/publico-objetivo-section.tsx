import { Users, Heart, Home, Building } from 'lucide-react'

const publicos = [
  {
    icon: Users,
    titulo: 'Niñas, niños y adolescentes',
    descripcion: 'Acceso a educación digital, formación en competencias del siglo XXI y servicios de salud preventiva.',
  },
  {
    icon: Heart,
    titulo: 'Mujeres y grupos vulnerables',
    descripcion: 'Oportunidades de formación, empoderamiento y acceso a servicios de salud integral.',
  },
  {
    icon: Home,
    titulo: 'Población urbana, periurbana y rural',
    descripcion: 'Del Departamento de La Paz, con énfasis en comunidades con acceso limitado a servicios.',
  },
  {
    icon: Building,
    titulo: 'Instituciones y organizaciones',
    descripcion: 'Educativas, centros de salud y organizaciones comunitarias que buscan fortalecer capacidades.',
  },
]

export default function PublicoObjetivoSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">

          {/* Left: Header */}
          <div className="lg:sticky lg:top-32 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
                Alcance social
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight">
                ¿A quién beneficia el Centro Integral?
              </h2>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              Nuestros servicios están diseñados para poblaciones específicas del Departamento de La Paz, priorizando comunidades con mayor vulnerabilidad.
            </p>
          </div>

          {/* Right: Audience segments */}
          <div className="space-y-0">
            {publicos.map((publico, i) => {
              const Icon = publico.icon
              return (
                <div
                  key={i}
                  className={`flex items-start gap-5 py-8 group ${
                    i !== 0 ? 'border-t border-border/60' : ''
                  }`}
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-5 h-5 text-primary/70" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-primary tracking-tight">
                      {publico.titulo}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                      {publico.descripcion}
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
