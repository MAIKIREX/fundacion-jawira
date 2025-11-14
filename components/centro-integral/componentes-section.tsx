'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Zap, BookOpen, Heart } from 'lucide-react'

const componentes = [
  {
    id: 1,
    title: 'Tecnología Productiva y Tecnológica',
    description: 'Desarrollo y prueba de soluciones tecnológicas para minería, agropecuaria e industria.',
    details: [
      'Laboratorios de innovación y diseño de prototipos',
      'Herramientas digitales y desarrollo de software',
      'Aplicaciones y plataformas para educación y salud'
    ],
    icon: Zap,
    colors: 'bg-blue-100 text-blue-700 border-blue-300',
    bgGradient: 'from-blue-50 to-blue-100/50'
  },
  {
    id: 2,
    title: 'Educación',
    description: 'Aulas TIC y espacios de formación continua para comunidades.',
    details: [
      'Programas de alfabetización digital básica y avanzada',
      'Talleres, cursos y diplomados en competencias del siglo XXI',
      'Contenidos educativos digitales adaptados'
    ],
    icon: BookOpen,
    colors: 'bg-green-100 text-green-700 border-green-300',
    bgGradient: 'from-green-50 to-green-100/50'
  },
  {
    id: 3,
    title: 'Salud',
    description: 'Servicios de salud preventiva y telemedicina para comunidades.',
    details: [
      'Consultas presenciales y por telemedicina',
      'Programas de prevención y promoción de la salud',
      'Formación de promotores/as de salud comunitaria'
    ],
    icon: Heart,
    colors: 'bg-orange-100 text-orange-700 border-orange-300',
    bgGradient: 'from-orange-50 to-orange-100/50'
  },
]

export default function ComponentesSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Tres componentes que trabajan juntos
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            El Centro Integral JAWIRA se organiza alrededor de tres componentes interconectados que generan impacto integral
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {componentes.map((componente) => {
            const Icon = componente.icon
            return (
              <Card 
                key={componente.id}
                className={`border-2 border-border hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br ${componente.bgGradient}`}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${componente.colors} flex items-center justify-center mb-3 border`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-primary">{componente.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription className="text-foreground/75">
                    {componente.description}
                  </CardDescription>
                  
                  <ul className="space-y-2 text-sm text-foreground/70">
                    {componente.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
