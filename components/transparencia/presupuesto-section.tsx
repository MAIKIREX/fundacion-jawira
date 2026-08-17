'use client'

import HealthSection from '@/components/areas/health-section'
import { Building2, Zap, Heart, Activity } from 'lucide-react'

const presupuestoRows = [
  {
    id: 'infraestructura-espacios',
    metric: '30%',
    title: 'INFRAESTRUCTURA & ESPACIOS',
    description: 'Alquiler de laboratorios TICs, oficinas y centro operativo de atención en La Paz.',
    icon: Building2,
    href: '#presupuesto',
  },
  {
    id: 'servicios-tics',
    metric: '15%',
    title: 'SERVICIOS & TECNOLOGÍA',
    description: 'Conectividad de alta velocidad, licencias digitales y mantenimiento de servidores.',
    icon: Zap,
    href: '#presupuesto',
  },
  {
    id: 'insumos-medicos',
    metric: '15%',
    title: 'EQUIPAMIENTO & SALUD',
    description: 'Kits de atención médica preventiva, equipos de telemedicina y botiquines comunitarios.',
    icon: Heart,
    href: '#presupuesto',
  },
  {
    id: 'capacitacion-operativa',
    metric: '40%',
    title: 'CAPACITACIÓN & LOGÍSTICA',
    description: 'Desarrollo de talleres en territorio, materiales educativos y movilidad operativa.',
    icon: Activity,
    href: '#presupuesto',
  },
]

export default function PresupuestoSection() {
  return (
    <HealthSection
      id="presupuesto"
      eyebrow="Información Financiera"
      title="Presupuesto base de operaciones."
      description="En su etapa inicial, la Fundación JAWIRA cuenta con un presupuesto anual base de Bs. 20.000,00 por año, asignado rigurosamente al funcionamiento del Centro Integral."
      imageSrc="/integrated-center-facility-services-building-modern.png"
      imageAlt="Presupuesto y Operaciones Fundación Jawira"
      imageBadge="PRESUPUESTO ANUAL AUDITADO · BS. 20.000"
      rows={presupuestoRows}
      reverse={true}
    />
  )
}

