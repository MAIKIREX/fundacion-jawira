"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Zap, Heart, ArrowRight } from "lucide-react"

const axes = [
  {
    id: 1,
    title: "Tecnología Productiva y Tecnológica",
    description:
      "Impulsamos la innovación tecnológica y digital para fortalecer capacidades productivas en comunidades vulnerables.",
    icon: Zap,
    image: "/technology-innovation-computers-lab-digitalv.png",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    id: 2,
    title: "Educación",
    description:
      "Promovemos acceso a educación de calidad con programas de alfabetización digital y formación integral.",
    icon: BookOpen,
    image: "/education-students-learning-classroom-workshop.png",
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
    borderColor: "border-secondary/20",
  },
  {
    id: 3,
    title: "Salud",
    description: "Facilitamos acceso a servicios de salud preventiva y telemedicina para comunidades desatendidas.",
    icon: Heart,
    image: "/healthcare-wellness-doctors-prevention-medical.png",
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
    borderColor: "border-accent/20",
  },
]

export default function AxesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">Nuestros ejes de trabajo</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Articulamos tres áreas clave para generar impacto integral en el desarrollo sostenible
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {axes.map((axis) => {
            const Icon = axis.icon
            return (
              <Card
                key={axis.id}
                className={`border-2 ${axis.borderColor} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white rounded-2xl overflow-hidden group`}
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <Image
                    src={axis.image || "/placeholder.svg"}
                    alt={axis.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  <div
                    className={`absolute bottom-4 left-4 w-14 h-14 rounded-xl ${axis.iconBg} border-2 ${axis.borderColor} flex items-center justify-center bg-white/95 backdrop-blur-sm`}
                  >
                    <Icon className={`w-7 h-7 ${axis.iconColor}`} />
                  </div>
                </div>

                <CardHeader className="space-y-4">
                  <CardTitle className="text-xl text-primary">{axis.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-foreground/75 leading-relaxed">{axis.description}</CardDescription>

                  <Link
                    href="/areas-de-trabajo"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:gap-3 transition-all"
                  >
                    Ver más
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
