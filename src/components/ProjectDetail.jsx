import {
  ArrowLeft,
  ExternalLink,
  Code2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTheme } from "../context/ThemeContext"
import sistemaVentas from "../assets/projects/sistema-ventas.png"
import ventas from "../assets/projects/ventas.png"
import clientes from "../assets/projects/clientes.png"
import productos from "../assets/projects/productos.png"
import usuarios from "../assets/projects/usuarios.png"
import reportes from "../assets/projects/reportes.png"

const capturas = [
  {
    imagen: sistemaVentas,
    titulo: "Vista principal",
    descripcion: "Panel principal del sistema de ventas.",
  },
  {
    imagen: ventas,
    titulo: "Gestión de ventas",
    descripcion: "Módulo para registrar y consultar operaciones de venta.",
  },
  {
    imagen: clientes,
    titulo: "Gestión de clientes",
    descripcion: "Administración de la información de los clientes.",
  },
  {
    imagen: productos,
    titulo: "Gestión de productos",
    descripcion: "Administración de productos y su información.",
  },
  {
    imagen: usuarios,
    titulo: "Gestión de usuarios",
    descripcion: "Administración de usuarios y acceso al sistema.",
  },
  {
    imagen: reportes,
    titulo: "Reportes",
    descripcion: "Consulta y visualización de información del sistema.",
  },
]

    const tecnologias = [
    {
        nombre: "PHP",
        descripcion: "Desarrollo de la lógica del servidor y procesamiento de datos.",
        logo: "https://cdn.simpleicons.org/php/777BB4",
    },
    {
        nombre: "MySQL",
        descripcion: "Gestión y almacenamiento de la información del sistema.",
        logo: "https://cdn.simpleicons.org/mysql/4479A1",
    },
    {
        nombre: "JavaScript",
        descripcion: "Interactividad y comportamiento dinámico de la interfaz.",
        logo: "https://cdn.simpleicons.org/javascript/F7DF1E",
    },
    {
        nombre: "AJAX",
        descripcion: "Comunicación dinámica entre la interfaz y el servidor.",
        logo: "https://cdn.simpleicons.org/jquery/0769AD",
    },
    {
        nombre: "DataTables",
        descripcion: "Visualización, búsqueda y organización de información en tablas.",
        logo: null,
        iniciales: "DT",
    },
]

const funcionalidades = [
  "Dashboard con información general del sistema",
  "Gestión de ventas",
  "Gestión de productos",
  "Gestión de insumos",
  "Gestión de fórmulas",
  "Gestión de salidas",
  "Gestión de deudas y pagos",
  "Gestión de clientes",
  "Reportes del sistema",
  "Gestión de usuarios",
  "Gestión del perfil",
  "Operaciones CRUD en los diferentes módulos",
]

const enlacesProyecto = {
  demo: "https://www.avicolavania.com/app/",
  github: "https://github.com/JeanMateo8/sis_molino",
}

