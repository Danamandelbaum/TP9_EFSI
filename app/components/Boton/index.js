import styles from "./styles.module.css";
import Link from "next/link";

export default function Boton({ value, type, onClick, href }) {

  const getStyles = () => {
    return `${styles.btn} ${type === "principal" ? styles.principal : (type == "secundario") ?
                  styles.secundario : styles.tercero}`
  }

  if (href) {
    return (
      <Link href={href}>
        <button className={getStyles()}>
          {value}
        </button>
      </Link>
    );
  }

  return (
    <button
      className={getStyles()}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
