import Decoration from "./Decoration";
import PropTypes from "prop-types";
import styles from "../css/FornecedorPorCategoria.module.css";

const FORNECEDORESPORCATEGORIA = ({ className = "" }) => {
  return (
    <section className={`${styles.fornecedoresPorCategoria} ${className}`}>
      <div className={styles.fundoo} />
      <div className={styles.categoryTitle}>
        <h2 className={styles.descubraFornecedoresDe}>
          Descubra fornecedores de casamento por categoria
        </h2>
      </div>
      <div className={styles.categoryGrid}>
        <div className={styles.photography}>
          <div className={styles.photography}>
            <div className={styles.photographyfotosVdeo}>{`Fotos & Vídeo`}</div>
            <img
              className={styles.camera11}
              loading="lazy"
              alt=""
              src="/camera-1-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.categoryPairs}>
          <div className={styles.categoryIcons}>
            <img className={styles.local1Icon} alt="" src="/local-1@2x.png" />
            <div className={styles.categoryNames}>
              <div className={styles.local}>Local</div>
            </div>
          </div>
        </div>
        <div className={styles.music}>
          <div className={styles.musicContent}>
            <img className={styles.muscav21Icon} alt="" src="/muscav2-1@2x.png" />
            <div className={styles.musicName}>
              <div className={styles.msica}>Música</div>
            </div>
          </div>
        </div>
        <div className={styles.cake}>
          <div className={styles.cakeContent}>
            <img
              className={styles.boloDeCasamento1Icon}
              alt=""
              src="/bolodecasamento-1@2x.png"
            />
            <div className={styles.cakeName}>
              <div className={styles.local}>Bolo</div>
            </div>
          </div>
        </div>
        <Decoration decoracao1="/decoracao-1@2x.png" decorao="Decoração" />
        <Decoration
          decoracao1="/restaurante1-1@2x.png"
          decorao="Gastronomia "
        />
        <div className={styles.categoryPairs1}>
          <div className={styles.vestidoDeCasamento11Parent}>
            <img
              className={styles.vestidoDeCasamento11}
              alt=""
              src="/vestidodecasamento-1-1@2x.png"
            />
            <div className={styles.noivaWrapper}>
              <div className={styles.noiva}>Noiva</div>
            </div>
          </div>
        </div>
        <div className={styles.photographyContent}>
          <div className={styles.noivo}>Noivo</div>
          <img className={styles.camisa1Icon} alt="" src="/camisa-1@2x.png" />
        </div>
      </div>
    </section>
  );
};

FORNECEDORESPORCATEGORIA.propTypes = {
  className: PropTypes.string,
};

export default FORNECEDORESPORCATEGORIA;
