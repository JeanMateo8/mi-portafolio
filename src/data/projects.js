import sistemaVentas from "../assets/projects/sistema-ventas.png"

const projects = [
  {
    id: 1,
    slug: "sistema-ventas",
    titulo: "Sistema de Ventas",
    descripcion:
      "Sistema web desarrollado para gestionar ventas, productos, clientes, insumos, pagos, deudas y otros procesos administrativos desde una única plataforma.",
    tecnologias: [
      "PHP",
      "MySQL",
      "JavaScript",
      "AJAX",
      "DataTables",
    ],
    categoria: "Sistema Web",
    imagen: sistemaVentas,
    demo: "https://www.avicolavania.com/app/",
    github: "https://github.com/JeanMateo8/sis_molino",
    destacado: true,
  },

  {
    id: 2,
    slug: "sistema-inventario",
    titulo: "Sistema de Inventario",
    descripcion:
      "Sistema web para controlar productos, entradas, salidas, stock y movimientos de inventario.",
    tecnologias: [
      "PHP",
      "MySQL",
      "JavaScript",
      "Tailwind CSS",
    ],
    categoria: "Gestión",
    imagen: null,
    demo: "#",
    github: "#",
    destacado: false,
  },

  {
    id: 3,
    slug: "otro-proyecto",
    titulo: "Próximo proyecto",
    descripcion:
      "Nuevo proyecto en desarrollo que próximamente formará parte de mi portafolio.",
    tecnologias: [],
    categoria: "En desarrollo",
    imagen: null,
    demo: "#",
    github: "#",
    destacado: false,
  },
]

export default projects