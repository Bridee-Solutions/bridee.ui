import PropTypes from "prop-types";
import styles from "../css/GroupComponente.module.css";

const GroupComponente = ({ className = "", imagemGrupo, textoGrupo }) => {
  return (
    <div className={`${styles.groupComponente} ${className}`}>
      <img className={styles.imagemGrupo} alt="Imagem do Grupo" src={imagemGrupo} />
      <div className={styles.textoGrupo}>{textoGrupo}</div>
    </div>
  );
};

GroupComponente.propTypes = {
  className: PropTypes.string,
  imagemGrupo: PropTypes.string.isRequired,
  textoGrupo: PropTypes.string.isRequired,
};

export default GroupComponente;
