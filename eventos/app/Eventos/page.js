"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.module.css'; 
import ListarEvento from '../components/ListarEvento';
import Titulo from '../components/Title';

const Eventos = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    // Hacemos la llamada a la API
    axios.get('http://localhost:3000/eventos')
      .then(response => {
        setEventos(response.data);
      })
      .catch(error => {
        console.error('Hubo un error al obtener los eventos:', error);
      });
  }, []);

  return (
    <main className="eventos-container">
      <Titulo value={"Listado de eventos"} />
      {
        eventos.map(e => (
          <ListarEvento
            key={e.id} 
            nombre={e.nombre}
            precio={e.precio}
          />
        ))
      }
    </main>
  );
};

export default Eventos;
