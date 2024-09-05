import styles from './module.css'; 

export async function obtenerEvento(req) {
  const { id } = req.query;

  const res = await fetch(`http://localhost:3000/api/events/${id}`);
  const event = await res.json();

  return {
    props: { event },
  };
}

export default function detalleEvento({ event }) {
    <p>Aca van los datos del evento</p>
    
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{event.name}</h1>
        <p><strong>Descripción:</strong> {event.description}</p>
        <p><strong>Fecha de Inicio:</strong> {new Date(event.start_date).toLocaleDateString()}</p>
        <p><strong>Duración:</strong> {event.duration_in_minutes} minutos</p>
        <p><strong>Precio:</strong> ${event.price.toFixed(2)}</p>
        <p><strong>Inscripción Habilitada:</strong> {event.enabled_for_enrollment ? 'Sí' : 'No'}</p>
        <p><strong>Asistencia Máxima:</strong> {event.max_assistance}</p>
      </main>
    </div>
  );
}
