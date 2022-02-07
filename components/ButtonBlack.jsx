import styles from "../styles/ButtonBlack.module.css";
import Link from "next/link";

export default function ButtonBlack({link}) {
  return (
    <Link href={link} as={link}>
      <a className={styles.rwButtonBlack} style={{display: "inline-block", width:"auto", margin: "auto"}}>CARGAR MÁS</a>
    </Link>
  );
}
