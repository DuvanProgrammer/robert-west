import styles from "../styles/ButtonBlack.module.css";
import Link from "next/link";

export default function ButtonBlack(link) {
  return (
    <div className={styles.rwButtonBlackCont}>
      <Link href={link}>
        <a href="#" className={styles.rwButtonBlack}>CARGAR MÁS</a>
      </Link>
    </div>
  );
}
