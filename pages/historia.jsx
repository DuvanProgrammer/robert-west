import Header from "../components/Header";
import Footer from "../components/Footer";
import SubheaderWhite from "../components/SubheaderWhite";
import Cardsection from "../components/Cardsection";
import ImagenPrueba from "../public/img/card-img.png";
import ImagenPrueba2 from "../public/img/card-historia.png";
import ImagenPrueba3 from "../public/img/card-fotografias.png";
import ImagenPrueba4 from "../public/img/card-creditos.png";
import React, { useEffect } from 'react'
import styles from "../styles/Historia.module.css"
import AOS from 'aos'

import 'aos/dist/aos.css'

export default function Historia(){
    useEffect(() => {
        // here you can add your aos options
        AOS.init({
          offset: 100,
        });
      }, []);
    return(
        <div className={styles.rwHistory}>
            <Header dark={false} fixed={true} />
            <div>
                <SubheaderWhite
                    scroll={true}
                    button={true}
                    imagen="/img/historia-subheader.png"
                    title="HISTORIA"
                    subtitle="Lorem impsum dolor sit amet"
                    desc={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut"}
                />
            </div>
            <br></br>
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