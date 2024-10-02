import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';
import Logo from "../../assets/Img/logo.png"

const Header = ({ user }) => {
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
      </nav>
      {user && (
        <div className={styles.userInfo}>
          <span>Hola, {user.name}</span>
          <button>Salir</button>
        </div>
      )}
    </header>
  );
};

export default Header;
