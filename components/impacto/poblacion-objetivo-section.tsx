import { Users, Zap, Home, BookOpen, Stethoscope } from 'lucide-react'

const grupos = [
  {
    titulo: 'Niñas, niños y adolescentes',
    descripcion: 'Acceso a educación de calidad, competencias digitales y servicios de salud integral.',
    icono: Users,
  },
  {
    titulo: 'Mujeres',
    descripcion: 'Empoderamiento mediante tecnología, educación y salud, con enfoque en equidad de género.',
    icono: Zap,
  },
  {
    titulo: 'Comunidades rurales y periurbanas',
    descripcion: 'Cierre de brechas digitales y educativas, acceso a tecnología productiva y salud.',
    icono: Home,
  },
  {
    titulo: 'Instituciones educativas',
    descripcion: 'Fortalecimiento de capacidades e integración de tecnología innovadora en procesos pedagógicos.',
    icono: BookOpen,
  },
  {
    titulo: 'Centros y redes de salud',
    descripcion: 'Ampliación de servicios, mejora de acceso tecnológico y atención integral coordinada.',
    icono: Stethoscope,
  },
]

export default function PoblacionObjetivoSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
            Beneficiarios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight mt-3">
            Población objetivo
          </h2>
          <p className="text-base text-muted-foreground mt-4 leading-relaxed">
            El impacto de JAWIRA está orientado a personas y comunidades que enfrentan brechas significativas en tecnología, educación y salud.
          </p>
        </div>

        {/* Groups — bento grid with gap-px */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40 rounded-2xl overflow-hidden">
          {grupos.map((grupo, i) => {
            const Icon = grupo.icono
            return (
              <div
                key={i}
                className="bg-background p-7 md:p-8 space-y-4 group hover:bg-muted/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/6 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-5 h-5 text-primary/70" />
                </div>
                <h3 className="text-base font-bold text-primary tracking-tight">
                  {grupo.titulo}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {grupo.descripcion}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
