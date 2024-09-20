import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from '../css/Features.module.css';

const Features = ({ className = "" }) => {
  const onComeceAgoraClick = useCallback(() => {
    // Planeje seu casamento
  }, []);

  return (
    <section className={`${styles.features} ${className}`}>
      <div className={styles.listaFeatures}>
        <div className={styles.featurePlanejamento}>
          <div className={styles.containerPlanejamento}>
            <div className={styles.itemPlanejamento}></div>
            <div className={styles.textoPlanejamento}>
              Planeje seu casamento de forma simples e prática com o Bridee.
            </div>
            <div className={styles.botaoPlanejamento}>
              <div className={styles.textoBotao} onClick={onComeceAgoraClick}>
                Comece agora
              </div>
              <img className={styles.iconeSeta} alt="" src="/icone-seta.svg" />
            </div>
          </div>
        </div>
        <div className={styles.calculadoraCustos}>
          <div className={styles.containerCalculadora}>
            <div className={styles.iconeCalculadora}>
              <img
                className={styles.imagemCalculadora}
                alt=""
                src="/icone-lupa@2x.png"
              />
            </div>
            <div className={styles.textoCalculadora}>
              <b>Calcule</b> os custos do seu casamento conforme suas escolhas.
            </div>
          </div>
        </div>
        <div className={styles.listaTarefas}>
          <img
            className={styles.iconeListaTarefas}
            alt=""
            src="/lista-tarefas@2x.png"
          />
          <div className={styles.textoListaTarefas}>
            Gerencie e <b>confirme</b> presenças facilmente.
          </div>
        </div>
      </div>
    </section>
  );
};

Features.propTypes = {
  className: PropTypes.string,
};

export default Features;
