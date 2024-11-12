"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './styles.module.css'; 
import BotonVerDetalle from '../components/Link';
import Titulo from '../components/Title';
import Boton from '../components/Boton';

const Eventos = () => {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/event');
        setEventos(response.data);
      } catch (error) {
        console.error('Hubo un error al obtener los eventos:', error);
        setError('No se pudieron cargar los eventos. Intenta más tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchEventos();
  }, []);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loader}></div>
        <p className={styles.loaderText}>Cargando eventos</p>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className={styles.eventosContainer}>
      <Titulo value={"Listado de eventos"} />
      <div className={styles.eventosGrid}>
        {eventos.map(e => (
          <div key={e.id} className={styles.evento}>
            <h2>{e.name}</h2>
            <div className={styles.descripcion}>
              <p>Precio: USD {e.price}</p>
              <Boton href={`./DetalleEventos/${e.id}`} type={"tercero"} value="Ver detalle"> 
              </Boton>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Eventos;
