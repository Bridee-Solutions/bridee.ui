import mageFilter from "../../../assets/mage_filter.svg"
import styles from "./ConviteHeader.module.css"

const ConviteHeader = () => {

    return(
        <div className={styles.convite_header}>
            <div className={styles.convite_header_title}>
                <img src={mageFilter} alt="" />
                <h1>Total de convidados</h1>
            </div>
            <div className={styles.convite_header_content}>
                <div className={styles.convite_header_content_item}>
                    <span>10</span>
                    <span>Convites</span>
                </div>
                <div className={styles.convite_header_content_item}>
                    <span>10</span>
                    <span>Convidados</span>
                </div>
                <div className={styles.convite_header_content_item}>
                    <span>10</span>
                    <span>Adultos</span>
                </div>
                <div className={styles.convite_header_content_item}>
                    <span>10</span>
                    <span>Familia Amanda</span>
                </div>
                <div className={styles.convite_header_content_item}>
                    <span>10</span>
                    <span>Crianças</span>
                </div>
                <div className={styles.convite_header_content_item}>
                    <span>10</span>
                    <span>Amigos</span>
                </div>
                <div className={styles.convite_header_content_item}>
                    <span>10</span>
                    <span>Colegas de trabalho</span>
                </div>
            </div>
        </div>
    );
}

export default ConviteHeader;