import PropTypes from "prop-types";
import styles from "../css/FrameComponente.module.css";

const FrameComponente = ({
  className = "",
  networking1,
  encontreOsMelhores,
  assessores,
  paraOSeuGrandeDia,
  propWidth = "auto",
  propHeight = "auto",
}) => {
  return (
    <div
      className={`${styles.frameComponente} ${className}`}
      style={{ width: propWidth, height: propHeight }}
    >
      <img className={styles.iconeNetworking} alt="" src={networking1} />
      <div className={styles.textoComponente}>
        <span className={styles.encontreTexto}>
          {encontreOsMelhores}
          <b>{assessores}</b>
        </span>
        <span className={styles.paraTexto}>{paraOSeuGrandeDia}</span>
      </div>
    </div>
  );
};

FrameComponente.propTypes = {
  className: PropTypes.string,
  networking1: PropTypes.string.isRequired,
  encontreOsMelhores: PropTypes.string.isRequired,
  assessores: PropTypes.string.isRequired,
  paraOSeuGrandeDia: PropTypes.string.isRequired,
  propWidth: PropTypes.string,
  propHeight: PropTypes.string,
};

export default FrameComponente;
