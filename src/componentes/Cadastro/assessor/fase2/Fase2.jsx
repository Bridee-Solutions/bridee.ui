import { useRef } from "react";
import styles from "./Fase2.module.css"
import { toast } from "react-toastify";
import { componenteFase, definirProximaFase } from "../../../../pages/Cadastro/fases";

const Fase2Assessor = (props) => {

    const nome = useRef()
    const sobrenome = useRef()

    const proximaFase = () => {
        if(!isFieldsValids()){
            toast.error("Preencha os campos corretamente")
            return
        }
        props.usuario.nome = nome.current.value
        props.usuario.sobrenome = sobrenome.current.value
        const proximaFase = definirProximaFase(props.fases)
        const componenteProximaFase = componenteFase(proximaFase, props.setFase, props.usuario)
        props.setFase(componenteProximaFase)
    }

    const isFieldsValids = () => {
       return isNomeValid() && isSobrenomeValid()
    }

    const isNomeValid = () => {
        if(nome.current.value.trim() == "" || nome.current.value.length < 3 ){
            nome.current.style.borderColor = `red`
            return false
        }
        nome.current.style.borderColor = `black`
        return true
    }

    const isSobrenomeValid = () => {
        if(sobrenome.current.value.trim() == "" || sobrenome.current.value.length < 3){
            sobrenome.current.style.borderColor = `red`
            return false
        }
        sobrenome.current.style.borderColor = `black`
        return true
    }

    return(
        <div className={styles.fase2}>
            <div className={styles.fase2_content}>
                <div className={styles.fase2_body}>
                    <p>Qual seu nome?</p>
                    <input type="text" placeholder="Nome" defaultValue={props.usuario.nome} ref={nome} onInput={isNomeValid}/>
                    <input type="text" placeholder="Sobrenome" defaultValue={props.usuario.sobrenome} ref={sobrenome} onInput={isSobrenomeValid}/>
                </div>
                <div className={styles.fase2_button}>
                    <button onClick={proximaFase}>Próximo</button>
                </div>
            </div>
        </div>
    );
}

export default Fase2Assessor;