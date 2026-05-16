import Link from 'next/link'
import { FileText } from 'lucide-react'

const documentos = [
  {
    titulo: 'Informe anual 2026',
    tipo: 'Informe de gestión',
    anno: 2026,
  },
  {
    titulo: 'Informe de impacto 2027',
    tipo: 'Evaluación de resultados',
    anno: 2027,
  },
  {
    titulo: 'Resumen financiero 2026',
    tipo: 'Información financiera agregada',
    anno: 2026,
  },
  {
    titulo: 'Resultados de evaluación 2027',
    tipo: 'Evaluación programática',
    anno: 2027,
  },
]

export default function InformesDocumentosSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
            Documentación pública
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight mt-3">
            Informes y documentos
          </h2>
          <p className="text-base text-muted-foreground mt-4 leading-relaxed">
            La Fundación publicará periódicamente informes anuales, resúmenes de proyectos, información financiera y resultados de auditorías.
          </p>
        </div>

        {/* Documents grid — gap-px */}
        <div className="grid sm:grid-cols-2 gap-px bg-border/40 rounded-2xl overflow-hidden">
          {documentos.map((doc, i) => (
            <div
              key={i}
              className="bg-background p-7 md:p-8 space-y-4 group hover:bg-muted/20 transition-colors"
            >
              <div className="flex items-start justify-between">
                <FileText className="w-5 h-5 text-primary/40" />
                <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground bg-muted/60 px-2.5 py-1 rounded">
                  Próximamente
                </span>
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-primary tracking-tight">
                  {doc.titulo}
                </h3>
                <p className="text-xs text-muted-foreground">{doc.tipo}</p>
              </div>
              <span className="text-xs font-medium text-muted-foreground/50">
                Año: {doc.anno}
              </span>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-10 pt-6 border-t border-border max-w-3xl">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Los documentos estarán disponibles progresivamente conforme se completen los ciclos de evaluación.{" "}
            <Link href="/contacto" className="font-medium text-secondary hover:underline">
              Contáctanos
            </Link>{" "}
            si deseas recibir notificaciones sobre nuevas publicaciones.
          </p>
        </div>

      </div>
    </section>
  )
}
