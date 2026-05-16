"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "La Fundación", href: "/fundacion" },
    { label: "Áreas de trabajo", href: "/areas-de-trabajo" },
    { label: "Centro Integral", href: "/centro-integral" },
    { label: "Impacto", href: "/impacto" },
    { label: "Transparencia", href: "/transparencia" },
    { label: "Contacto", href: "/contacto" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/98 shadow-lg backdrop-blur-md"
          : "bg-primary"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex-shrink-0 overflow-hidden rounded-lg ring-2 ring-primary-foreground/20 transition-all group-hover:ring-primary-foreground/40">
              <Image
                src="/logo/logo.jpeg"
                alt="Logotipo de Fundación Jawira"
                fill
                sizes="48px"
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-xs font-medium tracking-widest uppercase text-primary-foreground/70">Fundación</span>
              <span className="text-lg font-bold tracking-tight text-primary-foreground">JAWIRA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-[13px] font-medium text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/8 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button + Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ModeToggle />
            <Link href="/quiero-apoyar" className="hidden sm:block">
              <Button variant="cta" size="sm">
                Quiero apoyar
              </Button>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors text-primary-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
            isOpen ? "max-h-[400px] pb-5" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-1 pt-2 border-t border-primary-foreground/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2.5 text-sm font-medium text-primary-foreground/80 hover:bg-primary-foreground/10 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/quiero-apoyar" className="mt-2">
              <Button variant="cta" className="w-full">
                Quiero apoyar
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
