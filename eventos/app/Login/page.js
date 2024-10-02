"use client"
import styles from "./../Registro/styles.module.css";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");


  return (
        <div className={styles.card}>
          <h1 className={styles.title}>¡Hola otra vez!</h1>
          <form>
            <div className={styles.input}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" autocorrect="off" name="email" onKeyUp={e => setPass(e.target.value)} required />
            </div>
            <div className={styles.input}>
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" name="password" onKeyUp={e => setPass(e.target.value)} required />
            </div>
            <button type="submit" className={styles.button}>Iniciar Sesion</button>
          </form>
          <Link href="./Registro" className={styles.link}>Soy nuevo aquí</Link>
        </div>
  );
};

export default Login;
