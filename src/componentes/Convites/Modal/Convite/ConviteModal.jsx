import Modal from "../../../Modal/Modal";
import ModalBody from "../../../Modal/ModalBody/ModalBody";
import ModalFooter from "../../../Modal/ModalFooter/ModalFooter";
import ModalHeader from "../../../Modal/ModalHeader/ModalHeader";
import styles from "./ConviteModal.module.css"
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const ConviteModal = (props) => {

    return(
        <Modal>
            <ModalHeader>
                <div className={styles.convite_modal_header}>
                    <div className={styles.convite_modal_header_title}>
                        <h2>Convite</h2>
                    </div>
                    <div className={styles.convite_modal_header_close}>
                        <FontAwesomeIcon icon={faX} onClick={() => props.closeModal()} style={{cursor: "pointer"}}/>
                    </div>
                </div>
            </ModalHeader>
            <ModalBody>
                <div className={styles.convite_modal_body}>
                    <p>Dados do convite</p>
                    <div className={styles.convite_modal_body_content}>
                        <div>
                            <div className={styles.convite_modal_body_content_nome}>
                                <span>Nome do convite *</span>
                                <button onClick={() => props.setActualModal("Editar Convite")}>Editar <FontAwesomeIcon icon={faPen}/></button>
                            </div>
                            <span className={styles.convite_modal_body_content_family}>Familia Rosa</span>
                        </div>
                        <div className={styles.convite_modal_body_content_telefone}>
                            <span>Telefone do titular: </span>
                            <span className={styles.convite_modal_body_content_family}>(11) 98181-9900</span>
                        </div>
                        <hr />
                        <span className={styles.pin_invite}>PIN do convite: <span>1920</span></span>
                    </div>
                    <hr />
                    <div className={styles.convidados_content}>
                        <span className={styles.convidados}>Convidados neste convite (n)</span>
                        <div className={styles.convite_convidado_modal}>
                            <span >Carolina Forbes</span>
                            <span className={styles.convidado_info}>Status: <div className={styles.green_circle}></div> Confirmado</span>
                            <span className={styles.convidado_icons}>
                                <span><FontAwesomeIcon icon={faX} onClick={() => props.setActualModal("Remover Convidado")}/></span> 
                                <span><FontAwesomeIcon icon={faPen} onClick={() => props.setActualModal("Editar Convidado")}/></span>
                            </span>
                        </div>
                        <div className={styles.convite_convidado_modal}>
                            <span >Carolina Forbes</span>
                            <span className={styles.convidado_info}>Status: <div className={styles.green_circle}></div> Confirmado</span>
                            <span className={styles.convidado_icons}>
                                <span><FontAwesomeIcon icon={faX}/></span> 
                                <span><FontAwesomeIcon icon={faPen}/></span>
                            </span>
                        </div>
                        <div className={styles.convite_convidado_modal}>
                            <span >Carolina Forbes</span>
                            <span className={styles.convidado_info}>Status: <div className={styles.green_circle}></div> Confirmado</span>
                            <span className={styles.convidado_icons}>
                                <span><FontAwesomeIcon icon={faX}/></span> 
                                <span><FontAwesomeIcon icon={faPen}/></span>
                            </span>
                        </div>
                        <div className={styles.convite_convidado_modal}>
                            <span >Carolina Forbes</span>
                            <span className={styles.convidado_info}>Status: <div className={styles.green_circle}></div> Confirmado</span>
                            <span className={styles.convidado_icons}>
                                <span><FontAwesomeIcon icon={faX}/></span> 
                                <span><FontAwesomeIcon icon={faPen}/></span>
                            </span>
                        </div>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <div className={styles.modal_button}>
                    <button className={styles.add_button} onClick={() => props.setActualModal("Adicionar Convidado")}>+ Adicionar novo convidado</button>
                    <button className={styles.whatsapp_button}>Chamar no WhatsApp <FontAwesomeIcon icon={faWhatsapp}/></button>
                </div>
            </ModalFooter>
        </Modal>
    );

}

export default ConviteModal;