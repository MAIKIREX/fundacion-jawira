import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata = {
  title: "Contacto | Fundación JAWIRA",
  description: "Contacta con la Fundación JAWIRA. Estamos aquí para escucharte y responder tus consultas.",
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Contacto</h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 text-pretty">
              Estamos aquí para escucharte. Comunícate con nosotros para consultas, sugerencias o para conocer más sobre
              cómo puedes apoyar nuestra misión.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Información de contacto</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Puedes contactarnos a través de cualquiera de estos medios. Nuestro equipo responderá a la brevedad
                  posible.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <Card className="border-l-4 border-l-secondary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-secondary/10 rounded-xl text-secondary flex-shrink-0">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Dirección</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          La Paz, Bolivia
                          <br />
                          Zona Central
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-secondary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-secondary/10 rounded-xl text-secondary flex-shrink-0">
                        <Phone size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Teléfono / WhatsApp</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          +591 70000000
                          <br />
                          <span className="text-sm">Disponible para consultas</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-secondary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-secondary/10 rounded-xl text-secondary flex-shrink-0">
                        <Mail size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Email</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          contacto@fundacionjawira.org
                          <br />
                          <span className="text-sm">Respuesta en 24-48 horas</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-secondary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-secondary/10 rounded-xl text-secondary flex-shrink-0">
                        <Clock size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Horario de atención</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Lunes a Viernes: 9:00 - 18:00
                          <br />
                          Sábados: 9:00 - 13:00
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5"></div>
                  <div className="relative text-center p-8">
                    <MapPin size={48} className="mx-auto mb-4 text-secondary" />
                    <p className="text-muted-foreground font-medium">Ubicación en La Paz, Bolivia</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-2">Envíanos un mensaje</h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Completa el formulario y nos pondremos en contacto contigo pronto.
                  </p>

                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input id="name" placeholder="Tu nombre" className="rounded-xl" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="tu@email.com" className="rounded-xl" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Asunto *</Label>
                      <Input id="subject" placeholder="¿En qué podemos ayudarte?" className="rounded-xl" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensaje *</Label>
                      <Textarea
                        id="message"
                        placeholder="Escribe tu mensaje aquí..."
                        className="min-h-[150px] rounded-xl resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-6 rounded-xl shadow-lg"
                    >
                      Enviar mensaje
                    </Button>
                  </form>

                  <div className="mt-6 p-4 bg-muted/50 rounded-xl">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <strong>Nota:</strong> Tus datos serán tratados de manera confidencial y utilizados únicamente
                      para responder a tu consulta. Normalmente respondemos en un plazo de 24-48 horas.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
