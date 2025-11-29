import Image from 'next/image'

import { Card } from '@/components/ui/card'
import { Users, Building2, Briefcase } from 'lucide-react'

export default function EquipoAliadosSection() {
  const teamMembers = [
    { nombre: 'Lic. Jose Tambo', rol: 'Director', area: 'Presidente Ejecutivo', image: '/images/jose_tambo.png' },
    { nombre: 'Ing. Tupac Lima Chuquimia', rol: 'Coordinador de Proyectos', area: 'Tecnologia', image: '/images/tupac_lima.png' },
    { nombre: 'Dr. Henrry Patty', rol: 'Coordinador de Proyectos', area: 'Salud', image: '/images/henrry_patty.png' },
    { nombre: 'Abg. Angel Quispe', rol: 'Coordinador Juridico', area: 'Secretario General', image: '/images/angel_quispe.png' },
    { nombre: 'Miembro 5', rol: 'Responsable de Investigación', area: 'Investigación' },
    { nombre: 'Miembro 6', rol: 'Coordinador Territorial', area: 'Territorio' },
  ]

  const allies = [
    { nombre: 'Fundación Qamañani Arka', image: '/images/logo_1.png' },
    { nombre: 'Logo Aliado 2' },
    { nombre: 'Logo Aliado 3' },
    { nombre: 'Logo Aliado 4' },
    { nombre: 'Logo Aliado 5' },
    { nombre: 'Logo Aliado 6' },
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Equipo
              </h2>
              <p className="text-sm text-muted-foreground">
                Profesionales comprometidos con el desarrollo integral
              </p>
            </div>
          </div>

          <p className="text-muted-foreground mb-8 max-w-3xl">
            La Fundación JAWIRA cuenta con un equipo <span className="font-semibold">interdisciplinario</span> compuesto por profesionales en salud, educación, tecnología, gestión social y investigación. Nuestro equipo es la fortaleza que impulsa la innovación y el impacto sostenible en las comunidades con las que trabajamos.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <Card
                key={member.nombre}
                className="p-6 hover:shadow-lg transition-all text-center"
              >
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={`Foto de ${member.nombre}`}
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border border-primary/10 shadow-sm"
                  />
                ) : (
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                )}
                <h3 className="font-bold text-primary mb-1">
                  {member.nombre}
                </h3>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  {member.rol}
                </p>
                <span className="inline-block text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {member.area}
                </span>
              </Card>
            ))}
          </div>

          <Card className="mt-8 p-6 bg-blue-50 border-l-4 border-l-blue-500">
            <p className="text-muted-foreground text-center">
              <span className="font-semibold text-primary">Próximamente</span> ampliaremos la información de nuestro equipo directivo y equipos técnicos. Contáctanos si te interesa conocer más detalles.
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Aliados Institucionales
              </h2>
              <p className="text-sm text-muted-foreground">
                Organizaciones con las que trabajamos en colaboración
              </p>
            </div>
          </div>

          <p className="text-muted-foreground mb-8 max-w-3xl">
            La Fundación JAWIRA trabaja en <span className="font-semibold">alianza estratégica</span> con instituciones públicas, privadas y comunitarias. Estas alianzas son fundamentales para amplificar nuestro impacto y garantizar la sostenibilidad de nuestros proyectos.
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
                      src={ally.image}
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
              Si tu organización comparte nuestra visión y desea establecer una alianza con la Fundación JAWIRA, <span className="font-semibold text-primary">contáctanos</span> para explorar oportunidades de colaboración.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
