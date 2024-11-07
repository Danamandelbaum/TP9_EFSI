import styles from "./styles.module.css";
import Link from "next/link";

export default function Boton({ value, type, onClick, href }) {
  if (href) {
    return (
      <Link href={href}>
        <button className={`${styles.btn} ${type === "principal" ? styles.principal : styles.secundario}`}>
          {value}
        </button>
      </Link>
    );
  }

  return (
    <button
      className={`${styles.btn} ${type === "principal" ? styles.principal : styles.secundario}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
