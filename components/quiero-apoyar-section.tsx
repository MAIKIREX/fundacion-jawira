"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Users, Handshake } from "lucide-react"

const supportOptions = [
  {
    icon: Heart,
    title: "Donar",
    description:
      "Tu aporte económico nos permite continuar desarrollando proyectos que transforman vidas y comunidades.",
    details:
      "Cada donación, sin importar su monto, contribuye directamente a financiar tecnología, educación y salud en comunidades vulnerables.",
    image: "/people-donating-helping-charity-hands.png",
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
    borderColor: "border-accent/20",
    buttonVariant: "default" as const,
    buttonBg: "bg-accent hover:bg-accent/90",
  },
  {
    icon: Users,
    title: "Voluntariado",
    description:
      "Comparte tus conocimientos, tiempo y habilidades para apoyar nuestras iniciativas en terreno y generar impacto directo.",
    details:
      "Buscamos profesionales, estudiantes y personas comprometidas que quieran aportar desde sus áreas de experiencia.",
    image: "/volunteers-working-together-community-teamwork.png",
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
    borderColor: "border-secondary/20",
    buttonVariant: "default" as const,
    buttonBg: "bg-secondary hover:bg-secondary/90",
  },
  {
    icon: Handshake,
    title: "Alianzas / Patrocinios",
    description:
      "Establece alianzas estratégicas con tu organización o empresa para co-crear soluciones de impacto sostenible.",
    details:
      "Trabajamos con instituciones públicas, privadas y organizaciones sociales que comparten nuestra visión de desarrollo integral.",
    image: "/business-partnership-handshake-collaboration-profe.png",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    borderColor: "border-primary/20",
    buttonVariant: "default" as const,
    buttonBg: "bg-primary hover:bg-primary/90",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function QuieroApoyarSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">Quiero apoyar</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Tu apoyo es fundamental para seguir impulsando el desarrollo de comunidades a través de la tecnología, la
            medicina y la educación. Hay múltiples formas de sumarte a nuestra misión
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {supportOptions.map((option, i) => {
            const Icon = option.icon
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.01 }}
              >
                <Card
                  className={`border-2 ${option.borderColor} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white rounded-2xl overflow-hidden group`}
                >
                  {/* Image with overlay */}
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <Image
                      src={option.image || "/placeholder.svg"}
                      alt={option.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div
                      className={`absolute top-4 left-4 w-12 h-12 rounded-xl ${option.iconBg} border-2 ${option.borderColor} flex items-center justify-center bg-white/95 backdrop-blur-sm`}
                    >
                      <Icon className={`w-6 h-6 ${option.iconColor}`} />
                    </div>
                  </div>

                  <CardHeader className="space-y-3">
                    <CardTitle className="text-xl text-primary">{option.title}</CardTitle>
                    <CardDescription className="text-foreground/75 leading-relaxed text-balance">
                      {option.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{option.details}</p>

                    <Button className={`w-full rounded-xl transition-all font-semibold ${option.buttonBg}`}>
                      Quiero {option.title.toLowerCase()}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Trust and impact message */}
        <div className="mt-16 text-center">
          <Card className="inline-block border-2 border-primary/10 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl px-8 py-6 max-w-4xl">
            <p className="text-base text-foreground/80 leading-relaxed">
              Con tu apoyo, más de <span className="font-bold text-primary">500 familias</span> han accedido a servicios
              de tecnología, educación y salud. Juntos podemos multiplicar este impacto y construir un futuro más
              equitativo para todos.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
