import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "../css/UltimaSessao.module.css"

const UltimaSessao = ({ className = "" }) => {
  const onBOTOContainerClick = useCallback(() => {
    //Página de cadastro
  }, []);

  const onJTemUmaClick = useCallback(() => {
    // Pagina de Login
  }, []);

  const onVocUmClick = useCallback(() => {
    // Pagina de Assessores - Cadastro
  }, []);

  return (
    <div className={`${styles.ultimaSessao} ${className}`}>
      <img className={styles.opcao2Icon} alt="" src="/opcao-2@2x.png" />
      <img className={styles.opcao1Icon} alt="" />
      <div className={styles.footerSloganContainer}>
        <h1 className={styles.aManeiraFcil}>A maneira fácil de planejar</h1>
        <div className={styles.footerForm}>
          <div className={styles.caixa}>
            <div className={styles.caixaChild} />
            <div className={styles.inputWrapper}>
              <div className={styles.inputInnerWrapper}>
                <div className={styles.inputIconContainer}>
                  <img
                    className={styles.iconEmail}
                    loading="lazy"
                    alt=""
                    src="/icon-email.svg"
                  />
                </div>
                <div className={styles.seuEndereoDe}>Seu endereço de email</div>
              </div>
            </div>
            <div className={styles.boto2} onClick={onBOTOContainerClick}>
              <div className={styles.botoInner} />
              <div className={styles.comeceAPlanejar}>COMECE A PLANEJAR</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.accountOptions}>
        <div className={styles.loginLinkParent}>
          <div className={styles.loginLink}>
            <div className={styles.jTemUmaContainer} onClick={onJTemUmaClick}>
              <span className={styles.jTemUma}>{`Já tem uma conta? `}</span>
              <b>Entrar</b>
            </div>
          </div>
          <div className={styles.vocUmContainer} onClick={onVocUmClick}>
            <span className={styles.jTemUma}>{`Você é um assessor? `}</span>
            <b>Crie uma conta aqui</b>
          </div>
        </div>
      </div>
    </div>
  );
};

UltimaSessao.propTypes = {
  className: PropTypes.string,
};

export default UltimaSessao;
