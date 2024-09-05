import styles from './module.css'; 

const Contacto = () => {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Contacto</h1>
        <p className={styles.info}>Información de contacto:</p>
        <address className={styles.address}>
          <p>Dirección: Yatay 240</p>
          <p>Teléfono: 123-456-7890</p>
          <p>Email: escuela@ort.com</p>
        </address>
      </main>
    </>
  );
};

export default Contacto;
