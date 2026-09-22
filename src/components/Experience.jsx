import { motion } from "motion/react"
import {
  CheckCircle2,
  FlaskConical,
  Building2,
  Code2,
} from "lucide-react"
import { useTheme } from "../context/ThemeContext"

const experiencias = [
  {
    id: 1,
    periodo: "2024 - Actualidad",
    titulo: "Sistema de Ventas",
    organizacion: "Avícola Vania",
    estado: "Implementado",
    descripcion:
      "Diseño y desarrollo individual de un sistema web para centralizar la gestión de ventas, productos, clientes, insumos, pagos, deudas y otros procesos administrativos.",
    tecnologias: ["PHP", "MySQL", "JavaScript", "AJAX", "DataTables"],
    produccion: true,
  },
  {
    id: 2,
    periodo: "2024 - Actualidad",
    titulo: "Sistema de Inventario y Molino",
    organizacion: "Avícola Vania",
    estado: "Implementado",
    descripcion:
      "Desarrollo de un sistema para gestionar insumos, entradas, salidas, fórmulas y movimientos de inventario relacionados con los procesos del molino.",
    tecnologias: ["PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    produccion: true,
  },
  {
    id: 3,
    periodo: "2023",
    titulo: "Sistema de Gestión Integral",
    organizacion: "3P Ingeniería y Tecnología",
    estado: "Proyecto de tesis · Prototipo",
    descripcion:
      "Diseño y desarrollo de un prototipo orientado a mejorar la gestión de servicios, equipos, inventarios, compras, ventas y clientes.",
    tecnologias: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    produccion: false,
  },
]

export default function Experience() {
  const { darkMode } = useTheme()

  return (
    <section
      id="experiencia"
      aria-labelledby="titulo-experiencia"
      className={`py-24 transition-colors duration-300 ${
        darkMode ? "bg-slate-950" : "bg-slate-50"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* ENCABEZADO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 text-cyan-400">
            <Code2 size={18} aria-hidden="true" />

            <span className="text-sm font-semibold uppercase tracking-[0.25em]">
              Mi trayectoria
            </span>
          </div>

          <h2
            id="titulo-experiencia"
            className={`mt-4 text-3xl font-bold md:text-4xl ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Experiencia y proyectos
          </h2>

          <p
            className={`mt-4 max-w-2xl leading-relaxed ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Una selección de proyectos desarrollados para resolver necesidades
            reales y fortalecer mi experiencia en el desarrollo de sistemas web.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">

          {/* Línea */}
          <div
            aria-hidden="true"
            className={`absolute bottom-0 left-[7px] top-2 w-px md:left-[190px] ${
              darkMode ? "bg-slate-800" : "bg-slate-300"
            }`}
          />

          <div className="space-y-14">
            {experiencias.map((experiencia, index) => (
              <motion.article
                key={experiencia.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="relative md:grid md:grid-cols-[160px_60px_1fr]"
              >

                {/* FECHA */}
                <div className="hidden pt-1 text-right md:block">
                  <span
                    className={`text-sm font-semibold ${
                      darkMode ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    {experiencia.periodo}
                  </span>
                </div>

                {/* PUNTO TIMELINE */}
                <div 
                  aria-hidden="true"
                  className="absolute left-0 top-1 md:static md:flex md:justify-center">
                  <div
                    className={`relative z-10 h-[15px] w-[15px] rounded-full border-4 ${
                      darkMode
                        ? "border-slate-950 bg-cyan-400"
                        : "border-slate-50 bg-cyan-500"
                    }`}
                  />
                </div>

                {/* INFORMACIÓN */}
                <div className="ml-10 md:ml-0">
                  {/* Fecha móvil */}
                  <span className="mb-2 block text-sm font-semibold text-cyan-400 md:hidden">
                    {experiencia.periodo}
                  </span>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3
                        className={`text-xl font-bold md:text-2xl ${
                          darkMode ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {experiencia.titulo}
                      </h3>

                      <div
                        className={`mt-2 flex items-center gap-2 text-sm ${
                          darkMode ? "text-slate-400" : "text-slate-600"
                        }`}
                      >
                        <Building2 size={16} aria-hidden="true" />

                        <span>{experiencia.organizacion}</span>
                      </div>
                    </div>

                    {/* ESTADO */}
                    <div
                      className={`flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${
                        experiencia.produccion
                          ? darkMode
                            ? "bg-emerald-400/10 text-emerald-400"
                            : "bg-emerald-50 text-emerald-700"
                          : darkMode
                            ? "bg-violet-400/10 text-violet-400"
                            : "bg-violet-50 text-violet-700"
                      }`}
                    >
                      {experiencia.produccion ? (
                        <CheckCircle2 size={14} aria-hidden="true" />
                      ) : (
                        <FlaskConical size={14} aria-hidden="true" />
                      )}

                      {experiencia.estado}
                    </div>
                  </div>

                  <p
                    className={`mt-5 max-w-3xl leading-relaxed ${
                      darkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {experiencia.descripcion}
                  </p>

                  {/* TECNOLOGÍAS */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {experiencia.tecnologias.map((tecnologia) => (
                      <span
                        key={tecnologia}
                        className={`rounded-md border px-2.5 py-1 text-xs font-medium ${
                          darkMode
                            ? "border-slate-800 bg-slate-900 text-slate-300"
                            : "border-slate-200 bg-white text-slate-700"
                        }`}
                      >
                        {tecnologia}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}