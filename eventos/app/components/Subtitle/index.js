import styles from './styles.module.css'

export default function Subtitulo({value}){
    return(
        <h3 className={styles.subtitle}>{value}</h3>
    )
}