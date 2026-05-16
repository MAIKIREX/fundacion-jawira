export default function CompromisoSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">

          {/* Left: Header */}
          <div className="lg:sticky lg:top-32 space-y-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
              Principio rector
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight">
              Nuestro compromiso con la transparencia
            </h2>
          </div>

          {/* Right: Body text */}
          <div className="space-y-6 text-base text-foreground/70 leading-relaxed">
            <p>
              La Fundación JAWIRA se guía por principios fundamentales de integridad, responsabilidad
              social y rendición de cuentas. Entendemos que la confianza es el cimiento de nuestro
              trabajo con las comunidades, instituciones aliadas y donantes.
            </p>
            <p>
              La transparencia en JAWIRA no es solo financiera, sino también{" "}
              <span className="font-medium text-foreground">programática</span>. Nos comprometemos a
              informar de forma clara qué hacemos, dónde lo hacemos, con quién colaboramos y qué
              resultados generamos. Esta información es fundamental para mejorar continuamente nuestras
              acciones y asegurar que los recursos se usen de forma óptima.
            </p>
            <p>
              Buscamos generar relaciones de confianza basadas en la comunicación honesta, la
              documentación clara y la disposición a rendir cuentas ante cualquier persona, institución
              o donante interesado.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
