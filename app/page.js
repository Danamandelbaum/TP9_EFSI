"use client";

import { useContext } from 'react';
import { TokenContext } from './context/TokenContext';
import styles from './page.module.css'; 
import Image from 'next/image';
import Banner from './assets/Img/Banner.jpg';
import Boton from './components/Boton';
import Titulo from './components/Title';
import Subtitulo from './components/Subtitle';

export default function Home() {
  const { isLoggedIn, saveToken } = useContext(TokenContext);

  const handleLogout = () => {
    console.log("Botón de Cerrar Sesión presionado");  
    localStorage.removeItem("token"); 
    saveToken(null);  
    window.location.reload();  
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
              <Boton value="Cerrar Sesión" type="secundario" onClick={handleLogout} />
            ) : (
              <Boton value="Iniciar Sesión" type="principal" href="/Login" />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
