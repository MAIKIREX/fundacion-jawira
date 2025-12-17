"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Handshake, Users } from "lucide-react"

const supportWays = [
  {
    icon: Heart,
    title: "Donaciones",
    description: "Contribuye económicamente para financiar nuestros programas y proyectos de impacto.",
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
    borderColor: "border-accent/20",
  },
  {
    icon: Users,
    title: "Voluntariado",
    description: "Únete a nuestro equipo con tus habilidades y conocimientos para apoyar en terreno.",
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
    borderColor: "border-secondary/20",
  },
  {
    icon: Handshake,
    title: "Alianzas",
    description: "Colabora con nosotros como institución o empresa para generar sinergia de impacto.",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    borderColor: "border-primary/20",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function SupportSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">Cómo puedes apoyar</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Hay múltiples formas de ser parte del cambio en Fundación JAWIRA
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {supportWays.map((way, i) => {
            const Icon = way.icon
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
                  className={`border-2 ${way.borderColor} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white rounded-2xl`}
                >
                  <CardHeader className="space-y-4">
                    <div
                      className={`w-14 h-14 rounded-xl ${way.iconBg} border-2 ${way.borderColor} flex items-center justify-center`}
                    >
                      <Icon className={`w-7 h-7 ${way.iconColor}`} />
                    </div>
                    <CardTitle className="text-xl text-primary">{way.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <CardDescription className="text-foreground/75 leading-relaxed">{way.description}</CardDescription>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground rounded-xl transition-all font-semibold bg-transparent"
                    >
                      <Link href="/contacto">Quiero saber más</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
