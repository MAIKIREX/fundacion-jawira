'use client'

import SupportSection, { SupportCardItem } from '@/components/support-section'

const politicasCards: SupportCardItem[] = [
  {
    id: 1,
    title: "Código de Ética",
    tagline: "Integridad & Conducta",
    description: "MARCO DE VALORES INSTITUCIONALES QUE GUÍA LAS DECISIONES Y EL ACCIONAR DE TODO NUESTRO EQUIPO EN BOLIVIA.",
    image: "/business-partnership-handshake-collaboration-profe.png",
    cardBg: "bg-[#5D7C3F] dark:bg-[#1E3822]",
    linkText: "Ver marco ético",
    href: "/fundacion",
  },
  {
    id: 2,
    title: "Protección de Datos",
    tagline: "Privacidad Garantizada",
    description: "CUIDADO RIGUROSO Y CONFIDENCIALIDAD DE LA INFORMACIÓN PERSONAL DE BENEFICIARIOS, DOCENTES Y ALIANZAS.",
    image: "/integrated-center-facility-services-building-modern.png",
    cardBg: "bg-[#55733A] dark:bg-[#18301B]",
    linkText: "Ver política",
    href: "/fundacion",
  },
  {
    id: 3,
    title: "No Discriminación",
    tagline: "Equidad & Respeto",
    description: "GARANTÍA DE ESPACIOS SEGUROS, INCLUSIÓN CULTURAL Y DERECHOS IGUALITARIOS EN CADA PROYECTO.",
    image: "/volunteers-working-together-community-teamwork.png",
    cardBg: "bg-[#4D6934] dark:bg-[#132715]",
    linkText: "Ver principios",
    href: "/fundacion",
  },
]

export default function PoliticasPrincipiosSection() {
  return (
    <SupportSection
      tagline="Marco Ético & Valores"
      title="Políticas y principios institucionales."
      cards={politicasCards}
    />
  )
}

