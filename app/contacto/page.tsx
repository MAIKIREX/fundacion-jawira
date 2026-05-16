import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Contacto | Fundación JAWIRA",
  description: "Contacta con la Fundación JAWIRA. Estamos aquí para escucharte y responder tus consultas.",
}

const contactInfo = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "La Paz, Bolivia",
    detail: "Zona Central",
  },
  {
    icon: Phone,
    label: "Teléfono / WhatsApp",
    value: "+591 70000000",
    detail: "Disponible para consultas",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contacto@fundacionjawira.org",
    detail: "Respuesta en 24–48 horas",
  },
  {
    icon: Clock,
    label: "Horario de atención",
    value: "Lunes a Viernes: 9:00 – 18:00",
    detail: "Sábados: 9:00 – 13:00",
  },
]

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-muted/40 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg
            className="absolute top-0 right-0 w-80 h-80 text-primary opacity-[0.03]"
            viewBox="0 0 200 200"
            fill="none"
          >
            <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
              Comunícate con nosotros
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.08] mt-4">
              Contacto
            </h1>
            <p className="text-lg text-muted-foreground mt-5 leading-relaxed max-w-2xl">
              Estamos aquí para escucharte. Comunícate con nosotros para consultas, sugerencias
              o para conocer más sobre cómo puedes apoyar nuestra misión.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">

            {/* Left Column — Contact Info */}
            <div className="space-y-10">
              <div className="space-y-3">
                <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
                  Información
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight">
                  Información de contacto
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mt-3">
                  Puedes contactarnos a través de cualquiera de estos medios. Nuestro equipo
                  responderá a la brevedad posible.
                </p>
              </div>

              {/* Contact items — border-separated list */}
              <div className="space-y-0">
                {contactInfo.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={i}
                      className={`flex items-start gap-5 py-6 group ${
                        i !== 0 ? "border-t border-border/60" : ""
                      }`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/6 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/10 transition-colors">
                        <Icon className="w-5 h-5 text-primary/70" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground/50">
                          {item.label}
                        </span>
                        <p className="text-base font-semibold text-primary tracking-tight">
                          {item.value}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden bg-muted/40 h-[200px] flex items-center justify-center border border-border/40">
                <div className="text-center space-y-2">
                  <MapPin className="w-6 h-6 text-muted-foreground/30 mx-auto" />
                  <p className="text-xs text-muted-foreground/50 font-medium">
                    La Paz, Bolivia
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column — Contact Form */}
            <div className="lg:sticky lg:top-28">
              <div className="rounded-2xl border border-border/60 overflow-hidden bg-background">
                <div className="p-8 md:p-10 border-b border-border/60 bg-muted/20">
                  <h2 className="text-xl font-bold text-primary tracking-tight">
                    Envíanos un mensaje
                  </h2>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    Completa el formulario y nos pondremos en contacto contigo pronto.
                  </p>
                </div>

                <div className="p-8 md:p-10">
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs font-semibold tracking-wide uppercase text-muted-foreground">
                        Nombre completo
                      </Label>
                      <Input
                        id="name"
                        placeholder="Tu nombre"
                        className="h-12 rounded-xl border-border/60 focus:border-primary"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs font-semibold tracking-wide uppercase text-muted-foreground">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        className="h-12 rounded-xl border-border/60 focus:border-primary"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-xs font-semibold tracking-wide uppercase text-muted-foreground">
                        Asunto
                      </Label>
                      <Input
                        id="subject"
                        placeholder="¿En qué podemos ayudarte?"
                        className="h-12 rounded-xl border-border/60 focus:border-primary"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-xs font-semibold tracking-wide uppercase text-muted-foreground">
                        Mensaje
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Escribe tu mensaje aquí..."
                        className="min-h-[140px] rounded-xl border-border/60 focus:border-primary resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="cta"
                      size="lg"
                      className="w-full"
                    >
                      Enviar mensaje
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>

                  <div className="mt-6 pt-6 border-t border-border/40">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <span className="font-medium text-foreground/60">Nota:</span> Tus datos serán
                      tratados de manera confidencial y utilizados únicamente para responder a tu
                      consulta. Normalmente respondemos en un plazo de 24–48 horas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
