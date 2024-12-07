import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../../../Modal/Modal";
import ModalBody from "../../../Modal/ModalBody/ModalBody";
import ModalHeader from "../../../Modal/ModalHeader/ModalHeader";
import ModalFooter from "../../../Modal/ModalFooter/ModalFooter"
import styles from "./DeletarModal.module.css"
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { request } from "../../../../config/axios/axios";
import { useRef } from "react";

const DeletarModal = (props) => {

    const deletarConvidado = () =>{
        request.deleteConvidado(props.convidado?.id)
        
        const convidados = props.convite?.convidados?.filter(convidado => convidado.id != props.convidado?.id)
        const convite = props.convite;
        convite.convidados = convidados
        props.setConvites([...props.convites])
        props.closeModal()
    }

    const limparConvites = () => {
        request.deleteAllInvites(2);
        props.setConvites([])
        props.closeModal()
    }

    const buttonOperation = () => {
        if(props.title == `Começar do zero`){
            limparConvites()
            return;
        }
        deletarConvidado()
    }

    return(
        <Modal>
            <ModalHeader>
                <div className={styles.comecar_modal_header}>
                    <div className={styles.comecar_modal_header_title}>
                        <span>{props.title}</span>
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
                <button className={styles.deletar_button} onClick={buttonOperation}>Deletar</button>
            </ModalFooter>
        </Modal>
    );

}


export default DeletarModal;