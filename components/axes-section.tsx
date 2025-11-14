'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Zap, Heart, ArrowRight } from 'lucide-react'

const axes = [
  {
    id: 1,
    title: 'Tecnología Productiva y Tecnológica',
    description: 'Impulsamos la innovación tecnológica y digital para fortalecer capacidades productivas en comunidades vulnerables.',
    icon: Zap,
    colors: 'bg-blue-100 text-blue-700 border-blue-300',
    bgGradient: 'from-blue-50 to-blue-100/50'
  },
  {
    id: 2,
    title: 'Educación',
    description: 'Promovemos acceso a educación de calidad con programas de alfabetización digital y formación integral.',
    icon: BookOpen,
    colors: 'bg-green-100 text-green-700 border-green-300',
    bgGradient: 'from-green-50 to-green-100/50'
  },
  {
    id: 3,
    title: 'Salud',
    description: 'Facilitamos acceso a servicios de salud preventiva y telemedicina para comunidades desatendidas.',
    icon: Heart,
    colors: 'bg-orange-100 text-orange-700 border-orange-300',
    bgGradient: 'from-orange-50 to-orange-100/50'
  },
]

export default function AxesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nuestros ejes de trabajo
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Articulamos tres áreas clave para generar impacto integral en el desarrollo sostenible
          </p>
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
                  
                  <Link
                    href="/areas-de-trabajo"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                  >
                    Ver más
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
