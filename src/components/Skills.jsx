import { motion } from "motion/react"
import { useTheme } from "../context/ThemeContext"

const skills = [
  {
    nombre: "HTML",
    categoria: "Frontend",
    nivel: "Avanzado",
    logo: "https://cdn.simpleicons.org/html5/E34F26",
  },
  {
    nombre: "CSS",
    categoria: "Frontend",
    nivel: "Avanzado",
    logo: "https://cdn.simpleicons.org/css/663399",
  },
  {
    nombre: "JavaScript",
    categoria: "Frontend",
    nivel: "Intermedio",
    logo: "https://cdn.simpleicons.org/javascript/F7DF1E",
  },
  {
    nombre: "React",
    categoria: "Frontend",
    nivel: "En aprendizaje",
    logo: "https://cdn.simpleicons.org/react/61DAFB",
  },
  {
    nombre: "PHP",
    categoria: "Backend",
    nivel: "Avanzado",
    logo: "https://cdn.simpleicons.org/php/777BB4",
  },
  {
    nombre: "MySQL",
    categoria: "Base de datos",
    nivel: "Avanzado",
    logo: "https://cdn.simpleicons.org/mysql/4479A1",
  },
  {
    nombre: "Bootstrap",
    categoria: "Framework",
    nivel: "Avanzado",
    logo: "https://cdn.simpleicons.org/bootstrap/7952B3",
  },
  {
    nombre: "Tailwind CSS",
    categoria: "Framework",
    nivel: "En aprendizaje",
    logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  },
]

function Skills() {
  const { darkMode } = useTheme()

  return (
    <section
      id="habilidades"
      aria-labelledby="titulo-habilidades"
      className={`px-6 py-24 transition-colors duration-300 ${
        darkMode
          ? "bg-slate-950 text-white"
          : "bg-slate-50 text-slate-900"
      }`}
    >
      <div className="mx-auto max-w-6xl">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Tecnologías
          </p>

          <h2 
            id="titulo-habilidades"
            className="text-4xl font-bold sm:text-5xl">
            Mis habilidades
          </h2>

          <div 
            aria-hidden="true"
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-cyan-400" />

          <p
            className={`mx-auto mt-6 max-w-2xl transition-colors ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Tecnologías y herramientas que utilizo para desarrollar
            aplicaciones web y sistemas de gestión.
          </p>
        </motion.div>

        {/* Tarjetas */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.nombre}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className={`group rounded-2xl border p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 ${
                darkMode
                  ? "border-slate-800 bg-slate-900"
                  : "border-slate-200 bg-white shadow-sm"
              }`}
            >
              {/* Logo */}
              <div
                className={`mb-5 flex h-16 w-16 items-center justify-center rounded-xl border p-3 transition duration-300 group-hover:scale-110 ${
                  darkMode
                    ? "border-slate-800 bg-slate-950"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                <img
                  src={skill.logo}
                  alt=""
                  aria-hidden="true"
                  className="h-10 w-10 object-contain"
                />
              </div>

              <h3 className="text-xl font-semibold">
                {skill.nombre}
              </h3>

              <p
                className={`mt-2 text-sm ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {skill.categoria}
              </p>

              <div className="mt-5">
                <span
                  className={`rounded-full border px-3 py-1 text-xs ${
                    darkMode
                      ? "border-slate-700 text-slate-300"
                      : "border-slate-300 bg-slate-50 text-slate-600"
                  }`}
                >
                  {skill.nivel}
                </span>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Skills