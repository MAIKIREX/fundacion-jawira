"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function QuieroApoyarSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/community-development-people-working-together-bolivia.png"
          alt="Comunidad trabajando junta"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary">
            Haz la diferencia
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground tracking-tight leading-tight">
            Cada acción cuenta para construir
            <br className="hidden sm:block" />
            un futuro más equitativo
          </h2>
          <p className="text-base text-primary-foreground/60 leading-relaxed max-w-lg mx-auto">
            Tu participación — como donante, voluntario o aliado — fortalece directamente nuestros programas de tecnología, educación y salud preventiva.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button asChild variant="cta" size="lg">
              <Link href="/quiero-apoyar">
                Quiero apoyar
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/contacto">Contactar</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
