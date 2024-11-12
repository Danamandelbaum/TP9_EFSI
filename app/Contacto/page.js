import styles from './styles.module.css'; 
import Ubicacion from '../assets/Img/Ubicacion.png';
import Telefono from '../assets/Img/Telefono.png'; 
import Email from '../assets/Img/Email.png'; 
import Localizacion from '../assets/Img/Localizacion.png';
import Image from 'next/image';
import Titulo from '../components/Title';

const Contacto = () => {
  return (
    <div className = {styles.contactoContainer}>
      <Titulo value={ "Contacto"}/>
      <div className={styles.container}>
        <address className={styles.address}>
          <div className={styles.contactitem}>
            <Image src={Localizacion} className={styles.icon} width={28} height={28} alt="Ubicación" />
            <span>Dirección: Yatay 240</span>
          </div>
          <div className={styles.contactitem}>
            <Image src={Telefono} className={styles.icon} width={28} height={28} alt="Teléfono" />
            <span>Teléfono: 123-456-7890</span>
          </div>
          <div className={styles.contactitem}>
            <Image src={Email} className={styles.icon} width={28} height={28} alt="Email" />
            <span>Email: escuela@ort.com</span>
          </div>
        </address>
        <Image 
          src={Ubicacion}
          className={styles.map}
          width={500} 
          height={300}
          alt="Mapa de ubicación"
        />
      </div>
    </div>
  );
};

export default Contacto;
