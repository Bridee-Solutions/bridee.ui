import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from  "../css/Header.module.css";

const Header = ({ className = "" }) => {
  const onLOGINTextClick = useCallback(() => {
    // Pagina de Login
  }, []);

  const onCadastreClick = useCallback(() => {
    // Página de cadastro
  }, []);

  return (
    <div className={`${styles.header} ${className}`}>
      <header className={styles.headerLeft}>
        <div className={styles.brandLogo}>
          <div className={styles.brideeWrapper}>
            <h1 className={styles.bridee}>
              <span>bridee</span>
              <span className={styles.span}>.</span>
            </h1>
          </div>
          <div className={styles.oMatchPerfeito}>
            O match perfeito para o dia dos seus sonhos
          </div>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.authButtons}>
            <div className={styles.loginButton}>
              <a className={styles.login} onClick={onLOGINTextClick}>
                LOGIN
              </a>
            </div>
            <button className={styles.cadastre} onClick={onCadastreClick}>
              <div className={styles.cadastreChild} />
              <div className={styles.cadastreSeAgora}>CADASTRE-SE AGORA</div>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
