"use client"

import { JawiraButton } from "@/components/ui/jawira-button"

export default function QuieroApoyarSection() {
  return (
    <section
      data-header-theme="dark"
      className="relative w-full bg-[#556837] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-36 lg:py-44 min-h-[460px] sm:min-h-[520px] md:min-h-[580px] lg:min-h-[620px] flex flex-col justify-between">
        {/* Titular superior izquierdo */}
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-sans font-medium text-white tracking-[-0.035em] leading-[1.08]">
            Cada acción cuenta
            <br />
            para construir un
            <br />
            futuro más equitativo
          </h2>
        </div>

        {/* Botones inferiores izquierdos con JawiraButton */}
        <div className="pt-16 sm:pt-20 md:pt-28 flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-4">
          {/* Botón Primario: Blanco Sólido con barrido rotativo negro */}
          <JawiraButton
            href="/quiero-apoyar"
            variant="white"
            size="default"
            bullets
            className="w-full sm:w-auto"
          >
            QUIERO APOYAR
          </JawiraButton>

          {/* Botón Secundario: Negro con borde blanco y barrido rotativo blanco */}
          <JawiraButton
            href="/contacto"
            variant="black"
            size="default"
            bullets
            className="w-full sm:w-auto"
          >
            CONTACTAR AL EQUIPO
          </JawiraButton>
        </div>
      </div>
    </section>
  )
}
