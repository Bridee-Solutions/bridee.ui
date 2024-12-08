import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./QuemVai.module.css";
import MensagemAgradecimento from "../../componentes/MensagemAgradecimento/MensagemAgradecimento";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const convidados = [
  "Giovanna França",
  "Victor França",
  "Samuel França",
  "Daniele França",
  "Rhuan França",
  "João França",
];

const QuemVai = ({ convidados, onResposta, onFinalizar, onVoltar }) => {
  const { state } = useLocation();
  const nomeConvidado = state?.nomeConvidado || "";
  const [presencas, setPresencas] = useState({});
  const [showAgradecimento, setShowAgradecimento] = useState(false);

  useEffect(() => {
    const inicialPresencas = convidados.reduce((acc, nome) => {
      acc[nome] = "nao_comparecer";
      return acc;
    }, {});
    setPresencas(inicialPresencas);
  }, []);

  const handlePresencaChange = (nome, status) => {
    setPresencas((prevPresencas) => ({
      ...prevPresencas,
      [nome]: status,
    }));
  };

  const handleContinuar = () => {
    setShowAgradecimento(true);
  };

  if (showAgradecimento) {
    return <MensagemAgradecimento />;
  }

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
                <span className={styles.convidadoNome}>
                  {convidado.nome} {/* Acesse a propriedade nome do objeto */}
                </span>
                <div className={styles.containerPresenca}>
                  <div
                    className={`${styles.containerBotaoPresenca} ${
                      presencas[convidado.nome] === "confirmar"
                        ? styles.selectedButton
                        : ""
                    }`}
                    onClick={() =>
                      handlePresencaChange(convidado.nome, "confirmar")
                    }
                  >
                    Confirmar presença
                  </div>
                  <div
                    className={`${styles.containerNaoIra} ${
                      presencas[convidado.nome] === "nao_comparecer"
                        ? styles.selectedButton
                        : ""
                    }`}
                    onClick={() =>
                      handlePresencaChange(convidado.nome, "nao_comparecer")
                    }
                  >
                    Não irá comparecer
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.containerBotao}>
            <div className={styles.conteudoBotao}>
              <button
                className={styles.continuarButton}
                onClick={handleContinuar}
              >
                Continuar
                <span className={styles.arrowIcon}>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuemVai;
