'use client'

import SupportSection, { SupportCardItem } from '@/components/support-section'

const transparenciaCards: SupportCardItem[] = [
  {
    id: 1,
    title: "Auditorías Externas",
    tagline: "Rendición de Cuentas",
    description: "PUBLICAMOS INFORMES FINANCIEROS Y AUDITORÍAS EXTERNAS ANUALES DE MANERA TRANSPARENTE Y ABIERTA.",
    image: "/business-partnership-handshake-collaboration-profe.png",
    cardBg: "bg-[#5D7C3F] dark:bg-[#1E3822]",
    linkText: "Ver informes",
    href: "/fundacion",
  },
  {
    id: 2,
    title: "Gestión Eficiente",
    tagline: "Uso Responsable",
    description: "CADA RECURSO RECIBIDO SE DESTINA DIRECTAMENTE AL DESPLIEGUE EN SALUD, EDUCACIÓN Y TECNOLOGÍA EN LA PAZ.",
    image: "/volunteers-working-together-community-teamwork.png",
    cardBg: "bg-[#55733A] dark:bg-[#18301B]",
    linkText: "Conocer gestión",
    href: "/fundacion",
  },
  {
    id: 3,
    title: "Confianza Ética",
    tagline: "Apertura Comunitaria",
    description: "RESPONSABILIDAD TOTAL ANTE LAS COMUNIDADES SERVIDAS, ALIANZAS E INSTITUCIONES DONANTES.",
    image: "/people-donating-helping-charity-hands.png",
    cardBg: "bg-[#4D6934] dark:bg-[#132715]",
    linkText: "Ver gobierno",
    href: "/fundacion",
  },
]

export default function TransparenciaRendicionSection() {
  return (
    <SupportSection
      tagline="Compromiso Institucional"
      title="Transparencia y rendición de cuentas."
      cards={transparenciaCards}
    />
  )
}

