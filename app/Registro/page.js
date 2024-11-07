"use client";
import styles from "./styles.module.css";
import { useState } from "react";
import Link from "next/link";
import ErrorHelper from "../helpers/error-helper.js";
const errorHelp = new ErrorHelper();

const Registro = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/user/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: email,
          password: pass,
          first_name: FName,
          last_name: LName
        })
      });
  
      if (!response.ok) {
        const errorMessage = await response.text(); 
        throw new Error(errorMessage); 
      }

      console.log("Registro exitoso");
      window.location.href = "/Login"; 

    } catch (error) {
      console.error('Error al registrarse: ' + errorHelp.eraseStart("BAD REQUEST: ", error.message)); //eHelper.eraseStart("BAD REQUEST: ", error)
      let errorM = errorHelp.eraseStart("BAD REQUEST: ", error.message);
      setError(errorHelp.changeTerms("Nombre", "first_name", errorM));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
      </div>
      <div className={styles.registro}>
        <h1 className={styles.title}>Regístarte</h1>
        <div className={styles.divisor}></div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.input}>
            <label htmlFor="f_name">Nombre</label>
            <input
              type="text"
              id="f_name"
              name="f_name"
              autoComplete="off"
              placeholder="Nombre"
              onChange={(e) => setFName(e.target.value)}
              required
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="l_name">Apellido</label>
            <input
              type="text"
              id="l_name"
              placeholder="Apellido"
              name="l_name"
              autoComplete="off"
              onChange={(e) => setLName(e.target.value)}
              required
            />
          </div>
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
          <button type="submit" className={`${styles.button} ${styles.long}`}>Registrarme</button>
        </form>
        
          {error && <p style={{ color: "red" }}>{error}</p>} 
        <p className={styles.adicion}>¿Ya tienes cuenta? <Link href="./Login" className={`${styles.adicion} ${styles.link}`}>Iniciar sesión</Link></p>
      </div>
    </div>
  );
};

export default Registro;
