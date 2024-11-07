import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css'; 
import instagram from '../../assets/Img/instagram.svg';
import linkedin from '../../assets/Img/linkedin.svg';
import twitter from '../../assets/Img/x-twitter.svg';
import pinterest from '../../assets/Img/pinterest.svg';
import tiktok from '../../assets/Img/tiktok.svg'

const Footer = ({ user }) => {
    const ICON_SIZE = 25;
    return (
        <footer className={styles.footer}>
        <Link href="https://www.bbc.com/mundo/noticias/2016/05/160511_tecnologia_instagram_cambia_logo_yv"><Image className={styles.img}src={instagram} width={ICON_SIZE} height={ICON_SIZE}/></Link>
        <Link href="https://ar.linkedin.com/in/dana-mandelbaum-279a33300"><Image className={styles.img}src={linkedin} width={ICON_SIZE} height={ICON_SIZE}/></Link>
        <Link href="https://x.com/PablaLunar?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><Image className={styles.img}src={twitter} width={ICON_SIZE} height={ICON_SIZE}/></Link>
        <Link href="https://ar.pinterest.com/"><Image className={styles.img}src={pinterest} width={ICON_SIZE} height={ICON_SIZE}/></Link>
        <Link href="https://www.tiktok.com/es/"><Image className={styles.img}src={tiktok} width={ICON_SIZE} height={ICON_SIZE}/></Link>
        </footer>
    );
};

export default Footer;
