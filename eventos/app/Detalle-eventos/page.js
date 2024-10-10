"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetalleEventos = () => {
  const { id } = useParams(); 
  const [evento, setEvento] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/eventos/${id}`)
      .then(response => {
        setEvento(response.data);
      })
      .catch(error => {
        console.error('Hubo un error al obtener el detalle del evento:', error);
      });
  }, [id]);


  return (
    <div>
      <h1>{evento.nombre}</h1>
      <p>Precio: {evento.precio}</p>
      <p>Duración: {evento.duration} minutos</p>
    </div>
  );
};

export default DetalleEventos;
