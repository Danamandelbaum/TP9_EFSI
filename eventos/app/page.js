import styles from './page.module.css'; 
import Image from 'next/image';
import Banner from './assets/Img/Banner.jpg';
import Link from 'next/link';
import Boton from './components/Boton';
import Titulo from './components/Title';
import Subtitulo from './components/Subtitle';
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        
      <div className={styles.bannerContainer}> 
          <Image src={Banner} className={styles.banner} layout="fill" objectFit="cover"/>
          <div className={styles.textBanner}>
            <Titulo value={ "Acompañandote en cada paso"}/>
            <Subtitulo value={"Reservá, recordá y hace"} />
            
            <Link href="./Eventos"><Boton value={'Ver Eventos'} type={'principal'}/></Link>
          </div>
        </div>
      </main>
    </div>
  );
}