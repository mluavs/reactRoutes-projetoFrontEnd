import styles from './home.module.css'
import PaginaAmarela from '../../PaginaAmarela'

function Home() {
    return (
        <>
            <header>
                <PaginaAmarela info="npm run dev, run!¹" /* testando o uso de componentes menores */ />
            </header>
            <div className={styles.containerMainText}>
                <p>1 A primeira vez que eu escrevi o comando npm run dev no terminal, guiada por Simara Conceição, e a aplicação apareceu no navegador, classifiquei a coisa toda como mágica e continuo achando bem muito, viu. 
                Esses dias, assistindo a Forest Gump pela milésima vez, parei na famosa parte em que se ouve "Run, Forest, run" e achei que tudo fazia um pouquinho de sentido junto. É isso!
                {/*isso aqui pode ser um componente também e olha a diferença de como se comenta em React dentro e fora de um componente - refatorar*/}
                </p>
            </div>
        </>
    )
}

export default Home