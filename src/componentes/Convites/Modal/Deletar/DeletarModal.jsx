import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../../../Modal/Modal";
import ModalBody from "../../../Modal/ModalBody/ModalBody";
import ModalHeader from "../../../Modal/ModalHeader/ModalHeader";
import ModalFooter from "../../../Modal/ModalFooter/ModalFooter"
import styles from "./DeletarModal.module.css"
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const DeletarModal = (props) => {

    return(
        <Modal>
            <ModalHeader>
                <div className={styles.comecar_modal_header}>
                    <div className={styles.comecar_modal_header_title}>
                        <h2>{props.title}</h2>
                    </div>
                    <div className={styles.comecar_modal_header_close}>
                        <FontAwesomeIcon icon={faX} onClick={() => props.closeModal()} style={{cursor: "pointer"}}/>
                    </div>
                </div>
            </ModalHeader>
            <ModalBody>
                <div className={styles.comecar_modal_body}>
                    <FontAwesomeIcon icon={faTriangleExclamation} className={styles.comecar_modal_body_icon}/>
                    <h2>{props.subtitle}</h2>
                    <p>{props.description}</p>
                </div>
            </ModalBody>
            <ModalFooter>
                <button className={styles.cancelar_button}>Cancelar</button>
                <button className={styles.deletar_button}>Deletar</button>
            </ModalFooter>
        </Modal>
    );

}


export default DeletarModal;