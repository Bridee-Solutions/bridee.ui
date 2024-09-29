import { componenteFase, definirProximaFase } from "../../../pages/Cadastro/fases";
import styles from "./Fase2.module.css"

const Fase2 = (props) => {

    const proximaFase = () =>{
        props.setFase(componenteFase(definirProximaFase(), props.setFase, props.usuario))
    }

    return(
        <div className={styles.fase2}>
            <div className={styles.fase2_image}>
                <img src={"/src/assets/streamline_champagne-party-alcohol.svg"} alt="" />
                <span>Vamos começar a festa...</span>
            </div>
            <div className={styles.fase2_content}>
                <span>Responda a algumas perguntas rápidas e criaremos seu painel de planejamento personalizado para tornar o casamento dos seus sonhos uma realidade!</span>
                <button className={styles.fase2_button} onClick={proximaFase}>Vamos</button>
            </div>
        </div>
    );

}

export default Fase2;