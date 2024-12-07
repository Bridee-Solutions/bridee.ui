import Modal from "../../../Modal/Modal";
import ModalBody from "../../../Modal/ModalBody/ModalBody";
import ModalHeader from "../../../Modal/ModalHeader/ModalHeader";
import ModalFooter from "../../../Modal/ModalFooter/ModalFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import styles from "./AdicionarConvidadoModal.module.css"
import { useEffect, useRef, useState } from "react";
import { request } from "../../../../config/axios/axios";
import { useParams } from "react-router-dom";

const AdicionarConvidadoModal = (props) =>{

    const [categorias, setCategorias] = useState()
    const [selectedCategoria, setSelectedCategoria] = useState();
    const nome = useRef();
    const sobrenome = useRef();
    const telefone = useRef();
    const faixaEtaria = useRef();
    const categoria = useRef();
    const status = useRef();
    const modalTitle = useRef()
    
    useEffect(() => {
        request.getCategoriasConvidados().then(response => {
            if(props.convidado?.categoriaConvidado.id != null){
                setSelectedCategoria(props.convidado?.categoriaConvidado)
            }
            setCategorias(response.data)
        })
        if(isConvidadoAvailable){
            modalTitle.current.innerHTML = "Editar Convidado"
        }
        defineStatusOptions();
        
    }, [])

    const isConvidadoAvailable = () => {
        return props.convidado != undefined
    }

    const buttonOperation = () => {
        if(isConvidadoAvailable()){
            updateConvidado();
            return;
        }
        addConvidado();
    }

    const addConvidado = async () => {
        const convidadoRequest = buildConvidadoRequest();
        console.log(convidadoRequest);
        
        const createdGuest = await request.createConvidado(props.convite?.id, convidadoRequest);
        const previousGuests = [...props.convite?.convidados];
        props.convite.convidados = [createdGuest.data, ...previousGuests]
        console.log(createdGuest.data);
        
        props.setConvites([...props.convites])
        props.closeModal()
    }

    const updateConvidado = async () => {
        const convidadoRequest = buildConvidadoRequest();

        const updatedConvidado = await request.updateConvidado(props.convidado?.id, convidadoRequest)
        let guest = updatedConvidado.data
        const guestsNotModified = props.convite?.convidados?.filter(convidado => convidado.id != updatedConvidado.data.id);

        props.convite.convidados = [guest, ...guestsNotModified]
        props.setConvites([...props.convites])
        props.closeModal()
    }

    const buildConvidadoRequest = () => {
        const categoriaSelect = categoria.current;
        const categoriaSelected = categorias?.filter(categoria => categoria.id == categoriaSelect.value)[0]
        return {
            nome: nome.current.value,
            sobrenome: sobrenome.current.value,
            telefone: telefone.current.value,
            faixaEtaria: faixaEtaria.current.value,
            status: status.current.value,
            tipo: props.convidado?.tipo ? props.convidado?.tipo : "NAO_TITULAR",
            conviteId: props.convite?.id,
            mesaId: props.convidado?.mesaId,
            categoriaConvidado: {
                id: categoriaSelected.id,
                nome: categoriaSelected.nome
            }
        }
    }

    function capitalizeFirstLetter(text) {
        const stringCapitalized = String(text).charAt(0).toUpperCase() + String(text).toLowerCase().slice(1);
        return stringCapitalized.replaceAll("_", " ");
    }

    const defineStatusOptions = () => {
        const statusSelectOptions = status.current.options;        
        for(var i = 0; i < statusSelectOptions.length; i++){
            if(props.convidado?.status == statusSelectOptions[i].value){
                statusSelectOptions[i].selected = true
            }
        }
    }

    return(
        <Modal>
            <ModalHeader>
                <div className={styles.convidado_modal_header}>
                    <div className={styles.convidado_modal_header_title}>
                        <span ref={modalTitle}>Adicionar Convidado</span>
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
                                <input type="text" placeholder="Nome" id="Nome" ref={nome} defaultValue={props.convidado?.nome}/>
                            </div>
                            <div className={styles.convidado_modal_body_input}>
                                <label htmlFor="Sobrenome">Sobrenome *</label>
                                <input type="text" placeholder="Sobrenome" id="Sobrenome" ref={sobrenome} defaultValue={props.convidado?.sobrenome}/>
                            </div>
                        </div>
                        <div className={styles.convidado_modal_body_inputs}>
                            <div className={styles.convidado_modal_body_input}>
                                <label htmlFor="Whatsapp">Whatsapp</label>
                                <input type="text" placeholder="Whatsapp" id="Whatsapp" ref={telefone} defaultValue={props.convidado?.telefone}/>
                            </div>
                            <div className={styles.convidado_modal_body_input}>
                            <label htmlFor="faixaEtaria">Status:</label>
                                <select name="faixaEtaria" id="faixaEtaria" ref={faixaEtaria}>
                                    <option value="ADULTO">Adulto</option>
                                    <option value="CRIANCA">Criança</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.convidado_modal_body_input}>
                            <label htmlFor="Categoria">Categoria *</label>
                            <select name="Categoria" id="Categoria" ref={categoria} defaultValue={props.convidado?.categoria}>
                                {selectedCategoria != undefined && 
                                    <option key={selectedCategoria.id} value={selectedCategoria.id}>{capitalizeFirstLetter(selectedCategoria?.nome)}</option>
                                }
                                {categorias?.filter(categoria => categoria?.id != selectedCategoria?.id)?.map(categoria => {
                                   return <option key={categoria.id} value={categoria.id}>{capitalizeFirstLetter(categoria?.nome)}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className={styles.convidado_modal_body_presenca}>
                        <p>Confirmação de presença</p>
                        <div className={styles.convidado_modal_body_select}>
                            <label htmlFor="Status">Status:</label>
                            <select name="status" id="status" ref={status}>
                                <option value="SEM_RESPOSTA">Sem Resposta</option>
                                <option value="RECUSADO">Recusado</option>
                                <option value="CONFIRMADO">Confirmado</option>
                            </select>
                        </div>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <div className={styles.convidado_modal_footer}>
                    <button onClick={buttonOperation}>Salvar</button>
                </div>
            </ModalFooter>
        </Modal>

    );

}

export default AdicionarConvidadoModal;