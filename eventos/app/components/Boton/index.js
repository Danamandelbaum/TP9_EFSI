import styles from "./styles.module.css"
import Link from "next/link"

export default function Boton ({ value, type }) {
    return (
            <button className={`${styles.btn} ${(type.toString().toLowerCase() == "principal") ? styles.principal : styles.secundario}`}>{value}</button>
        )
}