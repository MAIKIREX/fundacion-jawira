'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function ArticulacionSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border-2 border-primary/20">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Parte del modelo integral de JAWIRA
            </h2>

            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              El Centro Integral JAWIRA es el <span className="font-semibold">corazón operativo</span> de la Fundación JAWIRA. Aquí convergen y se articulan nuestras tres <span className="font-semibold">áreas de trabajo estratégicas</span>: tecnología productiva y tecnológica, educación, y salud, generando sinergias que multiplican el impacto en comunidades vulnerables.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg"
              >
                <Link href="/areas-de-trabajo" className="flex items-center gap-2">
                  Ver áreas de trabajo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <Button 
                asChild 
                variant="outline"
                className="font-semibold rounded-lg border-primary/30 text-primary hover:bg-primary/5"
              >
                <Link href="/fundacion" className="flex items-center gap-2">
                  Conocer más sobre la Fundación
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
