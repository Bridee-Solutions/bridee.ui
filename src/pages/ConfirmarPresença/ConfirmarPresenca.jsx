import React, { useState } from 'react';
import styles from './ConfirmarPresenca.module.css'; 
import arrow from '../../assets/arrow.svg'; 

const ConfirmarPresenca = () => {
  const [presencaCodigo, setPresencaCodigo] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

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
     <div className={styles.container}>
      <div className={`${styles.formContainer} ${erro ? styles.errorBackground : styles.defaultBackground}`}>

        <div className={styles.formulario}>
          <div className={styles.insira}>
        <span>Insira o pin</span> 
        <span> ou nome do convite</span></div>

        <div className={styles.description}>
        <span>Você pode informar o nome do convite ou o </span>
          <span>PIN enviado por Amanda & Enzo.</span></div>
        
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

          <div className={styles.botao}>
          <button type="submit" disabled={carregando} className={styles.button}>
            {carregando ? 'Verificando convite...' : 'Continuar'} <img src={arrow} alt="Seta" className={styles.arrowIcon} />
          </button> </div>
      

        {erro && (
            <p className={styles.errorMessage}>{erro}</p>
        )}  </form>
      </div>
    </div></div></div>
  );
};

export default ConfirmarPresenca;
