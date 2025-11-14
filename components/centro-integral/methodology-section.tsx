'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const pasos = [
  {
    numero: '1',
    titulo: 'Diagnóstico Participativo',
    descripcion: 'Identificación conjunta de necesidades con comunidades e instituciones locales'
  },
  {
    numero: '2',
    titulo: 'Diseño de Proyectos Piloto',
    descripcion: 'Creación de iniciativas adaptadas al contexto local y realidad comunitaria'
  },
  {
    numero: '3',
    titulo: 'Adecuación de Infraestructura',
    descripcion: 'Preparación de espacios físicos y digitales para la implementación'
  },
  {
    numero: '4',
    titulo: 'Capacitación Continua',
    descripcion: 'Formación de equipos técnicos y fortalecimiento de capacidades comunitarias'
  },
  {
    numero: '5',
    titulo: 'Plataformas Tecnológicas',
    descripcion: 'Desarrollo e implementación de soluciones digitales de apoyo'
  },
  {
    numero: '6',
    titulo: 'Participación Comunitaria',
    descripcion: 'Sensibilización y movilización activa de beneficiarios en el proceso'
  },
  {
    numero: '7',
    titulo: 'Monitoreo y Evaluación',
    descripcion: 'Seguimiento permanente de resultados e indicadores de impacto'
  },
]

export default function MethodologySection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            ¿Cómo funciona el Centro Integral?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Nuestra metodología se basa en siete pasos clave que aseguran implementación inclusiva y participativa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pasos.map((paso, i) => (
            <div key={i} className="relative">
              {/* Conector visual */}
              {i < pasos.length - 1 && (
                <div className="hidden lg:block absolute top-20 -right-2 w-4 h-0.5 bg-gradient-to-r from-primary to-transparent" />
              )}

              <Card className="h-full bg-gradient-to-br from-blue-50 to-teal-50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-3">
                    {paso.numero}
                  </div>
                  <CardTitle className="text-primary text-lg">{paso.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70">{paso.descripcion}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
          <p className="text-center text-foreground/80">
            <span className="font-semibold text-primary">Metodología integral y participativa</span> que garantiza la calidad, sostenibilidad y adaptación cultural de cada proyecto implementado en el Centro Integral JAWIRA.
          </p>
        </div>
      </div>
    </section>
  )
}
