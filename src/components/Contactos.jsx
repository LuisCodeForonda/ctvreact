import React, {useEffect} from "react";
import Layout from "./Layouts";

function Contactos() {

    useEffect(() => {
        document.title = 'CTV Bolivia - contactos';
    }, []);

    return (
        <Layout>
            <div className="p-4">
                <h2 className="text-2xl font-bold">Contactos</h2>


               

                <div className="my-6 border-4 border-gray-300 w-full md:w-4/5 h-96 mx-auto">
                    <iframe className="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.484179640445!2d-68.12396248451967!3d-16.501636345143996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f2067d102bf79%3A0x6f8dfd206e43e6fe!2sCatolicaTV!5e0!3m2!1ses!2sbo!4v1672952092103!5m2!1ses!2sbo"
                        width="600" height="450"></iframe>
                </div>

                <p className="p-6 leading-8 text-gray-800">
                    Dirección C. Díaz Romero No. 1370, zona Miraflores <br />
                    Casilla #7762 <br />
                    Teléfonos Central : 2 220605 – 2 22 0655 <br />
                    Fax : 2 225002 <br />
                    Prensa : 2 220660 <br />
                    Gerencia Comercial: 2 245775 <br />
                    Gerencia General: 2 223502 <br />
                </p>
            </div>
        </Layout>
    );
}

export default Contactos;