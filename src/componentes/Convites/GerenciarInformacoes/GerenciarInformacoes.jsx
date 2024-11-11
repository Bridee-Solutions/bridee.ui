import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./GerenciarInformacoes.module.css"

const GerenciarInformacoes = (props) => {

    return(
        <div className={styles.gerenciar_informacoes}>
            <div className={styles.gerenciar_informacoes_left_icon}>
                <FontAwesomeIcon icon={props.leftIcon}/>
            </div>
            <div className={styles.gerenciar_informacoes_content}>
                <p>{props.title}</p>
                <span>{props.description}</span>
            </div>
            <div className={styles.gerenciar_informacoes_right_icon}>
                <FontAwesomeIcon style={{cursor: "pointer"}} icon={props.rightIcon} onClick={() => props.setActualModal("Começar do zero")}/>
            </div>
        </div>
    );

}

export default GerenciarInformacoes;