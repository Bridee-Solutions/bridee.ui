import Modal from "../../../Modal/Modal";
import ModalHeader from "../../../Modal/ModalHeader/ModalHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import ModalBody from "../../../Modal/ModalBody/ModalBody";
import ModalFooter from "../../../Modal/ModalFooter/ModalFooter";
import styles from "./EditarConviteModal.module.css";

const EditarConviteModal = (props) => {

    return(
        <Modal>
            <ModalHeader>
                <div className={styles.convite_modal_header}>
                    <div className={styles.convite_modal_header_title}>
                        <h2>Editar Convite</h2>
                    </div>
                    <div className={styles.convite_modal_header_close}>
                        <FontAwesomeIcon icon={faX} onClick={() => props.closeModal()} style={{cursor: "pointer"}}/>
                    </div>
                </div>
            </ModalHeader>
            <ModalBody>
                <div className={styles.convite_modal_body}>
                    <p>Dados do convite</p>
                    <div className={styles.convite_modal_body_input}>
                        <label htmlFor="Nome">Nome do convite:</label>
                        <input type="text" id="Nome"/>
                    </div>
                    <div className={styles.convite_modal_body_input}>
                        <label htmlFor="Telefone">Telefone do titular do convite:</label>
                        <input type="text" id="Telefone"/>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <div className={styles.convite_modal_footer}>
                    <button className={styles.delete_button}>Excluir Convite</button>
                    <button className={styles.save_button}>Salvar Alterações</button>
                </div>
            </ModalFooter>
        </Modal>
    );

}

export default EditarConviteModal;