"use client"

import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      data-header-theme="light"
      className="bg-[#F5F2EB] dark:bg-[#0D1524] text-[#1B361F] dark:text-[#F8FAFC] border-t border-[#1B361F]/10 dark:border-white/10 pt-16 pb-8 md:pt-20 md:pb-10 transition-colors duration-300"
    >
      <div className="w-full px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 space-y-14 sm:space-y-16">
        
        {/* Top Section: Links & Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Columns 1 to 4 (8 cols total in md) */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Col 1: Ejes */}
            <div className="space-y-3">
              <h4 className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#1B361F]/50 dark:text-white/50">
                EJES DE TRABAJO
              </h4>
              <ul className="space-y-2 font-mono text-xs uppercase tracking-wider font-semibold">
                <li>
                  <Link href="/areas-de-trabajo#tecnologia" className="hover:opacity-70 transition-opacity">
                    TECNOLOGÍA
                  </Link>
                </li>
                <li>
                  <Link href="/areas-de-trabajo#educacion" className="hover:opacity-70 transition-opacity">
                    EDUCACIÓN
                  </Link>
                </li>
                <li>
                  <Link href="/areas-de-trabajo#salud" className="hover:opacity-70 transition-opacity">
                    PREVENCIÓN SALUD
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 2: Institucional */}
            <div className="space-y-3">
              <h4 className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#1B361F]/50 dark:text-white/50">
                INSTITUCIONAL
              </h4>
              <ul className="space-y-2 font-mono text-xs uppercase tracking-wider font-semibold">
                <li>
                  <Link href="/fundacion" className="hover:opacity-70 transition-opacity">
                    LA FUNDACIÓN
                  </Link>
                </li>
                <li>
                  <Link href="/centro-integral" className="hover:opacity-70 transition-opacity">
                    CENTRO INTEGRAL
                  </Link>
                </li>
                <li>
                  <Link href="/impacto" className="hover:opacity-70 transition-opacity">
                    IMPACTO
                  </Link>
                </li>
                <li>
                  <Link href="/transparencia" className="hover:opacity-70 transition-opacity">
                    TRANSPARENCIA
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Apoyar */}
            <div className="space-y-3">
              <h4 className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#1B361F]/50 dark:text-white/50">
                APOYAR
              </h4>
              <ul className="space-y-2 font-mono text-xs uppercase tracking-wider font-semibold">
                <li>
                  <Link href="/quiero-apoyar" className="hover:opacity-70 transition-opacity">
                    DONAR
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="hover:opacity-70 transition-opacity">
                    VOLUNTARIADO
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="hover:opacity-70 transition-opacity">
                    ALIANZAS
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Contacto */}
            <div className="space-y-3">
              <h4 className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#1B361F]/50 dark:text-white/50">
                CONTACTO
              </h4>
              <ul className="space-y-2 font-mono text-xs uppercase tracking-wider font-semibold">
                <li>
                  <Link href="/contacto" className="hover:opacity-70 transition-opacity">
                    FORMULARIO
                  </Link>
                </li>
                <li className="text-[#1B361F]/70 dark:text-white/70">
                  LA PAZ, BOLIVIA
                </li>
              </ul>
            </div>

          </div>

          {/* Right side: Questions & Main Contact Email */}
          <div className="md:col-span-4 flex flex-col md:items-end space-y-4 md:text-right">
            <div className="space-y-1">
              <p className="text-[10px] font-mono font-semibold tracking-[0.2em] uppercase text-[#1B361F]/60 dark:text-white/60">
                SI TIENES ALGUNA PREGUNTA NO DUDES EN CONTACTARNOS:
              </p>
              <a 
                href="mailto:fundacion.jawira@gmail.com" 
                className="font-mono text-base sm:text-lg lg:text-xl font-bold tracking-tight uppercase hover:opacity-75 transition-opacity block"
              >
                FUNDACION.JAWIRA@GMAIL.COM
              </a>
            </div>

            <div className="pt-2 flex items-center gap-4 font-mono text-xs font-bold tracking-widest uppercase text-[#1B361F]/80 dark:text-white/80">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline transition-all"
              >
                LINKEDIN
              </a>
              <span>·</span>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline transition-all"
              >
                FACEBOOK
              </a>
              <span>·</span>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline transition-all"
              >
                INSTAGRAM
              </a>
            </div>
          </div>

        </div>

        {/* Center Emblem / Logo */}
        <div className="flex flex-col items-center justify-center pt-6 pb-2">
          <Link href="/" className="group block transition-transform duration-300 hover:scale-105">
            <Image
              src="/logo/logo-rio.png"
              alt="Fundación Jawira"
              width={220}
              height={100}
              className="h-16 sm:h-20 w-auto object-contain dark:brightness-110"
              priority
            />
          </Link>
        </div>

        {/* Bottom copyright bar matching reference */}
        <div className="pt-6 border-t border-[#1B361F]/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-wider text-[#1B361F]/60 dark:text-white/60">
          <p>© {currentYear} FUNDACIÓN JAWIRA INC.</p>
          
          <div className="flex items-center gap-6">
            <Link href="/transparencia" className="hover:text-[#1B361F] dark:hover:text-white transition-colors">
              POLÍTICA DE PRIVACIDAD
            </Link>
            <Link href="/transparencia" className="hover:text-[#1B361F] dark:hover:text-white transition-colors">
              TÉRMINOS DE USO
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

