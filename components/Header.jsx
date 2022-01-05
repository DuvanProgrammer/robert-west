import Link from "next/link";
import styles from "../styles/rw-menu.module.css";

export default function Inicio() {
  return (
    <head>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Inicio</a>
            </Link>
          </li>
          <li>
            <Link href="/robert-west-escuela-berkeley">
              <a>Rober West y la escuela de Berkeley</a>
            </Link>
          </li>
          <li>
            <Link href="/historia">
              <a>Historia</a>
            </Link>
          </li>
          <li>
            <Link href="/fotografias">
              <a>Fotografías</a>
            </Link>
          </li>
          <li>
            <Link href="/catalogos">
              <a>Catálogos</a>
            </Link>
          </li>
          <li>
            <Link href="/creditos">
              <a>Créditos</a>
            </Link>
          </li>
        </ul>
      </nav>
    </head>
  );
}
