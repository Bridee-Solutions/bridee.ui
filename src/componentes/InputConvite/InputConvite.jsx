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

    // Simula a verificação do PIN enviado pelo usuário
    if (presencaCodigo === '1234') {
      // Se PIN estiver correto, chama a função do componente pai
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
              <span>Insira o PIN para confirmar</span>
            </div>
            <div className={styles.description}>
              <span>Você pode informar o PIN enviado por Amanda & Enzo.</span>
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
              {erro && <p className={styles.errorMessage}>{erro}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputConvite;
