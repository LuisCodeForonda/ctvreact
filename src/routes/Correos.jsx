import React, { useEffect } from "react";
import Mail from '../assets/bxs-mail.svg'

function Correos() {

    useEffect(() => {
        document.title = 'CTV Bolivia - contactos';
    }, []);

    return (

        <div className="rounded-xl shadow-xl overflow-hidden">
           <div className="p-4 text-lg">
                <h2 className="text-xl sm:text-2xl font-bold">Nuestros correos corporativos</h2>
                <div className="border-b my-2 py-2">
                    <h3 className="font-semibold">Área contabilidad</h3>
                    <div className="overflow-hidden text-sm sm:text-xl relative flex flex-row justify-between">
                        <div className="text-gray-800">contabilidad@ctvbolivia.com</div>
                        <div className="cursor-pointer bg-blue-950 rounded px-2 text-white ">
                            <a href="mailto:contabilidad@ctvbolivia.com" target="_blank" className=""><img src={ Mail } alt="" className='inline'/> enviar correo</a>
                        </div>
                    </div>
                </div>

                <div className="border-b my-2 py-2">
                    <h3 className="font-semibold">Área producción</h3>
                    <div className="overflow-hidden text-sm sm:text-xl relative flex flex-row justify-between">
                        <div className="text-gray-800">produccion@ctvbolivia.com</div>
                        <div className="cursor-pointer bg-blue-950 rounded px-2 text-white ">
                            <a href="mailto:produccion@ctvbolivia.com" target="_blank"><img src={ Mail } alt="" className='inline pr-2'/>enviar correo</a>
                        </div>
                    </div>
                </div>

                <div className="border-b my-2 py-2">
                    <h3 className="font-semibold">Área programación</h3>
                    <div className="overflow-hidden text-sm sm:text-xl relative flex flex-row justify-between">
                        <div className="text-gray-800">programacion@ctvbolivia.com</div>
                        <div className="cursor-pointer bg-blue-950 rounded px-2 text-white"><a href="mailto:programacion@ctvbolivia.com" target="_blank"><img src={ Mail } alt="" className='inline pr-2'/>enviar correo</a></div>
                    </div>
                </div>

                <div className="border-b my-2 py-2">
                    <h3 className="font-semibold">Área prensa</h3>
                    <div className="overflow-hidden text-sm sm:text-xl relative flex flex-row justify-between">
                        <div className="text-gray-800">prensa@ctvbolivia.com</div>
                        <div className="cursor-pointer bg-blue-950 rounded px-2 text-white "><a href="mailto:prensa@ctvbolivia.com" target="_blank"><img src={ Mail } alt="" className='inline pr-2'/>enviar correo</a></div>
                    </div>
                </div>

                <div className="border-b my-2 py-2">
                    <h3 className="font-semibold">Área técnica</h3>
                    <div className="overflow-hidden text-sm sm:text-xl relative flex flex-row justify-between">
                        <div className="text-gray-800">tecnica@ctvbolivia.com</div>
                        <div className="cursor-pointer bg-blue-950 rounded px-2 text-white "><a href="mailto:tecnica@ctvbolivia.com" target="_blank" ><img src={ Mail } alt="" className='inline pr-2'/>enviar correo</a></div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Correos;