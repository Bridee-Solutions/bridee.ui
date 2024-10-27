import React, { useState } from 'react';
import styles from './ConfirmarPresenca.module.css'; 
import backgroundImage from '../../assets/Ellipse.png'; 
import arrow from '../../assets/arrow.svg'; 

const ConfirmarPresenca = () => {
  const [presencaCodigo, setPresencaCodigo] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  // Simulação de validação de código
  const validatePresencaCodigo = (codigo) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (codigo === 'Codigo válido') {
          resolve(true);
        } else {
          reject('Convite não encontrado. Verifique se o nome do convite informado está correto.');
        }
      }, 2000); 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCarregando(true);
    setErro('');

    try {
      await validatePresencaCodigo(presencaCodigo);
      alert('Convite encontrado!'); 
    } catch (err) {
      setErro(err);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.ellipseContainer}>
        <img src={backgroundImage} alt="Elipse" className={styles.ellipseImage} /> 
        <div className={styles.content}>
          <h2 className={styles.heading}>Insira o pin ou nome do convite</h2>
          <p className={styles.description}>Você pode informar o nome do convite ou o PIN enviado por Amanda & Enzo.</p>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              placeholder="Identificação do convite"
              value={presencaCodigo}
              onChange={(e) => setPresencaCodigo(e.target.value)}  
              disabled={carregando} 
              required
              className={styles.input}
            />
            {erro && <p className={styles.errorMessage}>{erro}</p>}

            <button type="submit" disabled={carregando} className={styles.button}>
              {carregando ? 'Verificando convite...' : 'Continuar'} <img src={arrow} alt="Seta" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmarPresenca;
