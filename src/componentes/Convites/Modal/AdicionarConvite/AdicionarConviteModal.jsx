import Modal from "../../../Modal/Modal";
import ModalBody from "../../../Modal/ModalBody/ModalBody";
import ModalFooter from "../../../Modal/ModalFooter/ModalFooter";
import ModalHeader from "../../../Modal/ModalHeader/ModalHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import styles from "./AdicionarConviteModal.module.css"
import { useRef } from "react";

const AdicionarConviteModal = (props) => {

    const nome = useRef();
    const sobrenome = useRef();
    const telefone = useRef();
    const faixaEtaria = useRef();
    const categoria = useRef();
    const status = useRef();
    const modalTitle = useRef()

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
                        <input type="text" id="Nome" placeholder="Nome do convite"/>
                    </div>
                    <div className={styles.convite_modal_body_input}>
                        <label htmlFor="Telefone">Telefone do titular do convite:</label>
                        <input type="text" id="Telefone" placeholder="Telefone do titular"/>
                    </div>
                </div>
                <div className={styles.convidado_modal_body}>
                    <p>Convidados neste convite</p>
                    <div className={styles.convidado_modal_body_content}>
                        <div className={styles.convidado_modal_border}>
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
                        <div className={styles.convidado_modal_border}>
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
                        <div className={styles.add_convidado_button}>
                            <button onClick={() => props.setActualModal("Adicionar Convidado")}>+ Adicionar Convidado</button>
                        </div>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <div className={styles.convite_modal_footer}>
                    <button className={styles.add_convite_button}>Salvar</button>
                </div>
            </ModalFooter>
        </Modal>
    );

}

export default AdicionarConviteModal;