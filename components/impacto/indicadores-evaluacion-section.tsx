'use client'

import ImpactSection, { ImpactCardItem } from '@/components/impact-section'

const indicadoresItems: ImpactCardItem[] = [
  {
    number: '01',
    title: 'Evaluaciones Mensuales',
    subtitle: 'Monitoreo sistemático de actividades en terreno y desempeño técnico para asegurar alta calidad en la ejecución comunitaria.',
    illustration: 'tank-mixing',
    badgeLabel: '100% TRAZABLE',
  },
  {
    number: '02',
    title: 'Monitoreo Trimestral',
    subtitle: 'Análisis de indicadores clave de participación, cobertura y resultados en tecnología productiva, educación y salud.',
    illustration: 'capsule-suspension',
  },
  {
    number: '03',
    title: 'Evaluación Anual & Auditorías',
    subtitle: 'Medición integral del impacto social y económico de nuestros proyectos junto con auditorías externas transparentes.',
    illustration: 'nutrient-uptake',
  },
]

export default function IndicadoresEvaluacionSection() {
  return (
    <ImpactSection
      tagline="Evaluación & Seguimiento"
      title="Cómo medimos nuestro impacto"
      description="Un sistema riguroso de evaluación continua que garantiza la transparencia, la trazabilidad de los resultados y la mejora constante en cada comunidad."
      items={indicadoresItems}
      background="sand"
    />
  )
}

