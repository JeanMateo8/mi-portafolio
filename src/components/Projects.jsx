import { motion } from "motion/react"
import { ExternalLink, Code2 } from "lucide-react"
import { Link } from "react-router-dom"
import projects from "../data/projects"
import { useTheme } from "../context/ThemeContext"

function Projects() {
  const { darkMode } = useTheme()

  return (
    <section
      id="proyectos"
      aria-labelledby="titulo-proyectos"
      className={`px-6 py-24 transition-colors duration-300 ${
        darkMode
          ? "bg-slate-900 text-white"
          : "bg-white text-slate-900"
      }`}
    >
      <div className="mx-auto max-w-7xl">

        {/* ENCABEZADO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p
            className={`mb-3 text-sm font-semibold uppercase tracking-[0.3em] ${
              darkMode ? "text-cyan-400" : "text-cyan-700"
            }`}
          >
            Mi trabajo
          </p>

          <h2 
            id="titulo-proyectos"
            className="text-4xl font-bold tracking-tight sm:text-5xl">
            Proyectos
          </h2>

          <div
            aria-hidden="true"
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-cyan-400"
          />

          <p
            className={`mx-auto mt-6 max-w-2xl transition-colors ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Algunos de los sistemas y aplicaciones web que he desarrollado.
          </p>
        </motion.div>


        {/* PROYECTOS */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className={`group overflow-hidden rounded-2xl border shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-cyan-500/10 ${
                darkMode
                  ? "border-slate-800 bg-slate-950 shadow-black/10"
                  : "border-slate-200 bg-white shadow-slate-200/60"
              }`}            
            >

              {/* =========================
                  PREVIEW DEL PROYECTO
              ========================== */}
              <div
                className={`relative h-56 overflow-hidden bg-gradient-to-br ${
                  darkMode
                    ? "from-slate-800 via-slate-900 to-slate-950"
                    : "from-slate-100 via-slate-200 to-slate-300"
                }`}
              >

                {/* PROYECTO DESTACADO */}
                {project.destacado && (
                  <div className="absolute right-4 top-4 z-30">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-slate-950/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-cyan-400 shadow-lg backdrop-blur-md">
                      <span className="text-yellow-400">★</span>
                      Proyecto destacado
                    </span>
                  </div>
                )}

                {/* Decoración */}
                <div 
                  aria-hidden="true"
                  className="absolute inset-0 opacity-20">
                  <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-cyan-400 blur-3xl" />
                  <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-500 blur-3xl" />
                </div>

                {/* Ventana simulada */}
                <div className="relative mx-6 mt-6 overflow-hidden rounded-xl border border-white/10 bg-slate-950/80 shadow-2xl transition duration-500 group-hover:scale-105">

                  {/* Barra superior */}
                  <div 
                    aria-hidden="true"
                    className="flex h-8 items-center gap-1.5 border-b border-white/10 bg-slate-900 px-3">

                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

                    <div className="ml-3 h-3 flex-1 rounded-full bg-slate-800" />

                  </div>

                  {/* Contenido preview */}
                  <div className="relative h-32 overflow-hidden">

                    {project.imagen ? (
                      <img
                        src={project.imagen}
                        alt={`Vista previa de ${project.titulo}`}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">

                        <div className="text-center">

                          <div className="text-5xl font-bold text-cyan-400 transition duration-500 group-hover:scale-110">
                            &lt;/&gt;
                          </div>

                          <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                            {project.categoria}
                          </p>

                        </div>

                      </div>
                    )}

                  </div>

                </div>

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 transition duration-300 group-hover:bg-slate-950/20">
                  <span className="translate-y-4 rounded-full border border-cyan-400/50 bg-slate-950/80 px-4 py-2 text-xs font-semibold text-cyan-300 opacity-0 backdrop-blur-sm transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Ver proyecto
                  </span>
                </div>

              </div>


              {/* =========================
                  CONTENIDO
              ========================== */}
              <div className="p-6">

                {/* Categoría */}
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                    darkMode ? "text-cyan-400" : "text-cyan-700"
                  }`}
                >
                  {project.categoria}
                </p>

                {/* Título */}
                <h3 className="mt-2 text-2xl font-bold transition duration-300 group-hover:text-cyan-400">
                  {project.titulo}
                </h3>

                {/* Descripción */}
                <p
                  className={`mt-4 min-h-[84px] text-sm leading-7 transition-colors ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {project.descripcion}
                </p>


                {/* TECNOLOGÍAS */}
                <div className="mt-5 flex flex-wrap gap-2">

                  {project.tecnologias.map((tecnologia) => (
                    <span
                      key={tecnologia}
                      className={`rounded-full border px-3 py-1.5 text-xs font-medium transition duration-300 hover:border-cyan-400/50 hover:text-cyan-400 ${
                        darkMode
                          ? "border-slate-700 bg-slate-900 text-slate-300"
                          : "border-slate-300 bg-slate-50 text-slate-600"
                      }`}                    
                    >
                      {tecnologia}
                    </span>
                  ))}

                </div>


                {/* BOTONES */}
                <div className="mt-7 flex gap-3">

                  {project.destacado ? (
                    <Link
                      to={`/proyecto/${project.slug}`}
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 text-center text-sm font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300"
                    >
                      <ExternalLink size={17} aria-hidden="true" />
                      Ver proyecto
                    </Link>
                  ) : (
                    <span
                      className={`flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-center text-sm font-semibold ${
                        darkMode
                          ? "bg-slate-800 text-slate-500"
                          : "bg-slate-100 text-slate-400"
                      }`}                    
                    >
                      <ExternalLink size={17} />
                      Próximamente
                    </span>
                  )}

                  {project.github && project.github !== "#" ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver código de ${project.titulo} en GitHub`}
                      className={`flex flex-1 items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-center text-sm font-semibold transition duration-300 hover:border-cyan-400 hover:text-cyan-400 ${
                        darkMode
                          ? "border-slate-700 text-slate-200"
                          : "border-slate-300 text-slate-700"
                      }`}                    
                    >
                      <Code2 size={17} aria-hidden="true" />
                      Código
                    </a>
                  ) : (
                    <span
                      className={`flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-center text-sm font-semibold ${
                        darkMode
                          ? "border-slate-800 text-slate-600"
                          : "border-slate-200 text-slate-400"
                      }`}                    
                    >
                      <Code2 size={17} aria-hidden="true" />
                      Sin código
                    </span>
                  )}

                </div>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Projects