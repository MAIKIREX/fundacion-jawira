'use client'

import { Cpu, GraduationCap, Activity, Heart } from 'lucide-react'
import HealthSection from '@/components/areas/health-section'
import { MetricRowItem } from '@/components/ui/editorial-split-section'

const destinoRows: MetricRowItem[] = [
  {
    id: 'destino-tecnologia',
    metric: '01',
    title: 'TECNOLOGÍA',
    description: 'Equipamiento, capacitación digital y acceso a herramientas productivas.',
    icon: Cpu,
    href: '/areas-de-trabajo#tecnologia',
  },
  {
    id: 'destino-educacion',
    metric: '02',
    title: 'EDUCACIÓN',
    description: 'Talleres, materiales educativos y programas de formación continua.',
    icon: GraduationCap,
    href: '/areas-de-trabajo#educacion',
  },
  {
    id: 'destino-salud',
    metric: '03',
    title: 'SALUD',
    description: 'Atención preventiva, campañas de salud y acceso a servicios médicos.',
    icon: Activity,
    href: '/areas-de-trabajo#salud',
  },
  {
    id: 'destino-operacion',
    metric: '04',
    title: 'OPERACIÓN',
    description: 'Gestión sostenible y eficiente de proyectos e infraestructura.',
    icon: Heart,
    href: '/transparencia',
  },
]

export default function DestinoFondosSection() {
  return (
    <HealthSection
      id="destino-recursos"
      eyebrow="Transparencia"
      title="¿En qué se usa tu apoyo?"
      description="Trabajamos con total transparencia. Cada aporte se destina directamente a fortalecer nuestras tres áreas de trabajo y la operación sostenible en territorio."
      imageSrc="/contenido/andean-harvest-macro.jpg"
      imageAlt="Destino de recursos y desarrollo comunitario en Bolivia"
      imageBadge="DESTINO TRANSPARENTE DE RECURSOS"
      rows={destinoRows}
      footnote="* CONOCE MÁS DETALLES EN NUESTRA SECCIÓN DE TRANSPARENCIA Y RENDICIÓN DE CUENTAS."
      reverse={false}
    />
  )
}
