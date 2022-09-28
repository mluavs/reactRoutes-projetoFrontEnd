import styles from './paginaRosa.module.css'

const PaginaRosa = (props) => {
    return (
        <div className={styles.containerRosa}>
            <h2>{props.info}</h2>
        </div>
    )
}

export default PaginaRosa