"use client";

import React, { useEffect, useState } from 'react';
import './styles.module.css'; 
import ListarEvento from '../components/ListarEvento';
import Titulo from '../components/Title';

const Eventos = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    setEventos([
      {
        nombre: 'Deportes',
        precio: 434,
        duration: 45454,
      },
      {
        nombre: 'Amiguismo',
        precio: 434,
        duration: 45454,
      }
    ]);
  }, []);

  return (
    <main className="eventos-container">
      <Titulo value={"Listado de eventos"} />
      {
        eventos.map(e => (
          <ListarEvento
            key={e.nombre} 
            nombre={e.nombre}
            precio={e.precio}
          />
        ))
      }
    </main>
  );
};

export default Eventos;
