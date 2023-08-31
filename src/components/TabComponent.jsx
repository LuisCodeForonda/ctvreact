import React, { useState } from 'react';
import ItemProgramacion from './ItemProgramacion';

function List(){

  return (
    <div>
      <h3 class="py-4 font-medium">Lunes-Viernes</h3>
      <ItemProgramacion hora="07:00" nombre="MISA" />
    </div>
    
  );
}

function TabComponent() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'Lunes a Viernes', content: <List/> },
    { label: 'Sabados', content: 'Contenido de la pestaña 2' },
    { label: 'Domingos', content: 'Contenido de la pestaña 3' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold p-4">Programación</h2>
      <div className="border-b border-gray-200">
        <div className="flex flex-row gap-1 font-medium text-white">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`${
                index === activeTab
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
  );
}

export default TabComponent;
