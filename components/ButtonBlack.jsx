import styles from "../styles/ButtonBlack.module.css";
import Link from "next/link";

export default function ButtonBlack(link) {
  return (
    <div className={styles.rwButtonBlackCont}>
      <Link href={link}>
        <button className={styles.rwButtonBlack}>CARGAR MÁS</button>
      </Link>
    </div>
  );
}
