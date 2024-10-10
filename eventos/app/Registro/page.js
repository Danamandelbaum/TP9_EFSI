import styles from "./styles.module.css";
import Link from "next/link";

const Registro = () => {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>¿Primera vez acá?</h1>
      <form>
        <div className={styles.input}>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.input}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" autocorrect="off" name="email" required />
        </div>
        <div className={styles.input}>
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className={styles.button}>Registrarme</button>
      </form>
      <Link href="./Login" className={styles.link}>Ya tengo cuenta</Link>
    </div>
  );
};

export default Registro;
