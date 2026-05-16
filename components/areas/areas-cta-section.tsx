import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function AreasCtaSection() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        
        <div className="space-y-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
            Colaboración
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.08]">
            ¿Te gustaría sumarte <br className="hidden sm:block" />
            a nuestra misión?
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed font-light">
          Somos una organización abierta a la colaboración. Si eres voluntario, aliado institucional o donante interesado en potenciar alguno de estos ejes, conversemos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild variant="cta" size="lg">
            <Link href="/contacto">
              Contactar ahora
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="border-2">
            <Link href="/fundacion">
              Conocer la fundación
            </Link>
          </Button>
        </div>
        
      </div>
    </section>
  )
}
