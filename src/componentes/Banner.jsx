import React from 'react';
import styles from '../css/Banner.module.css';

function Banner() {
  return (
    <div className={styles.banner}>
      <h1>Facilitamos o encontro entre noivas e <br/> assessores para casamentos perfeitos</h1>
      <p>Simples. Organizado. Sem estresse.</p>
    </div>
  );
}

export default Banner;