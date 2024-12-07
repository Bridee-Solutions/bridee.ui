import Modal from "../../../Modal/Modal";
import ModalBody from "../../../Modal/ModalBody/ModalBody";
import ModalHeader from "../../../Modal/ModalHeader/ModalHeader";
import styles from "./WhatsappMensagemModal.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useContext, useRef } from "react";
import { request } from "../../../../config/axios/axios";
import ModalFooter from "../../../Modal/ModalFooter/ModalFooter";
import { CasalContext } from "../../../../context/CasalContext";

const WhatsappMensagemModal = (props) => {

    const message = useRef();
    const {casamentoId} = useContext(CasalContext)

    const updateCasalMessage = () => {
        const messageValue = message.current.value;
        request.updateCasamentoMessage(casamentoId, messageValue)
        props.closeModal()
    }

    return(
        <Modal>
            <ModalHeader>
            <div className={styles.whatsapp_modal_header}>
                <div className={styles.whatsapp_modal_header_title}>
                    <span>Divulgar pelo WhatsApp</span>
                </div>
                <div className={styles.whatsapp_modal_header_close}>
                    <FontAwesomeIcon icon={faX} onClick={() => props.closeModal()} style={{cursor: "pointer"}}/>
                </div>
            </div>
            </ModalHeader>
            <ModalBody>
                <div className={styles.whatsapp_modal_body}>
                    <FontAwesomeIcon icon={faWhatsapp} className={styles.whatsapp_icon}/>
                    <p>Personalize a mensagem do seu convite e selecione os contatos diretamente no seu WhatsApp.</p>
                </div>
                <div className={styles.whatsapp_modal_body_message}>
                    <label htmlFor="mensagem">Mensagem:</label>
                    <textarea ref={message} name="mensagem" id="mensagem"></textarea>
                </div>
            </ModalBody>
            <ModalFooter>
                <button className={styles.enviar_button} onClick={updateCasalMessage}>Enviar</button>
            </ModalFooter>
        </Modal>
    );

}

export default WhatsappMensagemModal