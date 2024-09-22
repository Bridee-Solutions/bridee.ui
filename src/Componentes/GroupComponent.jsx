import PropTypes from "prop-types";
import styles from "../css/GroupComponent.module.css";

const GroupComponent = ({ className = "" }) => {
  return (
    <section className={`${styles.imagemParent} ${className}`}>
      <img className={styles.imagemIcon1} alt="" src="/imagem@2x.png" />
      <div className={styles.heroContent}>
        <img
          className={styles.pngwingcom11}
          loading="lazy"
          alt=""
          src="/pngwingcom-1-1@2x.png"
        />
        <div className={styles.heroDescription}>
          <img className={styles.pngwingcom12} alt="" src="/pngwingcom-1-1@2x.png" />
          <b className={styles.simplesOrganizadoSemContainer}>
            <p className={styles.simplesOrganizadoSem}>
              Simples. Organizado. Sem estresse.
            </p>
          </b>
        </div>
        <h1 className={styles.tituloDaHeader}>
          Facilitamos o encontro entre noivas e assessores para casamentos
          perfeitos
        </h1>
      </div>
    </section>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
