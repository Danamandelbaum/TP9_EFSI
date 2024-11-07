import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

const BotonVerDetalle = ({ id }) => {
  return (
    <Link href={`/DetalleEventos/${id}`}>
      <button className={styles.botonVerDetalle}>
        Ver Detalle
      </button>
    </Link>
  );
};

export default BotonVerDetalle;


