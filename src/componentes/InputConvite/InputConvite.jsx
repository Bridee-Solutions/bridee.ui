import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para navegação entre páginas
import styles from './InputConvite.module.css';

const InputConvite = ({ onVerificarPin }) => {
  const [presencaCodigo, setPresencaCodigo] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCarregando(true);
    setErro(''); 

    if (presencaCodigo === '1234') {
      onVerificarPin(presencaCodigo);
    } else {
      setErro('Convite não encontrado. Verifique se o PIN está correto.');
    }

    setCarregando(false);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={`${styles.formContainer} ${erro ? styles.errorBackground : styles.defaultBackground}`}>
          <div className={styles.formulario}>
            <div className={styles.insira}>
              <span>Insira o pin ou
              nome do convite</span>
            </div>
            <div className={styles.description}>
              <span>Você pode informar o nome do convite ou o PIN enviado por Amanda & Enzo.
              </span>
            </div>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="text"
                placeholder="Digite seu PIN"
                value={presencaCodigo}
                onChange={(e) => setPresencaCodigo(e.target.value)}
                disabled={carregando}
                required
                className={styles.input}
              />
              <div className={styles.botao}>
                <button type="submit" disabled={carregando} className={styles.button}>
                  {carregando ? 'Verificando...' : 'Continuar'}
                </button>
              </div>
              {erro && <span className={styles.errorMessage}>{erro}</span>} 
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputConvite;
