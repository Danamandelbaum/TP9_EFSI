import styles from './styles.module.css'; 
import Ubicacion from '../assets/Img/Ubicacion.png'
import Image from 'next/image';

const Contacto = () => {
  const IMG_SIZE = 500;
  return (
    <div>
        <h1 className={styles.title}>Contacto</h1>
        <p className={styles.info}>Información de contacto:</p>
        <div className={styles.container}>
          <address className={styles.address}>
            <p>Dirección: Yatay 240</p>
            <p>Teléfono: 123-456-7890</p>
            <p>Email: escuela@ort.com</p>
          </address>
          <Image 
            src={Ubicacion}
            width={IMG_SIZE}
            height={IMG_SIZE}
          />
        </div>
    </div>
  );
};

export default Contacto;
