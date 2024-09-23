import React from 'react';
import styles from '../css/HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.textContainer}>
        <h1>Facilitamos o encontro entre noivas e assessores para casamentos perfeitos</h1>
        <p>Simples. Organizado. Sem estresse.</p>
      </div>
    </section>
  );
};

export default HeroSection;
