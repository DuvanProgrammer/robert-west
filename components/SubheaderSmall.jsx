import styles from "../styles/SubheaderSmall.module.css"

export default function SubheaderSmall({title, description}){
    return(
        <div className={styles.rwSubheaders}>
            <h1>{title}</h1>
            {/* <p className="font-merriweather">Lorem ipsum dolor sit amett </p> */}
        </div>
    )
}