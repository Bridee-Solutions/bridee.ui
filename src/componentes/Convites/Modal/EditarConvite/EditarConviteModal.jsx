import Modal from "../../../Modal/Modal";
import ModalHeader from "../../../Modal/ModalHeader/ModalHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import ModalBody from "../../../Modal/ModalBody/ModalBody";
import ModalFooter from "../../../Modal/ModalFooter/ModalFooter";
import styles from "./EditarConviteModal.module.css";
import { findTitular } from "../../../../pages/Convites/ConvitesService";
import { useRef } from "react";
import { request } from "../../../../config/axios/axios";

const EditarConviteModal = (props) => {

    const editarConvite = async () => {
        const titular = findTitular(props.convite?.convidados)
        const updateConviteRequest = {
            nome: props.convite?.nome,
            telefoneTitular: titular?.telefone,
            pin: props.convite?.pin,
            casamentoId: 2,
            convidados: props.convite?.convidados
        }
        const conviteUpdatedResponse = await request.updateInvite(props.convite?.id, updateConviteRequest)
        const conviteUpdated = conviteUpdatedResponse.data;
        props.convite.nome = conviteUpdated.nome;
        titular.telefone = conviteUpdated.telefoneTitular
        props.setConvites({...props.convites})
    }

    const deletarConvite = () => {
        request.deleteInvite(props.convite?.id);
    }

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
                        <input type="text" id="Nome" defaultValue={props.convite?.nome}/>
                    </div>
                    <div className={styles.convite_modal_body_input}>
                        <label htmlFor="Telefone">Telefone do titular do convite:</label>
                        <input type="text" id="Telefone" defaultValue={findTitular(props.convite?.convidados).telefone}/>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <div className={styles.convite_modal_footer}>
                    <button className={styles.delete_button} onClick={deletarConvite}>Excluir Convite</button>
                    <button className={styles.save_button} onClick={editarConvite}>Salvar Alterações</button>
                </div>
            </ModalFooter>
        </Modal>
    );

}

export default EditarConviteModal;