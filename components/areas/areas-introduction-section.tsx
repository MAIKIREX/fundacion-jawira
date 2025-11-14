'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Zap, Heart, ArrowRight } from 'lucide-react'

const axes = [
  {
    id: 'tecnologia',
    title: 'Tecnología productiva y tecnológica',
    description: 'Soluciones tecnológicas para impulsar la producción, proteger el medio ambiente y cerrar la brecha digital.',
    icon: Zap,
    colors: 'bg-blue-100 text-blue-700 border-blue-300',
    bgGradient: 'from-blue-50 to-blue-100/50'
  },
  {
    id: 'educacion',
    title: 'Educación',
    description: 'Fortalecemos capacidades educativas y digitales para docentes, estudiantes y comunidades.',
    icon: BookOpen,
    colors: 'bg-green-100 text-green-700 border-green-300',
    bgGradient: 'from-green-50 to-green-100/50'
  },
  {
    id: 'salud',
    title: 'Salud',
    description: 'Promovemos salud preventiva, telemedicina y soluciones digitales para acercar la atención a las comunidades.',
    icon: Heart,
    colors: 'bg-orange-100 text-orange-700 border-orange-300',
    bgGradient: 'from-orange-50 to-orange-100/50'
  },
]

export default function AreasIntroductionSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Tres ejes para un desarrollo integral
          </h2>
          
          <div className="space-y-4 text-foreground/75 max-w-3xl">
            <p>
              Fundación JAWIRA integra tecnología productiva, educación y salud de forma coordinada, no como áreas aisladas. Nuestro enfoque integral busca reducir brechas tecnológicas, educativas y sanitarias en comunidades urbanas, periurbanas y rurales del Departamento de La Paz.
            </p>
            
            <p>
              Cada eje se fortalece con los otros, generando sinergias que multiplican el impacto y promueven el desarrollo sostenible desde una perspectiva holística.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {axes.map((axis) => {
            const Icon = axis.icon
            return (
              <Card 
                key={axis.id}
                className={`border-2 border-border hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br ${axis.bgGradient}`}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${axis.colors} flex items-center justify-center mb-3 border`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-primary">{axis.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription className="text-foreground/75">
                    {axis.description}
                  </CardDescription>
                  
                  <a
                    href={`#${axis.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                  >
                    Ver detalles
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
