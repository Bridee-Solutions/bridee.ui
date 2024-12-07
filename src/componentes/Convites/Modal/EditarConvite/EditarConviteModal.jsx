import Modal from "../../../Modal/Modal";
import ModalHeader from "../../../Modal/ModalHeader/ModalHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import ModalBody from "../../../Modal/ModalBody/ModalBody";
import ModalFooter from "../../../Modal/ModalFooter/ModalFooter";
import styles from "./EditarConviteModal.module.css";
import { findTitular } from "../../../../pages/Convites/ConvitesService";
import { useContext, useRef } from "react";
import { request } from "../../../../config/axios/axios";
import { CasalContext } from "../../../../context/CasalContext";

const EditarConviteModal = (props) => {

    const nomeConvite = useRef(props.convite?.nome)
    const telefoneTitular = useRef(findTitular(props.convite?.convidados).telefone)
    const {casamentoId} = useContext(CasalContext)

    const editarConvite = async () => {
        const titular = findTitular(props.convite?.convidados)
        const updateConviteRequest = {
            nome: nomeConvite.current.value,
            telefoneTitular: telefoneTitular.current.value,
            pin: props.convite?.pin,
            casamentoId: casamentoId,
            convidados: props.convite?.convidados
        }
        
        const conviteUpdatedResponse = await request.updateInvite(props.convite?.id, updateConviteRequest)
        const conviteUpdated = conviteUpdatedResponse.data;
        props.convite.nome = conviteUpdated.nome;
        titular.telefone = conviteUpdated.telefoneTitular
        props.setConvites([...props.convites])
        props.closeModal()
    }

    const deletarConvite = () => {
        request.deleteInvite(props.convite?.id);
        const convites = props.convites?.filter(convite => convite.id != props.convite?.id);
        props.setConvites([...convites])
        props.closeModal()
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
                        <input type="text" id="Nome" ref={nomeConvite} defaultValue={props.convite?.nome}/>
                    </div>
                    <div className={styles.convite_modal_body_input}>
                        <label htmlFor="Telefone">Telefone do titular do convite:</label>
                        <input type="text" id="Telefone" ref={telefoneTitular} defaultValue={telefoneTitular.current}/>
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