import Image from "next/image"
import Link from "next/link"
import { BookOpen, Zap, Heart, ArrowRight } from "lucide-react"
import { HorizontalScrollWrapper } from "@/components/ui/horizontal-scroll-wrapper"

const axes = [
  {
    id: 1,
    title: "Tecnología Productiva",
    subtitle: "Innovación digital para el desarrollo",
    description:
      "Impulsamos la innovación tecnológica y digital para fortalecer capacidades productivas en comunidades vulnerables, cerrando la brecha digital con soluciones prácticas y accesibles.",
    icon: Zap,
    image: "/technology-innovation-computers-lab-digitalv.png",
    iconColor: "text-primary",
    accentColor: "bg-primary",
  },
  {
    id: 2,
    title: "Educación Integral",
    subtitle: "Formación para transformar vidas",
    description:
      "Promovemos acceso a educación de calidad con programas de alfabetización digital, formación técnica y capacitación continua para todas las edades.",
    icon: BookOpen,
    image: "/education-students-learning-classroom-workshop.png",
    iconColor: "text-secondary",
    accentColor: "bg-secondary",
  },
  {
    id: 3,
    title: "Prevención de la Salud",
    subtitle: "Bienestar accesible para todos",
    description:
      "Facilitamos acceso a servicios de salud preventiva, telemedicina y programas de bienestar para comunidades desatendidas, priorizando la prevención y la atención temprana.",
    icon: Heart,
    image: "/healthcare-wellness-doctors-prevention-medical.png",
    iconColor: "text-accent",
    accentColor: "bg-accent",
  },
]

export default function AxesSection() {
  return (
    <HorizontalScrollWrapper 
      zIndex={3} 
      className="bg-muted"
      contentClassName="px-6 md:px-16 lg:px-24 gap-20 md:gap-40"
    >
      {/* Slide 1: Section Header */}
      <div data-horizontal-group className="w-[85vw] md:w-[45vw] max-w-2xl shrink-0">
        <div className="overflow-hidden">
          <span data-horizontal-reveal="fade-up" className="block text-xs md:text-sm font-semibold tracking-widest uppercase text-secondary">
            Nuestros ejes
          </span>
        </div>
        <div className="overflow-hidden mt-4">
          <h2 data-horizontal-reveal="fade-up" className="block text-4xl md:text-5xl lg:text-7xl font-bold text-primary tracking-tight leading-[1.05]">
            Tres áreas
            <br />
            clave para el
            <br />
            desarrollo.
          </h2>
        </div>
        <div className="overflow-hidden mt-8">
          <p data-horizontal-reveal="fade-up" className="block text-base md:text-xl text-muted-foreground leading-relaxed max-w-[40ch]">
            Articulamos tecnología, educación y salud para generar impacto sostenible en las comunidades del Departamento de La Paz.
          </p>
        </div>
      </div>

      {/* Slides 2-4: Axes Layout */}
      {axes.map((axis, i) => {
        const Icon = axis.icon
        // Alternating layouts for visual interest in horizontal scroll
        const isReversed = i % 2 === 1
        
        return (
          <div
            key={axis.id}
            data-horizontal-group
            className={`w-[85vw] md:w-[70vw] max-w-6xl shrink-0 flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-20 items-center justify-center`}
          >
            {/* Image */}
            <div 
              data-horizontal-reveal="clip-image"
              className="w-full lg:w-1/2 relative rounded-2xl md:rounded-3xl overflow-hidden h-[300px] md:h-[500px] shadow-2xl" 
              style={{ willChange: "transform, opacity, clip-path" }}
            >
              <div className="axis-img-inner absolute inset-0 will-change-transform">
                <Image
                  src={axis.image}
                  alt={axis.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.05]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent mix-blend-multiply" />
              
              <div data-horizontal-reveal="scale-up" className={`absolute top-6 left-6 md:top-8 md:left-8 w-14 h-14 md:w-16 md:h-16 rounded-2xl ${axis.accentColor} shadow-xl flex items-center justify-center`}>
                <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
              <div className="space-y-3">
                <div className="overflow-hidden">
                  <span data-horizontal-reveal="fade-up" className="block text-sm md:text-base font-bold tracking-widest uppercase text-muted-foreground">
                    {axis.subtitle}
                  </span>
                </div>
                <div className="overflow-hidden pb-2">
                  <h3 data-horizontal-reveal="fade-up" className="block text-3xl md:text-5xl font-bold text-primary tracking-tight leading-[1.1]">
                    {axis.title}
                  </h3>
                </div>
              </div>

              <div className="overflow-hidden">
                <p data-horizontal-reveal="fade-up" className="block text-lg md:text-xl text-foreground/70 leading-relaxed max-w-[45ch]">
                  {axis.description}
                </p>
              </div>

              <div className="overflow-hidden pt-4">
                <Link
                  data-horizontal-reveal="fade-up"
                  href="/areas-de-trabajo"
                  className="inline-flex items-center gap-3 text-base font-semibold text-secondary hover:text-secondary/80 hover:gap-4 transition-all group"
                >
                  Conocer más
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        )
      })}

      {/* Ending Spacer - gives breathing room before the section unpins */}
      <div className="w-[10vw] shrink-0" />
    </HorizontalScrollWrapper>
  )
}
