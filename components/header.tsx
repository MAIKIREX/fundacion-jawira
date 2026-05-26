"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  // Escucha el scroll para cambiar el estado
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Animación coreografiada cinematográfica inicial
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.1 })
    
    // 1. Cae la barra principal
    tl.from(navRef.current, {
      y: -50,
      autoAlpha: 0,
      duration: 1,
      ease: "power4.out",
      clearProps: "transform" // Para no interferir con CSS
    })
    
    // 2. Aparece el logo
    tl.from(".nav-logo", {
      x: -20,
      autoAlpha: 0,
      duration: 0.6,
      ease: "power3.out",
    }, "-=0.6")

    // 3. Cascada de enlaces
    tl.from(".nav-link", {
      y: 10,
      autoAlpha: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "power2.out",
    }, "-=0.4")
    
    // 4. Salta el botón CTA y el ModeToggle
    tl.from(".nav-cta", {
      scale: 0.8,
      autoAlpha: 0,
      duration: 0.6,
      ease: "back.out(1.5)",
      stagger: 0.1
    }, "-=0.4")
  }, [])

  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "La\nFundación", href: "/fundacion" },
    { label: "Áreas", href: "/areas-de-trabajo" },
    { label: "Centro\nIntegral", href: "/centro-integral" },
    { label: "Impacto", href: "/impacto" },
    { label: "Actividades", href: "/actividades" },
    { label: "Transparencia", href: "/transparencia" },
    { label: "Contacto", href: "/contacto" },
  ]

  return (
    <header 
      className={`fixed left-0 right-0 z-50 w-full pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled ? "top-4 md:top-6 px-4" : "top-0 px-0"
      }`}
    >
      <div 
        className={`mx-auto w-full pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled ? "max-w-[95vw] 2xl:max-w-[1400px]" : "max-w-full"
        }`}
      >
        <nav
          ref={navRef}
          className={`relative overflow-hidden backdrop-blur-xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] px-3 lg:px-8 py-2 ${
            scrolled 
              ? "rounded-[2.5rem] bg-background/80 ring-1 ring-border shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] lg:py-3" 
              : "rounded-none bg-background/95 border-b border-border shadow-sm lg:py-4 px-6"
          }`}
        >
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <Link href="/" className="nav-logo flex items-center gap-4 group">
              <div className="relative w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0 overflow-hidden rounded-2xl ring-1 ring-border bg-background shadow-sm transition-transform duration-500 group-hover:scale-105 group-hover:shadow-md">
                <Image
                  src="/logo/logo.jpeg"
                  alt="Logotipo de Fundación Jawira"
                  fill
                  sizes="56px"
                  className="object-contain p-1"
                  priority
                />
              </div>
              <div className="hidden sm:flex flex-col leading-none justify-center">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-1">Fundación</span>
                <span className="text-xl lg:text-2xl font-black tracking-tighter text-foreground">JAWIRA</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className={`hidden lg:flex items-center mx-auto px-4 transition-all duration-700 ${scrolled ? 'gap-6 xl:gap-10' : 'gap-8 xl:gap-14'}`}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link text-sm xl:text-[15px] font-semibold text-muted-foreground hover:text-foreground transition-colors leading-tight text-center"
                >
                  {link.label.split('\n').map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </Link>
              ))}
            </div>

            {/* CTA Button + Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="nav-cta hidden sm:block">
                <ModeToggle />
              </div>
              
              <Link href="/quiero-apoyar" className="hidden sm:block nav-cta">
                <Button variant="default" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-300 font-bold px-8 h-12 lg:h-14 text-sm shadow-lg hover:shadow-xl">
                  Apoyar
                </Button>
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-3 bg-muted hover:bg-muted/80 rounded-full transition-colors text-foreground nav-cta"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              isOpen ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-2 pt-4 pb-4 border-t border-border">
              <div className="flex justify-between items-center px-4 py-2 mb-2">
                <span className="text-sm font-semibold text-muted-foreground">Tema</span>
                <ModeToggle />
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-[15px] font-bold text-foreground/80 hover:text-foreground hover:bg-accent rounded-2xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {/* Remove line breaks for mobile menu */}
                  {link.label.replace('\n', ' ')}
                </Link>
              ))}
              <Link href="/quiero-apoyar" className="mt-4">
                <Button variant="default" className="w-full rounded-2xl bg-primary text-primary-foreground h-14 font-bold shadow-lg">
                  Quiero apoyar
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
