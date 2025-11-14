'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Heart, Home, Building } from 'lucide-react'

const publicos = [
  {
    icon: Users,
    titulo: 'Niñas, niños y adolescentes',
    descripcion: 'Acceso a educación digital, formación en competencias del siglo XXI y servicios de salud preventiva'
  },
  {
    icon: Heart,
    titulo: 'Mujeres y grupos vulnerables',
    descripcion: 'Oportunidades de formación, empoderamiento y acceso a servicios de salud integral'
  },
  {
    icon: Home,
    titulo: 'Población urbana, periurbana y rural',
    descripcion: 'Del Departamento de La Paz, con énfasis en comunidades con acceso limitado a servicios'
  },
  {
    icon: Building,
    titulo: 'Instituciones y organizaciones',
    descripcion: 'Educativas, centros de salud y organizaciones comunitarias que buscan fortalecer capacidades'
  },
]

export default function PublicoObjetivoSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            ¿A quién beneficia el Centro Integral JAWIRA?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Nuestros servicios están diseñados para poblaciones específicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {publicos.map((publico, i) => {
            const Icon = publico.icon
            return (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-orange-100">
                      <Icon className="w-6 h-6 text-orange-700" />
                    </div>
                    <CardTitle className="text-lg text-primary">{publico.titulo}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{publico.descripcion}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
