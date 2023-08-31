import React, { useState } from "react";
import Layout from "./Layouts";

function Programas() {

    const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'Noticieros', content: 'kdjhfejf'},
    { label: 'Analisis', content: 'Contenido de la pestaña 2' },
    { label: 'Familiares', content: 'Contenido de la pestaña 3' },
    { label: 'Entretenimiento', content: 'Contenido de la pestaña 3' },
  ];
    return (
        <Layout>
            <div className="p-4">
                <h2 className="text-2xl font-bold p-4">Programación</h2>
                <div className="border-b border-gray-200">
                    <div className="flex flex-row gap-1 font-medium text-white">
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