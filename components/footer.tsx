'use client'

import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    about: [
      { label: 'La Fundación', href: '/fundacion' },
      { label: 'Áreas de trabajo', href: '/areas-de-trabajo' },
      { label: 'Centro Integral', href: '/centro-integral' },
    ],
    resources: [
      { label: 'Transparencia', href: '/transparencia' },
      { label: 'Contacto', href: '/contacto' },
      { label: 'Términos de uso', href: '/terminos' },
    ]
  }

  return (
    <footer className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Branding */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold">Fundación JAWIRA</h3>
              <p className="text-sm text-primary-foreground/80 mt-1">Río de oportunidades</p>
            </div>
            <div className="text-sm text-primary-foreground/80 space-y-2">
              <p>La Paz, Bolivia</p>
            </div>
          </div>

          {/* Column 2: About Links */}
          <div>
            <h4 className="font-semibold mb-4">Sobre nosotros</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@fundacionjawira.org" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  info@fundacionjawira.org
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">+591 (2) XXXX XXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">La Paz, Zona Gran Poder<br />Bolivia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
          <p>© {currentYear} Fundación JAWIRA. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-foreground transition-colors">Facebook</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