function ProjectDetail() {
  const { darkMode } = useTheme()
  const [capturaSeleccionada, setCapturaSeleccionada] = useState(null)

        // SUBIR AL INICIO AL ENTRAR AL PROYECTO
        useEffect(() => {
            window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
            })
        }, [])

    const cambiarCaptura = (direccion) => {
        if (!capturaSeleccionada) return

        const indiceActual = capturas.findIndex(
        (captura) => captura.titulo === capturaSeleccionada.titulo
        )

        const nuevoIndice =
        (indiceActual + direccion + capturas.length) % capturas.length

        setCapturaSeleccionada(capturas[nuevoIndice])
    }
    useEffect(() => {
        const manejarTeclado = (event) => {
            if (!capturaSeleccionada) return

            if (event.key === "ArrowLeft") {
            cambiarCaptura(-1)
            }

            if (event.key === "ArrowRight") {
            cambiarCaptura(1)
            }

            if (event.key === "Escape") {
            setCapturaSeleccionada(null)
            }
        }

        window.addEventListener("keydown", manejarTeclado)

        return () => {
            window.removeEventListener("keydown", manejarTeclado)
        }
    }, [capturaSeleccionada])
        
  return (
    <main
        className={`min-h-screen px-6 py-24 transition-colors duration-300 ${
            darkMode
            ? "bg-slate-950 text-white"
            : "bg-slate-50 text-slate-900"
        }`}
    >

        <div className="mx-auto max-w-6xl">

            {/* VOLVER */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <Link
                    to="/#proyectos"
                    className={`mb-10 inline-flex items-center gap-2 text-sm font-medium transition hover:text-cyan-400 ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                >
                    <ArrowLeft size={18} aria-hidden="true" />
                    Volver a proyectos
                </Link>
            </motion.div>


            {/* ENCABEZADO */}
            <motion.header
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Proyecto destacado
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Sistema de Ventas
            </h1>

            <p
                className={`mt-6 max-w-3xl text-lg leading-8 ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                }`}
            >
                Aplicación web desarrollada para gestionar operaciones
                comerciales, centralizando información relacionada con clientes,
                productos y ventas.
            </p>

            </motion.header>


            {/* IMAGEN PRINCIPAL */}
            <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className={`mt-12 overflow-hidden rounded-2xl border shadow-2xl ${
                darkMode
                    ? "border-slate-800 bg-slate-900 shadow-black/20"
                    : "border-slate-200 bg-white shadow-slate-300/40"
                }`}
            >
            <img
                src={sistemaVentas}
                alt="Captura del Sistema de Ventas"
                className="h-auto w-full"
            />
            </motion.div>

            {/* GALERÍA */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-16"
                >
                <div className="text-center">

                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    Galería
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                    Capturas del sistema
                    </h2>

                    <p
                        className={`mx-auto mt-4 max-w-2xl leading-7 ${
                            darkMode ? "text-slate-400" : "text-slate-600"
                        }`}
                    >
                    Algunas de las principales interfaces y módulos desarrollados
                    para el sistema.
                    </p>

                </div>


                {/* TARJETAS */}
                <div className="mt-10 grid gap-8 md:grid-cols-2">

                    {capturas.map((captura, index) => (
                    <motion.article
                        key={captura.titulo}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                        }}
                        className={`group overflow-hidden rounded-2xl border shadow-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 ${
                        darkMode
                            ? "border-slate-800 bg-slate-900 shadow-black/10"
                            : "border-slate-200 bg-white shadow-slate-200/60"
                        }`}
                    >

                        {/* IMAGEN */}
                        <div
                            className={`overflow-hidden p-3 ${
                                darkMode ? "bg-slate-950" : "bg-slate-100"
                            }`}
                        >

                        <div
                            className={`overflow-hidden rounded-xl border bg-white ${
                                darkMode ? "border-slate-800" : "border-slate-200"
                            }`}
                        >
                            <button
                            type="button"
                            onClick={() => setCapturaSeleccionada(captura)}
                            className="block w-full cursor-zoom-in"
                            aria-label={`Ampliar ${captura.titulo}`}
                            >
                            <img
                                src={captura.imagen}
                                alt={`Captura de ${captura.titulo}`}
                                className="aspect-video w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                            />
                            </button>
                        </div>

                        </div>


                        {/* INFORMACIÓN */}
                        <div className="px-6 pb-6 pt-3">

                        <h3
                            className={`text-lg font-bold ${
                                darkMode ? "text-white" : "text-slate-900"
                            }`}
                        >
                            {captura.titulo}
                        </h3>

                        <p
                            className={`mt-2 text-sm leading-6 ${
                                darkMode ? "text-slate-400" : "text-slate-600"
                            }`}
                        >
                            {captura.descripcion}
                        </p>

                        </div>

                    </motion.article>
                    ))}

                </div>

            </motion.section>


            {/* INFORMACIÓN PRINCIPAL */}
            <div className="mt-16 grid gap-10 lg:grid-cols-3">

            {/* DESCRIPCIÓN */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2"
            >

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Sobre el proyecto
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                Gestión de operaciones comerciales
                </h2>

                <div
                    className={`mt-6 space-y-5 leading-8 ${
                        darkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                >

                    <p>
                        Sistema web desarrollado para centralizar y gestionar
                        diferentes procesos administrativos y comerciales desde
                        una única plataforma.
                    </p>

                    <p>
                        El sistema cuenta con módulos para ventas, productos,
                        insumos, fórmulas, salidas, deudas, pagos, clientes,
                        reportes, usuarios y gestión del perfil.
                    </p>

                    <p>
                        Los diferentes módulos incorporan operaciones CRUD para
                        facilitar el registro, consulta, actualización y
                        eliminación de información según las necesidades del
                        sistema.
                    </p>

                    <p>
                        Para su desarrollo se utilizaron PHP, MySQL, JavaScript,
                        AJAX y DataTables, combinando procesamiento del lado del
                        servidor con una interfaz web dinámica.
                    </p>

                </div>

            </motion.section>


            {/* TECNOLOGÍAS */}
            <motion.aside
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`h-fit rounded-2xl border p-6 ${
                darkMode
                    ? "border-slate-800 bg-slate-900"
                    : "border-slate-200 bg-white shadow-sm"
                }`}
            >

                <h2 className="text-xl font-bold">
                Tecnologías
                </h2>

                <div className="mt-6 space-y-3">

                    {tecnologias.map((tecnologia) => (
                        <div
                            key={tecnologia.nombre}
                            className={`group flex items-start gap-4 rounded-xl border p-4 transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/5 ${
                            darkMode
                                ? "border-slate-800 bg-slate-950/60"
                                : "border-slate-200 bg-slate-50"
                            }`}
                        >

                        {/* LOGO */}
                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border p-2 transition duration-300 group-hover:border-cyan-400/40 ${
                            darkMode
                                ? "border-slate-700 bg-slate-900"
                                : "border-slate-200 bg-white"
                            }`}
                        >
                        {tecnologia.logo ? (
                        <img
                            src={tecnologia.logo}
                            alt=""
                            aria-hidden="true"
                            className="h-7 w-7 object-contain"
                        />
                        ) : (
                        <span 
                            aria-hidden="true"
                            className="text-sm font-bold text-cyan-400">
                            {tecnologia.iniciales}
                        </span>
                        )}
                        </div>

                        {/* INFORMACIÓN */}
                        <div>
                            <h3
                                className={`font-semibold ${
                                    darkMode ? "text-white" : "text-slate-900"
                                }`}
                            >
                            {tecnologia.nombre}
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-slate-500">
                            {tecnologia.descripcion}
                            </p>
                        </div>

                        </div>
                    ))}

                </div>

            </motion.aside>

            </div>


            {/* FUNCIONALIDADES */}
            <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-20"
            >

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Características
            </p>

            <h2 className="mt-2 text-3xl font-bold">
                Funcionalidades principales
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                {funcionalidades.map((funcionalidad) => (
                <div
                    key={funcionalidad}
                    className={`group rounded-xl border p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 ${
                    darkMode
                        ? "border-slate-800 bg-slate-900"
                        : "border-slate-200 bg-white shadow-sm"
                    }`}
                >

                    <CheckCircle2
                    size={22}
                    className="text-cyan-400"
                    aria-hidden="true"
                    />

                    <p
                        className={`mt-4 text-sm font-medium ${
                            darkMode ? "text-slate-300" : "text-slate-700"
                        }`}
                    >
                    {funcionalidad}
                    </p>

                </div>
                ))}

            </div>

            </motion.section>


            {/* MI PARTICIPACIÓN */}
            <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className={`mt-20 rounded-2xl border p-8 ${
                darkMode
                    ? "border-slate-800 bg-slate-900"
                    : "border-slate-200 bg-white shadow-sm"
                }`}
            >

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Desarrollo
            </p>

            <h2 className="mt-2 text-3xl font-bold">
                Mi participación
            </h2>

            <p
                className={`mt-6 max-w-4xl leading-8 ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                }`}
            >
                Participé en el análisis, desarrollo e implementación de la
                aplicación web, trabajando tanto en la lógica del sistema como
                en la estructura de la base de datos y la interacción de la
                interfaz.
            </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                    {[
                        "Desarrollo del sistema",
                        "Diseño de base de datos",
                        "Desarrollo Backend",
                        "Desarrollo de interfaz",
                        "Implementación de CRUD",
                        "Integración con AJAX",
                        "Implementación de DataTables",
                        "Módulos y reportes",
                    ].map((item) => (
                    <div
                        key={item}
                        className={`rounded-xl border p-4 text-center text-sm font-medium ${
                        darkMode
                            ? "border-slate-800 bg-slate-950 text-slate-300"
                            : "border-slate-200 bg-slate-50 text-slate-700"
                        }`}
                    >
                        {item}
                    </div>
                    ))}

                </div>

            </motion.section>


            {/* ACCIONES */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="mt-12 flex flex-wrap gap-4"
            >

            {/* SISTEMA EN LÍNEA */}
            <a
                href={enlacesProyecto.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver Sistema de Ventas en línea, abre en una nueva pestaña"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
            >
                <ExternalLink size={18} aria-hidden="true" />
                Ver sistema en línea
            </a>

            {/* REPOSITORIO GITHUB */}
            <a
                href={enlacesProyecto.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver código del Sistema de Ventas en GitHub, abre en una nueva pestaña"
                className={`inline-flex items-center gap-2 rounded-lg border px-6 py-3 font-semibold transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400 ${
                darkMode
                    ? "border-slate-700 text-slate-200"
                    : "border-slate-300 bg-white text-slate-700"
                }`}
            >
                <Code2 size={18} aria-hidden="true" />
                Ver código en GitHub
            </a>

            </motion.div>

            {/* VISOR DE IMAGEN */}
            {capturaSeleccionada && (
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="titulo-captura-ampliada"
                        aria-describedby="descripcion-captura-ampliada"
                        className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-slate-950/90 p-4 backdrop-blur-sm sm:p-6"
                        onClick={() => setCapturaSeleccionada(null)}
                    >

                    {/* BOTÓN ANTERIOR */}
                    <button
                        type="button"
                        onClick={(event) => {
                        event.stopPropagation()
                        cambiarCaptura(-1)
                        }}
                        className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-900/90 text-white shadow-xl transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950 sm:left-6 sm:h-12 sm:w-12"
                        aria-label="Captura anterior"
                        >
                        <ChevronLeft size={26} aria-hidden="true" />
                    </button>


                    {/* CONTENEDOR */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.25 }}
                        className="relative flex w-full max-w-6xl flex-col items-center"
                        onClick={(event) => event.stopPropagation()}
                    >

                    {/* BOTÓN CERRAR */}
                    <button
                        type="button"
                        onClick={() => setCapturaSeleccionada(null)}
                        className="absolute -right-3 -top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-2xl leading-none text-white shadow-xl transition hover:bg-cyan-400 hover:text-slate-950"
                        aria-label="Cerrar imagen"
                    >
                        ×
                    </button>


                    {/* IMAGEN */}
                    <img
                        src={capturaSeleccionada.imagen}
                        alt={capturaSeleccionada.titulo}
                        className="mx-auto max-h-[75vh] w-auto max-w-full rounded-xl border border-slate-700 bg-white object-contain shadow-2xl"
                    />

                    {/* INFORMACIÓN */}
                    <div className="mt-4 text-center">

                        <h3 id="titulo-captura-ampliada" className="text-lg font-semibold text-white">
                            {capturaSeleccionada.titulo}
                        </h3>

                        <p id="descripcion-captura-ampliada" className="mt-1 text-sm text-slate-400">
                            {capturaSeleccionada.descripcion}
                        </p>

                        <p className="mt-2 text-xs font-medium text-cyan-400">
                            {capturas.findIndex(
                                (captura) =>
                                captura.titulo === capturaSeleccionada.titulo
                            ) + 1}{" "}
                            / {capturas.length}
                        </p>

                    </div>

                    </motion.div>


                    {/* BOTÓN SIGUIENTE */}
                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation()
                            cambiarCaptura(1)
                        }}
                        className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-900/90 text-white shadow-xl transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950 sm:right-6 sm:h-12 sm:w-12"
                        aria-label="Captura siguiente"
                    >
                        <ChevronRight size={26} aria-hidden="true" />
                    </button>

                </div>
            )}

        </div>

    </main>
  )
}

export default ProjectDetail