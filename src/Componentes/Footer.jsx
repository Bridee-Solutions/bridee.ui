import React from 'react';
import styles from '../css/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <p>Endereço: Rua Haddock Lobo 1008, São Paulo</p>
        <p>Telefone: +55 11 9999-9999</p>
        <p>Email: contato@bridee.com</p>
      </div>
    </footer>
  );
};

export default Footer;
