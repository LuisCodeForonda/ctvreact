function Footer(){
    return(
        <footer className="bg-slate-200 text-gray-900">
        <div className="container max-w-screen-xl mx-auto grid gap-4 grid-cols-1 md:grid-cols-3 md:justify-items-center md:h-54 p-4">
          <div className="">
            <h3 className="font-bold text-lg mb-2">Redes sociales</h3>
            <a href="https://www.facebook.com/CTVLaPaz" target="_blank" rel="noopener noreferrer"
              className="block hover:text-red-700 py-1"><img src={Facebook} alt="" className='inline'/> Facebook</a>
            <a href="https://www.youtube.com/@ctvbolivia" target="_blank" rel="noopener noreferrer"
              className="block hover:text-red-700 py-1"><img src={Youtube} alt="" className='inline'/> You
              tube</a>
            <a href="https://twitter.com/CTV_Bolivia" target="_blank" rel="noopener noreferrer"
              className="block hover:text-red-700 py-1"><img src={Twitter} alt="" className='inline'/>Twitter</a>
            <a href="https://www.tiktok.com/@ctvbolivia" target="_blank" rel="noopener noreferrer"
              className="block hover:text-red-700 py-1"><img src={Tiktok} alt="" className='inline'/>Tik
              tok</a>
          </div>
          <div className="">
            <h3 className="font-bold text-lg mb-2">Correos</h3>

            <h3 className="font-bold text-sm">Contabilidad</h3>
            <p className="mb-2 "> contabilidad@ctvbolivia.com</p>

            <h3 className="font-bold text-sm">Área producción</h3>
            <p className="mb-2 "> produccion@ctvbolivia.com</p>

            <h3 className="font-bold text-sm">Área programación</h3>
            <p className="mb-2 "> programacion@ctvbolivia.com</p>

            <h3 className="font-bold text-sm">Área prensa</h3>
            <p className="mb-2 "> prensa@ctvbolivia.com</p>
          </div>
          <div className="">
            <h3 className="font-bold mb-2">Enlaces</h3>
            <a href="https://titan.hostgator.mx/login/" target="_blank" rel="noopener noreferrer"
              className="block hover:text-red-700 underline underline-offset-2 cursor-pointer">mi correo</a>
          </div>
        </div>

        <p className="text-center font-bold p-4 text-sm">
          Copyright &copy; 2023 &#183; Todos los Derechos Reservados &#183; Copacabana Television Srl.
        </p>
      </footer>
    );
}

export default Footer;