import { Card } from '@/components/ui/card'
import { Zap, BookOpen, Heart, Lightbulb, Users, TrendingUp } from 'lucide-react'

export default function EnfoqueSection() {
  const enfoques = [
    {
      icon: Zap,
      title: 'Articulación Integral',
      descripcion: 'Conectamos tecnología productiva, educación y salud para crear soluciones comprehensivas.'
    },
    {
      icon: Lightbulb,
      title: 'Investigación e Innovación',
      descripcion: 'Diseñamos proyectos basados en diagnósticos rigurosos y soluciones innovadoras.'
    },
    {
      icon: Users,
      title: 'Comunidades Prioritarias',
      descripcion: 'Priorizamos nuestro trabajo en poblaciones vulnerables y marginalizadas.'
    },
    {
      icon: TrendingUp,
      title: 'ODS Alineados',
      descripcion: 'Contribuimos a los Objetivos de Desarrollo Sostenible 3 (Salud), 4 (Educación) y 9 (Innovación).'
    },
    {
      icon: Users,
      title: 'Enfoque Interdisciplinario',
      descripcion: 'Trabajamos con profesionales de diversas disciplinas para abordar la complejidad de los desafíos sociales.'
    },
    {
      icon: Heart,
      title: 'Participación Comunitaria',
      descripcion: 'Las comunidades son protagonistas de las decisiones y procesos que las afectan.'
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nuestro Enfoque
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            La metodología y principios que guían el diseño e implementación de nuestros proyectos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enfoques.map((enfoque) => {
            const IconComponent = enfoque.icon
            return (
              <Card key={enfoque.title} className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-primary mb-2">
                  {enfoque.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {enfoque.descripcion}
                </p>
              </Card>
            )
          })}
        </div>

        <Card className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-emerald-500/5 border-l-4 border-l-primary">
          <h3 className="font-bold text-lg text-primary mb-4">
            Enfoque Territorial
          </h3>
          <p className="text-muted-foreground mb-4">
            La Fundación JAWIRA tiene su principal foco de acción en el <span className="font-semibold">Departamento de La Paz</span>, particularmente en sus zonas urbanas, periurbanas y rurales. Con sede en la ciudad de La Paz, en la Zona Gran Poder, somos una institución con raíces territoriales profundas y vocación de expansión nacional.
          </p>
          <p className="text-muted-foreground">
            Trabajamos en alianza con actores locales, gobiernos municipales, organizaciones comunitarias e instituciones educativas y de salud para generar impacto sostenible en la región.
          </p>
        </Card>
      </div>
    </section>
  )
}
