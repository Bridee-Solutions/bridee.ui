import React from 'react';
import styles from '../css/CallToAction.module.css';

const CallToAction = () => {
  return (
    <section className={styles.callToAction}>
      <h2>Você é um assessor de casamento?</h2>
      <p>Gerencie sua agenda e encontre noivas de forma fácil e rápida.</p>
      <button className={styles.startNow}>Comece agora</button>
    </section>
  );
};

export default CallToAction;
