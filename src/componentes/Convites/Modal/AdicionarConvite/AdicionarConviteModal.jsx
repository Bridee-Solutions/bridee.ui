import Modal from "../../../Modal/Modal";
import ModalBody from "../../../Modal/ModalBody/ModalBody";
import ModalFooter from "../../../Modal/ModalFooter/ModalFooter";
import ModalHeader from "../../../Modal/ModalHeader/ModalHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import styles from "./AdicionarConviteModal.module.css"
import { useEffect, useRef, useState } from "react";
import AdicionarConvidado from "./AdicionarConvidado";
import { useParams } from "react-router-dom";
import { request } from "../../../../config/axios/axios";

const AdicionarConviteModal = (props) => {

    const [convidados, setConvidados] = useState([]);
    const [convidadoData, setConvidadoData] = useState([])
    const nomeConvite = useRef();
    const telefoneTitular = useRef();
    const params = useParams();

    useEffect(() => {
        createGuest()
    }, [])

    const createGuest = () => {
        return setConvidados([...convidados,<AdicionarConvidado key={convidados.length} setConvidadoData={setConvidadoData} 
            convidadoData={convidadoData} index={convidados.length}/>])
    }

    const createConviteRequest = () =>{
        return {
            nome: nomeConvite.current.value,
            telefoneTitular: telefoneTitular.current.value,
            casamentoId: params.casamentoId,
            convidados: convidadoData
        }
    }

    const saveConvite = async () => {
        const conviteSaved = await request.saveConvite(createConviteRequest());
        props.setConvites([...props.convites, conviteSaved.data])
        props.closeModal()
    }

    return(
        <Modal>
            <ModalHeader>
                <div className={styles.convite_modal_header}>
                    <div className={styles.convite_modal_header_title}>
                        <h2>Adicionar Convite</h2>
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
                        <input type="text" id="Nome" ref={nomeConvite} placeholder="Nome do convite"/>
                    </div>
                    <div className={styles.convite_modal_body_input}>
                        <label htmlFor="Telefone">Telefone do titular do convite:</label>
                        <input type="text" id="Telefone" ref={telefoneTitular} placeholder="Telefone do titular"/>
                    </div>
                </div>
                <div className={styles.convidado_modal_body}>
                    <p>Convidados neste convite</p>
                    <div className={styles.convidado_modal_body_content}>
                        {convidados?.map(convidado => {
                            return convidado
                        })}
                        <div className={styles.add_convidado_button}>
                            <button onClick={createGuest}>+ Adicionar Convidado</button>
                        </div>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <div className={styles.convite_modal_footer}>
                    <button className={styles.add_convite_button} onClick={saveConvite}>Salvar</button>
                </div>
            </ModalFooter>
        </Modal>
    );

}

export default AdicionarConviteModal;