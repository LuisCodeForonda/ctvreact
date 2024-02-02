import Menu from '../assets/bx-menu.svg'
import Facebook from '../assets/bxl-facebook-circle.svg'
import Youtube from '../assets/bxl-youtube.svg'
import Twitter from '../assets/bxl-twitter.svg'
import Tiktok from '../assets/bxl-tiktok.svg'
import { Link, useLocation } from 'react-router-dom'

function Navigation({ toggleMenu, isOpen }) {

    const location = useLocation();

    return (
        <nav className="bg-gray-900 relative text-white text-2xl py-4 px-2">
            <div className="container max-w-screen-xl mx-auto flex flex-wrap justify-between items-center">
                <button onClick={ toggleMenu } id="btn-menu" className="px-1 pt-1 rounded-md md:hidden"><img src={Menu} alt="" width={36} /></button>

                <ul className="flex flex-row gap-4 md:order-2">
                    <a href="https://www.facebook.com/CTVLaPaz" target="_blank" rel="noopener noreferrer"
                        className="text-center rounded-full transition hover:scale-110 duration-300"><img src={Facebook} alt="" width={36} /></a>
                    <a href="https://www.youtube.com/@ctvbolivia" target="_blank" rel="noopener noreferrer"
                        className=" text-center rounded-full transition hover:scale-110 duration-300"><img src={Youtube} alt="" width={36} /></a>
                    <a href="https://twitter.com/CTV_Bolivia" target="_blank" rel="noopener noreferrer"
                        className=" text-center rounded-full transition hover:scale-110 duration-300"><img src={Twitter} alt="" width={36} /></a>
                    <a href="https://www.tiktok.com/@ctvbolivia" target="_blank" rel="noopener noreferrer"
                        className="text-center rounded-full transition hover:scale-110 duration-300"><img src={Tiktok} alt="" width={36} /></a>
                </ul>

                <ul id="menu" className={`w-full h-56 flex flex-col justify-evenly gap-1 mt-2 px-2 md:gap-4 md:mt-0 md:w-auto md:h-auto md:order-1 md:flex md:flex-row text-xl ${isOpen ? 'hidden' : ''}`}>
                    <li>
                        <Link to="/quienes-somos" onClick={toggleMenu} className={`block text-slate-400 hover:text-slate-50 transition duration-300 py-2 ${location.pathname === '/quienes-somos' ? 'text-white':''}`} >Quienes
                            somos
                        </Link>
                    </li>
                    <li>
                        <Link to="/programacion" onClick={toggleMenu} className={`block text-slate-400 hover:text-slate-50 transition duration-300 py-2 ${location.pathname === '/programacion' ? 'text-white':''}`}>Programación</Link>
                    </li>
                    <li>
                        <Link to="/programas" onClick={toggleMenu} className={`block text-slate-400 hover:text-slate-50 transition duration-300 py-2 ${location.pathname === '/programas' ? 'text-white':''}`}>Programas</Link>
                    </li>
                    <li>
                        <Link to="/contactos" onClick={toggleMenu} className={`block text-slate-400 hover:text-slate-50 transition duration-300 py-2 ${location.pathname === '/contactos' ? 'text-white':''}`}>Contactos</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;