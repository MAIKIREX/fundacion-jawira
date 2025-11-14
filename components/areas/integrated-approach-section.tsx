import { Card, CardContent } from '@/components/ui/card'
import { Check } from 'lucide-react'

const benefits = [
  'Mayor impacto y sostenibilidad en intervenciones',
  'Sinergia entre tecnología, educación y salud',
  'Participación comunitaria en toda la cadena de valor',
  'Respuesta integral a necesidades multidimensionales',
  'Mejora de indicadores de desarrollo',
  'Generación de ecosistemas de innovación local'
]

export default function IntegratedApproachSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Un enfoque integrado
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Los tres ejes no funcionan de manera aislada, sino que se articulan estratégicamente para potenciar su impacto mutuo.
          </p>
        </div>

        {/* Integrated diagram concept */}
        <div className="mb-12">
          <div className="flex justify-center mb-8">
            <div className="relative w-64 h-64">
              {/* Three overlapping circles representing integration */}
              <svg viewBox="0 0 200 200" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                {/* Technology circle */}
                <circle cx="60" cy="80" r="50" fill="rgb(219, 234, 254)" opacity="0.6" stroke="rgb(59, 130, 246)" strokeWidth="2" />
                
                {/* Education circle */}
                <circle cx="140" cy="80" r="50" fill="rgb(220, 252, 231)" opacity="0.6" stroke="rgb(34, 197, 94)" strokeWidth="2" />
                
                {/* Health circle */}
                <circle cx="100" cy="150" r="50" fill="rgb(254, 230, 214)" opacity="0.6" stroke="rgb(249, 115, 22)" strokeWidth="2" />
                
                {/* Labels */}
                <text x="40" y="75" fontSize="12" fontWeight="bold" fill="rgb(30, 58, 95)" textAnchor="middle">Tecnología</text>
                <text x="160" y="75" fontSize="12" fontWeight="bold" fill="rgb(30, 58, 95)" textAnchor="middle">Educación</text>
                <text x="100" y="165" fontSize="12" fontWeight="bold" fill="rgb(30, 58, 95)" textAnchor="middle">Salud</text>
              </svg>
            </div>
          </div>

          <p className="text-center text-foreground/75 max-w-2xl mx-auto mb-8">
            La intersección de estos tres ejes crea espacios de innovación donde cada área fortalece y potencia a las otras, generando soluciones más efectivas y sostenibles.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border hover:shadow-md transition-all">
              <CardContent className="pt-6 flex gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-foreground/75">{benefit}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
