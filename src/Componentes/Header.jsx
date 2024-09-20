import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "../css/Header.module.css";

const Header = ({ className = "" }) => {
  const onLoginClick = useCallback(() => {
    //  login
  }, []);

  const onCadastroClick = useCallback(() => {
    //  cadastro
  }, []);

  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles.logo}>
        <h1 className={styles.bridee}>
          bridee<span className={styles.ponto}>.</span>
        </h1>
        <p className={styles.slogan}>O match perfeito para o dia dos seus sonhos</p>
      </div>
      <div className={styles.autenticacao}>
        <button className={styles.login} onClick={onLoginClick}>
          Login
        </button>
        <button className={styles.cadastro} onClick={onCadastroClick}>
          Cadastre-se
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
