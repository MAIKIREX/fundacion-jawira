export interface Expositor {
  nombre: string
  cargo: string
  institucion?: string
  avatar?: string
}

export type CategoriaActividad = 'todos' | 'encuentros' | 'talleres' | 'tecnologia' | 'salud' | 'comunidad'

export interface Actividad {
  id: string
  tipo: string
  categoria: CategoriaActividad
  categoriaTag: string
  titulo: string
  subtitulo?: string
  descripcion: string
  descripcionCompleta: string
  fecha: string
  fechaCorta: string
  hora: string
  lugar: string
  lugarDetalle?: string
  temas: string[]
  expositores?: Expositor[]
  incluye?: string[]
  imagen: string
  imagenThumb?: string
  estado: 'proximo' | 'en-curso' | 'finalizado'
  destacado?: boolean
  ordenDestacado?: number // 1: Hero Principal (Izquierda), 2: Apilado Superior (Derecha), 3: Apilado Inferior (Derecha)
  registroUrl?: string
  ubicacionUrl?: string
  organizador?: string
}

export const CATEGORIAS_FILTRO: { id: CategoriaActividad; label: string }[] = [
  { id: 'todos', label: 'Todas las Actividades' },
  { id: 'encuentros', label: 'Encuentros Cívicos' },
  { id: 'talleres', label: 'Talleres de Formación' },
  { id: 'tecnologia', label: 'Tecnología e Innovación' },
  { id: 'salud', label: 'Salud Comunitaria' },
  { id: 'comunidad', label: 'Desarrollo Comunitario' },
]

