'use client'

import IntegralCenterSection from '@/components/integral-center-section'

export default function ModalidadesSection() {
  return (
    <div id="formas-de-apoyar" className="w-full">
      {/* 1. Modalidad: Donar (Imagen a la Izquierda) */}
      <IntegralCenterSection
        id="donaciones"
        imagePosition="left"
        tagline="Formas de apoyar · 01"
        title="Donar — Transforma Vidas con tu Aporte"
        description1="TU APORTE ECONÓMICO NOS PERMITE FINANCIAR EQUIPAMIENTO, CAPACITACIONES, ATENCIÓN MÉDICA Y PROGRAMAS EDUCATIVOS PARA COMUNIDADES VULNERABLES."
        description2="CADA CONTRIBUCIÓN SE GESTIONA CON RIGOR TÉCNICO Y TRAZABILIDAD TRANSPARENTE EN NUESTRAS ÁREAS DE ACCIÓN."
        badges={['TRANSPARENCIA TOTAL', 'IMPACTO SOCIAL DIRECTO', 'TECNOLOGÍA Y SALUD']}
        buttonText="HACER UNA DONACIÓN"
        buttonHref="/contacto"
        imageSrc="/contenido/andean-potatoes-hands.jpg"
        imageAlt="Personas donando y apoyando causas benéficas"
      />

      {/* 2. Modalidad: Voluntariado (Imagen a la Derecha) */}
      <IntegralCenterSection
        id="voluntariado"
        imagePosition="right"
        tagline="Formas de apoyar · 02"
        title="Voluntariado — Comparte tu Saber y Experiencia"
        description1="COMPARTE TU TIEMPO, CONOCIMIENTOS Y HABILIDADES. ÚNETE A NUESTRO EQUIPO DE VOLUNTARIOS EN ACTIVIDADES DE CAMPO, TALLERES Y EVENTOS."
        description2="SUMAMOS VOLUNTARIOS EN EDUCACIÓN DIGITAL, SALUD PREVENTIVA, INNOVACIÓN PRODUCTIVA Y DESARROLLO COMUNITARIO."
        badges={['TRABAJO EN CAMPO', 'TALLERES FORMATIVOS', 'RED COMUNITARIA']}
        buttonText="SER VOLUNTARIO"
        buttonHref="/contacto"
        imageSrc="/contenido/WhatsApp Image 2026-07-16 at 8.52.08 PM (1).jpeg"
        imageAlt="Voluntarios trabajando juntos en proyectos comunitarios"
      />

      {/* 3. Modalidad: Alianzas / Patrocinios (Imagen a la Izquierda) */}
      <IntegralCenterSection
        id="alianzas"
        imagePosition="left"
        tagline="Formas de apoyar · 03"
        title="Alianzas y Patrocinios — Impacto Estratégico"
        description1="SI REPRESENTAS A UNA EMPRESA, INSTITUCIÓN U ORGANIZACIÓN, PODEMOS CREAR ALIANZAS ESTRATÉGICAS DE IMPACTO SOCIAL COMPARTIDO."
        description2="CO-DISEÑAMOS PROGRAMAS DE RESPONSABILIDAD SOCIAL EMPRESARIAL Y TRANSFERENCIA TECNOLÓGICA SOSTENIBLE."
        badges={['RESPONSABILIDAD SOCIAL', 'COOPERACIÓN INSTITUCIONAL', 'SOSTENIBILIDAD']}
        buttonText="CREAR ALIANZA"
        buttonHref="/contacto"
        imageSrc="/contenido/WhatsApp Image 2026-07-16 at 8.52.08 PM (2).jpeg"
        imageAlt="Alianzas estratégicas y colaboración empresarial"
      />
    </div>
  )
}
