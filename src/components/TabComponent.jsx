import React, { useState, useEffect } from 'react';
import ItemProgramacion from './ItemProgramacion';

const data = [
  {hora: "05:55", title: "APERTURA DE EMISIÓN"},
  {hora: "06:30", title: "MISA"},
  {hora: "07:00", title: "REVISTA BUENOS DÍAS EN VIVO"},
  {hora: "09:00", title: "SERIE TRANSFORMERS"},
  {hora: "10:00", title: "CAPITAN CENTELLA"},
  {hora: "10:30", title: "EL BOSQUE DE TALLAC JACKIE Y NUCA"},
  {hora: "11:00", title: "SERIE DEFENSORES DE LA TIERRA"},
  {hora: "11:30", title: "SERIE MACGYVER"},
  {hora: "12:00", title: "DXTV"},
  {hora: "12:30", title: "CTV NOTICIAS MERIDIANO EN VIVO"},
  {hora: "13:30", title: "PROTAGONISTAS EN VIVO"},
  {hora: "15:00", title: "SERIE BREVE STARR"},
  {hora: "15:30", title: "SERIE MARCO"},
  {hora: "16:00", title: "SERIE FABULAS DE VERDE BOSQUE"},
  {hora: "16:30", title: "SERIE QUIEN MANDA A QUIEN"},
  {hora: "17:00", title: "MUSICA"},
  {hora: "18:00", title: "SERIE HOMBRE NUCLEAR"},
  {hora: "19:00", title: "SERIE COLUMBO"},
  {hora: "20:00", title: "CTV NOTICIAS CENTRAL EN VIVO"},
  {hora: "21:00", title: "SERIE COMBATE"},
  {hora: "22:00", title: "SERIE DORAMA"},
  {hora: "23:00", title: "DXTV EN VIVO"},
]

const data2 = [
  {hora: "06:00", title: "MISA"},
  {hora: "07:00", title: "BRAVESTARR"},
  {hora: "07:30", title: "CONDE PATULA"},
  {hora: "08:00", title: "HAMTARO"},
  {hora: "08:30", title: "CHIP Y DALE"},
  {hora: "09:00", title: "LOS CAZAFANTASMAS NUEVA GENERACIÓN"},
  {hora: "09:30", title: "HEATHCLIFF"},
  {hora: "10:00", title: "TRANSFORMERS"},
  {hora: "11:00", title: "HE - MAN MASTERS"},
  {hora: "11:30", title: "SHE- RA PRINCESA DEL PODER"},
  {hora: "12:00", title: "RAMBO"},
  {hora: "13:00", title: "ROBOTECH"},
  {hora: "13:30", title: "G.I. JOE"},
  {hora: "14:30", title: "SERIE FABULAS DE VERDE BOSQUE"},
  {hora: "15:30", title: "CINE ANIME PELICULA"},
  {hora: "17:00", title: "KUNG FU"},
  {hora: "18:00", title: "EL AUTO FANTASTICO"},
  {hora: "19:00", title: "SUPER AGENTE 86"},
  {hora: "20:00", title: "LOS MAGNIFICOS"},
  {hora: "21:00", title: "MACGYVER"},
  {hora: "22:00", title: "MIAMI VICE"},
  {hora: "23:00", title: "LOBO DEL AIRE"},
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
      <h3 className="py-4 font-medium">Sabados</h3>
      {data2.map((item, index) => (
        <div key={index}>
          <ItemProgramacion hora={item.hora} nombre={item.title} />
        </div>
        
      ))}
    </div>
  );
}

function List3(){

  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    // Realiza la solicitud fetch al endpoint de tu API
    fetch('http://localhost:8000/api/v1/programacion')
      .then((response) => response.json())
      .then((data) => {
        setRegistros(data);
      })
      .catch((error) => {
        console.error('Error al obtener los registros:', error);
      });
  }, []);

  return (
    <div>
      <h3 className="py-4 font-medium">Sabados</h3>
      {registros.map((item, index) => (
        <div key={index}>
          <ItemProgramacion hora={item.hora} nombre={item.titulo} />
        </div>
      ))}
    </div>
  );
}

function TabComponent() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'Lunes a Viernes', content: <List/> },
    { label: 'Sabados', content: <List2 /> },
    { label: 'Domingos', content: <List3 />},
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
