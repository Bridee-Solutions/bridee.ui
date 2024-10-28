import React, { useState } from 'react';
import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import 'normalize.css';

library.add(faBars, faXmarkCircle);

function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  
  function navigateLogin() {
    navigate("/login");
  }

  function toggleMenu() {
    setMenuOpen((prev) => !prev); 
    if(menuOpen) {
      
    }
  }

  return (
    <header>
      <div className={`${styles.side_bar} ${menuOpen ? styles.open : styles.closed}`}>
        <ul>
          <li>Entrar</li>
          <div></div>
          <li>Cadastrar</li>
        </ul>
        <div className={styles.header_logo}>
          <h1>bridee<b>.</b></h1>
          <p>O match perfeito para o dia dos sonhos</p>
        </div>
      </div>
      <div className={styles.header_boarder}></div>
      <div className={styles.header_body}>
        <div className={styles.header_logo}>
          <h1>bridee<b>.</b></h1>
          <p>O match perfeito para o dia dos sonhos</p>
        </div>
        
        <div className={styles.header_buttons}>
        <div id="menuButton">
          {menuOpen ? (
            <button onClick={toggleMenu} className={styles.menu_button}>
              <FontAwesomeIcon icon={faXmarkCircle} size={"2x"} />
            </button>
          ) : (
            <button onClick={toggleMenu} className={styles.menu_button}>
              <FontAwesomeIcon icon={faBars} size={"2x"} />
            </button>
          )}
        </div>
        <button onClick={navigateLogin} className={styles.login_button}>Login</button>
        <button className={styles.register_button}>Cadastre-se</button>
        </div>
      </div>
    </header>
  );
}

export default Header;