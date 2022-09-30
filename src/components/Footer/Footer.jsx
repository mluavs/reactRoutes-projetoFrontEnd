import styles from './footer.module.css'

function Footer(){
    var today = new Date();

    return (
        <div className={styles.footer}>
        <p>Copyright - {today.getFullYear()} | Desenvolvido por Marina Lua @mluavs</p>
        </div> 
    )
}

export default Footer