import Image from 'next/image'
import { Building2, Home, Trees } from 'lucide-react'

const zonas = [
  {
    titulo: 'Zonas urbanas',
    poblacion: '~2.100.000 personas',
    icono: Building2,
  },
  {
    titulo: 'Zonas periurbanas',
    poblacion: '~400.000 personas',
    icono: Home,
  },
  {
    titulo: 'Zonas rurales',
    poblacion: '~375.000 personas',
    icono: Trees,
  },
]

export default function CoberturaTerritorialSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
            Alcance geográfico
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight mt-3">
            Cobertura territorial
          </h2>
          <p className="text-base text-muted-foreground mt-4 leading-relaxed">
            La Fundación JAWIRA tiene su sede inicial en la ciudad de La Paz y trabaja con comunidades de zonas urbanas, periurbanas y rurales del Departamento.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">

          {/* Left: Text + Zones */}
          <div className="space-y-10">
            <div className="space-y-4 text-base text-foreground/70 leading-relaxed">
              <p>
                Nuestra estrategia de cobertura comienza con un enfoque piloto en la ciudad de La Paz,
                evaluando nuestros modelos de intervención y ajustándolos según la retroalimentación de
                las comunidades.
              </p>
              <p>
                A partir de esta base sólida, planificamos expandir gradualmente a otros municipios del
                Departamento, llevando nuestro modelo integrado de tecnología, educación y salud a más
                comunidades vulnerables.
              </p>
            </div>

            {/* Zones list */}
            <div className="space-y-0">
              {zonas.map((zona, i) => {
                const Icon = zona.icono
                return (
                  <div
                    key={i}
                    className={`flex items-center justify-between py-5 ${
                      i !== 0 ? 'border-t border-border/60' : ''
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/6 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary/70" />
                      </div>
                      <span className="text-base font-semibold text-primary tracking-tight">
                        {zona.titulo}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {zona.poblacion}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Total */}
            <div className="pt-6 border-t border-border">
              <div className="flex items-baseline gap-4">
                <span className="text-3xl md:text-4xl font-bold text-primary tracking-tight">~2,8M</span>
                <span className="text-sm text-muted-foreground">
                  personas en el Departamento de La Paz
                </span>
              </div>
            </div>
          </div>

          {/* Right: Map image */}
          <div className="relative rounded-2xl overflow-hidden h-[420px] lg:h-[480px]">
            <Image
              src="/urban-rural-landscape-bolivia-coverage-areas-map.png"
              alt="Mapa de cobertura territorial — Departamento de La Paz"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="text-sm font-medium text-white/80">
                Departamento de La Paz, Bolivia
              </p>
              <p className="text-xs text-white/50 mt-1">
                Zonas urbanas · Periurbanas · Rurales
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
