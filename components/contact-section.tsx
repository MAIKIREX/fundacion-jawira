"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    info: "Z. Gran Poder, C. Jose Astete, n° 104",
    subInfo: "La Paz, Bolivia",
  },
  {
    icon: Phone,
    title: "Teléfono / WhatsApp",
    info: "+591 64208172",
    subInfo: "Mensajes y llamadas",
  },
  {
    icon: Mail,
    title: "Correo electrónico",
    info: "fundacion.jawira@gmail.com",
    subInfo: "Respuesta en 24-48 horas",
  },
  {
    icon: Clock,
    title: "Horarios de atención",
    info: "Lunes a Viernes: 9:00 – 18:00",
    subInfo: "Sábados: 9:00 – 13:00",
  },
]

export default function ContactSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
            Hablemos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight mt-3">
            Contacto
          </h2>
          <p className="text-base text-muted-foreground mt-4 max-w-lg mx-auto leading-relaxed">
            Estamos aquí para escucharte. Contáctanos y conversemos sobre cómo trabajar juntos.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16">
          {/* Left: Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-primary tracking-tight">
              Información de contacto
            </h3>

            <div className="space-y-1">
              {contactInfo.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-background transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-primary/70" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-muted-foreground tracking-wide uppercase mb-1">
                        {item.title}
                      </p>
                      <p className="text-sm font-medium text-foreground">{item.info}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.subInfo}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-background rounded-2xl border border-border/60 p-8 md:p-10 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-primary tracking-tight">
                Envíanos un mensaje
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Completa el formulario y te responderemos a la brevedad
              </p>
            </div>

            <form className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="contact-name" className="text-sm font-medium">Nombre completo</Label>
                <Input id="contact-name" placeholder="Tu nombre" className="rounded-xl h-11" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-email" className="text-sm font-medium">Correo electrónico</Label>
                <Input id="contact-email" type="email" placeholder="tu.correo@ejemplo.com" className="rounded-xl h-11" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-subject" className="text-sm font-medium">Asunto</Label>
                <Input id="contact-subject" placeholder="Tema de tu consulta" className="rounded-xl h-11" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message" className="text-sm font-medium">Mensaje</Label>
                <Textarea
                  id="contact-message"
                  placeholder="Escribe tu consulta o mensaje..."
                  rows={5}
                  className="rounded-xl resize-none"
                />
              </div>

              <Button type="submit" variant="cta" className="w-full" size="lg">
                Enviar mensaje
              </Button>

              <p className="text-xs text-center text-muted-foreground pt-1">
                Tus datos serán tratados con confidencialidad conforme a nuestras políticas de privacidad.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