export const ACTIVIDADES_DATA: Actividad[] = [
  {
    id: 'dialogos-que-transforman',
    tipo: 'Encuentro Ciudadano',
    categoria: 'encuentros',
    categoriaTag: 'DEMOCRACIA & DIÁLOGO',
    titulo: 'Diálogos que Transforman:',
    subtitulo: 'Tu voz, tu espacio en la democracia boliviana',
    descripcion:
      'Espacio abierto de reflexión, participación ciudadana e incidencia pública organizado junto al Tribunal Electoral Departamental de La Paz para promover el debate informado y la deliberación democrática.',
    descripcionCompleta:
      'Organizado por Fundación Jawira en alianza estratégica con el Tribunal Electoral Departamental de La Paz y organizaciones ciudadanas, este encuentro busca fortalecer los canales de deliberación democrática, la lucha activa contra la desinformación en procesos electorales y la incidencia directa de las comunidades en la formulación de políticas públicas locales.',
    fecha: '28 de mayo de 2026',
    fechaCorta: '28 MAY 2026',
    hora: '18:00 – 21:00',
    lugar: 'Salón de Honor — Calle Yanacocha N.º 628',
    lugarDetalle: 'Frente al Colegio Ayacucho, Centro Histórico de La Paz',
    temas: [
      'Participación ciudadana activa',
      'Lucha contra la desinformación digital',
      'Transparencia en procesos electorales',
      'Mecanismos de control social',
      'Incidencia comunitaria en políticas públicas',
    ],
    expositores: [
      {
        nombre: 'Lic. Capac Antonio Callisaya Valeriano',
        cargo: 'Politólogo y Especialista en Procesos Democráticos y Políticas Públicas',
        institucion: 'Especialista Invitado TED La Paz',
      },
      {
        nombre: 'Equipo de Facilitación Jawira',
        cargo: 'Coordinación de Formación Cívica y Democracia Comunitaria',
        institucion: 'Fundación JAWIRA',
      },
    ],
    incluye: [
      'Certificado institucional de participación',
      'Kit de material pedagógico y guías de debate',
      'Refrigerio de confraternidad',
      'Cupo limitado para diálogo directo',
    ],
    imagen: '/actividades/uno/703105150_122104516274339138_6484863401707773038_n.jpg',
    imagenThumb: '/diverse-community-people-bolivia-population-group.png',
    estado: 'proximo',
    destacado: true,
    ordenDestacado: 1, // Featured Main Left
    organizador: 'Fundación JAWIRA & TED La Paz',
  },
  {
    id: 'encuentro-tus-valores-democraticos',
    tipo: 'Encuentro Cívico',
    categoria: 'encuentros',
    categoriaTag: 'FORMACIÓN CIUDADANA',
    titulo: 'Tú con tus Valores Democráticos',
    subtitulo: 'Construyendo comunidad con ética y participación',
    descripcion:
      'Jornada de diálogo barrial y reflexión sobre valores democráticos, liderazgo juvenil y compromiso cívico en las laderas paceñas.',
    descripcionCompleta:
      'Un encuentro cercano y participativo en Villa Fátima para debatir el rol de los vecinos, jóvenes y dirigentes en la fiscalización social, la erradicación de noticias falsas y el fortalecimiento del tejido social comunitario.',
    fecha: '29 de mayo de 2026',
    fechaCorta: '29 MAY 2026',
    hora: '18:00 – 21:00',
    lugar: 'Sede Social de Natividad',
    lugarDetalle: 'Lado Monopol, Zona Villa Fátima, La Paz',
    temas: [
      'Valores cívicos y éticos',
      'Participación activa vecinal',
      'Verificación de información en redes sociales',
      'Control social barrial',
    ],
    expositores: [
      {
        nombre: 'Msc. Elena Quispe Condori',
        cargo: 'Socióloga y Docente en Gestión Social',
        institucion: 'Fundación JAWIRA',
      },
    ],
    incluye: [
      'Certificado de asistencia',
      'Material didáctico impreso',
      'Espacio de networking vecinal',
    ],
    imagen: '/actividades/uno/dos.jpg',
    imagenThumb: '/community-development-people-working-together-bolivia.png',
    estado: 'proximo',
    destacado: true,
    ordenDestacado: 2, // Right Top Card
    registroUrl: 'https://forms.gle/JPCq6pG9uXyDoM3z6',
    ubicacionUrl: 'https://maps.app.goo.gl/KuM5s6335zC4Sv616',
    organizador: 'Fundación JAWIRA & Junta Vecinal Natividad',
  },
  {
    id: 'taller-robotica-alfabetizacion-digital',
    tipo: 'Taller Práctico',
    categoria: 'tecnologia',
    categoriaTag: 'TECNOLOGÍA PRODUCTIVA',
    titulo: 'Laboratorio de Innovación y Robótica Comunitaria',
    subtitulo: 'Habilidades STEM aplicadas al desarrollo local',
    descripcion:
      'Taller práctico de programación en bloques, robótica básica con placas abiertas y herramientas digitales para jóvenes y emprendedores.',
    descripcionCompleta:
      'Espacio de formación técnica en el Centro Integral Jawira donde los participantes aprenden fundamentos de electrónica, programación aplicada a la automatización agrícola andina y desarrollo de prototipos tecnológicos de bajo costo.',
    fecha: '12 de junio de 2026',
    fechaCorta: '12 JUN 2026',
    hora: '15:00 – 18:30',
    lugar: 'Centro Integral Jawira — Lab Digital',
    lugarDetalle: 'Av. Principal N.º 450, El Alto / La Paz',
    temas: [
      'Fundamentos de robótica y sensores',
      'Automatización de riego para altiplano',
      'Pensamiento computacional práctico',
      'Acceso a herramientas de software libre',
    ],
    expositores: [
      {
        nombre: 'Ing. Rodrigo Mamani Flores',
        cargo: 'Coordinador del Área de Tecnología Productiva',
        institucion: 'Fundación JAWIRA',
      },
    ],
    incluye: [
      'Acceso a computadoras y kits de robótica',
      'Guía digital paso a paso',
      'Certificado con carga horaria (20 hrs)',
    ],
    imagen: '/technology-innovation-computers-lab-digitalv.png',
    imagenThumb: '/technology-innovation-computers-lab-digitalv.png',
    estado: 'proximo',
    destacado: true,
    ordenDestacado: 3, // Right Bottom Card
    registroUrl: 'https://forms.gle/JPCq6pG9uXyDoM3z6',
    organizador: 'Fundación JAWIRA',
  },
  {
    id: 'jornada-salud-preventiva-nutricion',
    tipo: 'Jornada Integral',
    categoria: 'salud',
    categoriaTag: 'SALUD COMUNITARIA',
    titulo: 'Jornada de Salud Preventiva y Nutrición Andina',
    subtitulo: 'Cuidado integral, tamizaje y revalorización nutricional',
    descripcion:
      'Atención preventiva multidisciplinaria, talleres de nutrición con alimentos nativos (quinua, cañahua, tarwi) y despistaje de salud general.',
    descripcionCompleta:
      'Encuentro de salud enfocado en familias de comunidades vulnerables, combinando chequeos preventivos de presión y glucosa con charlas prácticas sobre seguridad alimentaria, soberanía nutricional y medicina preventiva comunitaria.',
    fecha: '20 de junio de 2026',
    fechaCorta: '20 JUN 2026',
    hora: '09:00 – 14:00',
    lugar: 'Centro de Salud Comunitario y Espacio Jawira',
    lugarDetalle: 'Distrito 8, Zona Sur Este, La Paz',
    temas: [
      'Detección temprana de enfermedades metabólicas',
      'Propiedades nutricionales de granos andinos',
      'Higiene comunitaria y saneamiento básico',
      'Salud materno-infantil preventiva',
    ],
    expositores: [
      {
        nombre: 'Dra. Miriam Carvajal Soliz',
        cargo: 'Médica Especialista en Salud Pública',
        institucion: 'Fundación JAWIRA',
      },
    ],
    incluye: [
      'Controles de salud gratuitos',
      'Recetario nutricional andino impreso',
      'Atención personalizada para adultos mayores y niños',
    ],
    imagen: '/healthcare-wellness-doctors-prevention-medical.png',
    imagenThumb: '/healthcare-wellness-doctors-prevention-medical.png',
    estado: 'proximo',
    destacado: false,
    organizador: 'Fundación JAWIRA & Red de Salud Local',
  },
  {
    id: 'foro-agroecologia-soberania-alimentaria',
    tipo: 'Foro & Taller',
    categoria: 'comunidad',
    categoriaTag: 'AGROECOLOGÍA ANDINA',
    titulo: 'Soberanía Alimentaria y Tecnologías de Cosecha de Agua',
    subtitulo: 'Resiliencia climática en el altiplano boliviano',
    descripcion:
      'Intercambio de saberes ancestrales y técnicas contemporáneas de captación de agua de lluvia y protección de cultivos ante heladas.',
    descripcionCompleta:
      'Una sesión formativa y de intercambio comunitario donde productores locales, agrónomos y miembros de la fundación comparten metodologías de conservación de suelos, microinvernaderos solares y reservorios familiares de agua.',
    fecha: '05 de julio de 2026',
    fechaCorta: '05 JUL 2026',
    hora: '08:30 – 16:00',
    lugar: 'Parcela Demostrativa Comunitaria — Achocalla',
    lugarDetalle: 'Sector Cañuma, Achocalla, La Paz',
    temas: [
      'Cosecha y almacenamiento de agua de lluvia',
      'Manejo de biofertilizantes orgánicos',
      'Mitigación de sequías y heladas en el altiplano',
      'Comercialización justa y directa',
    ],
    expositores: [
      {
        nombre: 'Ing. Agr. Juan de Dios Tancara',
        cargo: 'Especialista en Agroecología de Altura',
        institucion: 'Comunidad Agrícola de Achocalla',
      },
    ],
    incluye: [
      'Transporte solidario desde el centro de La Paz',
      'Almuerzo comunitario (Apthapi)',
      'Muestra práctica en campo demostrativo',
    ],
    imagen: '/contenido/andean-harvest-macro.jpg',
    imagenThumb: '/contenido/andean-potatoes-hands.jpg',
    estado: 'proximo',
    destacado: false,
    organizador: 'Fundación JAWIRA & Productores Agroecológicos',
  },
  {
    id: 'taller-educacion-liderazgo-juvenil',
    tipo: 'Taller de Liderazgo',
    categoria: 'talleres',
    categoriaTag: 'EDUCACIÓN INTEGRAL',
    titulo: 'Liderazgo Juvenil para la Transformación Social',
    subtitulo: 'Habilidades de oratoria, formulación de proyectos y debate',
    descripcion:
      'Programa intensivo para jóvenes líderes comunitarios enfocado en diseño de proyectos de impacto social, oratoria y resolución pacífica de conflictos.',
    descripcionCompleta:
      'Dirigido a jóvenes entre 16 y 28 años de La Paz y El Alto que deseen liderar iniciativas de cambio en sus zonas, colegios y universidades, dotándoles de herramientas metodológicas y de comunicación asertiva.',
    fecha: '18 de julio de 2026',
    fechaCorta: '18 JUL 2026',
    hora: '14:30 – 18:30',
    lugar: 'Auditorio Central — Fundación JAWIRA',
    lugarDetalle: 'Calle Belisario Salinas N.º 380, Sopocachi, La Paz',
    temas: [
      'Metodología de diseño de proyectos sociales',
      'Oratoria y argumentación lógica',
      'Gestión de alianzas y voluntariado',
      'Herramientas de colaboración digital',
    ],
    expositores: [
      {
        nombre: 'Lic. Gonzalo Vargas Rios',
        cargo: 'Facilitador de Liderazgo y Participación Juvenil',
        institucion: 'Fundación JAWIRA',
      },
    ],
    incluye: [
      'Manual de diseño de proyectos comunitarios',
      'Asesoría técnica para postulaciones a fondos',
      'Certificación académica',
    ],
    imagen: '/education-students-learning-classroom-workshop.png',
    imagenThumb: '/education-students-learning-classroom-workshop.png',
    estado: 'proximo',
    destacado: false,
    organizador: 'Fundación JAWIRA',
  },
]
