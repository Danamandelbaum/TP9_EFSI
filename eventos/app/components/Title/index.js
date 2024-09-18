import styles from './styles.module.css'

export default function Titulo({value}){
    return(
        <h1 className={styles.title}>{value}</h1>
    )
}