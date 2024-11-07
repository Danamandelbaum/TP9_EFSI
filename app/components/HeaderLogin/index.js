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
        <Image
          src={Logo}
          alt="Logo"
          width={25}
          height={25}
        />
      </div>
      <nav className={styles.navigation}>
        <Link href="/">Home</Link>
        <Link href="/Eventos">Eventos</Link>
        <Link href="/Contacto">Contacto</Link>
        
      
        <div className={styles.profile} onClick={toggleDropdown}>
          <Image
            className={styles.myPic}
            src={pfp}
            width={50}
            height={50}
            alt="Perfil"
          />
        </div>

        {isDropdownVisible && (
          <div className={styles.dropdown}>
            <span>{user?.name}</span>
            <Boton 
              value="Cerrar Sesión" 
              type="secundario" 
              onClick={handleLogout} 
            />
            
          </div>
          
        
        )}
      </nav>
    </header>
  );
  
};

export default Header;
