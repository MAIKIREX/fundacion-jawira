export default function VisionImpactoSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">

          {/* Left: Header */}
          <div className="lg:sticky lg:top-32 space-y-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
              Visión de impacto
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight">
              Impacto social real, medible y sostenible
            </h2>
          </div>

          {/* Right: Body text */}
          <div className="space-y-6 text-base text-foreground/70 leading-relaxed">
            <p>
              La Fundación JAWIRA busca generar un impacto social real, medible y sostenible en el Departamento
              de La Paz. Nuestro trabajo se orienta hacia poblaciones vulnerables, especialmente niñas, niños,
              adolescentes y mujeres que enfrentan brechas significativas en acceso a tecnología, educación y
              servicios de salud.
            </p>
            <p>
              El impacto que buscamos se basa en tres pilares fundamentales: la mejora del acceso a tecnología
              productiva e innovadora, el fortalecimiento de la educación de calidad, y la ampliación de servicios
              de salud integral. Estos tres ejes, trabajados de forma articulada, crean sinergias que potencian
              el desarrollo de las comunidades.
            </p>
            <p>
              No trabajamos en sectores aislados. Nuestro enfoque es{" "}
              <span className="font-medium text-foreground">sistémico e integrado</span>: la tecnología sirve
              para mejorar la educación y la salud; la educación fortalece el uso responsable de tecnología; y la
              salud es la base para que las personas puedan aprovechar las oportunidades de aprendizaje y
              desarrollo económico.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
