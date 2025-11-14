'use client'

import { Badge } from '@/components/ui/badge'
import { MapPin, Building2 } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Badges and Visual */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <Badge variant="secondary" className="w-fit bg-yellow-100 text-primary hover:bg-yellow-200 border-yellow-300">
              <MapPin className="w-4 h-4 mr-2" />
              La Paz, Bolivia
            </Badge>
            
            <div className="space-y-4 w-full">
              <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-6 shadow-sm border border-green-200">
                <Building2 className="w-8 h-8 text-green-700 mb-3" />
                <p className="font-semibold text-primary">Organizacion Comunitaria</p>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Quiénes somos
            </h2>
            
            <div className="space-y-4 text-foreground/80">
              <p>
                Fundación JAWIRA es una organización sin fines de lucro comprometida con el desarrollo integral y sostenible en el Departamento de La Paz, Bolivia. El nombre "JAWIRA" significa "río" en idioma aymara, simbolizando el flujo, la vida, la conexión y las oportunidades.
              </p>
              
              <p>
                Trabajamos articulando tres ejes estratégicos fundamentales: tecnología productiva y tecnológica, educación, y salud. Nuestro enfoque se centra en poblaciones vulnerables, promoviendo innovación, equidad de género, interculturalidad y respeto por los derechos humanos.
              </p>
              
              <p>
                Creemos en el poder transformador de conectar comunidades con oportunidades de desarrollo, generando impacto positivo y sostenible en zonas urbanas, periurbanas y rurales del departamento.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-green-300">
                Sin fines de lucro
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-300">
                Desarrollo sostenible
              </Badge>
              <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 border-orange-300">
                Equidad e inclusión
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
