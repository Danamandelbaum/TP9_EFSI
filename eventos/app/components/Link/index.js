
import React from 'react';

const BotonVerDetalle = ({ id }) => {
  const handleClick = () => {
    window.location.href = `/Detalle-eventos`; 
  };

  return (
    <button onClick={handleClick} className="btn-ver-detalle">
      Ver Detalle
    </button>
  );
};

export default BotonVerDetalle;
