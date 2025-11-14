import { Card } from '@/components/ui/card'
import { Heart, Hand as Hands, Lightbulb, Users, Scale, Leaf, Shield, Zap, BookOpen, Smile, Anchor, Target } from 'lucide-react'

export default function ValoresSection() {
  const valores = [
    {
      icon: Heart,
      title: 'Esperanza',
      descripcion: 'Creemos en el potencial transformador de cada persona y comunidad.',
      color: 'text-red-500 bg-red-50'
    },
    {
      icon: Hands,
      title: 'Solidaridad',
      descripcion: 'Trabajamos unidos en la construcción de un futuro compartido.',
      color: 'text-blue-500 bg-blue-50'
    },
    {
      icon: Smile,
      title: 'Empatía',
      descripcion: 'Escuchamos y comprendemos las necesidades de las comunidades.',
      color: 'text-pink-500 bg-pink-50'
    },
    {
      icon: Target,
      title: 'Compromiso',
      descripcion: 'Nos responsabilizamos de nuestras acciones y resultados.',
      color: 'text-orange-500 bg-orange-50'
    },
    {
      icon: Scale,
      title: 'Integridad',
      descripcion: 'Actuamos con transparencia, honestidad y coherencia ética.',
      color: 'text-emerald-500 bg-emerald-50'
    },
    {
      icon: Users,
      title: 'Servicio',
      descripcion: 'Ponemos al servicio de otros nuestros talentos y recursos.',
      color: 'text-purple-500 bg-purple-50'
    },
    {
      icon: Anchor,
      title: 'Humildad',
      descripcion: 'Reconocemos que tenemos mucho por aprender.',
      color: 'text-cyan-500 bg-cyan-50'
    },
    {
      icon: Lightbulb,
      title: 'Innovación',
      descripcion: 'Buscamos soluciones creativas a problemas complejos.',
      color: 'text-yellow-500 bg-yellow-50'
    },
    {
      icon: Users,
      title: 'Inclusión',
      descripcion: 'Valoramos la diversidad y garantizamos participación equitativa.',
      color: 'text-indigo-500 bg-indigo-50'
    },
    {
      icon: Hands,
      title: 'Colaboración',
      descripcion: 'Reconocemos que los retos se resuelven en alianza.',
      color: 'text-teal-500 bg-teal-50'
    },
    {
      icon: BookOpen,
      title: 'Aprendizaje Continuo',
      descripcion: 'Nos adaptamos y mejoramos constantemente.',
      color: 'text-sky-500 bg-sky-50'
    },
    {
      icon: Leaf,
      title: 'Sostenibilidad',
      descripcion: 'Pensamos en el impacto a largo plazo en personas y planeta.',
      color: 'text-green-500 bg-green-50'
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nuestros Valores
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Los principios fundamentales que guían cada decisión y acción en la Fundación JAWIRA.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valores.map((valor) => {
            const IconComponent = valor.icon
            return (
              <Card
                key={valor.title}
                className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 border-0"
              >
                <div className={`inline-flex p-3 rounded-lg ${valor.color} mb-4`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-primary mb-2">
                  {valor.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {valor.descripcion}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
