import styles from './about.module.css'

function About() {
    return(
        <div>
        <div className={styles.aboutContainer}>
        <div className={styles.containerText}>
            <h1>Front End Dev</h1>
            <a href='https://github.com/mluavs' target="_blank">@mluavs</a>
            <br />
            <br />
            <p>Escrevo, Programo, Existo. <br/> Não necessariamente nessa ordem, mas às vezes exatamente nessa ordem</p>
            </div>
        </div>
        </div>
    )
}

export default About