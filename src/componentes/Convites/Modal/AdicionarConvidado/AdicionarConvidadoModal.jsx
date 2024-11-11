import { ModalFooter } from "react-bootstrap";
import Modal from "../../../Modal/Modal";
import ModalBody from "../../../Modal/ModalBody/ModalBody";
import ModalHeader from "../../../Modal/ModalHeader/ModalHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import styles from "./AdicionarConvidadoModal.module.css"
import { useEffect, useRef, useState } from "react";

const AdicionarConvidadoModal = (props) =>{

    const nome = useRef();
    const sobrenome = useRef();
    const telefone = useRef();
    const faixaEtaria = useRef();
    const categoria = useRef();
    const status = useRef();
    const modalTitle = useRef()

    const [convidado, setConvidado] = useState({})

    useEffect(() => {
        if(props.idConvidado != undefined){
            modalTitle.current.innerHTML = "Editar Convidado"
        }
    }, [])

    return(
        <Modal>
            <ModalHeader>
                <div className={styles.convidado_modal_header}>
                    <div className={styles.convidado_modal_header_title}>
                        <h2 ref={modalTitle}>Adicionar Convidado</h2>
                    </div>
                    <div className={styles.convidado_modal_header_close}>
                        <FontAwesomeIcon icon={faX} onClick={() => props.closeModal()} style={{cursor: "pointer"}}/>
                    </div>
                </div>
            </ModalHeader>
            <ModalBody>
                <div className={styles.convidado_modal_body}>
                    <div className={styles.convidado_modal_body_content}>
                        <p>Dados do convidado</p>
                        <div className={styles.convidado_modal_body_inputs}>
                            <div className={styles.convidado_modal_body_input}>
                                <label htmlFor="Nome">Nome *</label>
                                <input type="text" placeholder="Nome" id="Nome" ref={nome}/>
                            </div>
                            <div className={styles.convidado_modal_body_input}>
                                <label htmlFor="Sobrenome">Sobrenome *</label>
                                <input type="text" placeholder="Sobrenome" id="Sobrenome" ref={sobrenome}/>
                            </div>
                        </div>
                        <div className={styles.convidado_modal_body_inputs}>
                            <div className={styles.convidado_modal_body_input}>
                                <label htmlFor="Whatsapp">Whatsapp</label>
                                <input type="text" placeholder="Whatsapp" id="Whatsapp" ref={telefone}/>
                            </div>
                            <div className={styles.convidado_modal_body_input}>
                                <label htmlFor="Faixa Etaria">Faixa Etária *</label>
                                <input type="text" placeholder="Faixa Etaria" id="Faixa Etaria" ref={faixaEtaria}/>
                            </div>
                        </div>
                        <div className={styles.convidado_modal_body_input}>
                            <label htmlFor="Categoria">Categoria *</label>
                            <select name="Categoria" id="Categoria" ref={categoria}>
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.convidado_modal_body_presenca}>
                        <p>Confirmação de presença</p>
                        <div className={styles.convidado_modal_body_select}>
                            <label htmlFor="Status">Status:</label>
                            <select name="status" id="status" ref={status}>
                                <option value="SEM RESPOSTA">SEM RESPOSTA</option>
                                <option value="RECUSADO">Recusado</option>
                                <option value="CONFIRMADO">Confirmado</option>
                            </select>
                        </div>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <div className={styles.convidado_modal_footer}>
                    <button>Salvar</button>
                </div>
            </ModalFooter>
        </Modal>

    );

}

export default AdicionarConvidadoModal;