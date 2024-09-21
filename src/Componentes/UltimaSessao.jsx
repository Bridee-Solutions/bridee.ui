import { useCallback } from "react";
import PropTypes from "prop-types";
import "../css/UltimaSessao.module.css";

const LTIMASESSO = ({ className = "" }) => {
  const onBOTOContainerClick = useCallback(() => {
    // Please sync "Página de cadastro" to the project
  }, []);

  const onJTemUmaClick = useCallback(() => {
    // Please sync "Pagina de Login" to the project
  }, []);

  const onVocUmClick = useCallback(() => {
    // Please sync "Pagina de Assessores - Cadastro" to the project
  }, []);

  return (
    <div className={`ltima-sesso ${className}`}>
      <img className="opcao-2-icon" alt="" src="/opcao-2@2x.png" />
      <img className="opcao-1-icon" alt="" />
      <div className="footer-slogan-container">
        <h1 className="a-maneira-fcil">A maneira fácil de planejar</h1>
        <div className="footer-form">
          <div className="caixa">
            <div className="caixa-child" />
            <div className="input-wrapper">
              <div className="input-inner-wrapper">
                <div className="input-icon-container">
                  <img
                    className="icon-email"
                    loading="lazy"
                    alt=""
                    src="/icon-email.svg"
                  />
                </div>
                <div className="seu-endereo-de">Seu endereço de email</div>
              </div>
            </div>
            <div className="boto2" onClick={onBOTOContainerClick}>
              <div className="boto-inner" />
              <div className="comece-a-planejar">COMECE A PLANEJAR</div>
            </div>
          </div>
        </div>
      </div>
      <div className="account-options">
        <div className="login-link-parent">
          <div className="login-link">
            <div className="j-tem-uma-container" onClick={onJTemUmaClick}>
              <span className="j-tem-uma">{`Já tem uma conta? `}</span>
              <b>Entrar</b>
            </div>
          </div>
          <div className="voc-um-container" onClick={onVocUmClick}>
            <span className="j-tem-uma">{`Você é um assessor? `}</span>
            <b>Crie uma conta aqui</b>
          </div>
        </div>
      </div>
    </div>
  );
};

LTIMASESSO.propTypes = {
  className: PropTypes.string,
};

export default LTIMASESSO;
