import styles from './page.module.css'; 

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Bienvenido a nuestro sitio</h1>
        <p>Aquí puedes ver los eventos más recientes.</p>
        <section className={styles.ctas}>
          <a className={styles.primary} href="./Eventos">Ver Eventos</a>
          <a className={styles.secondary} href="./Contacto">Contacto</a>
        </section>
      </main>
    </div>
  );
}