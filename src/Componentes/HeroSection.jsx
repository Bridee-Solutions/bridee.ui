import React from 'react';
import styles from '../css/HeroSection.module.css';

const HeaderSection = () => {
  return (
    <section className={styles.headerSection}>
      <div className={styles.overlay}></div>
      <div className={styles.textContent}>
        <h1>Facilitamos o encontro entre noivas e assessores para casamentos perfeitos</h1>
        <p>SIMPLES. ORGANIZADO. SEM ESTRESSE.</p>
      </div>
    </section>
  );
};

export default HeaderSection;
