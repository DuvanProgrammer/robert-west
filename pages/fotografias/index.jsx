import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../styles/fotografias.module.css";
import SubheaderSmall from "../../components/SubheaderSmall";
import ListCategories from "../../components/ListCategories";
import CardPhoto from "../../components/CardPhoto";
import ImgCardPhoto from "../../public/img/img-card-photo.png";
import ButtonBlack from "../../components/ButtonBlack";
import Cardsection from "../../components/Cardsection";
import ImagenPrueba from "../../public/img/card-img.png";
import ImagenPrueba2 from "../../public/img/card-historia.png";
import ImagenPrueba3 from "../../public/img/card-fotografias.png";
import ImagenPrueba4 from "../../public/img/card-creditos.png";
import ImagenMapa from "../../public/img/choco-mapa-1.png";
import Image from "next/image";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

export default function fotografias({items}) {
  return (
    <div>
      <Header dark={true} fixed={true} />
      <div>
        <SubheaderSmall />
      </div>
      <div className={`container ${styles.rwArchive}`}>
        <div className="row">
          <div className="col-12 col-md-3">
            <div className={styles.rwCategories}>
              <h3>CATEGORÍAS</h3>
              <ListCategories />
              
              <h3 className="mb-4">SECTORES</h3>
              <Image src={ImagenMapa} objectFit="cover"></Image>
            </div>
          </div>
          <div className="col-12 col-md-9 text-center">
            {/* Form Search */}
            <form action="" className={styles.rwFormSearch}>
              <button type="submit">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 20L15.514 15.506L20 20ZM18 9.5C18 11.7543 17.1045 13.9163 15.5104 15.5104C13.9163 17.1045 11.7543 18 9.5 18C7.24566 18 5.08365 17.1045 3.48959 15.5104C1.89553 13.9163 1 11.7543 1 9.5C1 7.24566 1.89553 5.08365 3.48959 3.48959C5.08365 1.89553 7.24566 1 9.5 1C11.7543 1 13.9163 1.89553 15.5104 3.48959C17.1045 5.08365 18 7.24566 18 9.5V9.5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <input
                type="mail"
                placeholder="Ingresa tu búsqueda"
                className="font-merriweather"
              />
            </form>

            {/* Form Tags */}
            <div className={styles.rwTags}>
              <span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0.9375C3.87598 0.9375 0.9375 3.87598 0.9375 7.5C0.9375 11.124 3.87598 14.0625 7.5 14.0625C11.124 14.0625 14.0625 11.124 14.0625 7.5C14.0625 3.87598 11.124 0.9375 7.5 0.9375ZM9.92285 9.99316L8.95605 9.98877L7.5 8.25293L6.04541 9.9873L5.07715 9.9917C5.0127 9.9917 4.95996 9.94043 4.95996 9.87451C4.95996 9.84668 4.97021 9.82031 4.98779 9.79834L6.89355 7.52783L4.98779 5.25879C4.97009 5.23732 4.96027 5.21044 4.95996 5.18262C4.95996 5.11816 5.0127 5.06543 5.07715 5.06543L6.04541 5.06982L7.5 6.80566L8.95459 5.07129L9.92139 5.06689C9.98584 5.06689 10.0386 5.11816 10.0386 5.18408C10.0386 5.21191 10.0283 5.23828 10.0107 5.26025L8.10791 7.5293L10.0122 9.7998C10.0298 9.82178 10.04 9.84814 10.04 9.87598C10.04 9.94043 9.9873 9.99316 9.92285 9.99316Z"
                    fill="#CB2626"
                  />
                </svg>
                Act Productivas 1 (19)
              </span>
            </div>
            <SimpleReactLightbox>
              <SRLWrapper>
                <div className="row">
                  {items.map(({id, file_urls}) =>(
                       <div key={id} className="col-12 col-md-4 mb-4">
                        <CardPhoto
                          imagen={file_urls.thumbnail}
                          link={file_urls.fullsize}
                          alt="Imagen 1"
                        />
                      </div>
                  ))}
                </div>
              </SRLWrapper>
            </SimpleReactLightbox>

            <div className="row mt-5">
              <ButtonBlack link="/" />
            </div>
          </div>
        </div>
        <div className={`row ${styles.rwCategoriesCar}`}>
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
    </div>
  );
}


export async function getStaticProps(){
  const res = await fetch('https://badac.uniandes.edu.co/robertwest/api/files?per_page=12')
  const items = await res.json()

  return {
      props: {
        items
      }
  }
}