"use client"

import React, { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { ModeToggle } from "@/components/mode-toggle"
import { JawiraButton } from "@/components/ui/jawira-button"

// Icono geométrico de 4 pétalos/rombos que coincide exactamente con el diseño de referencia
function MenuGlyph({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className} 
      aria-hidden="true"
    >
      <path d="M12 2.5L14.5 8.5L12 10.5L9.5 8.5L12 2.5Z" />
      <path d="M12 21.5L9.5 15.5L12 13.5L14.5 15.5L12 21.5Z" />
      <path d="M2.5 12L8.5 9.5L10.5 12L8.5 14.5L2.5 12Z" />
      <path d="M21.5 12L15.5 14.5L13.5 12L15.5 9.5L21.5 12Z" />
    </svg>
  )
}

interface SubMenuItem {
  label: string
  href: string
}

interface MenuItem {
  id: string
  label: string
  href: string
  subItems?: SubMenuItem[]
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: "inicio",
    label: "Inicio",
    href: "/",
  },
  {
    id: "fundacion",
    label: "La Fundación",
    href: "/fundacion",
    subItems: [
      { label: "Quiénes Somos", href: "/fundacion#quienes-somos" },
      { label: "Misión & Visión", href: "/fundacion#mision-vision" },
      { label: "Valores & Principios", href: "/fundacion#valores" },
      { label: "Equipo Directivo", href: "/fundacion#equipo" },
    ],
  },
  {
    id: "areas",
    label: "Áreas de Trabajo",
    href: "/areas-de-trabajo",
    subItems: [
      { label: "Tecnología & Innovación", href: "/areas-de-trabajo#tecnologia" },
      { label: "Educación & Talleres", href: "/areas-de-trabajo#educacion" },
      { label: "Salud & Prevención", href: "/areas-de-trabajo#salud" },
      { label: "Desarrollo Comunitario", href: "/areas-de-trabajo#comunidad" },
    ],
  },
  {
    id: "centro-integral",
    label: "Centro Integral",
    href: "/centro-integral",
    subItems: [
      { label: "Instalaciones & Servicios", href: "/centro-integral#servicios" },
      { label: "Programas Activos", href: "/centro-integral#programas" },
      { label: "Horarios & Ubicación", href: "/centro-integral#horarios" },
    ],
  },
  {
    id: "impacto",
    label: "Impacto",
    href: "/impacto",
    subItems: [
      { label: "Métricas & Resultados", href: "/impacto#metricas" },
      { label: "Historias de Cambio", href: "/impacto#testimonios" },
      { label: "Cobertura Territorial", href: "/impacto#cobertura" },
    ],
  },
  {
    id: "actividades",
    label: "Actividades",
    href: "/actividades",
    subItems: [
      { label: "Próximos Eventos", href: "/actividades#proximos" },
      { label: "Galería de Proyectos", href: "/actividades#galeria" },
      { label: "Noticias & Prensa", href: "/actividades#noticias" },
    ],
  },
  {
    id: "transparencia",
    label: "Transparencia",
    href: "/transparencia",
    subItems: [
      { label: "Rendición de Cuentas", href: "/transparencia#cuentas" },
      { label: "Informes Anuales", href: "/transparencia#informes" },
      { label: "Certificaciones", href: "/transparencia#certificaciones" },
    ],
  },
  {
    id: "contacto",
    label: "Contacto",
    href: "/contacto",
  },
]

