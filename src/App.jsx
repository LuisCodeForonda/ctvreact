import Index from "./components/Index"
import QuienesSomos from "./components/QuienesSomos"
import Programacion from "./components/Programacion"
import Programas from "./components/Programas"
import Contactos from "./components/Contactos"
import Correos from "./components/Correos"
import Noticia from "./components/Noticia"

import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
       <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/noticias" Component={<Noticia />} />
        <Route path="/quienessomos" element={<QuienesSomos />} />
        <Route path="/programacion" element={<Programacion />} />
        <Route path="/programas" element={<Programas />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/correos" element={<Correos />} />
      </Routes> 
    </>
  )
}

export default App
