"use client";

import { useContext } from 'react';
import { TokenContext } from './context/TokenContext';
import styles from './page.module.css'; 
import Image from 'next/image';
import Banner from './assets/Img/Banner.png';
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
          <div className={styles.oscurecer}>
            <Image src={Banner} className={styles.banner} layout="fill" objectFit="cover"/>
          </div>
          
          <div className={styles.textBanner}>
            <Titulo value={"Acompañandote en cada paso"} />
            <Subtitulo value={"Reservá, editá, gestioná y mucho más;"} />

            {isLoggedIn ? (
              <Boton value="Cerrar Sesión" type="secundario" onClick={handleLogout} />
            ) : (
              <Boton value="Creá tu primer evento" type="secundario" href="/Registro" />
            )}
          </div>
        </div>
      </main>
    </div>
  );

  
}
