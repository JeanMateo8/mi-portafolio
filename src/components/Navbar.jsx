import { Menu, X, Sun, Moon } from "lucide-react"
import { useState } from "react"
import { useTheme } from "../context/ThemeContext"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { darkMode, toggleDarkMode } = useTheme()

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav
      aria-label="Navegación principal"
      className={`fixed left-0 top-0 z-50 w-full border-b shadow-lg backdrop-blur-xl transition-colors duration-300 ${
        darkMode
          ? "border-white/10 bg-slate-950/75 text-white shadow-black/10"
          : "border-slate-200 bg-white/85 text-slate-900 shadow-slate-300/30"
      }`}
    >

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* LOGO */}
        <a
          href="#inicio"
          onClick={closeMenu}
          className={`group flex items-center gap-1 text-xl font-bold tracking-tight transition-colors ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          <span className="text-cyan-400 transition-transform duration-300 group-hover:-translate-x-1">
            &lt;
          </span>

          <span>
            Portfolio
          </span>

          <span className="text-cyan-400 transition-transform duration-300 group-hover:translate-x-1">
            /&gt;
          </span>
        </a>

        {/* MENU DESKTOP */}
        <div className="hidden items-center gap-1 md:flex">

          <a
            href="#inicio"
            className={`group relative rounded-lg px-4 py-2 text-sm font-medium transition ${
              darkMode
                ? "text-slate-300 hover:text-white"
                : "text-slate-600 hover:text-slate-950"
            }`}
          >
            Inicio
            <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-cyan-400 transition-all duration-300 group-hover:w-1/2"></span>
          </a>

          <a
            href="#sobre-mi"
            className={`group relative rounded-lg px-4 py-2 text-sm font-medium transition ${
              darkMode
                ? "text-slate-300 hover:text-white"
                : "text-slate-600 hover:text-slate-950"
            }`}
          >
            Sobre mí
            <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-cyan-400 transition-all duration-300 group-hover:w-1/2"></span>
          </a>

          <a
            href="#habilidades"
            className={`group relative rounded-lg px-4 py-2 text-sm font-medium transition ${
              darkMode
                ? "text-slate-300 hover:text-white"
                : "text-slate-600 hover:text-slate-950"
            }`}
          >
            Habilidades
            <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-cyan-400 transition-all duration-300 group-hover:w-1/2"></span>
          </a>

          <a
            href="#proyectos"
            className={`group relative rounded-lg px-4 py-2 text-sm font-medium transition ${
              darkMode
                ? "text-slate-300 hover:text-white"
                : "text-slate-600 hover:text-slate-950"
            }`}
          >
            Proyectos
            <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-cyan-400 transition-all duration-300 group-hover:w-1/2"></span>
          </a>

          <a
            href="#experiencia"
            className={`group relative rounded-lg px-4 py-2 text-sm font-medium transition ${
              darkMode
                ? "text-slate-300 hover:text-white"
                : "text-slate-600 hover:text-slate-950"
            }`}
          >
            Experiencia
            <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-cyan-400 transition-all duration-300 group-hover:w-1/2"></span>
          </a>

          {/* CONTACTO */}
          <a
            href="#contacto"
            className={`ml-3 rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold transition duration-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950 ${
              darkMode ? "text-cyan-300" : "text-cyan-600"
            }`}
          >
            Contacto
          </a>

          {/* TEMA */}
          <button
            onClick={toggleDarkMode}
            className={`ml-3 rounded-lg border p-2.5 transition duration-300 ${
              darkMode
                ? "border-white/10 text-slate-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400"
                : "border-slate-300 text-slate-600 hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-600"
            }`}
              aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
              title={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
          >
            {darkMode ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

        </div>

        {/* BOTÓN MOBILE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`rounded-lg border p-2 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400 md:hidden ${
            darkMode
              ? "border-white/10 text-slate-200"
              : "border-slate-300 text-slate-700"
          }`}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>

      {/* MENU MOBILE */}
      <div
        id="menu-mobile"
        className={`overflow-hidden border-t backdrop-blur-xl transition-all duration-300 md:hidden ${
          darkMode
            ? "border-white/10 bg-slate-950/95"
            : "border-slate-200 bg-white/95"
        } ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >

        <div className="flex flex-col gap-1 px-6 py-5">

          <a
            href="#inicio"
            onClick={closeMenu}
            className={`rounded-lg px-4 py-3 text-sm font-medium transition hover:text-cyan-400 ${
              darkMode
                ? "text-slate-300 hover:bg-white/5"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            Inicio
          </a>

          <a
            href="#sobre-mi"
            onClick={closeMenu}
            className={`rounded-lg px-4 py-3 text-sm font-medium transition hover:text-cyan-400 ${
              darkMode
                ? "text-slate-300 hover:bg-white/5"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            Sobre mí
          </a>

          <a
            href="#habilidades"
            onClick={closeMenu}
            className={`rounded-lg px-4 py-3 text-sm font-medium transition hover:text-cyan-400 ${
              darkMode
                ? "text-slate-300 hover:bg-white/5"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            Habilidades
          </a>

          <a
            href="#proyectos"
            onClick={closeMenu}
            className={`rounded-lg px-4 py-3 text-sm font-medium transition hover:text-cyan-400 ${
              darkMode
                ? "text-slate-300 hover:bg-white/5"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            Proyectos
          </a>

          <a
            href="#experiencia"
            onClick={closeMenu}
            className={`rounded-lg px-4 py-3 text-sm font-medium transition hover:text-cyan-400 ${
              darkMode
                ? "text-slate-300 hover:bg-white/5"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            Experiencia
          </a>

          <a
            href="#contacto"
            onClick={closeMenu}
            className={`mt-2 rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-4 py-3 text-center text-sm font-semibold transition hover:bg-cyan-400 hover:text-slate-950 ${
              darkMode ? "text-cyan-300" : "text-cyan-600"
            }`}
          >
            Contacto
          </a>

          {/* TEMA MOBILE */}
          <button
            onClick={toggleDarkMode}
            aria-pressed={darkMode}
            className={`mt-2 flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm transition hover:border-cyan-400/40 hover:text-cyan-400 ${
              darkMode
                ? "border-white/10 text-slate-300"
                : "border-slate-300 bg-slate-50 text-slate-700"
            }`}
          >
            {darkMode ? (
              <>
                <Sun size={18} />
                Modo claro
              </>
            ) : (
              <>
                <Moon size={18} />
                Modo oscuro
              </>
            )}
          </button>

        </div>
      </div>

    </nav>
  )
}

export default Navbar