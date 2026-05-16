import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Users, Handshake, Cpu, GraduationCap, Activity, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Quiero Apoyar | Fundación JAWIRA",
  description:
    "Descubre cómo puedes apoyar la misión de la Fundación JAWIRA. Donaciones, voluntariado y alianzas estratégicas.",
}

const formasDeApoyo = [
  {
    icon: Heart,
    titulo: "Donar",
    descripcion:
      "Tu aporte económico nos permite financiar equipamiento, capacitaciones, atención médica y programas educativos para comunidades vulnerables.",
    imagen: "/people-donating-helping-charity-hands.png",
    alt: "Personas donando y apoyando causas benéficas",
    cta: "Hacer una donación",
  },
  {
    icon: Users,
    titulo: "Voluntariado",
    descripcion:
      "Comparte tu tiempo, conocimientos y habilidades. Únete a nuestro equipo de voluntarios en actividades de campo, talleres y eventos.",
    imagen: "/volunteers-working-together-community-teamwork.png",
    alt: "Voluntarios trabajando juntos en proyectos comunitarios",
    cta: "Ser voluntario",
  },
  {
    icon: Handshake,
    titulo: "Alianzas / Patrocinios",
    descripcion:
      "Si representas a una empresa, institución u organización, podemos crear alianzas estratégicas de impacto social compartido.",
    imagen: "/business-partnership-handshake-collaboration-profe.png",
    alt: "Alianzas estratégicas y colaboración empresarial",
    cta: "Crear alianza",
  },
]

const destinos = [
  { icon: Cpu, titulo: "Tecnología", descripcion: "Equipamiento, capacitación digital y acceso a herramientas productivas." },
  { icon: GraduationCap, titulo: "Educación", descripcion: "Talleres, materiales educativos y programas de formación continua." },
  { icon: Activity, titulo: "Salud", descripcion: "Atención preventiva, campañas de salud y acceso a servicios médicos." },
  { icon: Heart, titulo: "Operación", descripcion: "Gestión sostenible y eficiente de proyectos e infraestructura." },
]

export default function QuieroApoyarPage() {
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
            <path
              d="M60 40 Q100 80 80 120 Q90 160 70 180"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
              Colabora con nosotros
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.08] mt-4">
              Quiero apoyar
            </h1>
            <p className="text-lg text-muted-foreground mt-5 leading-relaxed max-w-2xl">
              Tu apoyo hace posible que transformemos vidas a través de la tecnología, educación y
              salud. Juntos construimos un futuro mejor para las comunidades de Bolivia.
            </p>
          </div>
        </div>
      </section>

      {/* Support Methods Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
              Formas de participar
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight mt-3">
              Formas de apoyar nuestra misión
            </h2>
            <p className="text-base text-muted-foreground mt-4 leading-relaxed">
              Existen múltiples maneras de contribuir a nuestro trabajo. Elige la que mejor se adapte a ti.
            </p>
          </div>

          {/* Three support methods — editorial vertical stack */}
          <div className="space-y-0">
            {formasDeApoyo.map((forma, i) => {
              const Icon = forma.icon
              return (
                <div
                  key={i}
                  className={`grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-center py-12 ${
                    i !== 0 ? "border-t border-border/60" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`relative rounded-2xl overflow-hidden h-[260px] lg:h-[300px] ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                    <Image
                      src={forma.imagen}
                      alt={forma.alt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className={`space-y-5 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/6 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary/70" />
                      </div>
                      <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground/50">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-primary tracking-tight">
                      {forma.titulo}
                    </h3>
                    <p className="text-base text-foreground/70 leading-relaxed max-w-md">
                      {forma.descripcion}
                    </p>
                    <Button asChild variant="cta" size="lg">
                      <Link href="/contacto">
                        {forma.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact Transparency Section */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
                Transparencia
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight mt-3">
                ¿En qué se usa tu apoyo?
              </h2>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed max-w-md md:pb-1">
              Trabajamos con total transparencia. Cada aporte se destina a nuestras áreas de trabajo.
            </p>
          </div>

          {/* Destinations — gap-px grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 rounded-2xl overflow-hidden">
            {destinos.map((destino, i) => {
              const Icon = destino.icon
              return (
                <div key={i} className="bg-background p-7 md:p-8 space-y-4 group hover:bg-muted/20 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-primary/6 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-5 h-5 text-primary/70" />
                  </div>
                  <h3 className="text-base font-bold text-primary tracking-tight">
                    {destino.titulo}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {destino.descripcion}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="mt-10 pt-6 border-t border-border">
            <Link
              href="/transparencia"
              className="text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors inline-flex items-center gap-2"
            >
              Ver más sobre transparencia
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <div className="space-y-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
              Haz la diferencia
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight leading-[1.08]">
              Apoya nuestra <br className="hidden sm:block" />
              misión hoy
            </h2>
          </div>

          <p className="text-lg md:text-xl text-primary-foreground/50 max-w-2xl mx-auto leading-relaxed font-light">
            Cada contribución, sin importar su tamaño, genera un impacto real y medible en la vida
            de las personas y comunidades que servimos.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button asChild variant="cta" size="lg">
              <Link href="/contacto">
                Contactar
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/contacto">
                Donar ahora
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
