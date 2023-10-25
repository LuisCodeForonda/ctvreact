import React, { useState, useEffect } from "react";
import Layout from "./Layouts";
import CardPrograma from "./CardPrograma";

import Revista from '../assets/revista.jpg';
import Dxtv from '../assets/dxtvtarde.jpg';
import Rebobinando from '../assets/rebobinando.jpg';
import Protagonistas from '../assets/protagonistas.jpg';


function ProgramasContainer() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2">
            <CardPrograma img={Revista} title="Revista Muy Buenos Dias" horario="de lunes a viernes 7:00am" description="" />
        </div>
    );
}

function ProgramasContainer2() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2">
            <CardPrograma img={Dxtv} title="DXTV" horario="de lunes a viernes 12:00pm" description="" />
        </div>
    );
}

function ProgramasContainer3() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2">
            <CardPrograma img={Protagonistas} title="Protagonistas" horario="De lunes a viernes 13:30pm" description="" />
            <CardPrograma img={Rebobinando} title="Rebobinando la Historia" horario="domingos 12:00pm" description="" />
        </div>
    );
}



function Programas() {

    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { label: 'Noticieros', content: <ProgramasContainer /> },
        { label: 'Analisis', content: <ProgramasContainer2 /> },
        { label: 'Familiares', content: '' },
        { label: 'Entretenimiento', content: <ProgramasContainer3 /> },
    ];

    useEffect(() => {
        document.title = 'CTV Bolivia - programas';
    }, []);

    return (
        <Layout>
            <div className="p-4">
                <h2 className="text-2xl font-bold p-4">Programación</h2>
                <div className="border-b border-gray-200">
                    <div className="flex flex-wrap flex-row gap-1 font-medium text-white">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                className={`${index === activeTab
                                    ? 'bg-neutral-900'
                                    : 'bg-neutral-600'
                                    } grow text-center cursor-pointer p-2 hover:bg-neutral-800 bg-neutral-600`}
                                onClick={() => setActiveTab(index)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="mt-4">{tabs[activeTab].content}</div>
            </div>
        </Layout>
    );
}

export default Programas;