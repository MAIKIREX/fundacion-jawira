'use client'

import { Badge } from '@/components/ui/badge'

export default function CentroHeroSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-600 via-teal-500 to-green-500 text-white overflow-hidden">
      {/* Decorative curved shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full -ml-36 -mb-36" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6">
          <div className="flex justify-center gap-2">
            <Badge className="bg-white/20 text-white border-white/40 hover:bg-white/30">
              Proyecto Estrella
            </Badge>
            <Badge className="bg-white/20 text-white border-white/40 hover:bg-white/30">
              Piloto Replicable
            </Badge>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-balance">
            Centro Integral JAWIRA
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto text-balance leading-relaxed">
            Un espacio que integra tecnología productiva, educación y salud para el desarrollo integral de las comunidades del Departamento de La Paz
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold">🔧</div>
              <p className="text-sm mt-2">Tecnología</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">📚</div>
              <p className="text-sm mt-2">Educación</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">❤️</div>
              <p className="text-sm mt-2">Salud</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
