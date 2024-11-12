"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link'; 
import styles from './styles.module.css'; 
import Boton from '@/app/components/Boton';

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
        console.log('Response data :):', response.data); 
    
        if (response.data && response.data.length > 0) {
          setEvento(response.data[0]);
        } else {
          setError('No se encontró el evento.');
        }
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
      console.log('Evento cargado ---:', evento);
    }
  }, [evento]);

  if (loading) {
    return (<div className={styles.loadingContainer}>
    <div className={styles.loader}></div>
    <p className={styles.loaderText}>Cargando evento</p>
  </div>);
  }

  if (error) {
    return <p className={styles.error}>{error}</p>;
  }

  if (!evento) {
    return <p className={styles.error}>No se encontró el evento.</p>;
  }

  return (
    <div className={styles.eventoContainer}>
      <h1 className={styles.eventoTitle}>{evento.name}</h1>
      <div className={styles.eventoDetails}>
        <p><strong>Precio:</strong> USD {evento.price} </p>
        <p><strong>Duración:</strong> {evento.duration_in_minutes} minutos</p>
        <p><strong>Descripción:</strong> {evento.description}</p>
        <p><strong>Fecha de inicio:</strong> {evento.start_date}</p>
      </div>

      <Boton href={`../Eventos`} type={"tercero"} value="Volver a eventos"> 
              </Boton>
    </div>
  );
};

export default DetalleEventos;
