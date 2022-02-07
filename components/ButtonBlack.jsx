import styles from "../styles/ButtonBlack.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ButtonBlack({link}) {
  

  return (
    <a href="#" onClick={handleClick} className={styles.rwButtonBlack} style={{display: "inline-block", width:"auto", margin: "auto"}}>CARGAR MÁS</a>
  );
}
