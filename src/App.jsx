import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Home from "./routes/Home"
import Programacion from "./routes/Programacion"
import Programas from "./routes/Programas"
import Contactos from "./routes/Contactos"
import Correos from "./routes/Correos"
import Noticia from "./routes/Noticia"
import QuienesSomos from "./routes/QuienesSomos"
import Counter from "./components/Counter"
import Miniatura from "./components/Miniatura"
import dxtvlogo from './assets/DxtvLogo.jpg'
import protalogo from './assets/ProtaLogo.jpg'
import Footer from "./components/Footer"
import ErrorPage from "./routes/error-page"
import Station from './assets/bx-station.svg'

import { Routes, Route } from "react-router-dom"
import { useState } from "react"

function App() {

  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const hiddenMenu = () => {
    if(!isOpen){
      setIsOpen(!isOpen);
    }
  }

  return (
    <>
      <Header hiddenMenu={hiddenMenu} />
      <Navigation toggleMenu={toggleMenu} isOpen={isOpen} />

      <main className="container max-w-screen-xl mx-auto my-6 lg:flex lg:flex-row">

        <div className="m-4 lg:basis-4/6">

          <div id="content" className="">

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/noticias/:slug" element={<Noticia />} />
              <Route path="/quienes-somos" element={<QuienesSomos />} />
              <Route path="/programacion" element={<Programacion />} />
              <Route path="/programas" element={<Programas />} />
              <Route path="/contactos" element={<Contactos />} />
              <Route path="/correos" element={<Correos />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>

          </div>

        </div>

        <div className="lg:basis-2/6">
          <div className="shadow-xl lg:m-4">
            <h2 className="inline-block text-xl bg-red-700 text-white px-4 rounded">
              <img src={Station} alt="" className="inline pr-2" />Live</h2>
            <Counter />
          </div>

          <div className="flex flex-col gap-2 m-4 p-4 shadow-xl rounded-xl overflow-hidden">
            <Miniatura url={dxtvlogo} />
            <Miniatura url={protalogo} />
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}

export default App
