import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css"
import styles from "../styles/Header.module.css";

export default function header({dark}) {

  let modeClass = ""
  if(dark){
    modeClass = styles.rwHeaderDark
  }

  return (
    <header className={`${modeClass} ${styles.rwHeader}`}>
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
