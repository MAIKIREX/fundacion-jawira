'use client'

import MechanismSection, { MechanismStep } from '@/components/ui/mechanism-section'
import { Rocket, TrendingUp, CheckCircle } from 'lucide-react'

const fasesHorizonte: MechanismStep[] = [
  {
    id: 'fase-piloto',
    number: '01',
    title: 'Fase Piloto (2026 – 2028)',
    tag: 'FASE 01 · PILOTO',
    icon: Rocket,
    fullDesc: 'Puesta en marcha del Centro Integral JAWIRA en La Paz, despliegue de los 3 ejes de intervención (tecnología productiva, educación integral y salud preventiva), validación en terreno y medición del modelo.',
  },
  {
    id: 'fase-expansion',
    number: '02',
    title: 'Expansión (2029 – 2031)',
    tag: 'FASE 02 · EXPANSIÓN',
    icon: TrendingUp,
    fullDesc: 'Réplica del modelo validado a más municipios de La Paz, ampliación de la red de telemedicina preventiva y fortalecimiento de equipamiento en unidades educativas rurales.',
  },
  {
    id: 'fase-consolidacion',
    number: '03',
    title: 'Consolidación (2032 – 2034)',
    tag: 'FASE 03 · SOSTENIBILIDAD',
    icon: CheckCircle,
    fullDesc: 'Consolidación de alianzas nacionales e internacionales, transferencia metodológica a actores locales y posicionamiento del modelo JAWIRA como referente de innovación social en Bolivia.',
  },
]


export default function HorizonteTemporalSection() {
  return (
    <MechanismSection
      id="horizonte-temporal"
      eyebrow="Planificación Estratégica"
      title="Horizonte temporal 2026 – 2034"
      description="Tres fases ordenadas que estructuran el escalamiento progresivo, ordenado y sostenible de nuestras iniciativas en el Departamento de La Paz."
      steps={fasesHorizonte}
      footerBadgeText="Modelo Replicable de Desarrollo Social JAWIRA"
    />
  )
}

