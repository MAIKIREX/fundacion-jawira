import { Heart, Hand as Hands, Lightbulb, Users, Scale, Leaf, Shield, BookOpen, Smile, Anchor, Target } from 'lucide-react'

const valores = [
  { icon: Heart, title: 'Esperanza', descripcion: 'Creemos en el potencial transformador de cada persona y comunidad.' },
  { icon: Hands, title: 'Solidaridad', descripcion: 'Trabajamos unidos en la construcción de un futuro compartido.' },
  { icon: Smile, title: 'Empatía', descripcion: 'Escuchamos y comprendemos las necesidades de las comunidades.' },
  { icon: Target, title: 'Compromiso', descripcion: 'Nos responsabilizamos de nuestras acciones y resultados.' },
  { icon: Scale, title: 'Integridad', descripcion: 'Actuamos con transparencia, honestidad y coherencia ética.' },
  { icon: Users, title: 'Servicio', descripcion: 'Ponemos al servicio de otros nuestros talentos y recursos.' },
  { icon: Anchor, title: 'Humildad', descripcion: 'Reconocemos que tenemos mucho por aprender.' },
  { icon: Lightbulb, title: 'Innovación', descripcion: 'Buscamos soluciones creativas a problemas complejos.' },
  { icon: Shield, title: 'Inclusión', descripcion: 'Valoramos la diversidad y garantizamos participación equitativa.' },
  { icon: Hands, title: 'Colaboración', descripcion: 'Reconocemos que los retos se resuelven en alianza.' },
  { icon: BookOpen, title: 'Aprendizaje Continuo', descripcion: 'Nos adaptamos y mejoramos constantemente.' },
  { icon: Leaf, title: 'Sostenibilidad', descripcion: 'Pensamos en el impacto a largo plazo en personas y planeta.' },
]

export default function ValoresSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
            Lo que nos define
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight mt-3">
            Nuestros valores
          </h2>
          <p className="text-base text-muted-foreground mt-4 leading-relaxed">
            Los principios fundamentales que guían cada decisión y acción en la Fundación JAWIRA.
          </p>
        </div>

        {/* Values grid — asymmetric bento-style: 4-col + 2-col rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 rounded-2xl overflow-hidden">
          {valores.map((valor) => {
            const IconComponent = valor.icon
            return (
              <div
                key={valor.title}
                className="bg-background p-6 md:p-7 space-y-3 group hover:bg-muted/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/6 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <IconComponent className="w-5 h-5 text-primary/70" />
                </div>
                <h3 className="font-semibold text-base text-primary tracking-tight">
                  {valor.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {valor.descripcion}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
