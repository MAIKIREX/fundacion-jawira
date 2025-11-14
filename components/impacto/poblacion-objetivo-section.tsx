'use client'

import { Card } from '@/components/ui/card'
import { Users, Zap, Home, BookOpen, Stethoscope } from 'lucide-react'

export default function PoblacionObjetivoSection() {
  const grupos = [
    {
      titulo: 'Niñas, niños y adolescentes',
      descripcion: 'Acceso a educación de calidad, competencias digitales y servicios de salud integral que fortalezcan su desarrollo presente y futuro.',
      icono: Users,
      color: 'from-blue-100 to-blue-50',
      borderColor: 'border-blue-300',
    },
    {
      titulo: 'Mujeres',
      descripcion: 'Empoderamiento mediante tecnología, educación y salud, con enfoque en equidad de género y autonomía económica.',
      icono: Zap,
      color: 'from-orange-100 to-orange-50',
      borderColor: 'border-orange-300',
    },
    {
      titulo: 'Comunidades rurales y periurbanas',
      descripcion: 'Cierre de brechas digitales y educativas, acceso a tecnología productiva y servicios de salud cercanos a sus territorios.',
      icono: Home,
      color: 'from-green-100 to-green-50',
      borderColor: 'border-green-300',
    },
    {
      titulo: 'Instituciones educativas',
      descripcion: 'Fortalecimiento de capacidades, integración de tecnología innovadora en procesos pedagógicos y apoyo a formación integral.',
      icono: BookOpen,
      color: 'from-teal-100 to-teal-50',
      borderColor: 'border-teal-300',
    },
    {
      titulo: 'Centros y redes de salud',
      descripcion: 'Ampliación de servicios, mejora de acceso tecnológico, atención integral y trabajo coordinado con educación y desarrollo económico.',
      icono: Stethoscope,
      color: 'from-red-100 to-red-50',
      borderColor: 'border-red-300',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Población objetivo
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl">
              El impacto de JAWIRA está orientado a personas y comunidades que enfrentan brechas significativas en tecnología, educación y salud.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grupos.map((grupo, index) => {
              const Icon = grupo.icono
              return (
                <Card
                  key={index}
                  className={`bg-gradient-to-br ${grupo.color} border-2 ${grupo.borderColor} p-6 hover:shadow-lg transition-shadow`}
                >
                  <div className="space-y-4">
                    <div className="p-3 bg-white rounded-lg w-fit">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-primary">{grupo.titulo}</h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {grupo.descripcion}
                      </p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
