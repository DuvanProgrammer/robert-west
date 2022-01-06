import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function header() {
  return (
    <header className={`${styles.rwHeader}`}>
      <nav className={`w-100 ${styles.rwHeaderCont}`}>
        <ul className={`nav justify-content-center ${styles.rwHeaderContItemsUl}`}>
          <li className={`nav-item ${styles.rwHeaderContItems}`}>
            <Link href="/">
              <a className={`nav-link ${styles.rwHeaderContItemsLink}`}>Inicio</a>
            </Link>
          </li>
          <li className={`nav-item ${styles.rwHeaderContItems}`}>
            <Link href="/robert-west-escuela-berkeley">
              <a className={`nav-link ${styles.rwHeaderContItemsLink}`}>Rober West y la escuela de Berkeley</a>
            </Link>
          </li>
          <li className={`nav-item ${styles.rwHeaderContItems}`}>
            <Link href="/historia">
              <a className={`nav-link ${styles.rwHeaderContItemsLink}`}>Historia</a>
            </Link>
          </li>
          <li className={`nav-item ${styles.rwHeaderContItems}`}>
            <Link href="/fotografias">
              <a className={`nav-link ${styles.rwHeaderContItemsLink}`}>Fotografías</a>
            </Link>
          </li>
          <li className={`nav-item ${styles.rwHeaderContItems}`}>
            <Link href="/catalogos">
              <a className={`nav-link ${styles.rwHeaderContItemsLink}`}>Catálogos</a>
            </Link>
          </li>
          <li className={`nav-item ${styles.rwHeaderContItems}`}>
            <Link href="/creditos">
              <a className={`nav-link ${styles.rwHeaderContItemsLink}`}>Créditos</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
