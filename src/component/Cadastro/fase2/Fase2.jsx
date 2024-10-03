import { componenteFase, definirProximaFase } from "../../../pages/Cadastro/fases";
import styles from "./Fase2.module.css"

const Fase2 = (props) => {

    const proximaFase = () =>{
        const proximaFase = definirProximaFase(props.fases)
        const componenteProximaFase = componenteFase(proximaFase, props.setFase, props.usuario)
        props.setFase(componenteProximaFase)
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