import styles from "../styles/SubheaderWhite.module.css"
import Image from "next/image"

import { useEffect } from 'react'
import AOS from 'aos'

import 'aos/dist/aos.css'

export default function SubheaderWhite({title, subtitle}) {
    useEffect(() => {
        // here you can add your aos options
        AOS.init({
          offset: 100,
        });
      }, []);
    return (
        <div >
            <div className={styles.rwSubheaderw}>
            <div className={styles.rwSubheaderw__image}
                >
                <Image
                    src="/img/subheader-white.png"
                    layout="fill"
                    objectFit="cover"
                    loading="eager"
                    >
                </Image>
            </div>
            <div className={`container ${styles.rwSubheaderw__content}`}
                data-aos="fade-left"
                data-aos-duration="2000"
            >
                    <div className={`col-12 col-md-6 ${styles.rwSubheaderw__info}`}>
                        <h3>{title}</h3>
                        <h5>{subtitle}</h5>
                        <div className={styles.rwSubheaderw__text}>
                            <p>El geógrafo estadounidense Robert West (1913-2001), representante de la llamada Escuela de Berkeley, recorrió el Pacífico colombiano en los veranos entre 1951 y 1954. Como resultado de su investigación publicó en 1957 una monografía clásica titulada The Pacific Lowlands of Colombia (que fue publicada en español en el 2000). Tal vez su más fiel compañera de viaje fue su cámara, herramienta necesaria para captar los elementos de la cultura material fundamentales dentro de su visión de la geografía. En esos cuatro viajes, West tomó cerca de 2.000 fotos, de las cuales seleccionamos 300 que ponemos a disposición de los interesados.</p>
                        </div>               
                    </div>
            </div>
        </div>
        </div>
    )
}
