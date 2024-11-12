import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';
import Logo from "../../assets/Img/logo.png";
import pfp from "../../assets/pfp.jpg";
import Boton from '../Boton'; 

const Header = ({ user }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  
  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/Login"; 
  };

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
      <nav className={styles.navigation}>
        <Link href="/" className={`${styles.login} ${styles.nav_elements}`}>Home</Link>
        <Link href="/Eventos" className={`${styles.login} ${styles.nav_elements}`}>Eventos</Link>
        <Link href="/Contacto" className={`${styles.login} ${styles.nav_elements}`}>Contacto</Link>
        <Boton onClick={handleLogout} type={"principal"} value="Cerrar sesion" /> 
      </nav>
    </header>
  );
  
};

export default Header;
