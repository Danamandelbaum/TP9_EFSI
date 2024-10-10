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

    if (email === "usuario_valido" && pass === "contraseña_valida") {
      const token = "token_valido"; 
      saveToken(token); 
      window.location.href = "/Home"; 
    } else {
      setError("Email o contraseña incorrectas");
    }
  };

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>¡Hola otra vez!</h1>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}
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
        <button type="submit" className={styles.button}>Iniciar Sesión</button>
      </form>
      <Link href="./Registro" className={styles.link}>Soy nuevo aquí</Link>
    </div>
  );
};

export default Login;
