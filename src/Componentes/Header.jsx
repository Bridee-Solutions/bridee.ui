import { useCallback } from "react";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  const onLOGINTextClick = useCallback(() => {
    // Please sync "Pagina de Login" to the project
  }, []);

  const onCadastreClick = useCallback(() => {
    // Please sync "Página de cadastro" to the project
  }, []);

  return (
    <div className={`header ${className}`}>
      <header className="header-left">
        <div className="brand-logo">
          <div className="bridee-wrapper">
            <h1 className="bridee">
              <span>bridee</span>
              <span className="span">.</span>
            </h1>
          </div>
          <div className="o-match-perfeito">
            O match perfeito para o dia dos seus sonhos
          </div>
        </div>
        <div className="header-right">
          <div className="auth-buttons">
            <div className="login-button">
              <a className="login" onClick={onLOGINTextClick}>
                LOGIN
              </a>
            </div>
            <button className="cadastre" onClick={onCadastreClick}>
              <div className="cadastre-child" />
              <div className="cadastre-se-agora">CADASTRE-SE AGORA</div>
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
