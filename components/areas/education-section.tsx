'use client'

import React from 'react'
import { BookOpen, GraduationCap, Laptop, Users } from 'lucide-react'
import EditorialSplitSection from '@/components/ui/editorial-split-section'

const educationRows = [
  {
    id: 'capacitacion-docente',
    metric: '01',
    title: 'CAPACITACIÓN DOCENTE',
    description: 'Programas de formación continua para maestros en herramientas digitales, pedagogía innovadora y educación inclusiva.',
    icon: GraduationCap,
    href: '#educacion'
  },
  {
    id: 'alfabetizacion-digital',
    metric: '02',
    title: 'ALFABETIZACIÓN DIGITAL',
    description: 'Formación para estudiantes y adultos en competencias digitales, pensamiento crítico y resolución de problemas.',
    icon: Laptop,
    href: '#educacion'
  },
  {
    id: 'contenidos-educativos',
    metric: '03',
    title: 'CONTENIDOS EDUCATIVOS',
    description: 'Desarrollo de materiales didácticos digitales, cursos en línea y recursos accesibles de código abierto.',
    icon: BookOpen,
    href: '#educacion'
  },
  {
    id: 'educacion-inclusiva',
    metric: '04',
    title: 'EDUCACIÓN INCLUSIVA',
    description: 'Programas especializados para poblaciones rurales, mujeres y grupos históricamente excluidos.',
    icon: Users,
    href: '#educacion'
  }
]

export default function EducationSection() {
  return (
    <div id="educacion">
      <EditorialSplitSection
        imageSrc="/education-students-learning-classroom-workshop.png"
        imageAlt="Educación Integral Fundación Jawira"
        imageBadge="FOTOGRAFÍA OFICIAL EDUCACIÓN JAWIRA"
        eyebrow="Eje de Acción 02"
        title="Educación integral y formativa."
        description="Fortalecemos capacidades educativas y digitales para docentes, estudiantes y comunidades del Departamento de La Paz."
        rows={educationRows}
        footnote="* EJE 02 — FORMACIÓN DOCENTE, COMPETENCIAS DIGITALES E INCLUSIÓN EDUCATIVA FUNDACIÓN JAWIRA."
        reverse={true}
      />
    </div>
  )
}
