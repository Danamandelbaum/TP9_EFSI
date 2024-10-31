"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link'; // Importa Link

const DetalleEventos = ({ params }) => {
  const { id } = params; 
  const [evento, setEvento] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvento = async () => {
      if (!id) {
        console.log('ID no disponible');
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get(`http://localhost:3000/api/event/${id}`);
        console.log('Response data:', response.data);
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

  useEffect(() => {
    if (evento) {
      console.log('Evento cargado:', evento);
    }
  }, [evento]);

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
      <p>Fecha de inicio: {evento.start_date}</p>

   
      <Link href="/Eventos">
        <button className="volver-button">Volver a Eventos</button>
      </Link>
    </div>
  );
};

export default DetalleEventos;
