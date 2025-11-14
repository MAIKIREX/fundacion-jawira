'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

const servicios = {
  tecnologia: [
    'Laboratorios de innovación tecnológica',
    'Desarrollo de herramientas para minería, agropecuaria e industria',
    'Plataformas y soluciones digitales para educación y salud',
    'Asesoría y acompañamiento técnico en implementación de tecnología',
    'Diseño e iteración de prototipos adaptados al contexto local'
  ],
  educacion: [
    'Alfabetización digital básica y avanzada',
    'Programas de formación docente en TIC',
    'Diplomados, cursos y talleres sobre competencias digitales',
    'Acompañamiento a unidades educativas y organizaciones sociales',
    'Contenidos educativos abiertos y accesibles'
  ],
  salud: [
    'Consultas presenciales y telemedicina',
    'Programas de prevención (nutrición, salud mental, salud sexual y reproductiva)',
    'Capacitación de promotores/as comunitarios de salud',
    'Uso de plataformas digitales para seguimiento y orientación',
    'Servicios de orientación en salud preventiva'
  ]
}

export default function ServiciosSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Servicios que ofrece el Centro Integral
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Acceso a servicios especializados en cada una de nuestras áreas de trabajo
          </p>
        </div>

        <Tabs defaultValue="tecnologia" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="tecnologia" className="text-base">Tecnología</TabsTrigger>
            <TabsTrigger value="educacion" className="text-base">Educación</TabsTrigger>
            <TabsTrigger value="salud" className="text-base">Salud</TabsTrigger>
          </TabsList>

          <TabsContent value="tecnologia" className="space-y-4">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <span className="text-2xl">🔧</span>
                  Servicios de Tecnología Productiva y Tecnológica
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {servicios.tecnologia.map((servicio, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{servicio}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="educacion" className="space-y-4">
            <Card className="bg-gradient-to-br from-green-50 to-green-100/50">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <span className="text-2xl">📚</span>
                  Servicios de Educación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {servicios.educacion.map((servicio, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{servicio}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="salud" className="space-y-4">
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100/50">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <span className="text-2xl">❤️</span>
                  Servicios de Salud
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {servicios.salud.map((servicio, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{servicio}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
