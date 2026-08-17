'use client'

import MechanismSection, { MechanismStep } from '@/components/ui/mechanism-section'
import { Calendar, TrendingUp, RefreshCw } from 'lucide-react'

const seguimientoSteps: MechanismStep[] = [
  {
    id: 'evaluacion-mensual',
    number: '01',
    title: 'Evaluación Mensual Operativa',
    tag: 'ETAPA 01 · OPERATIVA',
    icon: Calendar,
    fullDesc: 'Revisión mensual de actividades ejecutadas en territorio, desempeño del personal técnico y cumplimiento de metas de atención en el Centro Integral.',
  },
  {
    id: 'monitoreo-trimestral',
    number: '02',
    title: 'Monitoreo Trimestral de Impacto',
    tag: 'ETAPA 02 · INDICADORES',
    icon: TrendingUp,
    fullDesc: 'Análisis cuantitativo y cualitativo de indicadores clave de participación, cobertura y resultados en tecnología productiva, educación y salud.',
  },
  {
    id: 'mejora-continua',
    number: '03',
    title: 'Evaluación Anual & Aprendizaje',
    tag: 'ETAPA 03 · MEJORA CONTINUA',
    icon: RefreshCw,
    fullDesc: 'Valoración integral del impacto social generado durante el año, consultas comunitarias e integración de aprendizajes para optimizar los recursos.',
  },
]

export default function EvaluacionSeguimientoSection() {
  return (
    <MechanismSection
      id="evaluacion-seguimiento"
      eyebrow="Sistema de Medición"
      title="Evaluación y seguimiento continuo"
      description="Un sistema riguroso por etapas que nos permite medir resultados, escuchar a las comunidades e identificar oportunidades de innovación permanente."
      steps={seguimientoSteps}
      footerBadgeText="Ciclo de Transparencia y Mejora Continua"
    />
  )
}

