import Modal from "../../../Modal/Modal";
import ModalBody from "../../../Modal/ModalBody/ModalBody";
import ModalFooter from "../../../Modal/ModalFooter/ModalFooter";
import ModalHeader from "../../../Modal/ModalHeader/ModalHeader";
import styles from "./ConviteModal.module.css"
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
import { defineConvidadoStatus, defineConvidadoStatusColor, editarConviteModal, findTitular } from "../../../../pages/Convites/ConvitesService";

const ConviteModal = (props) => {

    return(
        <Modal>
            <ModalHeader>
                <div className={styles.convite_modal_header}>
                    <div className={styles.convite_modal_header_title}>
                        <h2>Convite de {props.convite?.nome}</h2>
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
                                <button onClick={() => editarConviteModal(props.convite, props.closeModal, 
                                    props.setActualModal, props.convites, props.setConvites)}>Editar <FontAwesomeIcon icon={faPen}/></button>
                            </div>
                            <span className={styles.convite_modal_body_content_family}>{props.convite?.nome}</span>
                        </div>
                        <div className={styles.convite_modal_body_content_telefone}>
                            <span>Telefone do titular: </span>
                            <span className={styles.convite_modal_body_content_family}>{findTitular(props.convite?.convidados)?.telefone}</span>
                        </div>
                        <hr />
                        <span className={styles.pin_invite}>PIN do convite: <span>{props.convite?.pin ? props.convite?.pin : "Não encontrado"}</span></span>
                    </div>
                    <hr />
                    <div className={styles.convidados_content}>
                        <span className={styles.convidados}>Convidados neste convite ({props.convite?.convidados?.length})</span>
                        {props.convite?.convidados?.map(convidado => {
                            return <div className={styles.convite_convidado_modal}>
                                <span>{convidado?.nome}</span>
                                <span className={styles.convidado_info}>Status: <div className={defineConvidadoStatusColor(convidado?.status, styles)}></div>{defineConvidadoStatus(convidado?.status)}</span>
                                <span className={styles.convidado_icons}>
                                    <span><FontAwesomeIcon icon={faX} onClick={() => props.setActualModal("Remover Convidado", convidado)}/></span> 
                                    <span><FontAwesomeIcon icon={faPen} onClick={() => props.setActualModal("Editar Convidado", convidado)}/></span>
                                </span>
                            </div>
                        })}
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