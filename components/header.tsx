"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "La Fundación", href: "/fundacion" },
    { label: "Áreas de trabajo", href: "/areas-de-trabajo" },
    { label: "Centro Integral JAWIRA", href: "/centro-integral" },
    { label: "Impacto", href: "/impacto" },
    { label: "Transparencia", href: "/transparencia" },
    { label: "Contacto", href: "/contacto" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-primary backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src="/logo/logo.jpeg"
                alt="Logotipo de Fundación Jawira"
                fill
                sizes="64px"
                className="object-contain rounded-lg"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-sm font-bold text-primary-foreground">Fundación</span>
              <span className="text-sm font-bold text-primary-foreground">JAWIRA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button + Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link href="/quiero-apoyar">
              <Button className="hidden sm:flex bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-xl shadow-sm">
                Quiero apoyar
              </Button>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors text-primary-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden pb-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-primary-foreground/90 hover:bg-primary-foreground/10 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/quiero-apoyar">
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-xl mt-2 shadow-sm">
                Quiero apoyar
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
