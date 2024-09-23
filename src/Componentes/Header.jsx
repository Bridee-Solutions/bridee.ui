import React from 'react';
import styles from '../css/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>bridee.</div>
      <div className={styles.authButtons}>
        <button className={styles.login}>Login</button>
        <button className={styles.signup}>Cadastre-se agora</button>
      </div>
    </header>
  );
};

export default Header;
