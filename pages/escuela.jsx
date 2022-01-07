import Header from "../components/Header";
import SubheaderBlack from "../components/SubheaderBlack";
import Cardsection from "../components/Cardsection";
import ImagenPrueba from "../public/img/card-img.png";
import Footer from "../components/Footer";

export default function escuela() {
    return (
        <div>
            <Header dark={true} 
            />
            <div>
                <SubheaderBlack
                    title="ROBERT WEST"
                    subtitle="y la escuela de Berkeley"
                />
            </div>
            <div className="container mb-5">
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
