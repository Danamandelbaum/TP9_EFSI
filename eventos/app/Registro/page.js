"use client"
import styles from "./styles.module.css";
import { useState } from "react";
import Link from "next/link";

const Registro = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [FName, setFName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch('http://localhost:3000/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: email, password: pass, first_name: FName, last_name: ""})
      })
      .then(async (result) => {
        console.log(result)
      })
    };


  return (
    <div className={styles.card}>
      <h1 className={styles.title} >¿Primera vez acá?</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.input}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="f_name"
            name="f_name"
            onChange={(e) => setFName(e.target.value)}
            required
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            autocorrect="off"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPass(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.button}>Registrarme</button>
      </form>
      <Link href="./Login" className={styles.link}>Ya tengo cuenta</Link>
    </div>
  );
};

export default Registro;
