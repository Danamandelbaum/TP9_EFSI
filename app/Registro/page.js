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
          last_name: "xxx"
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
    <div className={styles.card}>
      <h1 className={styles.title}>¿Primera vez acá?</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.input}>
          <label htmlFor="f_name">Nombre (minimo 3 caracteres)</label>
          <input
            type="text"
            id="f_name"
            name="f_name"
            autoComplete="off"
            onChange={(e) => setFName(e.target.value)}
            required
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            autoComplete="off"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="password">Contraseña (minimo 3 caracteres)</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            onChange={(e) => setPass(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.button}>Registrarme</button>
      </form>
      
        {error && <p style={{ color: "red" }}>{error}</p>} 
      <Link href="./Login" className={styles.link}>Ya tengo cuenta</Link>
    </div>
  );
};

export default Registro;
