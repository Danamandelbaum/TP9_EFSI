import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';
import Logo from "../../assets/Img/logo.png"

import pfp from "../../assets/Icons/icon_profile.svg"

const Header = ({ user }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
        <Image
          src={Logo}
          alt="Logo"
          width={25}
          height={25}
        /></Link>
      </div>
      <Link href="/Contacto" className={`${styles.nav_elements} ${styles.generico}`} style={{fontSize: '1rem'}}>Contáctanos</Link>
      <div>
        <Link href="/Login" className={`${styles.login} ${styles.nav_elements}`}>Iniciar Sesion</Link>
        <Link href="/Registro" className={`${styles.signup} ${styles.nav_elements}`}>Regístrate</Link>
      </div>
    </header>
  );
};

export default Header;
