import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';

const Header = ({ user }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={100}
          height={50}
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
