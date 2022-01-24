import styles from "../styles/Cardmenu.module.css";
import Image from "next/image";
import { useEffect } from 'react'
import AOS from 'aos'

import 'aos/dist/aos.css'

export default function Cardmenu({fondo, title, subtitle, link, white}) {
  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 100,
    });
  }, []);

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
      <div 
        data-aos={white ? "fade-left" : "fade-right"}
        data-aos-duration="1500"
        className={styles.rwCardmenuContent}>
        <h2>{title}</h2>
        <span>{subtitle}</span>
        <a href={link}>Ver Más</a>
      </div>
    </div>
  );
}