export default function Header() {
  const pathname = usePathname()
  const { resolvedTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const [isDarkText, setIsDarkText] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Resetear estados al navegar
  useEffect(() => {
    setIsMenuOpen(false)
    setHoveredItemId(null)
  }, [pathname])

  // Detección dinámica e inteligente del fondo bajo el navbar flotante
  useEffect(() => {
    if (!mounted) return

    const updateHeaderTheme = () => {
      // En modo oscuro global el fondo siempre es oscuro (#0D1524), por lo que el navbar debe ser claro
      if (resolvedTheme === "dark") {
        setIsDarkText(false)
        return
      }

      const headerEl = headerRef.current
      const headerY = headerEl
        ? headerEl.getBoundingClientRect().top + headerEl.getBoundingClientRect().height / 2
        : 40

      // 1. Detección por elemento bajo el punto central del navbar
      const elAtPoint = document.elementFromPoint(window.innerWidth / 2, headerY)
      const themedSection = elAtPoint?.closest("[data-header-theme]")

      if (themedSection) {
        const themeAttr = themedSection.getAttribute("data-header-theme")
        setIsDarkText(themeAttr === "light")
        return
      }

      // 2. Fallback: Buscar entre todas las secciones con data-header-theme por bounding rect
      const themeElements = document.querySelectorAll("[data-header-theme]")
      for (let i = 0; i < themeElements.length; i++) {
        const rect = themeElements[i].getBoundingClientRect()
        if (rect.top <= headerY && rect.bottom > headerY) {
          const themeAttr = themeElements[i].getAttribute("data-header-theme")
          setIsDarkText(themeAttr === "light")
          return
        }
      }

      // 3. Fallback inteligente: Análisis de luminancia del color computado
      if (elAtPoint) {
        let cur: HTMLElement | null = elAtPoint as HTMLElement
        while (cur && cur !== document.body && cur !== document.documentElement) {
          const bg = window.getComputedStyle(cur).backgroundColor
          if (bg && bg !== "transparent" && bg !== "rgba(0, 0, 0, 0)") {
            const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
            if (match) {
              const r = parseInt(match[1], 10)
              const g = parseInt(match[2], 10)
              const b = parseInt(match[3], 10)
              const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b
              setIsDarkText(luminance > 140)
              return
            }
          }
          cur = cur.parentElement
        }
      }

      // Por defecto en hero oscuro
      setIsDarkText(false)
    }

    let rafId: number
    const onScrollOrResize = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(updateHeaderTheme)
    }

    updateHeaderTheme()
    window.addEventListener("scroll", onScrollOrResize, { passive: true })
    window.addEventListener("resize", onScrollOrResize, { passive: true })

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("scroll", onScrollOrResize)
      window.removeEventListener("resize", onScrollOrResize)
    }
  }, [mounted, resolvedTheme, pathname])

  useEffect(() => {
    if (isMenuOpen) {
      setHoveredItemId(null)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
      setHoveredItemId(null)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isMenuOpen])

  return (
    <>
      {/* =========================================================================
          NAVBAR FLOTANTE PURO INTELIGENTE (ADAPTA COLOR SEGÚN FONDO VERDE O CREMA)
          ========================================================================= */}
      <header
        ref={headerRef}
        className="fixed top-4 sm:top-6 lg:top-8 left-0 right-0 z-40 w-full pointer-events-none px-4 sm:px-8 lg:px-12 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto w-full pointer-events-auto">
          <nav
            aria-label="Navegación principal"
            className="w-full bg-transparent border-none shadow-none py-1"
          >
            <div className="grid grid-cols-3 items-center w-full">
              
              {/* 1. SECCIÓN IZQUIERDA: BOTÓN FLOTANTE LIBRE (❖ MENÚ) */}
              <div className="flex items-center justify-start">
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(true)}
                  aria-expanded={isMenuOpen}
                  aria-controls="main-sidebar-drawer"
                  className={`group inline-flex items-center gap-2.5 sm:gap-3 py-2 transition-all duration-300 active:scale-95 cursor-pointer drop-shadow-xs ${
                    isDarkText
                      ? "text-[#1B361F] hover:text-[#1B361F]/80"
                      : "text-white hover:text-white/80"
                  }`}
                >
                  <MenuGlyph
                    className={`w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 ${
                      isDarkText ? "text-[#1B361F]" : "text-white"
                    }`}
                  />
                  <span className="text-xs sm:text-sm font-bold tracking-[0.22em] uppercase select-none">
                    Menú
                  </span>
                </button>
              </div>

              {/* 2. SECCIÓN CENTRAL: LOGO CENTRADO FLOTANTE LIBRE */}
              <div className="flex items-center justify-center">
                <Link
                  href="/"
                  className="flex items-center gap-2.5 sm:gap-3.5 group text-center drop-shadow-xs"
                >
                  <div
                    className={`relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 overflow-hidden rounded-xl shadow-xs group-hover:scale-105 transition-all duration-300 ${
                      isDarkText
                        ? "bg-[#1B361F]/10 ring-1 ring-[#1B361F]/20"
                        : "bg-white/10 ring-1 ring-white/20"
                    }`}
                  >
                    <Image
                      src="/logo/logo.jpeg"
                      alt="Fundación Jawira"
                      fill
                      sizes="40px"
                      className="object-contain p-0.5 rounded-lg"
                      priority
                    />
                  </div>
                  <div className="flex flex-col text-left leading-none">
                    <span
                      className={`text-[9px] sm:text-[10px] font-bold tracking-[0.25em] uppercase transition-colors duration-300 ${
                        isDarkText ? "text-[#1B361F]/70" : "text-white/70"
                      }`}
                    >
                      Fundación
                    </span>
                    <span
                      className={`text-sm sm:text-base lg:text-lg font-black tracking-tight transition-colors duration-300 ${
                        isDarkText
                          ? "text-[#1B361F] group-hover:text-[#1B361F]/80"
                          : "text-white group-hover:text-white/80"
                      }`}
                    >
                      JAWIRA
                    </span>
                  </div>
                </Link>
              </div>

              {/* 3. SECCIÓN DERECHA: CONTACTO + MODO OSCURO + BOTÓN APOYAR */}
              <div className="flex items-center justify-end gap-3 sm:gap-5 drop-shadow-xs">
                <div className="hidden md:block">
                  <ModeToggle
                    className={
                      isDarkText
                        ? "border-[#1B361F]/25 text-[#1B361F] hover:bg-[#1B361F]/10 hover:text-[#1B361F]"
                        : "border-white/20 text-white hover:bg-white/10 hover:text-white"
                    }
                  />
                </div>

                <Link
                  href="/contacto"
                  className={`text-xs sm:text-sm font-bold tracking-[0.2em] uppercase transition-colors duration-300 py-2 hidden sm:inline-block ${
                    isDarkText
                      ? "text-[#1B361F] hover:text-[#1B361F]/80"
                      : "text-white hover:text-white/80"
                  }`}
                >
                  Contáctanos
                </Link>

                <JawiraButton
                  href="/quiero-apoyar"
                  variant={isDarkText ? "primary" : "secondary"}
                  size="sm"
                  bullets
                  className="rounded-[3px] transition-all duration-300"
                >
                  Apoyar
                </JawiraButton>
              </div>

            </div>
          </nav>
        </div>
      </header>

      {/* =========================================================
          SHEET / DRAWER LATERAL IZQUIERDO CON COLUMNA CLOSE SEPARADA
          ========================================================= */}
      {mounted && createPortal(
        <div
          id="main-sidebar-drawer"
          aria-hidden={!isMenuOpen}
          className={`fixed inset-0 z-[9999] transition-all duration-500 ${
            isMenuOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"
          }`}
        >
          {/* Backdrop desenfocado que oscurece el fondo al hacer clic */}
          <div
            onClick={() => setIsMenuOpen(false)}
            className={`fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-500 ease-out ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          />

          {/* Panel Lateral Drawer Dividido en Columna Izquierda (CLOSE) y Área de Menú */}
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Menú principal de navegación"
            className={`fixed top-0 left-0 bottom-0 h-[100dvh] w-full sm:max-w-[85vw] md:max-w-[70vw] lg:max-w-[58vw] xl:max-w-[48vw] 2xl:max-w-[44vw] bg-[#1B361F] text-[#FCFCFC] shadow-2xl flex flex-row overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            style={{
              backgroundImage: "radial-gradient(circle at 20% 20%, rgba(44, 82, 51, 0.5) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(18, 36, 21, 0.85) 0%, transparent 60%)"
            }}
          >
            
            {/* -------------------------------------------------------------
                COLUMNA 1: FRANJA IZQUIERDA SEPARADA CON BOTÓN 'CLOSE'
                ------------------------------------------------------------- */}
            <div className="w-16 sm:w-20 md:w-24 border-r border-white/10 flex flex-col justify-between items-center py-8 sm:py-10 flex-shrink-0">
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-white/70 hover:text-white transition-colors cursor-pointer py-2 px-1 focus:outline-hidden"
                aria-label="Cerrar menú"
              >
                <span>CLOSE</span>
              </button>

              {/* Decorador inferior sutil en la franja */}
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            </div>

            {/* -------------------------------------------------------------
                COLUMNA 2: ÁREA PRINCIPAL DEL MENÚ (TODO EN 1 PANTALLA)
                ------------------------------------------------------------- */}
            <div className="flex-1 flex flex-col justify-between px-6 sm:px-10 md:px-12 py-8 sm:py-10 overflow-y-auto">
              
              {/* Encabezado interno sutil (Tema en móvil) */}
              <div className="flex items-center justify-between pb-2">
                <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-white/30">
                  Navegación
                </span>
                <div className="sm:hidden">
                  <ModeToggle />
                </div>
              </div>

              {/* Lista de enlaces: Tipografía refinada editorial que encaja en la primera vista */}
              <nav aria-label="Menú interactivo" className="my-auto py-2">
                <ul className="flex flex-col justify-center gap-1 sm:gap-1.5 md:gap-2">
                  {MENU_ITEMS.map((item) => {
                    const isHovered = hoveredItemId === item.id
                    const hasSubItems = Boolean(item.subItems && item.subItems.length > 0)
                    const isCurrent = pathname === item.href || (item.subItems && item.subItems.some(sub => pathname === sub.href))

                    return (
                      <li
                        key={item.id}
                        className="group transition-all duration-300"
                        onMouseEnter={() => setHoveredItemId(item.id)}
                        onFocus={() => setHoveredItemId(item.id)}
                      >
                        {/* Título / Enlace Principal */}
                        <div className="flex items-center">
                          <Link
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex items-center gap-2.5 sm:gap-3.5 transition-all duration-300 ${
                              isHovered || isCurrent
                                ? "text-white opacity-100 translate-x-1 sm:translate-x-2"
                                : "text-white/40 hover:text-white hover:opacity-100"
                            }`}
                          >
                            {/* Glifo ❖ que se visualiza al estar hovered o activo */}
                            <span
                              className={`transition-all duration-300 flex items-center justify-center text-[#50AA1E] ${
                                isHovered || isCurrent
                                  ? "opacity-100 scale-100 w-5 sm:w-6"
                                  : "opacity-0 scale-50 w-0 overflow-hidden"
                              }`}
                            >
                              <MenuGlyph className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                            </span>

                            {/* Tipografía limpia geométrica (Geist/Outfit Medium) */}
                            <span className="text-2xl sm:text-3xl md:text-[2.1rem] lg:text-[2.6rem] xl:text-[2.85rem] font-sans font-medium tracking-tight select-none leading-[1.1]">
                              {item.label}
                            </span>
                          </Link>
                        </div>

                        {/* Submenú desplegable en Hover (Se expande suavemente como en la imagen) */}
                        {hasSubItems && (
                          <div
                            className={`overflow-hidden transition-all duration-400 ease-out pl-7 sm:pl-9 space-y-1 ${
                              isHovered
                                ? "max-h-56 opacity-100 pt-2 pb-1"
                                : "max-h-0 opacity-0 pt-0 pb-0 pointer-events-none"
                            }`}
                          >
                            {item.subItems?.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="group/sub flex items-center gap-2 text-sm sm:text-base md:text-lg font-normal text-white/70 hover:text-white transition-all py-0.5 hover:translate-x-1.5"
                              >
                                <span className="w-1 h-1 rounded-full bg-[#EA9010] opacity-0 group-hover/sub:opacity-100 transition-opacity" />
                                <span>{sub.label}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </nav>

              {/* Pie del Drawer: Datos de Contacto a la Izquierda y LinkedIn/Redes a la Derecha */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-[11px] sm:text-xs text-white/50 flex-shrink-0">
                {/* Lado izquierdo: Slogan + Email */}
                <div className="space-y-0.5 font-mono">
                  <p className="font-bold tracking-wider text-white/80 uppercase text-[10px] sm:text-[11px]">
                    FUNDACIÓN JAWIRA
                  </p>
                  <p className="hover:text-white transition-colors text-[10px] sm:text-[11px]">
                    <a href="mailto:fundacion.jawira@gmail.com">FUNDACION.JAWIRA@GMAIL.COM</a>
                  </p>
                </div>

                {/* Lado derecho: Enlace de Redes Sociales (LINKEDIN, etc.) */}
                <div className="flex items-center gap-4 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase font-mono">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    LINKEDIN
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/60 hover:text-white transition-colors hidden sm:inline-block"
                  >
                    FACEBOOK
                  </a>
                </div>
              </div>

            </div>

          </aside>
        </div>,
        document.body
      )}
    </>
  )
}
