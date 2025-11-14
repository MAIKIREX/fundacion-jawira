'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BookOpen, Zap, Heart } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background gradient decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-l from-blue-100 to-transparent opacity-40 -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gradient-to-r from-green-100 to-transparent opacity-40 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary">
              Fundación JAWIRA: tecnología, educación y salud que fluyen hacia el desarrollo
            </h1>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              Una fundación sin fines de lucro con sede en La Paz, Bolivia que articula tecnología productiva, educación y salud para comunidades vulnerables y el desarrollo integral sostenible.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg">
                <Link href="/fundacion">Conoce la fundación</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 font-semibold rounded-lg">
                <Link href="/contacto">Quiero apoyar</Link>
              </Button>
            </div>
          </div>

          {/* Right: Visual Representation */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 md:p-12 shadow-lg border border-blue-100">
              <div className="space-y-6">
                {/* Icon row 1 */}
                <div className="flex justify-between items-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-green-700" />
                  </div>
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-blue-700" />
                  </div>
                </div>

                {/* Wave visualization */}
                <div className="flex justify-center">
                  <div className="text-5xl text-gradient bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent font-bold">
                    ≈
                  </div>
                </div>

                {/* Icon row 2 */}
                <div className="flex justify-center items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-orange-600" />
                  </div>
                </div>

                {/* Text highlight */}
                <div className="text-center pt-4 border-t border-blue-200">
                  <p className="text-sm font-semibold text-primary">Impactando comunidades</p>
                  <p className="text-xs text-foreground/60">En La Paz, Bolivia</p>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-yellow-300 opacity-20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
