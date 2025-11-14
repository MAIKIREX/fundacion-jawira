'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FileText, Download } from 'lucide-react'

export default function InformesDocumentosSection() {
  const documentos = [
    {
      titulo: 'Informe anual 2026',
      anno: 2026,
      estado: 'Próximamente',
      tipo: 'Informe de gestión',
      color: 'from-blue-50 to-blue-100',
      badgeColor: 'bg-blue-100 text-blue-800'
    },
    {
      titulo: 'Informe de impacto 2027',
      anno: 2027,
      estado: 'Próximamente',
      tipo: 'Evaluación de resultados',
      color: 'from-green-50 to-green-100',
      badgeColor: 'bg-green-100 text-green-800'
    },
    {
      titulo: 'Resumen financiero 2026',
      anno: 2026,
      estado: 'Próximamente',
      tipo: 'Información financiera agregada',
      color: 'from-orange-50 to-orange-100',
      badgeColor: 'bg-orange-100 text-orange-800'
    },
    {
      titulo: 'Resultados de evaluación 2027',
      anno: 2027,
      estado: 'Próximamente',
      tipo: 'Evaluación programática',
      color: 'from-purple-50 to-purple-100',
      badgeColor: 'bg-purple-100 text-purple-800'
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Informes y documentos públicos
            </h2>
            <p className="text-lg text-foreground/70">
              La Fundación publicará periódicamente informes anuales, resúmenes de proyectos, información financiera y resultados de auditorías.
            </p>
          </div>

          {/* Grid de Documentos */}
          <div className="grid md:grid-cols-2 gap-6">
            {documentos.map((doc, idx) => (
              <Card
                key={idx}
                className={`p-6 bg-gradient-to-br ${doc.color} border-2 border-gray-200 hover:shadow-lg transition-all`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <FileText className="w-8 h-8 text-foreground/40" />
                    <Badge className={doc.badgeColor} variant="secondary">
                      {doc.estado}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {doc.titulo}
                    </h3>
                    <p className="text-sm text-foreground/60">{doc.tipo}</p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                    <span className="text-xs font-semibold text-foreground/50">Año: {doc.anno}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2"
                      disabled
                    >
                      <Download className="w-4 h-4" />
                      Ver
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Info */}
          <Card className="p-6 bg-yellow-50 border-2 border-yellow-200">
            <p className="text-sm text-foreground/70">
              <span className="font-semibold text-primary">📌 Nota:</span> Los documentos estarán disponibles progresivamente conforme se completen los ciclos de evaluación. Te invitamos a visitarnos regularmente o <a href="/contacto" className="underline font-semibold text-primary">contactarnos</a> si deseas recibir notificaciones sobre nuevas publicaciones.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
