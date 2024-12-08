import React from "react";
import styles from "./MensagemAgradecimento.module.css";
import stylesQ from "../QuemVai/QuemVai.module.css";

function MensagemAgradecimento({ onFinalizar }) {
  console.log("onFinalizar recebido:", onFinalizar);

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
            {/* Atribuindo o onClick diretamente ao botão */}
            <button
              className={stylesQ.continuarButton}
              onClick={onFinalizar}
            >
              Finalizar
              <span className={stylesQ.arrowIcon}>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MensagemAgradecimento;
