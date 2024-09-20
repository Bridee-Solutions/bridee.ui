import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "../css/ContainerVestido.module.css";

const ContainerVestido = ({ className = "" }) => {
  const onCard2ImageClick = useCallback(() => {
    // Função para clicar na segunda imagem do card
  }, []);

  return (
    <section className={`${styles.containerVestido} ${className}`}>
    <div className={styles.detalheAtrs}>
      <div className={styles.dressShape}>
        <div className={styles.dressShapeChild} />
        <img className={styles.dressShapeItem} alt="" src="/ellipse-40.svg" />
      </div>
    </div>
    <div className={styles.dressDescription}>
      <div className={styles.dressSlogan}>
        <div className={styles.exploreVestidosContainer}>
          <h2 className={styles.exploreVestidos}>Explore nossa seleção de vestidos de noiva</h2>
          <div className={styles.desdeOClassico}>
            Desde o clássico ao moderno, temos o vestido ideal para você.
          </div>
        </div>
        <div className={styles.boto}>
          <div className={styles.botoChild} />
          <div className={styles.buscarVestidos}>Buscar vestidos</div>
        </div>
      </div>
    </div>
    <div className={styles.container}>
      <div className={styles.dressCards}>
        <img className={styles.cardIcon} alt="" src="/card-1@2x.png" />
        <img className={styles.cardIcon} alt="" src="/card-2@2x.png" onClick={onCard2ImageClick} />
        <img className={styles.cardIcon} alt="" src="/card-3@2x.png" />
      </div>
    </div>
  </section>
);
};

ContainerVestido.propTypes = {
  className: PropTypes.string,
};

export default ContainerVestido;
