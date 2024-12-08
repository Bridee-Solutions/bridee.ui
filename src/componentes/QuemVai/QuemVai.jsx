import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./QuemVai.module.css";

const QuemVai = ({ convidados, onResposta, onFinalizar, onVoltar }) => {
  const [presencas, setPresencas] = useState({});

  useEffect(() => {
    if (Object.keys(presencas).length === 0) {
      const inicialPresencas = convidados.reduce((acc, convidado) => {
        acc[convidado.nome] = "nao_comparecer"; 
        return acc;
      }, {});
      setPresencas(inicialPresencas);
    }
  }, [convidados, presencas]);
  const handlePresencaChange = (nome, status) => {
    console.log(`Alterando presença de ${nome} para: ${status}`); 
  
    setPresencas((prevPresencas) => {
      console.log("Estado atual antes de atualizar:", prevPresencas);
  

      if (prevPresencas[nome] === status) return prevPresencas;
  
      const updatedPresencas = { ...prevPresencas, [nome]: status };
  
      console.log("Estado atualizado:", updatedPresencas); 
      return updatedPresencas;
    });
  
    onResposta(nome, status);
  };
  const handleContinuar = () => {
    onFinalizar();
  };

  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <div className={styles.formContainer}>
          <div className={styles.containerTitulo}>
            <div className={styles.containerQuemVai}>
              <div className={styles.containerQ}>
                <div className={styles.voltarIcon} onClick={onVoltar}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <span>Quem vai?</span>
              </div>
              <div className={styles.subtitulo}>
                <p>
                  Isso ajudará Amanda & Enzo a organizar melhor o grande dia.
                  Você pode mudar sua resposta sempre que precisar.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.convidadosList}>
            {convidados.map((convidado, index) => (
              <div key={index} className={styles.convidadoItem}>
                <span className={styles.convidadoNome}>{convidado.nome}</span>
                <div className={styles.containerPresenca}>
                  <div
                    className={`${styles.containerBotaoPresenca} ${
                      presencas[convidado.nome] === "confirmar" ? styles.selectedButton : ""
                    }`}
                    onClick={() => handlePresencaChange(convidado.nome, "confirmar")}
                  >
                    Confirmar presença
                  </div>
                  <div
                    className={`${styles.containerNaoIra} ${
                      presencas[convidado.nome] === "nao_comparecer" ? styles.selectedButton : ""
                    }`}
                    onClick={() => handlePresencaChange(convidado.nome, "nao_comparecer")}
                  >
                    Não irá comparecer
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.containerBotao}>
            <button className={styles.continuarButton} onClick={handleContinuar}>
              Continuar <span className={styles.arrowIcon}>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuemVai;
