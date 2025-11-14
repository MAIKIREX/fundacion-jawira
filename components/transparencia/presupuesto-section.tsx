'use client'

import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DollarSign } from 'lucide-react'

export default function PresupuestoSection() {
  const presupuestoCategorias = [
    { nombre: 'Alquiler de oficina y espacios', porcentaje: 30 },
    { nombre: 'Servicios básicos (luz, agua, internet)', porcentaje: 15 },
    { nombre: 'Materiales y suministros de oficina', porcentaje: 12 },
    { nombre: 'Insumos médicos básicos', porcentaje: 15 },
    { nombre: 'Transporte y movilidad', porcentaje: 12 },
    { nombre: 'Comunicación y difusión', porcentaje: 10 },
    { nombre: 'Otros gastos operativos y administrativos', porcentaje: 6 },
  ]

  const presupuestoTotal = 20000

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Presupuesto inicial de la Fundación
            </h2>
            <p className="text-lg text-foreground/70">
              En su etapa inicial, JAWIRA cuenta con un presupuesto base de <span className="font-bold text-primary">Bs. 20.000,00</span> por año, destinado a sostener actividades administrativas y operativas mientras se consolidan alianzas y proyectos.
            </p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="2024" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="2024">2024</TabsTrigger>
              <TabsTrigger value="2025">2025</TabsTrigger>
            </TabsList>

            {['2024', '2025'].map((year) => (
              <TabsContent key={year} value={year} className="space-y-6 mt-8">
                {/* Categorías */}
                <div className="grid gap-4">
                  {presupuestoCategorias.map((categoria, idx) => {
                    const monto = (presupuestoTotal * categoria.porcentaje) / 100
                    return (
                      <Card key={idx} className="p-4 border-l-4 border-l-blue-500 hover:shadow-md transition-shadow">
                        <div className="space-y-3">
                          <div className="flex justify-between items-start">
                            <h4 className="font-semibold text-foreground">{categoria.nombre}</h4>
                            <span className="text-sm font-bold text-primary">Bs. {monto.toLocaleString('es-ES')}</span>
                          </div>
                          {/* Progress bar */}
                          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-green-500 h-full"
                              style={{ width: `${categoria.porcentaje}%` }}
                            />
                          </div>
                          <p className="text-xs text-muted-foreground">{categoria.porcentaje}% del presupuesto</p>
                        </div>
                      </Card>
                    )
                  })}
                </div>

                {/* Total */}
                <Card className="p-6 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <DollarSign className="w-8 h-8" />
                      <div>
                        <p className="text-sm opacity-90">Presupuesto total anual {year}</p>
                        <p className="text-2xl font-bold">Bs. {presupuestoTotal.toLocaleString('es-ES')}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm opacity-90">Gastos estimados</p>
                      <p className="text-xl font-bold">Bs. {presupuestoTotal.toLocaleString('es-ES')}</p>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
