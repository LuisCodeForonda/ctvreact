import Menu from '../assets/bx-menu.svg'
import Facebook from '../assets/bxl-facebook-circle.svg'
import Youtube from '../assets/bxl-youtube.svg'
import Twitter from '../assets/bxl-twitter.svg'
import Tiktok from '../assets/bxl-tiktok.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navigation() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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

                <ul id="menu"
                    className={'block w-full h-56 flex flex-col justify-evenly gap-1 md:gap-4 hidden md:w-auto md:h-auto md:block md:order-1 md:flex md:flex-row text-xl'}>
                    <li>
                        <Link to="/quienessomos" className="menu_item text-slate-400 hover:text-slate-50 {{ request()->routeIs('quienessomos') ? 'text-slate-50 font-medium' : '' }}">Quienes
                            somos
                        </Link>
                    </li>
                    <li>
                        <Link to="/programacion" className="menu_item text-slate-400 hover:text-slate-50 {{ request()->routeIs('programacion') ? 'text-slate-50 font-medium' : '' }}">Programación</Link>
                    </li>
                    <li>
                        <Link to="/programas" className="menu_item text-slate-400 hover:text-slate-50 {{ request()->routeIs('programas') ? 'text-slate-50 font-medium' : '' }}">Programas</Link>
                    </li>
                    <li>
                        <Link to="/contactos" className="menu_item text-slate-400 hover:text-slate-50 {{ request()->routeIs('contactos') ? 'text-slate-50 font-medium' : '' }}">Contactos</Link>

                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default Navigation;