import React, { useState, useEffect } from 'react';
import ItemProgramacion from './ItemProgramacion';

const data = [
  {hora: "05:55", title: "APERTURA DE EMISIÓN"},
  {hora: "06:00", title: "PROGRAMA ARQUIDIOSESIS DE LA PAZ"},
  {hora: "06:30", title: "MISA"},
  {hora: "07:00", title: "REVISTA BUENOS DÍAS EN VIVO"},
  {hora: "08:50", title: "LA PEQUEÑA LULU"},
  {hora: "09:00", title: "TRANSFORMERS"},
  {hora: "09:30", title: "HE MAN Y LOS AMOS DEL UNIVERSO"},
  {hora: "10:00", title: "SLAM DUNK - BASQUET"},
  {hora: "10:30", title: "DEFENSORES DE LA TIERRA"},
  {hora: "11:00", title: "MAC GYBER"},
  {hora: "12:00", title: "DXTV EN VIVO"},
  {hora: "12:30", title: "CTV NOTICIAS MERIDIANO EN VIVO"},
  {hora: "13:30", title: "PROTAGONISTAS EN VIVO"},
  {hora: "15:00", title: "ROBIN HOOD"},
  {hora: "15:30", title: "EL PRINCIPE VALIENTE"},
  {hora: "16:00", title: "HALCONES GALACTICOS"},
  {hora: "16:30", title: "¿QUIEN MANDA A QUIEN?"},
  {hora: "17:00", title: "MUSICA"},
  {hora: "18:00", title: "LA ISLA DE LA FANTASIA"},
  {hora: "19:00", title: "KOJAK"},
  {hora: "20:00", title: "CTV NOTICIAS CENTRAL EN VIVO"},
  {hora: "21:00", title: "LOS AÑOS MARAVILLOSOS"},
  {hora: "22:00", title: "DORAMA \"MI ADORABLE SECRETARIA\""},
  {hora: "23:00", title: "DXTV EN VIVO"},
]

const data2 = [
  {hora: "05:55", title: "APERTURA DE EMISIÓN"},
  {hora: "06:00", title: "AUTOPISTA HACIA EL CIELO"},
  {hora: "07:00", title: "REBOBINANDO LA HISTORIA REPRIS"},
  {hora: "09:00", title: "LOS CAZAFANTASMAS LOS REALES"},
  {hora: "09:30", title: "HEATHCLIFF"},
  {hora: "10:00", title: "TRANSFORMERS"},
  {hora: "11:00", title: "HE - MAN Y LOS AMOS DEL UNIVERSO"},
  {hora: "11:30", title: "SHE- RA PRINCESA DEL PODER"},
  {hora: "12:00", title: "RAMBO"},
  {hora: "13:00", title: "ROBOTECH LA NUEVA GENERACIÓN"},
  {hora: "13:30", title: "DEFENSORES DE LA TIERRA"},
  {hora: "14:30", title: "GIJOE"},
  {hora: "15:30", title: "DORAEMON"},
  {hora: "17:00", title: "KUNG FU"},
  {hora: "18:00", title: "EL AUTO FANTASTICO"},
  {hora: "19:00", title: "PRIMERA FILA"},
  {hora: "20:00", title: "LOS MAGNIFICOS"},
  {hora: "21:00", title: "MACGYVER"},
  {hora: "22:00", title: "MIAMI VICE"},
  {hora: "23:00", title: "LOBO DEL AIRE"},
]

const data3 = [
  {hora: "06:00", title: "AUTOPISTA HACIA EL CIELO"},
  {hora: "07:00", title: "INVASION EXTRATERRESTRE"},
  {hora: "08:00", title: "SUPER LIBRO"},
  {hora: "08:30", title: "LAS AVENTURAS DE LOS OSOS GUMMI"},
  {hora: "09:00", title: "AVENTUREROS DEL AIRE"},
  {hora: "09:30", title: "TRANSFORMERS"},
  {hora: "10:30", title: "SANTA MISA CELEBRACION DE LA EUCARISTIA"},
  {hora: "11:30", title: "EL PAJARO LOCO"},
  {hora: "12:00", title: "REBOBINANDO LA HISTORIA"},
  {hora: "14:00", title: "PRIMERA FILA"},
  {hora: "15:00", title: "LOS ARISTOGATOS"},
  {hora: "16:30", title: "ALF"},
  {hora: "17:00", title: "LA BELLA Y LA BESTIA"},
  {hora: "18:00", title: "EL DIARIO DEL DESTINO"},
  {hora: "19:00", title: "WALKER TEXAS"},
  {hora: "20:00", title: "LOS MAGNIFICOS"},
  {hora: "21:00", title: "EL INCREIBLE HULK"},
  {hora: "22:00", title: "DXTV EN VIVO"},
]


function List(){

  return (
    <div>
      <h3 className="py-4 font-medium">Lunes-Viernes</h3>
      {data.map((item, index) => (
        <div key={index}>
          <ItemProgramacion hora={item.hora} nombre={item.title} />
        </div>
        
      ))}
    </div>
  );
}

function List2(){
  return (
    <div>
      <h3 className="py-4 font-medium">Sábados</h3>
      {data2.map((item, index) => (
        <div key={index}>
          <ItemProgramacion hora={item.hora} nombre={item.title} />
        </div>
        
      ))}
    </div>
  );
}

function List3(){

  return (
    <div>
      <h3 className="py-4 font-medium">Domingos</h3>
      {data3.map((item, index) => (
        <div key={index}>
          <ItemProgramacion hora={item.hora} nombre={item.title} />
        </div>
        
      ))}
    </div>
  );
}

function TabComponent() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'Lunes a Viernes', content: <List/> },
    { label: 'Sábados', content: <List2 /> },
    { label: 'Domingos', content: <List3 />},
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold pb-4">Programación</h2>
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
