import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const temaGuardado = localStorage.getItem("tema")

    if (temaGuardado) {
      return temaGuardado === "dark"
    }

    return true
  })

  useEffect(() => {
    const html = document.documentElement

    if (darkMode) {
      html.classList.add("dark")
      localStorage.setItem("tema", "dark")
    } else {
      html.classList.remove("dark")
      localStorage.setItem("tema", "light")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode((modoActual) => !modoActual)
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}