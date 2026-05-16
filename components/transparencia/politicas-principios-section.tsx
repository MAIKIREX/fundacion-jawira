import { Shield, Users, Heart } from 'lucide-react'

const valores = [
  { title: 'Integridad', descripcion: 'Actuar con honestidad, transparencia y coherencia en nuestras decisiones y acciones.' },
  { title: 'Responsabilidad social', descripcion: 'Comprometerse con el bienestar de las comunidades y la sostenibilidad del planeta.' },
  { title: 'Servicio', descripcion: 'Poner el bien común y las necesidades comunitarias al centro de nuestro trabajo.' },
  { title: 'Respeto', descripcion: 'Reconocer la dignidad, derechos y diversidad de todas las personas.' },
]

const politicas = [
  {
    icon: Shield,
    titulo: 'Política de protección de datos',
    descripcion: 'Protección de información personal y confidencial de beneficiarios, aliados y colaboradores.',
  },
  {
    icon: Users,
    titulo: 'Política de prevención de violencia y acoso',
    descripcion: 'Compromiso con espacios seguros, libres de violencia y discriminación en todas nuestras iniciativas.',
  },
  {
    icon: Heart,
    titulo: 'Código de ética institucional',
    descripcion: 'Marco de principios y valores que guían el comportamiento y toma de decisiones de toda la organización.',
  },
]

const principios = [
  { title: 'No discriminación', descripcion: 'Acceso equitativo a nuestros servicios sin importar género, raza, religión u origen.' },
  { title: 'Equidad de género', descripcion: 'Compromiso con la igualdad de derechos y oportunidades entre hombres y mujeres.' },
  { title: 'Respeto a derechos humanos', descripcion: 'Protección y promoción de derechos fundamentales en todas nuestras iniciativas.' },
  { title: 'Interculturalidad', descripcion: 'Reconocimiento y valoración de la diversidad cultural en La Paz y el Departamento.' },
]

export default function PoliticasPrincipiosSection() {
  return (
    <section className="py-24 md:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
            Marco ético
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground tracking-tight leading-tight mt-3">
            Políticas y principios
          </h2>
          <p className="text-base text-primary-foreground/50 mt-4 max-w-xl mx-auto leading-relaxed">
            La transparencia de JAWIRA se apoya en sus valores institucionales y principios de no discriminación, equidad e inclusión.
          </p>
        </div>

        {/* Values — gap-px grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10 rounded-2xl overflow-hidden mb-16">
          {valores.map((valor, i) => (
            <div key={i} className="bg-primary p-7 md:p-8 space-y-3">
              <h3 className="text-base font-bold text-primary-foreground tracking-tight">
                {valor.title}
              </h3>
              <p className="text-sm text-primary-foreground/45 leading-relaxed">
                {valor.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* Policies in development */}
        <div className="mb-16">
          <h3 className="text-xs font-bold tracking-widest uppercase text-primary-foreground/30 mb-8">
            Políticas en desarrollo
          </h3>
          <div className="grid md:grid-cols-3 gap-px bg-primary-foreground/10 rounded-2xl overflow-hidden">
            {politicas.map((pol, i) => {
              const Icon = pol.icon
              return (
                <div key={i} className="bg-primary p-7 md:p-8 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl bg-primary-foreground/8 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary-foreground/70" />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-primary-foreground/25">
                      En desarrollo
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-primary-foreground tracking-tight">
                    {pol.titulo}
                  </h3>
                  <p className="text-sm text-primary-foreground/45 leading-relaxed">
                    {pol.descripcion}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Related principles */}
        <div className="max-w-3xl">
          <h3 className="text-xs font-bold tracking-widest uppercase text-primary-foreground/30 mb-6">
            Principios relacionados
          </h3>
          <div className="space-y-0">
            {principios.map((p, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 py-5 ${
                  i !== 0 ? 'border-t border-primary-foreground/8' : ''
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                <div>
                  <span className="text-sm font-semibold text-primary-foreground">{p.title}: </span>
                  <span className="text-sm text-primary-foreground/50">{p.descripcion}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
