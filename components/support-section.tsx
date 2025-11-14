'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, Handshake, Users } from 'lucide-react'

const supportWays = [
  {
    icon: Heart,
    title: 'Donaciones',
    description: 'Contribuye económicamente para financiar nuestros programas y proyectos de impacto.',
    color: 'bg-orange-100 text-orange-700 border-orange-300',
  },
  {
    icon: Users,
    title: 'Voluntariado',
    description: 'Únete a nuestro equipo con tus habilidades y conocimientos para apoyar en terreno.',
    color: 'bg-green-100 text-green-700 border-green-300',
  },
  {
    icon: Handshake,
    title: 'Alianzas',
    description: 'Colabora con nosotros como institución o empresa para generar sinergia de impacto.',
    color: 'bg-blue-100 text-blue-700 border-blue-300',
  },
]

export default function SupportSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Cómo puedes apoyar
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Hay múltiples formas de ser parte del cambio en Fundación JAWIRA
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {supportWays.map((way, i) => {
            const Icon = way.icon
            return (
              <Card key={i} className="border-2 border-border hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${way.color} flex items-center justify-center mb-3 border`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-primary">{way.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription className="text-foreground/75">
                    {way.description}
                  </CardDescription>
                  
                  <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 rounded-lg">
                    <Link href="/contacto">Quiero saber más</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
