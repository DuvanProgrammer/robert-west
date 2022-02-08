import styles from "../styles/SubheaderWhite.module.css"
import Image from "next/image"

import { useEffect } from 'react'
import AOS from 'aos'

import 'aos/dist/aos.css'

export default function SubheaderWhite({title, subtitle, imagen, desc, scroll, button}) {
    
    let modeScroll = ""
    if(scroll){
        modeScroll = styles.rwSubheaderwScroll
    }

    let modeButton = ""
    if(button){
        modeButton = styles.rwSubheaderwButton
    }
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
                    src={imagen}
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
                        <div className={`${modeScroll} ${styles.rwSubheaderw__text}`}>
                            <p>{desc}</p>
                        </div>
                        <div className={`${modeButton} ${styles.rwSubheaderw__btn}`}>
                            <a href="/">VOLVER</a>    
                        </div>                
                    </div>
            </div>
        </div>
        </div>
    )
}
