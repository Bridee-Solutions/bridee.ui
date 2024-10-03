import { useRef } from "react";
import { componenteFase, definirProximaFase } from "../../../pages/Cadastro/fases";
import styles from "./Fase3.module.css"
import { toast } from "react-toastify";

const Fase3 = (props) =>{

    const firstName = useRef()
    const firstNameLover = useRef()

    const proximaFase = () =>{
        if((firstName.current.value.trim() == "" || firstName.current.value.length < 3) 
            || (firstNameLover.current.value == "" || firstNameLover.current.value.length < 3)){
            if((firstName.current.value.trim() == "" || firstName.current.value.length < 3)){
                firstName.current.style.borderColor = `red`
            }else{
                firstName.current.style.borderColor = `black`
            }
            if((firstNameLover.current.value.trim() == "" || firstNameLover.current.value.length < 3)){
                firstNameLover.current.style.borderColor = `red`
            }else{
                firstName.current.style.borderColor = `black`
            }
            toast.error("Os nomes devem ter no mínimo 3 caracteres")
            return;
        }
        props.usuario.nome = firstName.current.value;
        props.usuario.nomeParceiro = firstNameLover.current.value;
        const proximaFase = definirProximaFase(props.fases)
        const componenteProximaFase = componenteFase(proximaFase, props.setFase, props.usuario)
        props.setFase(componenteProximaFase)
    }

    return(
        <div className={styles.fase3_content}>
            <div className={styles.fase3_content_field}>
                <span>Qual o seu nome?</span>
                <div className={styles.fase3_content_field_input}>
                    <label htmlFor="firstName">Primeiro nome:</label>
                    <input type="text" ref={firstName} defaultValue={props.usuario.nome}/>
                </div>
            </div>
            <div className={styles.fase3_content_field}>
                <span>Qual o nome do seu amor?</span>
                <div className={styles.fase3_content_field_input}>
                    <label htmlFor="firstName">Primeiro nome:</label>
                    <input type="text" ref={firstNameLover} defaultValue={props.usuario.nomeParceiro}/>
                </div>
            </div>
            <button className={styles.fase3_button} onClick={() => proximaFase()}>
                Próximo
            </button>
        </div>
    )
}

export default Fase3;