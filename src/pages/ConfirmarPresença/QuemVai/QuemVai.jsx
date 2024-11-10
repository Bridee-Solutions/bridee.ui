import React, { useState } from 'react';
import styles from './QuemVai.module.css';
import Agradecimento from './../Agradecimento/Agradecimento';

const convidados = [
  'Maria Silva', 'João Souza', 'Ana Oliveira', 'Pedro Santos', 'Luciana Pereira',
  'Carlos Lima', 'Renata Almeida', 'Sérgio Mendes', 'Juliana Araújo', 'Marcos Paulo',
  'Fernanda Costa', 'Paulo Henrique', 'Roberta Farias', 'André Martins', 'Bianca Torres'
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
        <div className={styles.texto}>
        <h2 className={styles.heading}>Quem vai?</h2>
        <p className={styles.description}>
          Isso ajudará Amanda & Enzo a organizar melhor o grande dia. <br />
          Você pode mudar sua resposta sempre que precisar.
        </p>
        
        <div className={styles.convidadosList}>
          {convidados.map((nome, index) => (
            <div key={index} className={styles.convidadoItem}>
              <span className={styles.convidadoNome}>{nome}</span>
              <button
                className={`${styles.button} ${presencas[nome] === 'confirmar' ? styles.selectedButton : ''}`}
                onClick={() => handlePresencaChange(nome, 'confirmar')}
              >
                Confirmar presença
              </button>
              <button
                className={`${styles.button} ${presencas[nome] === 'nao_comparecer' ? styles.selectedButton : ''}`}
                onClick={() => handlePresencaChange(nome, 'nao_comparecer')}
              >
                Não irá comparecer
              </button>
            </div>
          ))}
        </div>
        <div className={styles.botao}>
          <button className={styles.continuarButton} onClick={handleContinuar}>
            Continuar <span className={styles.arrowIcon}>→</span>
          </button></div>
        </div>
      </div>
    </div> 
    </div>
  );
};

export default QuemVai;
