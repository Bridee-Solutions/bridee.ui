
import { componenteFase, definirProximaFase, fases } from "../../../pages/Cadastro/fases";
import styles from "./Fase2.module.css"

const Fase2 = (props) =>{

    const proximaFase = () =>{
        const firstName = document.getElementById("firstName");
        const firstNameLover = document.getElementById("firstNameLover")
        if((firstName == "" || firstName.length < 3) || (firstNameLover == "" || firstNameLover.length < 3)){
            // TODO: COLOCAR Toast para alertar o usuário.
            return;
        }
        props.setFase(componenteFase(definirProximaFase(), props.setFase))
    }

    return(
        <div className={styles.fase1_content}>
            <div className={styles.fase1_content_field}>
                <span>Qual o seu nome?</span>
                <div className={styles.fase1_content_field_input}>
                    <label htmlFor="firstName">Primeiro nome:</label>
                    <input type="text" id="firstName"/>
                </div>
            </div>
            <div className={styles.fase1_content_field}>
                <span>Qual o nome do seu amor?</span>
                <div className={styles.fase1_content_field_input}>
                    <label htmlFor="firstName">Primeiro nome:</label>
                    <input type="text" id="firstNameLover"/>
                </div>
            </div>
            <button className={styles.fase1_button} onClick={() => proximaFase()}>
                Próximo
            </button>
        </div>
    )
}

export default Fase2;