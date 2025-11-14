'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Shield, Users, Heart } from 'lucide-react'

export default function PoliticasPrincipiosSection() {
  const politicas = [
    {
      icon: Shield,
      titulo: 'Política de protección de datos',
      descripcion: 'Protección de información personal y confidencial de beneficiarios, aliados y colaboradores.',
      estado: 'En desarrollo',
      badgeColor: 'bg-blue-100 text-blue-800'
    },
    {
      icon: Users,
      titulo: 'Política de prevención de violencia y acoso',
      descripcion: 'Compromiso con espacios seguros, libres de violencia, discriminación y acoso en todas nuestras iniciativas.',
      estado: 'En desarrollo',
      badgeColor: 'bg-orange-100 text-orange-800'
    },
    {
      icon: Heart,
      titulo: 'Código de ética institucional',
      descripcion: 'Marco de principios y valores que guían el comportamiento y toma de decisiones de toda la organización.',
      estado: 'En desarrollo',
      badgeColor: 'bg-green-100 text-green-800'
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Políticas y principios relacionados con la transparencia
            </h2>
            <p className="text-lg text-foreground/70">
              La transparencia de JAWIRA se apoya en sus valores institucionales y principios de no discriminación, equidad e inclusión.
            </p>
          </div>

          {/* Valores Institucionales */}
          <Card className="p-6 md:p-8 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Nuestros valores institucionales
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-foreground mb-2">✓ Integridad</p>
                <p className="text-sm text-foreground/70">Actuar con honestidad, transparencia y coherencia en nuestras decisiones y acciones.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">✓ Responsabilidad social</p>
                <p className="text-sm text-foreground/70">Comprometerse con el bienestar de las comunidades y la sostenibilidad del planeta.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">✓ Servicio</p>
                <p className="text-sm text-foreground/70">Poner el bien común y las necesidades comunitarias al centro de nuestro trabajo.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">✓ Respeto</p>
                <p className="text-sm text-foreground/70">Reconocer la dignidad, derechos y diversidad de todas las personas.</p>
              </div>
            </div>
          </Card>

          {/* Políticas Futuras */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary text-center">
              Políticas en desarrollo
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {politicas.map((politica, idx) => {
                const Icon = politica.icon
                return (
                  <Card
                    key={idx}
                    className="p-6 bg-white border-2 border-gray-200 hover:shadow-md transition-all"
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <Icon className="w-8 h-8 text-primary" />
                        <Badge className={politica.badgeColor} variant="secondary">
                          {politica.estado}
                        </Badge>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {politica.titulo}
                        </h3>
                        <p className="text-sm text-foreground/70">
                          {politica.descripcion}
                        </p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Principios */}
          <Card className="p-6 md:p-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-orange-200">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Principios relacionados
            </h3>
            <ul className="space-y-2 text-foreground/70">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-sm"><span className="font-semibold">No discriminación:</span> Acceso equitativo a nuestros servicios sin importar género, raza, religión u origen.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-sm"><span className="font-semibold">Equidad de género:</span> Compromiso con la igualdad de derechos y oportunidades entre hombres y mujeres.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-sm"><span className="font-semibold">Respeto a derechos humanos:</span> Protección y promoción de derechos fundamentales en todas nuestras iniciativas.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-sm"><span className="font-semibold">Interculturalidad:</span> Reconocimiento y valoración de la diversidad cultural en La Paz y el Departamento.</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
