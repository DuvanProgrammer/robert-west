import Header from "../components/Header";
import SubheaderBlack from "../components/SubheaderBlack";
import Cardsection from "../components/Cardsection";
import ImagenPrueba from "../public/img/card-img.png";
import ImagenPrueba2 from "../public/img/card-historia.png";
import ImagenPrueba3 from "../public/img/card-fotografias.png";
import ImagenPrueba4 from "../public/img/card-creditos.png";
import Footer from "../components/Footer";
import React, { useEffect } from 'react'
import AOS from 'aos'
import styles from "../styles/Escuela.module.css"

import 'aos/dist/aos.css'

export default function Escuela() {
    useEffect(() => {
        // here you can add your aos options
        AOS.init({
          offset: 100,
        });
      }, []);
    return (
        <div className={styles.rwEscuela}>
            <Header dark={true} fixed={true}
            />
            <div>
                <SubheaderBlack
                    scroll={true}
                    button={true}
                    imagen={"/img/subheader-black.png"}
                    title="ROBERT WEST"
                    subtitle="y la escuela de Berkeley"
                />
            </div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 col-md-3" >
                    <Cardsection  
                        imagen={ImagenPrueba} 
                        title="CATÁLOGOS"
                        link="catalogos"
                    />
                    </div>
                    <div className="col-12 col-md-3">
                    <Cardsection 
                        imagen={ImagenPrueba2} 
                        title="HISTORIA"
                        link="historia"
                    />
                    </div>
                    <div className="col-12 col-md-3">
                    <Cardsection 
                        imagen={ImagenPrueba3} 
                        title="FOTOGRAFÍAS"
                        link="fotografias"
                    />
                    </div>
                    <div className="col-12 col-md-3">
                    <Cardsection 
                        imagen={ImagenPrueba4} 
                        title="CRÉDITOS"
                        link="creditos"
                    />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
