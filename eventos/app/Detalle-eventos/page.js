"use client"

import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DetalleEventos = () => {
  const { id } = useParams();
  const [evento, setEvento] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvento = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/event/${id}`);
        setEvento(response.data);
      } catch (error) {
        const errorMessage = error.response ? error.response.data : 'Error de red';
        setError(`No se pudo cargar el evento: ${errorMessage}`);
      } finally {
        setLoading(false);
      }
    };

    fetchEvento();
  }, [id]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!evento) {
    return <p>No se encontró el evento.</p>;
  }

  return (
    <div>
      <h1>{evento.name}</h1>
      <p>Precio: {evento.price}</p>
      <p>Duración: {evento.duration_in_minutes} minutos</p>
      <p>Descripción: {evento.description}</p>
    </div>
  );
};

export default DetalleEventos;
