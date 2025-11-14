'use client'

import { Heart } from 'lucide-react'

export default function VisionImpactoSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 mx-auto mb-4">
              <Heart className="w-6 h-6 text-orange-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Nuestra visión de impacto
            </h2>
          </div>

          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              La Fundación JAWIRA busca generar un impacto social real, medible y sostenible en el Departamento de La Paz. Nuestro trabajo se orienta hacia poblaciones vulnerables, especialmente niñas, niños, adolescentes y mujeres que enfrentan brechas significativas en acceso a tecnología, educación y servicios de salud.
            </p>

            <p>
              El impacto que buscamos generar se basa en tres pilares fundamentales: la mejora del acceso a tecnología productiva e innovadora, el fortalecimiento de la educación de calidad, y la ampliación de servicios de salud integral. Creemos que estos tres ejes, trabajados de forma articulada e integrada, crean sinergias que potencian el desarrollo verdadero de las comunidades.
            </p>

            <p>
              No trabajamos en sectores aislados. Nuestro enfoque es sistémico e integrado: la tecnología sirve para mejorar la educación y la salud; la educación fortalece el uso responsable de tecnología; y la salud es la base para que las personas puedan aprovechar las oportunidades de aprendizaje y desarrollo económico.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
