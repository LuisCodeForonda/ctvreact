import React, { useEffect } from 'react';
import {} from 'react-'
import Header from './Header';
import Navigation from "./Navigation";
import Miniatura from './Miniatura';
import Counter from './Counter';
import Footer from './Footer';

import dxtvlogo from './../assets/DxtvLogo.jpg'
import protalogo from './../assets/ProtaLogo.jpg'

//logos 
import Facebook from '../assets/bxl-facebook-black.svg'
import Youtube from '../assets/bxl-youtube-black.svg'
import Twitter from '../assets/bxl-twitter-black.svg'
import Tiktok from '../assets/bxl-tiktok-black.svg'

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
      <Footer />
    </div>
  );
}

export default Layout;

