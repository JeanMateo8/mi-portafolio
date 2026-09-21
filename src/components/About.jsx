import { motion } from "motion/react"
import { useTheme } from "../context/ThemeContext"

function About() {
  const { darkMode } = useTheme()

  return (
    <section
      id="sobre-mi"
      className={`px-6 py-24 transition-colors duration-300 ${
        darkMode
          ? "bg-slate-900 text-white"
          : "bg-white text-slate-900"
      }`}
    >
      <div className="mx-auto max-w-6xl">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Conóceme
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Sobre mí
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-cyan-400" />
        </motion.div>

        {/* Contenido */}
        <div className="grid gap-12 md:grid-cols-2 md:items-center">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="mb-6 text-2xl font-semibold">
              Desarrollo soluciones web para problemas reales.
            </h3>

            <p className={`mb-5 leading-8 transition-colors ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}>
              Soy desarrollador web enfocado en crear aplicaciones
              modernas, funcionales y fáciles de utilizar. Me interesa
              transformar necesidades reales en soluciones digitales
              eficientes.
            </p>

            <p className={`mb-5 leading-8 transition-colors ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}>
              Tengo experiencia trabajando con tecnologías como PHP,
              JavaScript, MySQL, HTML, CSS y frameworks modernos para
              desarrollar sistemas de gestión y aplicaciones web.
            </p>

            <p className={`leading-8 transition-colors ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}>
              Actualmente estoy ampliando mis conocimientos en React y
              herramientas modernas del ecosistema JavaScript para crear
              aplicaciones más rápidas, escalables y profesionales.
            </p>
          </motion.div>

          {/* Tarjeta */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >

            <div className={`rounded-2xl border p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-400 ${
                  darkMode
                    ? "border-slate-800 bg-slate-950"
                    : "border-slate-200 bg-slate-50 shadow-sm"
                }`}>
              <span className="text-3xl font-bold text-cyan-400">
                PHP
              </span>
              <p
                className={`mt-2 text-sm ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Backend
              </p>
            </div>

            <div className={`rounded-2xl border p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-400 ${
                  darkMode
                    ? "border-slate-800 bg-slate-950"
                    : "border-slate-200 bg-slate-50 shadow-sm"
                }`}>
              <span className="text-3xl font-bold text-cyan-400">
                JS
              </span>
              <p
                className={`mt-2 text-sm ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                JavaScript
              </p>
            </div>

            <div className={`rounded-2xl border p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-400 ${
                  darkMode
                    ? "border-slate-800 bg-slate-950"
                    : "border-slate-200 bg-slate-50 shadow-sm"
                }`}>
              <span className="text-3xl font-bold text-cyan-400">
                SQL
              </span>
              <p
                className={`mt-2 text-sm ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                MySQL
              </p>
            </div>

            <div className={`rounded-2xl border p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-400 ${
                  darkMode
                    ? "border-slate-800 bg-slate-950"
                    : "border-slate-200 bg-slate-50 shadow-sm"
                }`}>
              <span className="text-3xl font-bold text-cyan-400">
                React
              </span>
              <p
                className={`mt-2 text-sm ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Frontend
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About