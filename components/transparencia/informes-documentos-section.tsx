'use client'

import ImpactSection, { ImpactCardItem } from '@/components/impact-section'

const informesItems: ImpactCardItem[] = [
  {
    number: '01',
    title: 'Informes Anuales de Gestión',
    subtitle: 'Reportes exhaustivos de ejecución de proyectos, metas alcanzadas, beneficiarios directos y cobertura territorial.',
    illustration: 'tank-mixing',
    badgeLabel: 'ACCESO ABIERTO',
  },
  {
    number: '02',
    title: 'Estados Financieros Auditados',
    subtitle: 'Balances contables anuales, origen y aplicación de fondos con aval de auditorías independientes externas.',
    illustration: 'capsule-suspension',
  },
  {
    number: '03',
    title: 'Evaluaciones de Impacto Social',
    subtitle: 'Estudios e indicadores de avance en salud preventiva, competencias pedagógicas y digitalización comunitaria.',
    illustration: 'nutrient-uptake',
  },
]

export default function InformesDocumentosSection() {
  return (
    <ImpactSection
      tagline="Documentación Pública"
      title="Informes y documentos de transparencia"
      description="Publicación periódica de memorias anuales, estados financieros y reportes de evaluación para conocimiento público de la sociedad civil."
      items={informesItems}
      background="sand"
    />
  )
}

