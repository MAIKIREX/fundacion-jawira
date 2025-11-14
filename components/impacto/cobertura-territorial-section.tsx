'use client'

import { Card } from '@/components/ui/card'
import { Building2, Home, Trees } from 'lucide-react'

export default function CoberturaTerritorialSection() {
  const zonas = [
    {
      titulo: 'Zonas urbanas',
      poblacion: 'Alrededor de 2.100.000 personas',
      icono: Building2,
      color: 'from-blue-100 to-blue-50',
      borderColor: 'border-blue-300',
    },
    {
      titulo: 'Zonas periurbanas',
      poblacion: 'Alrededor de 400.000 personas',
      icono: Home,
      color: 'from-green-100 to-green-50',
      borderColor: 'border-green-300',
    },
    {
      titulo: 'Zonas rurales',
      poblacion: 'Alrededor de 375.000 personas',
      icono: Trees,
      color: 'from-emerald-100 to-emerald-50',
      borderColor: 'border-emerald-300',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Cobertura territorial
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl">
              La Fundación JAWIRA tiene su sede inicial en la ciudad de La Paz y trabaja con comunidades de zonas urbanas, periurbanas y rurales del Departamento, con un enfoque de expansión gradual.
            </p>
          </div>

          {/* Description and Map */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-4 text-foreground/80">
              <p>
                Nuestra estrategia de cobertura comienza con un enfoque piloto en la ciudad de La Paz, evaluando nuestros modelos de intervención y ajustándolos según la retroalimentación de las comunidades.
              </p>
              <p>
                A partir de esta base sólida, planificamos expandir gradualmente a otros municipios del Departamento de La Paz, llevando nuestro modelo integrado de tecnología, educación y salud a más comunidades vulnerables.
              </p>
            </div>

            {/* Stylized Map */}
            <div className="flex items-center justify-center">
              <div className="relative w-full h-80 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl border-2 border-primary/20 flex items-center justify-center overflow-hidden">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 300 400"
                  preserveAspectRatio="none"
                >
                  {/* Stylized department shape */}
                  <defs>
                    <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0066cc" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#00aa66" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M150,50 L200,100 L220,180 L200,260 L150,300 L100,260 L80,180 L100,100 Z"
                    fill="url(#mapGradient)"
                    stroke="#0066cc"
                    strokeWidth="2"
                  />
                  <circle cx="150" cy="140" r="8" fill="#ff6b35" />
                  <text x="150" y="165" textAnchor="middle" className="text-sm font-semibold" fill="#0066cc">
                    La Paz
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {zonas.map((zona, index) => {
              const Icon = zona.icono
              return (
                <Card
                  key={index}
                  className={`bg-gradient-to-br ${zona.color} border-2 ${zona.borderColor} p-6 hover:shadow-md transition-shadow`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-primary">{zona.titulo}</h3>
                      <p className="text-sm text-foreground/70">{zona.poblacion}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Total Population */}
          <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-xl p-8 border border-primary/20 text-center">
            <p className="text-foreground/70 mb-2">Población objetivo total estimada</p>
            <p className="text-4xl md:text-5xl font-bold text-primary">
              ~2,8 millones
            </p>
            <p className="text-foreground/70 mt-2">de personas en el Departamento de La Paz</p>
          </div>
        </div>
      </div>
    </section>
  )
}
