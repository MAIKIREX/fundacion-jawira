'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Heart, Users, Handshake } from 'lucide-react'

const opciones = [
  {
    icon: Users,
    titulo: 'Voluntariado',
    descripcion: 'Aporta tu tiempo y talento en alguna de las áreas del Centro Integral'
  },
  {
    icon: Heart,
    titulo: 'Donaciones',
    descripcion: 'Apoya infraestructura, equipos o programas específicos'
  },
  {
    icon: Handshake,
    titulo: 'Alianzas',
    descripcion: 'Colabora como institución con nuestros proyectos'
  },
]

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            ¿Quieres apoyar el Centro Integral JAWIRA?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Existen múltiples formas de ser parte de este transformador proyecto
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {opciones.map((opcion, i) => {
            const Icon = opcion.icon
            return (
              <Card key={i} className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2">{opcion.titulo}</h3>
                      <p className="text-sm text-foreground/70">{opcion.descripcion}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button 
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg px-8"
          >
            <Link href="/contacto">
              Quiero apoyar
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
