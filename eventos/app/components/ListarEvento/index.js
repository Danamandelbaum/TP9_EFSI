import styles from './styles.module.css';

export default function ListarEvento({ nombre, precio }) {
  return (
    <div className={styles.evento}>
      <ul className={styles.list}>
        <li className={styles.element}><b>Nombre:</b> {nombre}</li>
        <li className={styles.element}><b>Precio:</b> {precio}</li>
      </ul>
    </div>
  );
}
