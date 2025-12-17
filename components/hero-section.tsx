"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Zap, Heart } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/community-development-people-working-together-bolivia.png"
          alt="Comunidad trabajando junta en desarrollo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary text-balance">
              Fundación JAWIRA: tecnología, educación y salud que fluyen hacia el desarrollo
            </h1>

            <p className="text-lg md:text-xl text-foreground/75 leading-relaxed text-pretty">
              Una fundación sin fines de lucro con sede en La Paz, Bolivia que articula tecnología productiva, educación
              y salud para comunidades vulnerables y el desarrollo integral sostenible.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <Link href="/fundacion">Conoce la fundación</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-xl transition-all bg-white"
              >
                <Link href="/contacto">Quiero apoyar</Link>
              </Button>
            </div>
          </div>

          {/* Right: Visual Representation */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50/50 via-green-50/30 to-orange-50/50 rounded-3xl p-8 md:p-12 shadow-xl border border-muted backdrop-blur-sm bg-white/90">
              <div className="space-y-8">
                {/* Icon row 1 */}
                <div className="flex justify-between items-center">
                  <div className="w-20 h-20 rounded-2xl bg-secondary/10 border-2 border-secondary/20 flex items-center justify-center shadow-sm">
                    <BookOpen className="w-10 h-10 text-secondary" />
                  </div>
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center shadow-sm">
                    <Zap className="w-10 h-10 text-primary" />
                  </div>
                </div>

                {/* Wave visualization */}
                <div className="flex justify-center">
                  <div className="text-6xl text-primary/30 font-bold">≈</div>
                </div>

                {/* Icon row 2 */}
                <div className="flex justify-center items-center gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-accent/10 border-2 border-accent/20 flex items-center justify-center shadow-sm">
                    <Heart className="w-10 h-10 text-accent" />
                  </div>
                </div>

                {/* Text highlight */}
                <div className="text-center pt-6 border-t border-muted">
                  <p className="text-base font-semibold text-primary">Impactando comunidades</p>
                  <p className="text-sm text-muted-foreground mt-1">En La Paz, Bolivia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
