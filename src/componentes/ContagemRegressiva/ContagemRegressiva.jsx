import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ContagemRegressiva.module.css";

const ContagemRegressiva = ({dataCasamento}) => {
  const [isExpanded, setIsExpanded] = useState(true); // Controla o colapso

  const dataAlvo = new Date(`${dataCasamento}`);
  const month = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
  
  const agora = new Date();
  const diferenca = (dataAlvo.getTime() - agora.getTime());
  const tempoRestante = {
    dias: Math.floor(diferenca / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diferenca / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diferenca / 1000 / 60) % 60),
  };

  setInterval(() => {
    const dataAlvo = new Date(`${dataCasamento}`)
    const agora = new Date();
    const diferenca = (dataAlvo.getTime() - agora.getTime());

    if(!isNaN(diferenca)){
      document.getElementById("dias").innerHTML = `${Number(Math.floor(diferenca / (1000 * 60 * 60 * 24)))}`
      document.getElementById("horas").innerHTML = `${Number(Math.floor((diferenca / (1000 * 60 * 60)) % 24))}`
      document.getElementById("minutos").innerHTML = `${Number(Math.floor((diferenca / 1000 / 60) % 60))}`
    }

  }, 60000)

  const alternarExpandir = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.contentContagem}>
      <div className={styles.header} onClick={alternarExpandir}>
        <div className={styles.containerHeader}>
          <div className={styles.title}>
            <span>Contagem regressiva</span>
          </div>
          <div className={styles.containerIcons}>
            <FontAwesomeIcon className={styles.faClock} icon={faClock} />
            <FontAwesomeIcon
              className={styles.iconarrow}
              icon={isExpanded ? faChevronUp : faChevronDown}
            />
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className={styles.content}>
          <div className={styles.contentContainer}>
            <div className={styles.escrita}>
              <span>
                Seu grande dia,{" "}
                <span>terça-feira, dia {!isNaN(dataAlvo?.getDay()) ? dataAlvo?.getDay() : "---"} de {!isNaN(dataAlvo?.getMonth()) ? month[dataAlvo?.getMonth()] : "---"} de {!isNaN(dataAlvo?.getFullYear()) ? dataAlvo?.getFullYear() : "---"}</span>, está cada vez
                mais próximo!
              </span>
            </div>
            <div className={styles.countdown}>
              <div className={styles.containerCountdown}>
                <div className={styles.countdownItem}>
                  <span id="dias">{!isNaN(tempoRestante?.dias) ? tempoRestante?.dias : "---"}</span>
                  <span>DIAS</span>
                </div>
                <div className={styles.countdownItem}>
                  <span id="horas">{!isNaN(tempoRestante?.horas) ? tempoRestante?.horas : "---"}</span>
                  <span>HORAS</span>
                </div>
                <div className={styles.countdownItem}>
                  <span id="minutos">{!isNaN(tempoRestante?.minutos) ? tempoRestante?.minutos : "---"}</span>
                  <span>MINUTOS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContagemRegressiva;
