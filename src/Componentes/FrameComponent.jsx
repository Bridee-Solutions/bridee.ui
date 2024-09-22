import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "../css/FrameComponent.module.css";

const FrameComponent = ({
  className = "",
  propWidth,
  propAlignSelf,
  networking1,
  propHeight,
  propWidth1,
  encontreOsMelhores,
  assessores,
  paraOSeuGrandeDia,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const featuresIconsStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const encontreOsMelhoresContainerStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth1,
    };
  }, [propHeight, propWidth1]);

  return (
    <div className={`${styles.rectangleParent} ${className}`} style={frameDivStyle}> {/* Alterado para styles.rectangleParent */}
      <div className={styles.frameChild} />
      <div className={styles.featuresIcons} style={featuresIconsStyle}>
        <img
          className={styles.networking1Icon}
          loading="lazy"
          alt=""
          src={networking1}
        />
      </div>
      <div
        className={styles.encontreOsMelhoresContainer}
        style={encontreOsMelhoresContainerStyle}
      >
        <span className={styles.encontreOsMelhores}>{encontreOsMelhores}</span>
        <b>{assessores}</b>
        <span className={styles.paraOSeu}>{paraOSeuGrandeDia}</span>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  networking1: PropTypes.string,
  encontreOsMelhores: PropTypes.string,
  assessores: PropTypes.string,
  paraOSeuGrandeDia: PropTypes.string,

  /** estilo props */
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth1: PropTypes.any,
};

export default FrameComponent;
