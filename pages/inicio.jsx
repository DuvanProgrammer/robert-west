import Header from "../components/Header";
import SubheaderWhite from "../components/SubheaderWhite";
import Cardmenu from "../components/Cardmenu";
import Footer from "../components/Footer";
import FondoPrueba from "../public/img/fondo-cardmenu.png";
import FondoPrueba2 from "../public/img/fondo-cardmenu2.png";
import FondoPrueba3 from "../public/img/fondo-cardmenu3.png";
import FondoPrueba4 from "../public/img/fondo-cardmenu4.png";
import FondoPrueba5 from "../public/img/fondo-cardmenu5.png";

export default function inicio() {
    return (
        <div>
            <Header dark={false} fixed={true}
            />
            <div>
                <SubheaderWhite
                    title="Archivo fotográfico de
                    Robert West"
                    subtitle="Las tierras bajas del pacifico colombiano"
                />
            </div>
            <div>
                <Cardmenu
                    fondo={FondoPrueba}
                    title="ROBERT WEST"
                    subtitle="y la escuela de Berkeley"
                    link="#"
                />
                <Cardmenu
                    white={true}
                    fondo={FondoPrueba2}
                    title="HISTORIA"
                    link="#"
                />
                <Cardmenu
                    fondo={FondoPrueba3}
                    title="FOTOGRAFÍAS"
                    link="#"
                />
                <Cardmenu
                    white={true}
                    fondo={FondoPrueba4}
                    title="CATÁLOGOS"
                    link="#"
                />
                <Cardmenu
                    fondo={FondoPrueba5}
                    title="FOTOGRAFÍAS"
                    link="#"
                />
            </div>
            <Footer />
        </div>
    )
}
