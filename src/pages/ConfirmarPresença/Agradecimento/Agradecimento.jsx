import React from 'react';
import styles from './Agradecimento.module.css';

const Agradecimento = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Amanda & Enzo</h2>
        <h3 className={styles.subheading}>agradecem sua resposta!</h3>
        <p className={styles.description}>
          Você pode mudar sua resposta sempre que precisar.
        </p>
      </div>
    </div>
  );
};

export default Agradecimento;
