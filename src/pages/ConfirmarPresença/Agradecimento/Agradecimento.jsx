import React from 'react';
import styles from './Agradecimento.module.css';

const Agradecimento = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.containerTextos}>
          <div className={styles.amandaEnzo}>
        <span>Amanda & Enzo</span>
        <span>agradecem sua resposta!</span>
       </div>
        <span className={styles.description}>
          Você pode mudar sua resposta sempre que precisar.
        </span></div> </div>
      </div>
    
  );
};

export default Agradecimento;
