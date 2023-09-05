import { Link } from "react-router-dom";
import CtvMosca  from './../assets/CtvMosca.png'
import Mail from '../assets/bxs-mail.svg'
import Location from '../assets/bxs-map.svg'
import Phone from '../assets/bxs-phone.svg'
import Whatsapp from '../assets/bxl-whatsapp.svg'


function Header() {
    return (
        <div className="relative w-full h-40 md:h-36 header__container">
            <div
                className="relative z-1 h-full container max-w-screen-xl mx-auto  p-2 flex flex-col justify-between sm:flex-row sm:items-center">
                <Link to="/"><img src={ CtvMosca } alt="" className="logo w-20 h-12 sm:w-32 sm:h-20" /></Link>
                <div className="text-sm text-white">
                    <div>
                        <p><img src={ Location } alt="" className="inline" />C. Díaz Romero #1370, La Paz -
                            Bolivia
                        </p>
                        <p><img src={ Phone } alt="" className="inline" />+591 222 06 55, +591 222 06 05</p>
                    </div>
                    <div>
                        <p><img src={ Whatsapp } alt="" className="inline" />+591 62221482</p>
                        <Link to="/correos" className="inline-block rounded px-2 bg-neutral-800 hover:bg-neutral-900"><img src={ Mail } alt="" className="inline pr-2" />Correos</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;