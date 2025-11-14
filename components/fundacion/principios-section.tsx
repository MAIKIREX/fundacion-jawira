'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { Shield, Heart } from 'lucide-react'

export default function PrincipiosSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Principios Institucionales
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Alineados con la normativa boliviana y el compromiso con los derechos humanos.
          </p>
        </div>

        <Tabs defaultValue="ley045" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto md:max-w-none md:w-auto grid-cols-2 mb-8">
            <TabsTrigger value="ley045" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span className="hidden sm:inline">Ley 045</span>
              <span className="sm:hidden">Ley 045</span>
            </TabsTrigger>
            <TabsTrigger value="ley348" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              <span className="hidden sm:inline">Ley 348</span>
              <span className="sm:hidden">Ley 348</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ley045">
            <Card className="p-8 md:p-12 border-l-4 border-l-blue-500">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Ley Contra el Racismo y Toda Forma de Discriminación
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg text-primary mb-3">
                    Igualdad
                  </h4>
                  <p className="text-muted-foreground">
                    Garantizamos que todas las personas tienen iguales derechos y oportunidades, sin importar su origen étnico, género, edad o condición social.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-primary mb-3">
                    No Discriminación
                  </h4>
                  <p className="text-muted-foreground">
                    Rechazamos toda forma de discriminación y trabajamos activamente para eliminar barreras que afecten a poblaciones vulnerables.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-primary mb-3">
                    Interculturalidad
                  </h4>
                  <p className="text-muted-foreground">
                    Valoramos y respetamos la diversidad cultural, lingüística y de cosmovisiones de los pueblos originarios y comunidades.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-primary mb-3">
                    Respeto a la Diversidad
                  </h4>
                  <p className="text-muted-foreground">
                    Reconocemos que la diversidad es una fortaleza que enriquece nuestras acciones y visión institucional.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="ley348">
            <Card className="p-8 md:p-12 border-l-4 border-l-pink-500">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Ley Integral contra la Violencia hacia las Mujeres
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg text-primary mb-3">
                    Vida Libre de Violencia
                  </h4>
                  <p className="text-muted-foreground">
                    Trabajamos para garantizar que todas las mujeres puedan vivir sin violencia física, psicológica, sexual o patrimonial.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-primary mb-3">
                    Equidad de Género
                  </h4>
                  <p className="text-muted-foreground">
                    Promovemos la igualdad de derechos y oportunidades entre hombres y mujeres en todos nuestros proyectos.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-primary mb-3">
                    Cultura de Paz
                  </h4>
                  <p className="text-muted-foreground">
                    Fomentamos relaciones respetuosas, dialógicas y libres de violencia en todas las comunidades con las que trabajamos.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-primary mb-3">
                    Respeto y Dignidad
                  </h4>
                  <p className="text-muted-foreground">
                    Reconocemos la dignidad inherente de todas las personas y el derecho al trato respetuoso y sin discriminación.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
