import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "../css/UltimaSessao.module.css";

const UltimaSessao = ({ className = "" }) => {
  const onBotaoClick = useCallback(() => {
    // "Comece a planejar"
  }, []);

  const onJaTemContaClick = useCallback(() => {
    // "Já tem uma conta? Entrar"
  }, []);

  const onCadastroAssessorClick = useCallback(() => {
    // "Você é um assessor? Crie uma conta aqui"
  }, []);

  return (
    <section className={`${styles.ultimaSessao} ${className}`}>
      <img className={styles.imagemSessao} alt="" src="/imagem-sessao@2x.png" />
      <div className={styles.containerSlogan}>
        <h1 className={styles.slogan}>A maneira fácil de planejar</h1>
        <div className={styles.containerFormulario}>
          <div className={styles.inputEmail}>
            <img className={styles.iconeEmail} alt="" src="/icone-email.svg" />
            <input type="email" placeholder="Seu endereço de email" />
          </div>
          <button className={styles.botaoPlanejar} onClick={onBotaoClick}>
            Comece a planejar
          </button>
        </div>
      </div>
      <div className={styles.opcoesConta}>
        <div className={styles.jaTemConta} onClick={onJaTemContaClick}>
          Já tem uma conta? <b>Entrar</b>
        </div>
        <div className={styles.cadastroAssessor} onClick={onCadastroAssessorClick}>
          Você é um assessor? <b>Crie uma conta aqui</b>
        </div>
      </div>
    </section>
  );
};

UltimaSessao.propTypes = {
  className: PropTypes.string,
};

export default UltimaSessao;
