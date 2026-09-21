import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

    const id = location.hash.replace("#", "")

    setTimeout(() => {
      const elemento = document.getElementById(id)

      if (elemento) {
        elemento.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }, 100)
  }, [location])

  return null
}

export default ScrollToHash