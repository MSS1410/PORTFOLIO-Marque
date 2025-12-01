// src/data/projects.ts
export type ProjectCategory = 'api' | 'javascript' | 'react'

export type Project = {
  id: string
  title: string
  date: string
  githubUrl: string
  liveUrl?: string // opcional: para demo desplegada
  description: string
  techDescription: string
  images: string[]
  category: ProjectCategory
}

export const projects: Project[] = [
  // 1) PRIMERO A MOSTRAR
  {
    id: 'dilery',
    title: 'Dilery – Digital Art Gallery',
    date: '20 / 01 / 2024',
    githubUrl: 'https://github.com/MSS1410/DILERY003',
    description:
      'API para una galería de arte digital, pensada para gestionar obras, artistas y colecciones desde un backend único y reutilizable.',
    techDescription:
      'Proyecto centrado en el diseño de una API REST y la definición clara de recursos y endpoints para ser consumidos por futuros frontends. Incluye documentación funcional y uso de variables de entorno para la configuración.',
    images: [],
    category: 'api'
  },

  // 2) SEGUNDO A MOSTRAR
  {
    id: 'api-streaming-musica',
    title: 'MuStream - Music streaming backend',
    date: '03 / 02 / 2024',
    githubUrl: 'https://github.com/MSS1410/API-Streaming-Musica',
    description:
      'API REST para gestionar plataformas de música en streaming y sus canciones: creación, listado, actualización y eliminación de plataformas y temas, además de búsquedas por nombre y filtros por valoración.',
    techDescription:
      'Backend desarrollado con Node.js, Express y MongoDB. Expone endpoints REST organizados por recursos (`/api/canciones`, `/api/plataformas`), utiliza un archivo `.env` para la configuración de la base de datos y se ejecuta como servicio independiente listo para integrarse con cualquier frontend.',
    images: [],
    category: 'api'
  },

  // 3) ANTERIOR (eTOMIC)
  {
    id: 'gestion-eventos',
    title: 'eTOMIC – Gestión de eventos',
    date: '12 / 08 / 2024',
    githubUrl:
      'https://github.com/MSS1410/Gestion-de-Eventos---Javascript-FullStack',
    liveUrl: 'https://gestion-de-eventos-javascript-full-three.vercel.app/',
    description:
      'Aplicación full stack de gestión de eventos donde los usuarios pueden registrarse, iniciar sesión y marcar asistencia, mientras que el administrador controla usuarios, eventos y comunidad.',
    techDescription:
      'Stack JavaScript completo: frontend con React + Vite y una interfaz responsive ligera; backend en Node.js + Express con API REST, autenticación y autorización mediante JWT, conexión a MongoDB y subida de imágenes a Cloudinary. Incluye roles diferenciados (usuario / admin), protección de rutas y configuración mediante variables de entorno.',
    images: [],
    category: 'javascript'
  },

  // 4) ANTEPENÚLTIMO
  {
    id: 'balance-hub',
    title: 'Balance Hub – Games Hub',
    date: '22 / 11 / 2024',
    githubUrl: 'https://github.com/MSS1410/Balance-GamesHub',
    liveUrl: 'https://balance-games-hub.vercel.app',
    description:
      'Hub de minijuegos en el que el usuario progresa a través de tres juegos encadenados (colores, círculos en caída y tres en raya) cumpliendo objetivos de “balance” en cada etapa.',
    techDescription:
      'Aplicación frontend construida con HTML5, CSS3 y JavaScript moderno (ES modules) utilizando Vite como bundler. Estructurada por pantallas (home, juego de colores, círculos, tic-tac-toe) con fuerte uso de animaciones y transiciones CSS y una experiencia a pantalla completa.',
    images: [],
    category: 'javascript'
  },

  // 5) PENÚLTIMO
  {
    id: 'kremas-real-state',
    title: 'Kremas  - Real State ',
    date: '10 / 02 / 2025',
    githubUrl: 'https://github.com/MSS1410/Kremas-Real-State---Entrega',
    liveUrl: 'https://kremas-real-state-entrega.vercel.app',
    description:
      'Portal inmobiliario en React para explorar propiedades, ver detalles individuales y gestionar una lista de favoritos, con navegación entre distintas páginas como home, listado, detalle y contacto.',
    techDescription:
      'Desarrollado con React + Vite, React Router DOM para el enrutado entre vistas, contexto y hooks personalizados para gestionar propiedades y formularios de búsqueda, y CSS organizado por componentes y páginas. Incluye componentes reutilizables como tarjetas de propiedad, FAQ, sistema de rating y layout con cabecera y pie de página.',
    images: [],
    category: 'react'
  },

  // 6) ÚLTIMO (PROYECTO PRINCIPAL)
  {
    id: 'kbooks',
    title: 'KBOOKS – Librería online',
    date: '18 / 06 / 2025',
    githubUrl: 'https://github.com/MSS1410/Kbook--Entrega',
    // cuando lo tengas desplegado, puedes añadir aquí:
    liveUrl: 'https://kbook-entrega-v2je.vercel.app',
    description:
      'Plataforma completa para la gestión y venta de libros online. Permite a los usuarios explorar el catálogo, gestionar su carrito, dejar reseñas y a los administradores controlar libros, autores, pedidos, usuarios y estadísticas.',
    techDescription:
      'Proyecto Full Stack MERN: backend en Node.js + Express con arquitectura modular (config, controllers, models, routes, middlewares y scripts de seeds), base de datos MongoDB, autenticación JWT y subida de archivos con Multer; frontend en React + Vite con Styled Components, Axios para consumir la API y gráficos con Recharts para dashboards y métricas de administración.',
    images: [],
    category: 'react'
  }
]
