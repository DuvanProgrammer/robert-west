import styles from "../styles/Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.rwFooter}>
            <div className="container">
                <p>Desarrollado por <a href="https://www.geniorama.site/" target="_blank" rel="noreferrer">Geniorama</a></p>
            </div>
        </footer>
    )
}
