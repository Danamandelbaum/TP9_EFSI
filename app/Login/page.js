"use client";
import styles from "./../Registro/styles.module.css";
import Link from "next/link";
import { useState, useContext } from "react";
import { TokenContext } from "../context/TokenContext";

const Login = () => {
  const { saveToken } = useContext(TokenContext);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    (async () => {
      const rawResponse = await fetch('http://localhost:3000/api/user/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: email, password: pass})
      });
      const content = await rawResponse.json();
    
      console.log(content);
      if(content.success == true){
        saveToken(content.token); 
        window.location.href = "/";
      }else{
        setError(content.message);
      }
    })();
  };

  return (
  <div className={styles.container} style={{justifyContent: 'center'}}>
    <div className={styles.login}>
      <h1 className={styles.title} style={{textAlign: 'center'}}>Inicia sesión</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={`${styles.input} ${styles.long}`}>
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            autoComplete="off"
            name="email"
            placeholder="Correo electrónico"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.input} ${styles.long}`}>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            autoComplete="off"
            onChange={(e) => setPass(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={`${styles.button} ${styles.long}`}>Iniciar sesion</button>
      </form>
      
        {error && <p style={{ color: "red" }}>{error}</p>} 
      <p className={styles.adicion}>¿No tienes cuenta? <Link href="./Registro" className={`${styles.adicion} ${styles.link}`}>Regístrate</Link></p>
    </div>
  </div>
  );
};

export default Login;
