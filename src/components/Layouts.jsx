import React, { useEffect } from 'react';
import Header from './Header';
import Navigation from "./Navigation";
import Miniatura from './Miniatura';
import Counter from './Counter';

import dxtvlogo from './../assets/DxtvLogo.jpg'
import protalogo from './../assets/ProtaLogo.jpg'

//logos 
import Facebook from '../assets/bxl-facebook-circle.svg'
import Youtube from '../assets/bxl-youtube.svg'
import Twitter from '../assets/bxl-twitter.svg'
import Tiktok from '../assets/bxl-tiktok.svg'

//titulos


function Layout({ children }) {

  useEffect(() => {
    document.title = 'CTV Bolivia';
  }, []);

  return (
    <div>
      {/* Aquí puedes incluir elementos de la plantilla, como encabezado, navegación, etc. */}
      <Header />
      <Navigation />

      {/* Renderiza el contenido de la página dentro del componente */}
      <main className="container max-w-screen-xl mx-auto my-6 lg:flex lg:flex-row">

        <div className="m-4 lg:basis-4/6">

          <div id="content" className="rounded-xl shadow-xl overflow-hidden">

            { children }

          </div>

        </div>

        <div className="lg:basis-2/6">


          <div className=" bg-gray-200 shadow-xl lg:m-4">
            <h2 className="inline-block text-xl bg-red-700 text-white px-4 rounded"><i
              className="fa-solid fa-circle-play mr-2"></i>Live</h2>
            <Counter />
          </div>

          <div className="flex flex-col gap-2 m-4 p-4 shadow-xl rounded-xl overflow-hidden">
            <Miniatura url={dxtvlogo} />
            <Miniatura url={protalogo} />
          </div>

        </div>

      </main>

      {/* Puedes incluir el pie de página u otros elementos comunes aquí */}
      <footer className="bg-slate-200 text-gray-900">
        <div className="container max-w-screen-xl mx-auto grid gap-4 grid-cols-1 md:grid-cols-3 md:justify-items-center md:h-54 p-4">
          <div className="">
            <h3 className="font-bold text-lg sm:text-xl mb-2">Redes sociales</h3>
            <a href="https://www.facebook.com/CTVLaPaz" target="_blank" rel="noopener noreferrer"
              className="block text-sm sm:text-base hover:text-red-700">Facebook</a>
            <a href="https://www.youtube.com/@ctvbolivia" target="_blank" rel="noopener noreferrer"
              className="block text-sm sm:text-base hover:text-red-700">You
              tube</a>
            <a href="https://twitter.com/CTV_Bolivia" target="_blank" rel="noopener noreferrer"
              className="block text-sm sm:text-base hover:text-red-700">Twitter</a>
            <a href="https://www.tiktok.com/@ctvbolivia" target="_blank" rel="noopener noreferrer"
              className="block text-sm sm:text-base hover:text-red-700">Tik
              tok</a>
          </div>
          <div className="">
            <h3 className="font-bold text-lg sm:text-xl mb-2">Correos</h3>

            <h3 className="font-bold text-sm">Contabilidad</h3>
            <p className="mb-2 text-xs sm:text-base"> contabilidad@ctvbolivia.com</p>

            <h3 className="font-bold text-sm">Área producción</h3>
            <p className="mb-2 text-xs sm:text-base"> produccion@ctvbolivia.com</p>

            <h3 className="font-bold text-sm">Área programación</h3>
            <p className="mb-2 text-xs sm:text-base"> programacion@ctvbolivia.com</p>

            <h3 className="font-bold text-sm">Área prensa</h3>
            <p className="mb-2 text-xs sm:text-base"> prensa@ctvbolivia.com</p>
          </div>
          <div className="">
            <h3 className="font-bold text-lg sm:text-xl mb-2">Enlaces</h3>
            <a href="https://titan.hostgator.mx/login/" target="_blank" rel="noopener noreferrer"
              className="block hover:text-red-700 underline underline-offset-2 cursor-pointer">mi correo</a>
          </div>
        </div>

        <p className="text-center font-bold p-4 text-sm">
          Copyright &copy; 2023 &#183; Todos los Derechos Reservados &#183; Copacabana Television Srl.
        </p>
      </footer>
    </div>
  );
}

export default Layout;

