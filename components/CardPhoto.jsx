import styles from "../styles/CardPhoto.module.css";
import Image from "next/image";
import Link from "next/link";

export default function CardPhoto({ imagen, link, horizontal }) {

    let modeClass = ""
    if(horizontal){
    modeClass = styles.rwCardPhotoLinkHorizontal
}
  return (
    <Link
      href={link}>
        <a className={`${modeClass} ${styles.rwCardPhotoLink}`}>
          <Image
            className={styles.rwCardPhotoFondo}
            src={imagen}
            objectFit="cover"
            layout="fill"
          />
          <div className={styles.rwCardPhotoContIcon}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.493 18.3035C36.2845 19.3387 36.2845 20.7363 35.493 21.7698C33.0002 25.0241 27.0192 31.7247 20.0365 31.7247C13.0537 31.7247 7.07282 25.0241 4.57993 21.7698C4.19487 21.2741 3.98584 20.6643 3.98584 20.0366C3.98584 19.409 4.19487 18.7992 4.57993 18.3035C7.07282 15.0492 13.0537 8.34863 20.0365 8.34863C27.0192 8.34863 33.0002 15.0492 35.493 18.3035V18.3035Z"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.0365 25.0456C22.803 25.0456 25.0456 22.803 25.0456 20.0365C25.0456 17.27 22.803 15.0273 20.0365 15.0273C17.27 15.0273 15.0273 17.27 15.0273 20.0365C15.0273 22.803 17.27 25.0456 20.0365 25.0456Z"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
          </div>
        </a>
      </Link>
  );
}
