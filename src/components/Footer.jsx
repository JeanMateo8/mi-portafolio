import { ArrowUp } from "lucide-react"
import { motion } from "motion/react"
import { useTheme } from "../context/ThemeContext"

function Footer() {
  const { darkMode } = useTheme()
  const año = new Date().getFullYear()

  return (
    <footer
      className={`border-t px-6 py-10 transition-colors duration-300 ${
        darkMode
          ? "border-slate-800 bg-slate-950 text-white"
          : "border-slate-200 bg-slate-100 text-slate-900"
      }`}
    >
      <div className="mx-auto max-w-6xl">

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* Nombre */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold">
              Jean Luis{" "}
              <span className="text-cyan-400">
                Mateo Quispe
              </span>
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Desarrollador Web
            </p>
          </div>

          {/* Enlaces */}
          <div
            className={`flex flex-wrap justify-center gap-5 text-sm ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            <a
              href="#inicio"
              className="transition hover:text-cyan-400"
            >
              Inicio
            </a>

            <a
              href="#sobre-mi"
              className="transition hover:text-cyan-400"
            >
              Sobre mí
            </a>

            <a
              href="#habilidades"
              className="transition hover:text-cyan-400"
            >
              Habilidades
            </a>

            <a
              href="#proyectos"
              className="transition hover:text-cyan-400"
            >
              Proyectos
            </a>

            <a
              href="#contacto"
              className="transition hover:text-cyan-400"
            >
              Contacto
            </a>
          </div>

          {/* Volver arriba */}
          <motion.a
            href="#inicio"
            whileHover={{ y: -3 }}
            className={`flex h-10 w-10 items-center justify-center rounded-lg border transition hover:border-cyan-400 hover:text-cyan-400 ${
              darkMode
                ? "border-slate-700 text-slate-300"
                : "border-slate-300 bg-white text-slate-600"
            }`}
            aria-label="Volver al inicio"
          >
            <ArrowUp size={20} />
          </motion.a>

        </div>

        {/* Separador */}
        <div
          className={`my-8 h-px ${
            darkMode ? "bg-slate-800" : "bg-slate-300"
          }`}
        />

        {/* Copyright */}
        <div
          className={`flex flex-col items-center justify-between gap-3 text-center text-sm md:flex-row ${
            darkMode ? "text-slate-500" : "text-slate-600"
          }`}
        >

          <p>
            © {año} Jean Luis Mateo Quispe. Todos los derechos reservados.
          </p>

          <p>
            Desarrollado con{" "}
            <span className="text-cyan-400">
              React
            </span>{" "}
            +{" "}
            <span className="text-cyan-400">
              Tailwind CSS
            </span>
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer