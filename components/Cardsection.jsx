import styles from "../styles/Cardsection.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Cardsection({imagen, title, link}) {
    return (
        <div className={styles.rwCardsectionItem}>
            <Image
            className={styles.rwCardsectionImg}
            src={imagen}
            objectFit="cover"
            layout="fill"
            />
            <div className={styles.rwCardsectionTitle}>
                <h2>{title}</h2>
                    <Link href={link}>
                        <a>
                            <Image
                                className={styles.rwCardsectionView}
                                src="/img/arrow-view.png"
                                width={30}
                                height={30}
                                objectFit="cover"
                            />
                        </a>
                    </Link>
            </div>
        </div>
    )
}