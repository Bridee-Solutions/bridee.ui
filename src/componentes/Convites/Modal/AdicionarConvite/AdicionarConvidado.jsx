import { useEffect, useRef, useState } from "react";
import styles from "./AdicionarConviteModal.module.css"
import { request } from "../../../../config/axios/axios";

const AdicionarConvidado = (props) =>{

    const [categorias, setCategorias] = useState()
    const nome = useRef();
    const sobrenome = useRef();
    const telefone = useRef();
    const faixaEtaria = useRef();
    const categoria = useRef();

    const addConvidadoConvite = () => {
        const categoriaSelect = categoria.current;
        const categoriaSelected = categorias?.filter(categoria => categoria.id == categoriaSelect.value)[0]
            
        props.convidadoData[props.index] = {
            nome: nome.current.value,
            sobrenome: sobrenome.current.value,
            telefone: telefone.current.value,
            faixaEtaria: faixaEtaria.current.value,
            categoriaConvidado: {
                id: categoriaSelected.id,
                nome: categoriaSelected.nome
            }
        }
        props.setConvidadoData([...props.convidadoData])
    }

    function capitalizeFirstLetter(text) {
        const stringCapitalized = String(text).charAt(0).toUpperCase() + String(text).toLowerCase().slice(1);
        return stringCapitalized.replaceAll("_", " ");
    }


    useEffect(() => {
        request.getCategoriasConvidados().then(response => {
            setCategorias(response.data)
        })
    }, [])

    return(
        <div className={styles.convidado_modal_border}>
            <div className={styles.convidado_modal_body_inputs}>
                <div className={styles.convidado_modal_body_input}>
                    <label htmlFor="Nome">Nome *</label>
                    <input type="text" placeholder="Nome" id="Nome" ref={nome} defaultValue={props.convidado?.nome} onChange={addConvidadoConvite}/>
                </div>
                <div className={styles.convidado_modal_body_input}>
                    <label htmlFor="Sobrenome">Sobrenome *</label>
                    <input type="text" placeholder="Sobrenome" id="Sobrenome" ref={sobrenome} defaultValue={props.convidado?.sobrenome} onChange={addConvidadoConvite}/>
                </div>
            </div>
            <div className={styles.convidado_modal_body_inputs}>
                <div className={styles.convidado_modal_body_input}>
                    <label htmlFor="Whatsapp">Whatsapp</label>
                    <input type="text" placeholder="Whatsapp" id="Whatsapp" ref={telefone} defaultValue={props.convidado?.telefone} onChange={addConvidadoConvite}/>
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
                <select name="Categoria" id="Categoria" defaultValue={props.convidado?.categoria} ref={categoria} onChange={addConvidadoConvite}>
                    {categorias?.map(categoria => {
                        return <option key={categoria.id} value={categoria.id}>{capitalizeFirstLetter(categoria?.nome)}</option>
                    })}
                </select>
            </div>
        </div>
    );
}

export default AdicionarConvidado;