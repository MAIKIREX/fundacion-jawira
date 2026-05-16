"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    about: [
      { label: "La Fundación", href: "/fundacion" },
      { label: "Áreas de trabajo", href: "/areas-de-trabajo" },
      { label: "Centro Integral", href: "/centro-integral" },
    ],
    resources: [
      { label: "Impacto", href: "/impacto" },
      { label: "Transparencia", href: "/transparencia" },
      { label: "Contacto", href: "/contacto" },
    ],
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 md:pt-20 md:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Branding */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-5">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative w-11 h-11 flex-shrink-0 overflow-hidden rounded-lg ring-1 ring-primary-foreground/20">
                <Image
                  src="/logo/logo.jpeg"
                  alt="Logotipo de Fundación Jawira"
                  fill
                  sizes="44px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xs font-medium tracking-widest uppercase text-primary-foreground/60">Fundación</span>
                <span className="text-base font-bold tracking-tight">JAWIRA</span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-[280px]">
              Tecnología, educación y salud para el desarrollo integral en el Departamento de La Paz, Bolivia.
            </p>
          </div>

          {/* Column 2: About Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/50 mb-5">
              Sobre nosotros
            </h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/50 mb-5">
              Recursos
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/50 mb-5">
              Contacto
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-foreground/50" />
                <a
                  href="mailto:fundacion.jawira@gmail.com"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  fundacion.jawira@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-foreground/50" />
                <span className="text-primary-foreground/70">+591 64208172</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-foreground/50" />
                <span className="text-primary-foreground/70">
                  La Paz, Zona Gran Poder
                  <br />
                  Bolivia
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
          <p>&copy; {currentYear} Fundación JAWIRA. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
