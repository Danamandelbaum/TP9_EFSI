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



  return (
    <div className={styles.page}>
       
      <main className={styles.indexMain}>
        <div className={styles.bannerContainer}> 
          <div className={styles.oscurecer}>
            <Image src={Banner} className={styles.banner} layout="fill" objectFit="cover"/>
          </div>
          
          <div className={styles.textBanner}>
            <Titulo value={"Acompañandote en cada paso"} />
            <Subtitulo value={"Reservá, editá, gestioná y mucho más;"}/>

            {isLoggedIn ? (
              <Boton value="Ver eventos" type="secundario"  href="/Eventos" />
            ) : (
              <Boton value="Ver eventos" type="secundario" href="/Login" />
            )}
          </div>
        </div>
      </main>
    </div>
  );

  
}
