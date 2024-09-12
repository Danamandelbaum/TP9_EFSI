import styles from "./../Registro/styles.module.css";
import Link from "next/link";

const Login = () => {
  return (
        <div className={styles.card}>
          <h1 className={styles.title}>¡Hola otra vez!</h1>
          <form>
            <div className={styles.input}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" autocorrect="off" name="email" required />
            </div>
            <div className={styles.input}>
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className={styles.button}>Iniciar Sesion</button>
          </form>
          <Link href="./Registro" className={styles.link}>Soy nuevo aquí</Link>
        </div>
  );
};

export default Login;
