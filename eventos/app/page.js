"use client"

import styles from './page.module.css'; 
import Image from 'next/image';
import Banner from './assets/Img/Banner.jpg';
import Link from 'next/link';
import Boton from './components/Boton';
import Titulo from './components/Title';
import Subtitulo from './components/Subtitle';
import { useState } from 'react';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.indexMain}>
      <div className={styles.bannerContainer}> 
          <Image src={Banner} className={styles.banner} layout="fill" objectFit="cover"/>
          <div className={styles.textBanner}>
            <Titulo value={ "Acompañandote en cada paso"}/>
            <Subtitulo value={"Reservá, recordá y hace"} />
            
            <Link href="./Login"><Boton value={'Iniciar Sesion'} type={'principal'}/></Link>
          </div>
        </div>
      </main>
    </div>
  );
}



