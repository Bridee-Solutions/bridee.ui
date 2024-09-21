import { useMemo } from "react";
import PropTypes from "prop-types";
import "../css/Opinio.module.css";

const Opinio = ({
  className = "",
  bxsquoteLeft,
  bxsquoteLeft1,
  image,
  propPadding,
  isabelaCambui,
  noiva,
  group8,
  descrioDeQuemTop,
}) => {
  const clientNameContainersStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={`opinio-3 ${className}`}>
      <div className="opinio-3-child" />
      <div className="lorem-ipsum-dolor">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        porttitor non eros at auctor. Aliquam erat volutpat. Pellentesque ante
        diam, accumsan vitae est sed, suscipit consequat metus.
      </div>
      <img
        className="bxsquote-left-icon"
        loading="lazy"
        alt=""
        src={bxsquoteLeft}
      />
      <div className="quote-icon-containers">
        <div className="quote-icon-inner-containers">
          <img className="bxsquote-left-icon1" alt="" src={bxsquoteLeft1} />
          <div className="client-info-containers">
            <div className="client-info-inner-containers">
              <img className="image-icon4" alt="" src={image} />
              <div
                className="client-name-containers"
                style={clientNameContainersStyle}
              >
                <div className="client-name-inner-containers">
                  <div className="isabela-cambui">{isabelaCambui}</div>
                  <div className="noiva1">{noiva}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="opinio-3-item" alt="" src={group8} />
    </div>
  );
};

Opinio.propTypes = {
  className: PropTypes.string,
  bxsquoteLeft: PropTypes.string,
  bxsquoteLeft1: PropTypes.string,
  image: PropTypes.string,
  isabelaCambui: PropTypes.string,
  noiva: PropTypes.string,
  group8: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  descrioDeQuemTop: PropTypes.any,
};

export default Opinio;
