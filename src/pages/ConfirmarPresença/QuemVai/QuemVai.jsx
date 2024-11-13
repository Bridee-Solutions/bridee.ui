import React, { useState } from 'react';
import styles from './QuemVai.module.css';
import Agradecimento from './../Agradecimento/Agradecimento';

const convidados = [
  'Giovanna França', 'Victor França', 'Samuel França', 'Daniele França', 'Rhuan França', 'João França',
];

const QuemVai = () => {
  const [presencas, setPresencas] = useState({});
  const [showAgradecimento, setShowAgradecimento] = useState(false);

  const handlePresencaChange = (nome, status) => {
    setPresencas(prev => ({
      ...prev,
      [nome]: status
    }));
  };

  const handleContinuar = () => {
    setShowAgradecimento(true);
  };

  if (showAgradecimento) {
    return <Agradecimento />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <div className={styles.formContainer}>
          <div className={styles.containerTitulo}>
            <div className={styles.containerQuemVai}>
              <h2 className={styles.heading}>Quem vai?</h2>
            </div>
            <div className={styles.containerSubtitulo}>
              <div className={styles.description}>
               <span> Isso ajudará Amanda & Enzo a organizar melhor o grande dia. </span> <br />
               <span> Você pode mudar sua resposta sempre que precisar. </span>
              </div>
            </div>
          </div>
          <div className={styles.containerBotaoConvidados}>
            <div className={styles.convidadosList}>

              <div className={styles.containerConvidados}>
                {convidados.map((nome, index) => (
                  <div key={index} className={styles.convidadoItem}>
                    <span className={styles.convidadoNome}>{nome}</span>

                    <div className={styles.containerPresenca}>
                      <div className={styles.containerBotaoPresenca}>
                        <button
                          className={`${styles.button} ${presencas[nome] === 'confirmar' ? styles.selectedButton : ''}`}
                          onClick={() => handlePresencaChange(nome, 'confirmar')}
                        > <span>Confirmar presença</span>
                        </button>
                      </div>

                      <div className={styles.containerNaoIra}>
                        <button
                          className={`${styles.button} ${presencas[nome] === 'nao_comparecer' ? styles.selectedButton : ''}`}
                          onClick={() => handlePresencaChange(nome, 'nao_comparecer')}
                        ><span className={styles.naocomparece}>  Não irá comparecer</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.containerBotao}>
              <div className={styles.conteudoBotao}>
                <button className={styles.continuarButton} onClick={handleContinuar}>
                  <span>Continuar </span>
                  <span className={styles.arrowIcon}>→</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default QuemVai;
