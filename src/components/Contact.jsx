import { useState } from "react"
import { motion } from "motion/react"
import { CheckCircle2, CircleAlert } from "lucide-react"
import { useTheme } from "../context/ThemeContext"

function Contact() {
  const { darkMode } = useTheme()
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  })

  const [estadoEnvio, setEstadoEnvio] = useState("")
  const [enviando, setEnviando] = useState(false)
  const [bloqueado, setBloqueado] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((datosActuales) => ({
      ...datosActuales,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setEnviando(true)
    setEstadoEnvio("")

    const datos = {
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
      name: formData.nombre,
      email: formData.correo,
      message: formData.mensaje,
      subject: "Nuevo mensaje desde mi portafolio",
    }

    try {
      const respuesta = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(datos),
      })

      const resultado = await respuesta.json()

        if (resultado.success) {
          setEstadoEnvio("success")

          setFormData({
            nombre: "",
            correo: "",
            mensaje: "",
          })

          setBloqueado(true)

          setTimeout(() => {
            setBloqueado(false)
          }, 30000)

          setTimeout(() => {
            setEstadoEnvio("")
          }, 5000)
        } else {
          setEstadoEnvio("error")

          setTimeout(() => {
            setEstadoEnvio("")
          }, 5000)
          
        }
        
        } catch (error) {
          console.error("Error al enviar el mensaje:", error)
          setEstadoEnvio("error")

          setTimeout(() => {
            setEstadoEnvio("")
          }, 5000)
        } finally {
          setEnviando(false)
        }
      }

  return (
    <section
      id="contacto"
      className={`px-6 py-24 transition-colors duration-300 ${
        darkMode
          ? "bg-slate-900 text-white"
          : "bg-white text-slate-900"
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
            Hablemos
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Contáctame
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-cyan-400" />

          <p
            className={`mx-auto mt-6 max-w-2xl leading-7 transition-colors ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            ¿Tienes un proyecto, una idea o necesitas desarrollar
            una solución web? Puedes comunicarte conmigo.
          </p>
        </motion.div>

        {/* Contenido */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* Información */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`rounded-2xl border p-8 transition-colors duration-300 ${
              darkMode
                ? "border-slate-800 bg-slate-950"
                : "border-slate-200 bg-slate-50 shadow-sm"
            }`}
          >
            <h3 className="text-2xl font-semibold">
              Información de contacto
            </h3>

            <p
              className={`mt-4 leading-7 ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Estoy disponible para conversar sobre proyectos,
              desarrollo de sistemas y oportunidades profesionales.
            </p>

            <div className="mt-8 space-y-5">

              <div>
                <p className="text-sm text-slate-500">
                  Correo
                </p>

                <p
                  className={`mt-1 ${
                    darkMode ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  jeanluismateoquispe@gmail.com
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Ubicación
                </p>

                <p
                  className={`mt-1 ${
                    darkMode ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  Perú
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Disponibilidad
                </p>

                <p className="mt-1 text-cyan-400">
                  Disponible para proyectos
                </p>
              </div>

            </div>
          </motion.div>

          {/* Formulario */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className={`rounded-2xl border p-8 transition-colors duration-300 ${
              darkMode
                ? "border-slate-800 bg-slate-950"
                : "border-slate-200 bg-slate-50 shadow-sm"
            }`}
          >
            <h3 className="text-2xl font-semibold">
              Envíame un mensaje
            </h3>

            <div className="mt-6 space-y-5">

              <div>
                <label
                  htmlFor="nombre"
                  className={`mb-2 block text-sm ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  Nombre
                </label>

                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  minLength={2}
                  maxLength={60}
                  className={`w-full rounded-lg border px-4 py-3 outline-none transition placeholder:text-slate-500 focus:border-cyan-400 ${
                    darkMode
                      ? "border-slate-700 bg-slate-900 text-white"
                      : "border-slate-300 bg-white text-slate-900"
                  }`}
                />

              </div>

              <div>
                <label
                  htmlFor="correo"
                  className={`mb-2 block text-sm ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  Correo electrónico
                </label>

                <input
                  id="correo"
                  name="correo"
                  type="email"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  placeholder="tu@email.com"
                  className={`w-full rounded-lg border px-4 py-3 outline-none transition placeholder:text-slate-500 focus:border-cyan-400 ${
                    darkMode
                      ? "border-slate-700 bg-slate-900 text-white"
                      : "border-slate-300 bg-white text-slate-900"
                  }`}
                />
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className={`mb-2 block text-sm ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  Mensaje
                </label>

                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="5"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  minLength={10}
                  maxLength={1000}
                  placeholder="Cuéntame sobre tu proyecto..."
                  className={`w-full resize-none rounded-lg border px-4 py-3 outline-none transition placeholder:text-slate-500 focus:border-cyan-400 ${
                    darkMode
                      ? "border-slate-700 bg-slate-900 text-white"
                      : "border-slate-300 bg-white text-slate-900"
                  }`}
                />
                <div className="mt-2 flex justify-end">
                  <span
                    className={`text-xs transition-colors ${
                      formData.mensaje.length >= 900
                        ? "text-amber-500"
                        : darkMode
                          ? "text-slate-500"
                          : "text-slate-400"
                    }`}
                  >
                    {formData.mensaje.length} / 1000
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={enviando || bloqueado}
                className={`w-full rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition ${
                  enviando || bloqueado
                    ? "cursor-not-allowed opacity-60"
                    : "hover:bg-cyan-300"
                }`}
              >
                {enviando ? "Enviando..." : "Enviar mensaje"}
              </button>

              {estadoEnvio === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-sm ${
                    darkMode
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                      : "border-emerald-200 bg-emerald-50 text-emerald-700"
                  }`}
                >
                  <CheckCircle2 size={20} className="shrink-0" />

                  <span>
                    Mensaje enviado correctamente. Gracias por contactarme.
                  </span>
                </motion.div>
              )}

              {estadoEnvio === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-sm ${
                    darkMode
                      ? "border-red-500/30 bg-red-500/10 text-red-400"
                      : "border-red-200 bg-red-50 text-red-700"
                  }`}
                >
                  <CircleAlert size={20} className="shrink-0" />

                  <span>
                    No se pudo enviar el mensaje. Inténtalo nuevamente.
                  </span>
                </motion.div>
              )}

            </div>
          </motion.form>

        </div>
      </div>
    </section>
  )
}

export default Contact