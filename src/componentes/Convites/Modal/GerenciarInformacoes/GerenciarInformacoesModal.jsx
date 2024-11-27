import Modal from "../../../Modal/Modal";
import ModalBody from "../../../Modal/ModalBody/ModalBody";
import ModalHeader from "../../../Modal/ModalHeader/ModalHeader";
import GerenciarInformacoes from "../../GerenciarInformacoes/GerenciarInformacoes";
import styles from "./GerenciarInformacoesModal.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const GerenciarInformacoesModal = (props) => {

    return(
        <Modal>
            <ModalHeader>
                <div className={styles.gerenciar_modal_header}>
                    <div className={styles.gerenciar_modal_header_title}>
                        <h2>Gerenciar Informações</h2>
                    </div>
                    <div className={styles.gerenciar_modal_header_close}>
                        <FontAwesomeIcon icon={faX} onClick={() => props.closeModal()} style={{cursor: "pointer"}}/>
                    </div>
                </div>
            </ModalHeader>
            <ModalBody>
                <GerenciarInformacoes title={`Começar do zero`} description={`Sem problemas se você mudou de ideia e quer solicitar as confirmações de presença novamente!`}
                    rightIcon={faChevronRight} leftIcon={faUsers} setActualModal={props.setActualModal} closeModal={props.closeModal}
                />
            </ModalBody>
        </Modal>
    );

}

export default GerenciarInformacoesModal;