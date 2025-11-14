import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function AreasCtaSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 via-green-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          ¿Te gustaría colaborar en alguna de estas áreas?
        </h2>
        
        <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
          Somos una organización abierta a colaboración. Si eres voluntario/a, aliado institucional o donante interesado en apoyar alguno de nuestros ejes, nos encantaría conocerte.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contacto">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base rounded-lg inline-flex items-center gap-2 w-full sm:w-auto">
              Quiero apoyar
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          
          <Link href="/fundacion">
            <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold px-8 py-6 text-base rounded-lg w-full sm:w-auto">
              Conocer más sobre la Fundación
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
