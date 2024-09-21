import PropTypes from "prop-types";
import styles from "../css/Decoration.module.css";

const Decoration = ({ className = "", decoracao1, decorao }) => {
  return (
    <div className={`${styles.decoration} ${className}`}>
      <div className={styles.decorationContent}>
        <div className={styles.decorationIcon}>
          <img className={styles.decoracao1Icon} alt="" src={decoracao1} />
        </div>
        <div className={styles.decorao}>{decorao}</div>
      </div>
    </div>
  );
};

Decoration.propTypes = {
  className: PropTypes.string,
  decoracao1: PropTypes.string,
  decorao: PropTypes.string,
};

export default Decoration;
