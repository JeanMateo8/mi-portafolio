import { motion } from "motion/react"
import { useTheme } from "../context/ThemeContext"

const experiences = [
  {
    periodo: "2024 - Actualidad",
    puesto: "Desarrollador Web",
    empresa: "Desarrollo de sistemas web",
    descripcion:
      "Desarrollo y mantenimiento de aplicaciones web orientadas a la gestión de procesos, ventas, inventarios y administración de información.",
    tecnologias: ["PHP", "MySQL", "JavaScript"],
  },
  {
    periodo: "Proyectos personales",
    puesto: "Desarrollador Full Stack",
    empresa: "Proyectos independientes",
    descripcion:
      "Diseño y desarrollo de sistemas completos, desde la estructura de base de datos hasta la interfaz y funcionalidades del sistema.",
    tecnologias: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
  },
]

function Experience() {
  const { darkMode } = useTheme()

  return (
    <section
      id="experiencia"
      className={`px-6 py-24 transition-colors duration-300 ${
        darkMode
          ? "bg-slate-950 text-white"
          : "bg-slate-50 text-slate-900"
      }`}
    >
      <div className="mx-auto max-w-5xl">

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Mi trayectoria
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Experiencia
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-cyan-400" />
        </motion.div>

        {/* Línea de experiencia */}
        <div className="relative">

          {/* Línea vertical */}
          <div
            className={`absolute left-3 top-0 h-full w-px transition-colors md:left-1/2 md:-translate-x-1/2 ${
              darkMode ? "bg-slate-800" : "bg-slate-300"
            }`}
          />

          <div className="space-y-12">

            {experiences.map((experience, index) => (
              <motion.div
                key={experience.puesto}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -40 : 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative md:grid md:grid-cols-2 md:gap-12"
              >

                {/* Punto */}
                <div
                  className={`absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border-4 bg-cyan-400 transition-colors md:left-1/2 md:-translate-x-1/2 ${
                    darkMode ? "border-slate-950" : "border-slate-50"
                  }`}
                >
                  <div
                    className={`h-2 w-2 rounded-full ${
                      darkMode ? "bg-slate-950" : "bg-slate-700"
                    }`}
                  />
                </div>

                {/* Contenido */}
                <div
                  className={`ml-12 md:ml-0 ${
                    index % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <span className="text-sm font-semibold text-cyan-400">
                    {experience.periodo}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold">
                    {experience.puesto}
                  </h3>

                  <h4
                    className={`mt-1 transition-colors ${
                      darkMode ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    {experience.empresa}
                  </h4>

                  <p
                    className={`mt-4 leading-7 transition-colors ${
                      darkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {experience.descripcion}
                  </p>

                  {/* Tecnologías */}
                  <div
                    className={`mt-5 flex flex-wrap gap-2 ${
                      index % 2 === 0
                        ? "md:justify-end"
                        : "md:justify-start"
                    }`}
                  >
                    {experience.tecnologias.map((tecnologia) => (
                      <span
                        key={tecnologia}
                        className={`rounded-full border px-3 py-1 text-xs text-cyan-400 transition-colors ${
                          darkMode
                            ? "border-slate-700"
                            : "border-slate-300 bg-white"
                        }`}
                      >
                        {tecnologia}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience