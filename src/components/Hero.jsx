import { ArrowDown, Mail } from "lucide-react"
import { motion } from "motion/react"
import { useTheme } from "../context/ThemeContext"
import logoJM from "../assets/logo/logo-jm.png"

const githubLogo = "https://cdn.simpleicons.org/github"


function Hero() {
  const { darkMode } = useTheme()

  return (
    <section
      id="inicio"
      className={`relative flex min-h-screen items-center overflow-hidden transition-colors duration-300 ${
        darkMode
          ? "bg-slate-950 text-white"
          : "bg-slate-50 text-slate-900"
      }`}
    >

      {/* Efectos de fondo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-28 lg:grid-cols-2 lg:px-8">

        {/* =========================
            COLUMNA IZQUIERDA
        ========================== */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >

          {/* Texto superior */}
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Hola, soy
          </p>

          {/* Nombre */}
          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Jean Luis
            <span className="block text-cyan-400">
              Mateo Quispe
            </span>
          </h1>

          {/* Profesión */}
          <div className="mt-6 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />

            <h2
              className={`text-xl font-semibold transition-colors sm:text-2xl ${
                darkMode ? "text-slate-200" : "text-slate-700"
              }`}
            >
              Desarrollador Web
            </h2>
          </div>

          {/* Descripción */}
          <p
            className={`mt-7 max-w-2xl text-base leading-8 transition-colors sm:text-lg ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Creo aplicaciones web modernas, funcionales y escalables
            utilizando tecnologías actuales para resolver problemas reales.
          </p>

          {/* Botones */}
          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="#proyectos"
              className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-cyan-500/20"
            >
              Ver proyectos
            </a>

            <a
              href="#contacto"
              className={`rounded-lg border px-6 py-3 font-semibold transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400 ${
                darkMode
                  ? "border-slate-700 text-white"
                  : "border-slate-300 text-slate-700"
              }`}
            >
              Contáctame
            </a>

          </div>

          {/* Redes sociales */}
          <div className="mt-9 flex items-center gap-3">

            <a
              href="https://github.com/JeanMateo8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar mi perfil de GitHub"
              className={`flex h-11 w-11 items-center justify-center rounded-lg border transition duration-300 hover:-translate-y-1 hover:border-cyan-400 ${
                darkMode
                  ? "border-slate-800 bg-slate-900/50"
                  : "border-slate-200 bg-white shadow-sm"
              }`}
            >
              <img
                src={githubLogo}
                alt=""
                className={`h-5 w-5 ${
                  darkMode ? "invert" : ""
                }`}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/jean-luis-mateo-quispe-8b31b7270/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar mi perfil de LinkedIn"
              className={`group flex h-11 w-11 items-center justify-center rounded-lg border transition duration-300 hover:-translate-y-1 hover:border-cyan-400 ${
                darkMode
                  ? "border-slate-800 bg-slate-900/50"
                  : "border-slate-200 bg-white shadow-sm"
              }`}
            >
              <span className="flex h-6 w-6 items-center justify-center rounded bg-[#0A66C2] text-[15px] font-bold leading-none text-white transition duration-300 group-hover:bg-cyan-400 group-hover:text-slate-950">
                in
              </span>
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jeanluismateoquispe@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enviarme un correo electrónico"
              title="Enviar correo"
              className={`flex h-11 w-11 items-center justify-center rounded-lg border transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400 ${
                darkMode
                  ? "border-slate-800 bg-slate-900/50 text-slate-300"
                  : "border-slate-200 bg-white text-slate-600 shadow-sm"
              }`}
            >
              <Mail size={20} />
            </a>

          </div>

        </motion.div>


        {/* =========================
            COLUMNA DERECHA
        ========================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">

            {/* Resplandor */}
            <div className="absolute inset-6 rounded-full bg-cyan-400/20 blur-3xl" />

            {/* Logo flotante */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`relative flex h-72 w-72 items-center justify-center overflow-hidden rounded-full border shadow-2xl transition-colors duration-300 sm:h-80 sm:w-80 lg:h-96 lg:w-96 ${
                darkMode
                  ? "border-cyan-400/20 bg-white shadow-cyan-500/10"
                  : "border-slate-200 bg-white shadow-slate-300/50"
              }`}
            >
              <motion.img
                src={logoJM}
                alt="Logo JM - Jean Luis Mateo"
                animate={{
                  scale: [1, 1.025, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Elementos decorativos */}
            <div className="absolute -right-3 top-10 h-3 w-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />

            <div className="absolute -bottom-2 left-10 h-2 w-2 rounded-full bg-blue-400" />

            <div className="absolute -left-5 bottom-20 h-4 w-4 rounded-full border border-cyan-400/50" />

          </div>
        </motion.div>

      </div>

      {/* Flecha */}
      <motion.a
        href="#sobre-mi"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-slate-500 transition hover:text-cyan-400"
        aria-label="Ir hacia abajo"
      >
        <ArrowDown size={24} className="animate-bounce" />
      </motion.a>

    </section>
  )
}

export default Hero