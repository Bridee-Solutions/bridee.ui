import React from 'react';
import styles from './Agradecimento.module.css';

const Agradecimento = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.containerTextos}>
        <span className={styles.heading}>Amanda & Enzo</span>
        <span className={styles.subheading}>agradecem sua resposta!</span>
        <span className={styles.description}>
          Você pode mudar sua resposta sempre que precisar.
        </span></div>
      </div>
    </div>
  );
};

export default Agradecimento;
