import {
  componenteFase,
  definirProximaFase,
} from "../../../../pages/Cadastro/fases";
import styles from "./Fase5.module.css";
import { useEffect, useRef } from "react";

const Fase5 = (props) => {
  const dataCasamento = useRef();
  const dataIndefinida = useRef();

  const proximaFase = () => {
    if (!dataIndefinida.current.checked) {
      props.usuario.dataCasamento = dataCasamento.current.value;
    } else {
      props.usuario.dataCasamento = "";
    }
    const proximaFase = definirProximaFase(props.fases);
    const componenteProximaFase = componenteFase(
      proximaFase,
      props.setFase,
      props.usuario
    );
    props.setFase(componenteProximaFase);
  };

  const changeCheckBox = (isActive) => {
    if (isActive) {
      dataCasamento.current.value = null;
    }
  };

  const changeDataCasamento = () => {
    if (dataCasamento.current.value != null) {
      dataIndefinida.current.checked = false;
    }
  };

  useEffect(() => {
    if (props.usuario.dataCasamento == "") {
      dataIndefinida.current.checked = true;
    } else {
      dataIndefinida.current.checked = false;
    }
  }, []);

  return (
    <div className={styles.fase5}>
      <div className={styles.fase5_content1}>
        <div className={styles.fase5_content_titulo}>
          <span>Já definiu uma data de casamento?</span>
        </div>
        <div className={styles.content_input}>
          <input
            type="date"
            ref={dataCasamento}
            defaultValue={props.usuario.dataCasamento}
            onChange={changeDataCasamento}
          />
        </div>
        <div className={styles.fase5_content2_input}>
          <input
            type="checkbox"
            ref={dataIndefinida}
            id="Nao"
            onInput={(e) => changeCheckBox(e.target.checked)}
          />
          <label htmlFor="Nao">Ainda não sabemos</label>
        </div>
      </div>
      <div className={styles.fase5_content2}>
        
        <button className={styles.fase5_button} onClick={proximaFase}>
          Próximo
        </button>
      </div>
    </div>
  );
};

export default Fase5;
