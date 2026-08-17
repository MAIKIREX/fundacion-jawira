'use client'

import React, { useState, useMemo } from 'react'
import ActividadesHeroSection from './actividades-hero-section'
import ActividadesListSection from './actividades-list-section'
import { ACTIVIDADES_DATA, CategoriaActividad } from './actividades-data'

export default function ActividadesClient() {
  const [categoriaActiva, setCategoriaActiva] = useState<CategoriaActividad>('todos')
  const [busqueda, setBusqueda] = useState<string>('')

  // Compute filtered count for the hero counter
  const totalCount = useMemo(() => {
    return ACTIVIDADES_DATA.filter((act) => {
      const matchCategoria =
        categoriaActiva === 'todos' || act.categoria === categoriaActiva
      const matchBusqueda =
        !busqueda ||
        act.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
        act.subtitulo?.toLowerCase().includes(busqueda.toLowerCase()) ||
        act.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
        act.lugar.toLowerCase().includes(busqueda.toLowerCase()) ||
        act.temas.some((t) => t.toLowerCase().includes(busqueda.toLowerCase()))
      return matchCategoria && matchBusqueda
    }).length
  }, [categoriaActiva, busqueda])

  return (
    <>
      <ActividadesHeroSection
        categoriaActiva={categoriaActiva}
        onSelectCategoria={setCategoriaActiva}
        busqueda={busqueda}
        onBusquedaChange={setBusqueda}
        totalCount={totalCount}
      />
      <ActividadesListSection
        actividades={ACTIVIDADES_DATA}
        categoriaActiva={categoriaActiva}
        busqueda={busqueda}
      />
    </>
  )
}
