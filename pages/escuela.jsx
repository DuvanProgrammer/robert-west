import Header from "../components/Header";
import SubheaderBlack from "../components/SubheaderBlack";
import Cardsection from "../components/Cardsection";
import ImagenPrueba from "../public/img/card-img.png";
import Footer from "../components/Footer";
import { useEffect } from 'react'
import AOS from 'aos'

import 'aos/dist/aos.css'

export default function escuela() {
    useEffect(() => {
        // here you can add your aos options
        AOS.init({
          offset: 100,
        });
      }, []);
    return (
        <div>
            <Header dark={true} fixed={true}
            />
            <div data-aos="fade-left"
                 data-aos-duration="1200">
                <SubheaderBlack
                    title="ROBERT WEST"
                    subtitle="y la escuela de Berkeley"
                />
            </div>
            <div className="container mb-5"
                 data-aos="fade-right"
                 data-aos-duration="1200">
            <div className="row">
                <div className="col-12 col-md-3">
                <Cardsection 
                    imagen={ImagenPrueba} 
                    title="CATEGORIAS"
                    link="#"
                />
                </div>
                <div className="col-12 col-md-3">
                <Cardsection 
                    imagen={ImagenPrueba} 
                    title="CATEGORIAS"
                    link="#"
                />
                </div>
                <div className="col-12 col-md-3">
                <Cardsection 
                    imagen={ImagenPrueba} 
                    title="CATEGORIAS"
                    link="#"
                />
                </div>
                <div className="col-12 col-md-3">
                <Cardsection 
                    imagen={ImagenPrueba} 
                    title="CATEGORIAS"
                    link="#"
                />
                </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
