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
            />
          </div>
          <div className="col-4">
            <Chapters 
              chapter="Capítulo 2"
            />
          </div>
          <div className="col-4">
            <Chapters 
              chapter="Capítulo 3"
            />
          </div>
        </div>
        <div className={`row ${styles.rwCatalogo}`}>
          <div className="col-12 col-md-3">
            <Cardsection imagen={ImagenPrueba} title="CATÁLOGOS" link="http://localhost:3000/catalogos" />
          </div>
          <div
            className="col-12 col-md-3"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <Cardsection imagen={ImagenPrueba2} title="HISTORIA" link="http://localhost:3000/historia" />
          </div>
          <div
            className="col-12 col-md-3"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <Cardsection imagen={ImagenPrueba3} title="FOTOGRAFÍAS" link="http://localhost:3000/fotografias" />
          </div>
          <div
            className="col-12 col-md-3"
            data-aos="fade-up"
            data-aos-duration="2100"
          >
            <Cardsection imagen={ImagenPrueba4} title="CRÉDITOS" link="http://localhost:3000/creditos" />
          </div>
        </div>
      </div>
      <Footer />
    </div>;
}
