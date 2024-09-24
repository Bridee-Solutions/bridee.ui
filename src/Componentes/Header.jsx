import React from 'react';
import styles from '../css/Header.module.css';

const Header = () => {
  return (
    <>
      <div className={styles.topBar}></div>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <span>bridee</span><span className={styles.dot}>.</span>
          </div>
          <div className={styles.tagline}>
            O match perfeito para o dia dos seus sonhos
          </div>
        </div>
        <div className={styles.authButtons}>
          <a href="#" className={styles.login}>LOGIN</a>
          <button className={styles.signupButton}>CADASTRE-SE AGORA</button>
        </div>
      </header>
    </>
  );
};

export default Header;
