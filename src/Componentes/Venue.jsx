import PropTypes from "prop-types";
import styles from "../css/Venue.module.css";

const Venue = ({ className = "" }) => {
  return (
    <section className={`${styles.venue} ${className}`}>
      <div className={styles.conteudoVenue}>
        <div className={styles.descricaoVenue}>
          <h2 className={styles.tituloVenue}>
            Encontre o local perfeito para seu casamento
          </h2>
          <div className={styles.opcoesVenue}>
            <div className={styles.opcao}>
              <img
                className={styles.imagemOpcao}
                alt="Praia"
                src="/imagem-praia@2x.png"
              />
              <div className={styles.descricaoOpcao}>Casamento na praia</div>
            </div>
            <div className={styles.opcao}>
              <img
                className={styles.imagemOpcao}
                alt="Ar livre"
                src="/imagem-ar-livre@2x.png"
              />
              <div className={styles.descricaoOpcao}>Casamento ao ar livre</div>
            </div>
            <div className={styles.opcao}>
              <img
                className={styles.imagemOpcao}
                alt="Igreja"
                src="/imagem-igreja@2x.png"
              />
              <div className={styles.descricaoOpcao}>Casamento na igreja</div>
            </div>
            <div className={styles.opcao}>
              <img
                className={styles.imagemOpcao}
                alt="Resort"
                src="/imagem-resort@2x.png"
              />
              <div className={styles.descricaoOpcao}>Casamento em resorts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Venue.propTypes = {
  className: PropTypes.string,
};

export default Venue;
