import React, { useEffect } from "react";

function QuienesSomos() {

    useEffect(() => {
        document.title = 'CTV Bolivia - quienes Somos';
    }, []);

    return (
        <div className="rounded-xl shadow-xl overflow-hidden">
            <div className="p-4">
                <h2 className="text-2xl font-bold">Quienes Somos</h2>
                <p className="py-4 text-gray-800">
                    La historia empezó, 25 de junio de 1996 con el proyecto televisivo, Copacabana de televisión, hace 27 años sale oficialmente, católica de televisión, Canal 18 en UHF.
                    Sus estudios estuvieron en la calle Armentia, y desde 2002 en la calle Díaz Romero, de la zona de Miraflores.
                    <br />
                    Hoy tiene una existencia en la sociedad, y se ha logrado una presencia televisiva diferente, más educativa, participativa y donde los principios y valores son preponderantes en la colectividad.
                </p>
                <p className="pb-4 text-gray-800">
                    Muchas personas pasaron por esta institución, tanto a nivel directivo como de productores y periodistas.
                    Estos años han servido para afirmar la importancia que tiene la comunicación; la necesidad de construir un instrumento de intercomunicación que promueva los valores y tenga un espíritu abierto, plural y muy participativo.
                    <br />
                    Hoy con 24 horas de programación, pretenden responder a ciertos nichos de la audiencia, sin embargo es un medio que está abierto a toda la ciudadanía.
                    <br />
                    Su director fundador fue el Padre. Armando Carminatti Ferrari, en la actualidad con una nueva dirección, encaminado a los retos de la comunicación interactiva.
                </p>
                <h2 className="font-bold">Visión</h2>
                <p className="py-4 text-gray-800">Nosotros aspiramos a ser el mejor medio de televisión para promover el cambio de
                    valores humanos de los bolivianos.</p>
                <h2 className="font-bold">Mision</h2>
                <p className="py-4 text-gray-800">Nuestra misión como canal de televisión es proporcionar una programación que entretenga, informe y eduque a nuestra audiencia. Buscamos ofrecer contenido de alta calidad que promueva valores como la inclusión, la diversidad, la empatía y la sostenibilidad.</p>
            </div>
        </div>
    );
}

export default QuienesSomos;

