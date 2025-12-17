import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Users, Handshake, GraduationCap, Activity, Cpu, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Quiero Apoyar | Fundación JAWIRA",
  description:
    "Descubre cómo puedes apoyar la misión de la Fundación JAWIRA. Donaciones, voluntariado y alianzas estratégicas.",
}

export default function QuieroApoyarPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Quiero apoyar</h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 text-pretty leading-relaxed">
              Tu apoyo hace posible que transformemos vidas a través de la tecnología, educación y salud. Juntos
              construimos un futuro mejor para las comunidades de Bolivia.
            </p>
          </div>
        </div>
      </section>

      {/* Support Methods Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">
              Formas de apoyar nuestra misión
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Existen múltiples maneras de contribuir a nuestro trabajo. Elige la que mejor se adapte a ti.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Donar Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/people-donating-helping-charity-hands.png"
                  alt="Personas donando y apoyando causas benéficas"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="p-3 bg-secondary rounded-xl">
                    <Heart size={24} className="text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3">Donar</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Tu aporte económico nos permite financiar equipamiento, capacitaciones, atención médica y programas
                  educativos para comunidades vulnerables.
                </p>
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-xl group/btn">
                  Hacer una donación
                  <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Voluntariado Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/volunteers-working-together-community-teamwork.png"
                  alt="Voluntarios trabajando juntos en proyectos comunitarios"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="p-3 bg-accent rounded-xl">
                    <Users size={24} className="text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3">Voluntariado</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Comparte tu tiempo, conocimientos y habilidades. Únete a nuestro equipo de voluntarios en actividades
                  de campo, talleres y eventos.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-2 border-accent text-accent hover:bg-accent hover:text-white font-semibold rounded-xl group/btn bg-transparent"
                >
                  Ser voluntario
                  <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Alianzas Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/business-partnership-handshake-collaboration-profe.png"
                  alt="Alianzas estratégicas y colaboración empresarial"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="p-3 bg-primary rounded-xl">
                    <Handshake size={24} className="text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3">Alianzas / Patrocinios</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Si representas a una empresa, institución u organización, podemos crear alianzas estratégicas de
                  impacto social compartido.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-xl group/btn bg-transparent"
                >
                  Crear alianza
                  <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Transparency Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">¿En qué se usa tu apoyo?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Trabajamos con total transparencia. Cada aporte se destina directamente a nuestras tres áreas de trabajo
              fundamentales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="p-4 bg-secondary/10 rounded-2xl w-fit mx-auto mb-4">
                <Cpu size={32} className="text-secondary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-primary">Tecnología</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Equipamiento, capacitación digital y acceso a herramientas productivas
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="p-4 bg-secondary/10 rounded-2xl w-fit mx-auto mb-4">
                <GraduationCap size={32} className="text-secondary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-primary">Educación</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Talleres, materiales educativos y programas de formación continua
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="p-4 bg-secondary/10 rounded-2xl w-fit mx-auto mb-4">
                <Activity size={32} className="text-secondary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-primary">Salud</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Atención preventiva, campañas de salud y acceso a servicios médicos
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="p-4 bg-accent/10 rounded-2xl w-fit mx-auto mb-4">
                <Heart size={32} className="text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-primary">Operación</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Gestión sostenible y eficiente de proyectos e infraestructura
              </p>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Link href="/transparencia">
              <Button variant="link" className="text-secondary font-semibold text-lg">
                Ver más sobre transparencia →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary via-primary/95 to-secondary/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
            Apoya nuestra misión hoy
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 text-pretty leading-relaxed">
            Cada contribución, sin importar su tamaño, genera un impacto real y medible en la vida de las personas y
            comunidades que servimos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold rounded-xl px-8 py-6 shadow-xl"
              >
                Contactar
              </Button>
            </Link>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-xl px-8 py-6 shadow-xl"
            >
              Donar ahora
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
