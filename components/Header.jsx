import Link from "next/link";
import styles from "../styles/Header.module.css";
import { useEffect } from "react";
import stickyHeader from "../modules/HeaderSticky";

export default function Header({dark, fixed}) {

  let modeFixed = ""
  if(fixed){
    modeFixed = styles.rwHeaderFixedTop
  }


  let modeClass = ""
  if(dark){
    modeClass = styles.rwHeaderDark
  }

  useEffect(() => {
    stickyHeader()
  })

  return (
    <header id="rw-header-p" className={`${modeClass} ${styles.rwHeader} ${modeFixed}`}>
      <nav className={`w-100 ${styles.rwHeaderCont}`}>
        <ul className={`nav justify-content-center ${styles.rwHeaderContItemsUl}`}>
          <li className={`nav-item ${styles.rwHeaderContItems}`}>
            <Link href="/">
              <a className={`nav-link ${styles.rwHeaderContItemsLink}`}>Inicio</a>
            </Link>
          </li>
          <li className={`nav-item ${styles.rwHeaderContItems}`}>
            <Link href="/robert-west-y-la-escuela-de-berkeley">
              <a className={`nav-link ${styles.rwHeaderContItemsLink}`}>Rober C. West y la escuela de Berkeley</a>
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
