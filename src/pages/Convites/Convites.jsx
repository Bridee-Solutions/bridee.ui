import ConviteBody from "../../componentes/Convites/Body/ConviteBody";
import ConviteHeader from "../../componentes/Convites/Header/ConviteHeader";
import NavComp from "../../componentes/Navbar/Navbar";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faChair } from "@fortawesome/free-solid-svg-icons";
import styles from "./Convites.module.css"
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Convites = () => {

    const location = useLocation();

    return(
        <div className={styles.convites_page}>
            <NavComp/>
            <div className={styles.convites_content}>
                <div className={styles.convites_container}>
                    <div className={styles.convites_container_left}>
                        <div className={styles.convites_container_left_header}>
                            <span>Relatório</span>
                            <span>5 convidados irão comparecer</span>
                        </div>
                        <div className={styles.convites_container_left_body}>
                            <div className={styles.convites_container_left_body_item}>
                                <FontAwesomeIcon icon={faWhatsapp}/>
                                <p>Divulgar por whatsapp</p>
                            </div>
                            <div className={styles.convites_container_left_body_item}>
                                <FontAwesomeIcon icon={faGear}/>
                                <p>Gerenciar configurações</p>
                            </div>
                            <div className={styles.convites_container_left_body_item}>
                                <FontAwesomeIcon icon={faChair}/>
                                <p>Planejador de assentos</p>
                            </div>
                        </div>
                        <div className={styles.convites_container_left_footer}>
                            <input type="text" readOnly defaultValue={`${location.pathname}`}/>
                        </div>
                    </div>
                    <div className={styles.convites_container_right}>
                        <ConviteHeader/>
                        <ConviteBody/>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default Convites;