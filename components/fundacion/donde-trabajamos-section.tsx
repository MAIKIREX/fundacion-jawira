import { Card } from '@/components/ui/card'
import { MapPin, Navigation } from 'lucide-react'

export default function DondeTrabajamoSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Dónde Trabajamos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una institución con presencia territorial comprometida con La Paz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-l-blue-500">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-primary mb-2">
                    Foco Principal: La Paz
                  </h3>
                  <p className="text-muted-foreground">
                    El Departamento de La Paz es nuestro territorio prioritario de acción, con énfasis en zonas urbanas, periurbanas y rurales donde existe mayor vulnerabilidad.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-emerald-500">
              <div className="flex items-start gap-4">
                <Navigation className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-primary mb-2">
                    Sede Institucional
                  </h3>
                  <p className="text-muted-foreground">
                    Ubicada en la ciudad de La Paz, Zona Gran Poder. Desde aquí coordinamos nuestros programas y nos conectamos con actores locales e institucionales.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-orange-500">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary mb-2">
                    Vocación de Expansión
                  </h3>
                  <p className="text-muted-foreground">
                    Con aprendizajes sólidos en La Paz, aspiramos a expandir nuestro modelo a otras regiones del país, replicando nuestro enfoque integral de desarrollo.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Illustration */}
          <div className="relative h-96 flex items-center justify-center">
            <svg viewBox="0 0 300 300" className="w-full h-full max-w-sm">
              {/* Map background */}
              <circle cx="150" cy="150" r="140" fill="#e0f2fe" stroke="#0066cc" strokeWidth="2" />
              
              {/* City marker */}
              <circle cx="150" cy="120" r="8" fill="#0066cc" />
              <circle cx="150" cy="120" r="15" fill="none" stroke="#0066cc" strokeWidth="2" opacity="0.3" />
              
              {/* Rural markers */}
              <circle cx="100" cy="160" r="6" fill="#00aa66" />
              <circle cx="180" cy="200" r="6" fill="#00aa66" />
              <circle cx="120" cy="220" r="6" fill="#00aa66" />
              <circle cx="200" cy="140" r="6" fill="#00aa66" />
              
              {/* Connection lines */}
              <line x1="150" y1="120" x2="100" y2="160" stroke="#0066cc" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" />
              <line x1="150" y1="120" x2="180" y2="200" stroke="#0066cc" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" />
              <line x1="150" y1="120" x2="120" y2="220" stroke="#0066cc" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" />
              <line x1="150" y1="120" x2="200" y2="140" stroke="#0066cc" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" />
              
              {/* Labels */}
              <text x="155" y="100" fontSize="12" fill="#0066cc" fontWeight="bold">
                La Paz
              </text>
              <text x="65" y="175" fontSize="10" fill="#00aa66">
                Zona Rural
              </text>
              <text x="185" y="220" fontSize="10" fill="#00aa66">
                Periurbana
              </text>
              <text x="205" y="135" fontSize="10" fill="#00aa66">
                Rural
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
