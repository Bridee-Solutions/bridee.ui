import React from "react";
import styles from "./MensagemAgradecimento.module.css";
import stylesQ from "../QuemVai/QuemVai.module.css";

function MensagemAgradecimento({ onFinalizar }) {

  const handleClick = () => {
    console.log('Clicou no botão');
    if (onFinalizar) {
      onFinalizar(); 
    } else {
      console.log('onFinalizar não foi passado');
    }
  };
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.containerTextos}>
          <div className={styles.amandaEnzo}>
            <span>Amanda & Enzo</span>
            <span>agradecem sua resposta!</span>
          </div>
          <span className={styles.description}>
            Você pode mudar sua resposta sempre que precisar.
          </span>
          
          <div className={stylesQ.containerBotao}>
            <button className={stylesQ.continuarButton} onClick={handleClick}>
              Finalizar <span className={styles.arrowIcon}>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MensagemAgradecimento;
