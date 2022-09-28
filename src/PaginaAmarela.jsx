import styles from './paginaAmarela.module.css'

const PaginaAmarela = (props) => {
    return (
        <div className={styles.containerAmarelo}>
            <h1>{props.info}</h1>
        </div>
    )
}

export default PaginaAmarela