import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ProjectDetail from "./components/ProjectDetail"
import ScrollToHash from "./components/ScrollToHash"


function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  )
}


function App() {
  return (
    <>
      <ScrollToHash />

      <Routes>

        {/* PÁGINA PRINCIPAL */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* DETALLE SISTEMA DE VENTAS */}
        <Route
          path="/proyecto/sistema-ventas"
          element={<ProjectDetail />}
        />

      </Routes>
    </>
  )
}

export default App