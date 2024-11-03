import ConviteBody from "../../componentes/Convites/Body/ConviteBody";
import ConviteHeader from "../../componentes/Convites/Header/ConviteHeader";
import NavComp from "../../componentes/Navbar/Navbar";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faChair } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import styles from "./Convites.module.css"
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import rightArrow from "../../assets/right-arrow.svg"
import { toast } from "react-toastify";


const Convites = () => {

    const location = useLocation();
    
    const copyTextToClipBoard = () => {
        window.navigator.clipboard.writeText(window.location.href);
        toast.success("Link copiado com sucesso!")
    }

    return(
        <div className={styles.convites_page}>
            <NavComp/>
            <div className={styles.convites_content}>
                <div className={styles.convites_container}>
                    <div className={styles.convites_container_left}>
                        <div className={styles.convites_container_left_header}>
                            <div className={styles.relatorio_circle_div}>
                                <div className={styles.relatorio_circle_div_content}>
                                    <h3>Relatório de convidados</h3>
                                    <div className={styles.green_circle}></div>
                                    <div className={styles.yellow_circle}></div>
                                    <div className={styles.red_circle}></div>
                                </div>
                                <span>5 convidados irão comparecer</span>
                            </div>
                            <img src={rightArrow}/>
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
                            <div>{window.location.href}</div>
                            <FontAwesomeIcon onClick={copyTextToClipBoard} icon={faCopy} className={styles.convites_container_left_footer_icon}/>
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