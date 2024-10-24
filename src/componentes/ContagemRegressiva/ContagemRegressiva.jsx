import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ContagemRegressiva.module.css";

const ContagemRegressiva = () => {
  const [isExpanded, setIsExpanded] = useState(true); // Controla o colapso
  const [tempoRestante, setTempoRestante] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
  });

  useEffect(() => {
    const dataAlvo = new Date("2026-02-11T00:00:00"); // Data do casamento
    const calcularTempoRestante = () => {
      const agora = new Date();
      const diferenca = dataAlvo - agora;

      const tempoRestante = {
        dias: Math.floor(diferenca / (1000 * 60 * 60 * 24)),
        horas: Math.floor((diferenca / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((diferenca / 1000 / 60) % 60),
      };

      setTempoRestante(tempoRestante);
    };

    const timer = setInterval(calcularTempoRestante, 60000); // Atualiza a cada minuto
    calcularTempoRestante(); // Calcula imediatamente ao carregar a página

    return () => clearInterval(timer); // Limpa o intervalo ao desmontar o componente
  }, []);

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
                <span>terça-feira, 11 de fevereiro de 2026</span>, está cada vez
                mais próximo!
              </span>
            </div>
            <div className={styles.countdown}>
              <div className={styles.containerCountdown}>
                <div className={styles.countdownItem}>
                  <span>{tempoRestante.dias}</span>
                  <span>DIAS</span>
                </div>
                <div className={styles.countdownItem}>
                  <span>{tempoRestante.horas}</span>
                  <span>HORAS</span>
                </div>
                <div className={styles.countdownItem}>
                  <span>{tempoRestante.minutos}</span>
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
