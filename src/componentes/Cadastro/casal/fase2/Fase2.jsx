import {
  componenteFase,
  definirProximaFase,
} from "../../../../pages/Cadastro/fases";
import styles from "./Fase2.module.css";

import champagne from "/src/assets/login/streamline_champagne-party-alcohol.svg";

const Fase2 = (props) => {
  const proximaFase = () => {
    const proximaFase = definirProximaFase(props.fases);
    const componenteProximaFase = componenteFase(
      proximaFase,
      props.setFase,
      props.usuario
    );
    props.setFase(componenteProximaFase);
  };

  return (
    <div className={styles.fase2}>
      <div className={styles.fase2_image}>
        <img
          className={styles.imagem}
          src={champagne}
          alt=""
        />
        <div className={styles.vamosCont}>
          <div className={styles.vamos}>
            <span>Vamos começar a festa...</span>
          </div>
        </div>
      </div>
      <div className={styles.fase2_content}>
        <div className={styles.containerDesc}>
          <span>
            Responda a algumas perguntas rápidas e criaremos seu painel de
            planejamento personalizado para tornar o casamento dos seus sonhos
            uma realidade!
          </span>
        </div>
        <button className={styles.fase2_button} onClick={proximaFase}>
          Vamos
        </button>
      </div>
    </div>
  );
};

export default Fase2;
