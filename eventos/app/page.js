"use client";

import styles from './page.module.css'; 
import Image from 'next/image';
import Banner from './assets/Img/Banner.jpg';
import Link from 'next/link';
import Boton from './components/Boton';
import Titulo from './components/Title';
import Subtitulo from './components/Subtitle';
import { useContext } from 'react';
import { TokenContext } from './context/TokenContext';

export default function Home() {
  const { isLoggedIn, saveToken } = useContext(TokenContext);

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    saveToken(null); 
    window.location.href = "/";
  };

  return (
    <div className={styles.page}>
      <main className={styles.indexMain}>
        <div className={styles.bannerContainer}> 
          <Image src={Banner} className={styles.banner} layout="fill" objectFit="cover"/>
          <div className={styles.textBanner}>
            <Titulo value={"Acompañandote en cada paso"} />
            <Subtitulo value={"Reservá, recordá y hace"} />

            {isLoggedIn ? (
              <Boton value={'Cerrar Sesión'} type={'principal'} onClick={handleLogout} />
            ) : (
              <Link href="./Login">
                <Boton value={'Iniciar Sesion'} type={'principal'} />
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
