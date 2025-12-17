"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    info: "Z. Gran POder, C. Jose Astete, n° 104",
    subInfo: "La Paz, Bolivia",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    icon: Phone,
    title: "Teléfono / WhatsApp",
    info: "+591 64208172",
    subInfo: "+591 64208172",
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
    borderColor: "border-secondary/20",
  },
  {
    icon: Mail,
    title: "Correo electrónico",
    info: "fundacion.jawira@gmail.com",
    subInfo: "fundacion.jawira@gmail.com",
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
    borderColor: "border-accent/20",
  },
  {
    icon: Clock,
    title: "Horarios de atención",
    info: "Lunes a Viernes: 9:00 - 18:00",
    subInfo: "Sábados: 9:00 - 13:00",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    borderColor: "border-primary/20",
  },
]

export default function ContactSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">Contacto</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Estamos aquí para escucharte y responder tus consultas. Contáctanos y conversemos sobre cómo trabajar juntos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side: Contact information cards */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">Información de contacto</h3>
              <p className="text-muted-foreground">
                Puedes comunicarte con nosotros a través de cualquiera de estos medios
              </p>
            </div>

            {contactInfo.map((item, i) => {
              const Icon = item.icon
              return (
                <Card
                  key={i}
                  className={`border-2 ${item.borderColor} hover:shadow-lg transition-all duration-300 bg-white rounded-xl`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg ${item.iconBg} border-2 ${item.borderColor} flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className={`w-6 h-6 ${item.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-base text-primary mb-2">{item.title}</CardTitle>
                        <p className="text-sm font-medium text-foreground">{item.info}</p>
                        <p className="text-sm text-muted-foreground">{item.subInfo}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>

          {/* Right side: Contact form */}
          <div>
            <Card className="bg-white rounded-2xl shadow-lg border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Envíanos un mensaje</CardTitle>
                <p className="text-sm text-muted-foreground">Completa el formulario y te responderemos a la brevedad</p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input id="name" placeholder="Tu nombre" className="rounded-lg" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input id="email" type="email" placeholder="tu.correo@ejemplo.com" className="rounded-lg" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto</Label>
                    <Input id="subject" placeholder="¿En qué podemos ayudarte?" className="rounded-lg" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      placeholder="Escribe tu consulta o mensaje aquí..."
                      rows={5}
                      className="rounded-lg resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-xl h-11 font-semibold"
                  >
                    Enviar mensaje
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Tiempo de respuesta: 24-48 horas hábiles. Tus datos serán tratados con confidencialidad conforme a
                    nuestras políticas de privacidad.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
