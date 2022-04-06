import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubheaderSmall from "../components/SubheaderSmall";
import Chapters from "../components/Chapters";
import Cardsection from "../components/Cardsection";
import ImagenPrueba from "../public/img/card-img.png";
import ImagenPrueba2 from "../public/img/card-historia.png";
import ImagenPrueba3 from "../public/img/card-fotografias.png";
import ImagenPrueba4 from "../public/img/card-creditos.png";
import ButtonBlack from "../components/ButtonBlack";
import styles from "../styles/Catalogo.module.css";

export default function catalogos() {
  return <div className={styles.rwCat}>
      <Header dark={true} fixed={true} />
      <div>
        <SubheaderSmall 
          title="CATÁLOGOS"
        />
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-4">
            <Chapters 
              chapter="Capítulo 1"
              open={"https://docs.google.com/spreadsheets/d/1OHHD35TFb65CXJ5M73Gjt2goP10uTwbt/edit?usp=sharing&ouid=108728836013224191858&rtpof=true&sd=true"}
            />
          </div>
          <div className="col-4">
            <Chapters 
              chapter="Capítulo 2"
              open={"https://docs.google.com/spreadsheets/d/13_grpx6tMoYR5oVaVViSyFBLgQ2aOC3R/edit?usp=sharing&ouid=108728836013224191858&rtpof=true&sd=true"}
            />
          </div>
          <div className="col-4">
            <Chapters 
              chapter="Capítulo 3"
              open={"https://docs.google.com/spreadsheets/d/1qckjqYBwtv5_Xw0UoSBJ3seg1xfUTkn4/edit?usp=sharing&ouid=108728836013224191858&rtpof=true&sd=true"}
            />
          </div>
        </div>
        <div className={`row ${styles.rwCatalogo}`}>
          <div className="col-12 col-md-3">
            <Cardsection imagen={ImagenPrueba} title="CATÁLOGOS" link="/catalogos" />
          </div>
          <div
            className="col-12 col-md-3"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <Cardsection imagen={ImagenPrueba2} title="HISTORIA" link="/historia" />
          </div>
          <div
            className="col-12 col-md-3"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <Cardsection imagen={ImagenPrueba3} title="FOTOGRAFÍAS" link="/fotografias" />
          </div>
          <div
            className="col-12 col-md-3"
            data-aos="fade-up"
            data-aos-duration="2100"
          >
            <Cardsection imagen={ImagenPrueba4} title="CRÉDITOS" link="/creditos" />
          </div>
        </div>
      </div>
      <Footer />
    </div>;
}
