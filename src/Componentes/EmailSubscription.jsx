import React from 'react';
import styles from '../css/EmailSubscription.module.css'; 
const EmailSubscription = () => {
  return (
    <section className={styles.emailSubscription}>
      <img
        src="/Assets/casal.png"
        alt="Casamento no campo"
        className={styles.backgroundImage}
      />

      <div className={styles.content}>
        <h2 className={styles.heading}>A maneira fácil de planejar</h2>
        <div className={styles.formContainer}>
          <input
            type="email"
            placeholder="Seu endereço de email"
            className={styles.emailInput}
          />
          <button className={styles.submitButton}>COMECE A PLANEJAR</button>
        </div>

        
        <div className={styles.footer}>
          <p>Já tem uma conta? <a href="/login" className={styles.link}>Entrar</a></p>
          <p>Você é um assessor? <a href="/signup" className={styles.link}>Crie uma conta aqui</a></p>
        </div>
      </div>
    </section>
  );
};

export default EmailSubscription;
