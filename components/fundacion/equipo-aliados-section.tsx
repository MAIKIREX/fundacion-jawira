import Image from "next/image"

import { Card } from "@/components/ui/card"
import { Users, Building2, Briefcase, Mail, Linkedin } from "lucide-react"

export default function EquipoAliadosSection() {
  const teamMembers = [
    { nombre: "Lic. Jose Tambo", rol: "Director", area: "Presidente Ejecutivo", image: "/images/jose_tambo.png" },
    {
      nombre: "Ing. Tupac Lima Chuquimia",
      rol: "Coordinador de Proyectos",
      area: "Tecnologia",
      image: "/images/tupac_lima.png",
    },
    { nombre: "Dr. Henrry Patty", rol: "Coordinador de Proyectos", area: "Salud", image: "/images/henrry_patty.png" },
    {
      nombre: "Abg. Angel Quispe",
      rol: "Coordinador Juridico",
      area: "Secretario General",
      image: "/images/angel_quispe.png",
    },
    { nombre: "Miembro 5", rol: "Responsable de Investigación", area: "Investigación" },
    { nombre: "Miembro 6", rol: "Coordinador Territorial", area: "Territorio" },
  ]

  const allies = [
    { nombre: "Fundación Qamañani Arka", image: "/images/logo_1.png" },
    { nombre: "Logo Aliado 2" },
    { nombre: "Logo Aliado 3" },
    { nombre: "Logo Aliado 4" },
    { nombre: "Logo Aliado 5" },
    { nombre: "Logo Aliado 6" },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Equipo */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Equipo</h2>
              <p className="text-sm text-muted-foreground">Profesionales comprometidos con el desarrollo integral</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-8 max-w-3xl">
            La Fundación JAWIRA cuenta con un equipo <span className="font-semibold">interdisciplinario</span> compuesto
            por profesionales en salud, educación, tecnología, gestión social y investigación. Nuestro equipo es la
            fortaleza que impulsa la innovación y el impacto sostenible en las comunidades con las que trabajamos.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card
                key={member.nombre}
                className="group relative overflow-hidden bg-gradient-to-br from-white to-muted/20 border-2 border-muted hover:border-secondary/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Decorative accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="p-6 text-center">
                  {/* Profile Image */}
                  <div className="relative w-28 h-28 mx-auto mb-5">
                    {member.image ? (
                      <>
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={`Foto de ${member.nombre}`}
                          width={112}
                          height={112}
                          className="w-full h-full rounded-full object-cover ring-4 ring-muted group-hover:ring-secondary/50 transition-all duration-300"
                        />
                        {/* Active status indicator */}
                        <div className="absolute bottom-1 right-1 w-5 h-5 bg-secondary rounded-full border-4 border-white shadow-lg" />
                      </>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary via-primary/80 to-secondary rounded-full flex items-center justify-center ring-4 ring-muted group-hover:ring-secondary/50 transition-all duration-300">
                        <Briefcase className="w-12 h-12 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Name */}
                  <h3 className="font-bold text-lg text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                    {member.nombre}
                  </h3>

                  {/* Role/Position */}
                  <p className="text-sm font-medium text-foreground/70 mb-3 leading-relaxed">{member.rol}</p>

                  {/* Area Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20 group-hover:border-secondary/40 transition-all duration-300 mb-4">
                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    <span className="text-xs font-semibold text-primary">{member.area}</span>
                  </div>

                  {/* Optional Contact Icons */}
                  <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-muted">
                    <button
                      className="p-2 rounded-full bg-muted hover:bg-secondary/10 hover:text-secondary transition-colors duration-200"
                      aria-label="Enviar correo"
                    >
                      <Mail className="w-4 h-4" />
                    </button>
                    <button
                      className="p-2 rounded-full bg-muted hover:bg-secondary/10 hover:text-secondary transition-colors duration-200"
                      aria-label="Ver perfil de LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(10,40,80,0.4),transparent_50%)]" />
              </Card>
            ))}
          </div>
          {/* End of redesigned team cards */}

          <Card className="mt-8 p-6 bg-blue-50 border-l-4 border-l-blue-500">
            <p className="text-muted-foreground text-center">
              <span className="font-semibold text-primary">Próximamente</span> ampliaremos la información de nuestro
              equipo directivo y equipos técnicos. Contáctanos si te interesa conocer más detalles.
            </p>
          </Card>
        </div>

        {/* Aliados */}
        <div className="border-t pt-16 md:pt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-emerald-500/10 rounded-lg">
              <Building2 className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Aliados Institucionales</h2>
              <p className="text-sm text-muted-foreground">Organizaciones con las que trabajamos en colaboración</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-8 max-w-3xl">
            La Fundación JAWIRA trabaja en <span className="font-semibold">alianza estratégica</span> con instituciones
            públicas, privadas y comunitarias. Estas alianzas son fundamentales para amplificar nuestro impacto y
            garantizar la sostenibilidad de nuestros proyectos.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allies.map((ally, index) => (
              <Card
                key={ally.nombre}
                className="h-32 flex items-center justify-center bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="text-center">
                  {ally.image ? (
                    <Image
                      src={ally.image || "/placeholder.svg"}
                      alt={ally.nombre}
                      width={140}
                      height={80}
                      className="mx-auto mb-3 h-16 w-auto object-contain"
                    />
                  ) : (
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-3">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                  )}
                  <p className="text-sm text-muted-foreground font-medium">
                    {ally.nombre || `Logo Aliado ${index + 1}`}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-8 p-6 bg-emerald-50 border-l-4 border-l-emerald-500">
            <p className="text-muted-foreground text-center">
              Si tu organización comparte nuestra visión y desea establecer una alianza con la Fundación JAWIRA,{" "}
              <span className="font-semibold text-primary">contáctanos</span> para explorar oportunidades de
              colaboración.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
