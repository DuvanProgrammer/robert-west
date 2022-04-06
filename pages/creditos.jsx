import Header from "../components/Header";
import Footer from "../components/Footer";
import SubheaderWhite from "../components/SubheaderWhite";
import SubheaderBlack from "../components/SubheaderBlack";
import styles from "../styles/creditos.module.css";

export default function Creditos() {
  return (
    <div>
      <Header dark={true} fixed={true} />
      <SubheaderBlack
        information_left={false}
        scroll={false}
        button={false}
        imagen="/img/subheader-white.png"
        title="CRÉDITOS"
        subtitle="Edición 2018"
        desc={
          <div className={`${styles.rwContentCredits} ${styles.rwRight}`}>
            <p>
              Montaje de la página inicial, 2008 (La página fué desmontada
              debido a que la tecnología Adobe Flash Player dejó de ser
              soportada):
            </p>

            <h5>Dirección:</h5>
            <p>
              Claudia Leal, Departamento de Historia, Facultad de Ciencias
              Sociales, Universidad de los Andes.
            </p>

            <h5>Organización de negativos:</h5>
            <p>
              Santiago Muñoz, estudiante de Maestría en Historia, Facultad de
              Ciencias Sociales y Mónica Hernández, estudiante de Maestría en
              Antropología, Facultad de Ciencias Sociales, Universidad de los
              Andes.
            </p>

            <h5>Elaboración de bases de datos:</h5>
            <p>
              Claudia Leal, Santiago Muñoz y Alejandro Camargo, estudiante de Maestría en Geografía, Facultad de Ciencias Sociales, Universidad de los Andes.
            </p>

            <h5>Digitalización de negativos:</h5>
            <p>
              Santiago Muñoz, Andrés Matías Pinilla, estudiante de pregrado en Arte y Laura Peña Murcia, Maestra en Arte, Universidad de los Andes.
            </p>

            <h5>Selección de negativos para la página:</h5>
            <p>
              Claudia Leal, Santiago Muñoz, Laura Jiménez, coordinadora programa digital de imágenes sobre arte en Colombia, Departamento de Artes y Humanidades, Andrés Matías Pinilla y Laura Peña Murcia.
            </p>

            <h5>Diseño, Edición de fotografías y elaboración de página:</h5>
            <p>
              Andrés Matías Pinilla y Laura Peña Murcia
            </p>

            <h5>Financiación:</h5>
            <p>
            Centro de Estudios Socioculturales e Internacionales, CESO, Facultad de Cuencias Sociales, Universidad de los Andes.
            </p>
          </div>
        }
      />
    </div>
  );
}
