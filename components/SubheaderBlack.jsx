import styles from "../styles/SubheaderBlack.module.css";
import Image from "next/image";

import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

export default function SubheaderBlack({
  title,
  subtitle,
  imagen,
  desc,
  scroll,
  button,
  information_left,
}) {
  let modeScroll = "";
  if (scroll) {
    modeScroll = styles.rwSubheaderwScroll;
  }

  let modeButton = "";
  if (button) {
    modeButton = styles.rwSubheaderwButton;
  }

  let infoLeft = "";
  if (information_left) {
    infoLeft = styles.rwSubheaderb__left;
  }

  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 100,
    });
  }, []);
  return (
    <div className={`${infoLeft} ${styles.rwSubheaderb}`}>
      <div className={styles.rwSubheaderb__black}></div>
      <div className={styles.rwSubheaderb__image}>
        <Image
          src={imagen}
          layout="fill"
          objectFit="cover"
          loading="eager"
        ></Image>
        <div className={styles.rwSubheaderb__gradient}></div>
      </div>
      <div
        className={`container ${styles.rwSubheaderb__content}`}
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <div className={`col-6 col-md-6 ${styles.rwSubheaderb__info}`}>
          <h3>{title}</h3>
          <h5>{subtitle}</h5>
          <div className={`${modeScroll} ${styles.rwSubheaderb__text}`}>
            {desc}
          </div>
          <div className={styles.rwSubheaderb__btn}>
            <a href="http://localhost:3000/">VOLVER</a>
          </div>
        </div>
      </div>
    </div>
  );
}
