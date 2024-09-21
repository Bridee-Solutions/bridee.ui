import { useMemo } from "react";
import PropTypes from "prop-types";
import "../css/FrameComponent.module.css";

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
    <div className={`rectangle-parent ${className}`} style={frameDivStyle}>
      <div className="frame-child" />
      <div className="features-icons" style={featuresIconsStyle}>
        <img
          className="networking-1-icon"
          loading="lazy"
          alt=""
          src={networking1}
        />
      </div>
      <div
        className="encontre-os-melhores-container"
        style={encontreOsMelhoresContainerStyle}
      >
        <span className="encontre-os-melhores">{encontreOsMelhores}</span>
        <b>{assessores}</b>
        <span className="para-o-seu">{paraOSeuGrandeDia}</span>
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

  /** Style props */
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth1: PropTypes.any,
};

export default FrameComponent;
