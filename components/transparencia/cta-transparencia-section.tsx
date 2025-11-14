'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Mail, MessageSquare } from 'lucide-react'

export default function CtaTransparenciaSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-white to-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Main CTA */}
          <Card className="p-8 md:p-12 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground border-0 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              ¿Tienes dudas o quieres saber más?
            </h2>

            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              La transparencia también es diálogo. Cualquier persona, institución o donante interesado en conocer más sobre la información financiera, programática o de impacto de la Fundación JAWIRA puede contactarnos para solicitar detalles o aclaraciones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contacto">
                <Button
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 h-12"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contactar a la Fundación
                </Button>
              </Link>

              <Link href="/impacto">
                <Button
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20 font-semibold px-8 h-12"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Conocer más sobre nuestro impacto
                </Button>
              </Link>
            </div>
          </Card>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-white border-2 border-blue-200">
              <h3 className="text-lg font-semibold text-primary mb-3">
                ✉️ Por correo
              </h3>
              <p className="text-sm text-foreground/70 mb-4">
                Envíanos tus preguntas o solicitudes de información a:
              </p>
              <a
                href="mailto:info@fundacionjawira.org"
                className="text-primary font-semibold hover:underline"
              >
                info@fundacionjawira.org
              </a>
            </Card>

            <Card className="p-6 bg-white border-2 border-green-200">
              <h3 className="text-lg font-semibold text-primary mb-3">
                🤝 Colaborar o donar
              </h3>
              <p className="text-sm text-foreground/70 mb-4">
                Si deseas conocer opciones para apoyar nuestro trabajo:
              </p>
              <Link href="/" className="text-primary font-semibold hover:underline">
                Ver opciones de apoyo →
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
