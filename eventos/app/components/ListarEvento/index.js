import styles from './styles.module.css';
import Boton from '../Boton';
import Link from 'next/link';

export default function ListarEvento({ nombre, precio }) {
  return (
    <div className={styles.evento}>
      <ul className={styles.list}>
        <li className={styles.element}><b>Nombre:</b> {nombre}</li>
        <li className={styles.element}><b>Precio:</b> {precio}</li>
        <Link href="/Detalle-eventos">
          <Boton value={"Mas info"} type={"principal"} />
        </Link>
      </ul>
    </div>
  );
}
