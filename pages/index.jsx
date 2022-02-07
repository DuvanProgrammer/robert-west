import Header from "../components/Header";
import SubheaderWhite from "../components/SubheaderWhite";
import Cardmenu from "../components/Cardmenu";
import Footer from "../components/Footer";
import FondoPrueba from "../public/img/fondo-cardmenu.png";
import FondoPrueba2 from "../public/img/fondo-cardmenu2.png";
import FondoPrueba3 from "../public/img/fondo-cardmenu3.png";
import FondoPrueba4 from "../public/img/fondo-cardmenu4.png";
import FondoPrueba5 from "../public/img/fondo-cardmenu5.png";

import React, { useEffect } from 'react'
import AOS from 'aos'

import 'aos/dist/aos.css'

export default function inicio() {
    useEffect(() => {
        // here you can add your aos options
        AOS.init({
          offset: 100,
        });
      }, []);
    return (
        <div>
            <Header dark={false} fixed={true}
            />
            <div>
                <SubheaderWhite
                    scroll={false}
                    button={false}
                    imagen="/img/subheader-white.png"
                    title="Archivo fotográfico de
                    Robert West"
                    subtitle="Las tierras bajas del pacifico colombiano"
                    desc="El geógrafo estadounidense Robert West (1913-2001), representante de la llamada Escuela de Berkeley, recorrió el Pacífico colombiano en los veranos entre 1951 y 1954. Como resultado de su investigación publicó en 1957 una monografía clásica titulada The Pacific Lowlands of Colombia (que fue publicada en español en el 2000). Tal vez su más fiel compañera de viaje fue su cámara, herramienta necesaria para captar los elementos de la cultura material fundamentales dentro de su visión de la geografía. En esos cuatro viajes, West tomó cerca de 2.000 fotos, de las cuales seleccionamos 300 que ponemos a disposición de los interesados."
                />
            </div>
            <div>
                <Cardmenu
                    fondo={FondoPrueba}
                    title="ROBERT WEST"
                    subtitle="y la escuela de Berkeley"
                    link="robert-west-y-la-escuela-de-berkeley"
                />
            </div>
            <div>
                <Cardmenu
                    white={true}
                    fondo={FondoPrueba2}
                    title="HISTORIA"
                    link="historia"
                />
            </div>
            <div>
                <Cardmenu
                    fondo={FondoPrueba3}
                    title="FOTOGRAFÍAS"
                    link="fotografias"
                />
            </div>
            <div>
                <Cardmenu
                    white={true}
                    fondo={FondoPrueba4}
                    title="CATÁLOGOS"
                    link="catalogos"
                />
            </div>
            <div>
                <Cardmenu
                    fondo={FondoPrueba5}
                    title="CRÉDITOS"
                    link="creditos"
                />
            </div>
            <Footer />
        </div>
    )
}
