import { useEffect, useRef } from "react";
import styles from "./Fase4.module.css"
import { componenteFase, definirProximaFase } from "../../../../pages/Cadastro/fases";
import { toast } from "react-toastify";

const Fase4 = (props) => {

    const checkBoxSim = useRef();
    const checkBoxNao = useRef();
    const nomeLocal = useRef();

    const checkBoxes = Array.of(checkBoxNao, checkBoxSim)

    const definirCheckBoxAtivo = (checkbox) => {
        checkBoxes.forEach(check => {
            if(check.current == checkbox){
                check.current.checked = true
            }else{
                check.current.checked = false
            }
        })
    }

    const proximaFase = () => {
        const checkBoxAtivo = checkBoxes.filter(checkbox => checkbox.current.checked == true)[0]
        
        props.usuario.isLocalReservado = checkBoxAtivo.current.id == "sim" ? true : false;
        if(props.usuario.isLocalReservado){
            props.usuario.local = nomeLocal.current.value;
            if(props.usuario.local.trim() == ""){
                toast.error("Coloque o nome do local!")
                return
            }    
        }
        const proximaFase = definirProximaFase(props.fases)
        const componenteProximaFase = componenteFase(proximaFase, props.setFase, props.usuario)
        props.setFase(componenteProximaFase)
    }

    useEffect(() => {
        if(props.usuario.isLocalReservado){
            checkBoxSim.current.checked = true;
            checkBoxNao.current.checked = false;
        }else{
            checkBoxSim.current.checked = false;
            checkBoxNao.current.checked = true;
        }
    }, [])

    return(
        <div className={styles.fase4}>
            <span>Você já reservou um local?</span>
            <div className={styles.fase4_checkbox}>
                <div className={styles.fase4_checkbox_input}>
                    <input type="checkbox" id="sim" ref={checkBoxSim} onInput={(e) => definirCheckBoxAtivo(e.target)}/>
                    <label htmlFor="sim">Sim</label>
                </div>
                <div className={styles.fase4_checkbox_input}>
                    <input type="checkbox" id="nao" ref={checkBoxNao} onInput={(e) => definirCheckBoxAtivo(e.target)}/>
                    <label htmlFor="nao">Não</label>
                </div>
            </div>
            <div className={styles.fase4_input}>
                <div className={styles.fase4_input_span}>
                    <span>Ótimo, vamos adicionar ao seu plano</span>
                </div>
                <input type="text" ref={nomeLocal} defaultValue={props.usuario.local}/>
            </div>
            <button className={styles.fase4_button} onClick={proximaFase}>Próximo</button>
        </div>
    );

}

export default Fase4;