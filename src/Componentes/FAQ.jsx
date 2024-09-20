import PropTypes from "prop-types";
import styles from "../css/FAQ.module.css";

const FAQ = ({ className = "" }) => {
  return (
    <section className={`${styles.faq} ${className}`}>
      <div className={styles.tituloFaq}>
        <h1 className={styles.perguntasFrequentes}>Perguntas Frequentes</h1>
      </div>
      <div className={styles.containerPerguntas}>
        <div className={styles.pergunta}>
          <div className={styles.conteudoPergunta}>
            <div className={styles.textoPergunta}>O que é o Bridee?</div>
            <div className={styles.iconePergunta}>
              <img className={styles.iconeSeta} alt="" src="/seta@2x.png" />
            </div>
          </div>
        </div>
        <div className={styles.pergunta}>
          <div className={styles.conteudoPergunta}>
            <div className={styles.textoPergunta}>Quem pode se cadastrar?</div>
            <div className={styles.iconePergunta}>
              <img className={styles.iconeSeta} alt="" src="/seta@2x.png" />
            </div>
          </div>
        </div>
        <div className={styles.pergunta}>
          <div className={styles.conteudoPergunta}>
            <div className={styles.textoPergunta}>
              Que vantagens o Bridee oferece?
            </div>
            <div className={styles.iconePergunta}>
              <img className={styles.iconeSeta} alt="" src="/seta@2x.png" />
            </div>
          </div>
        </div>
        <div className={styles.pergunta}>
          <div className={styles.conteudoPergunta}>
            <div className={styles.textoPergunta}>
              Como posso me cadastrar como assessor?
            </div>
            <div className={styles.iconePergunta}>
              <img className={styles.iconeSeta} alt="" src="/seta@2x.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FAQ.propTypes = {
  className: PropTypes.string,
};

export default FAQ;
