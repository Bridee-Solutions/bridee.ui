import React, { useCallback } from 'react';
import styles from '../css/CallToAction.module.css';

const CallToAction = () => {
  const handleStartClick = useCallback(() => {
    // COMECE AGORA
    alert('Redirecionando para a página de cadastro...');
  }, []);

  const handleLoginClick = useCallback(() => {
    // Faça login agora
    alert('Redirecionando para a página de login...');
  }, []);

  return (
    <section className={styles.callToAction}>
      <div className={styles.overlay}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Você é um assessor de casamento?</h2>
          <p className={styles.description}>
            Gerencie sua agenda e encontre noivas de forma fácil e rápida. Nossa
            plataforma conecta você a casais e oferece ferramentas para organizar
            todos os detalhes do casamento. Facilite seu trabalho e crie momentos
            inesquecíveis.
          </p>
          <button className={styles.startButton} onClick={handleStartClick}>
            COMECE AGORA!
          </button>
          <p className={styles.loginPrompt}>
            Você já tem um perfil de assessor?{' '}
            <span className={styles.loginLink} onClick={handleLoginClick}>
              Faça login agora
            </span>
          </p>
        </div>
      </div>

      
      <img
        src="/Assets/bannerassessor.png"
        alt="Casamento"
        className={styles.backgroundImage}
      />
    </section>
  );
};

export default CallToAction;
