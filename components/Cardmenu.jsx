import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles/Cardmenu.module.css";
import Image from "next/image";

export default function Cardmenu({fondo, title, subtitle, link, white}) {

  let modeClass = ""
  if(white){
    modeClass = styles.rwCardmenuWhite
  }

  return (
    <div className={`${modeClass} ${styles.rwCardmenu}`}>
      <Image 
        className={styles.rwCardmenuFondo}
        src={fondo}
        layout="fill"
        objectFit="cover"
      />
      <div className={styles.rwCardmenuContent}
           data-aos="fade-left"
           data-aos-duration="1200">
        <h2>{title}</h2>
        <span>{subtitle}</span>
        <a href={link}>Ver Más</a>
      </div>
    </div>
  );
}
