import PropTypes from "prop-types";
import "../css/venue.module.css";

const Venue = ({ className = "" }) => {
  return (
    <section className={`venue ${className}`}>
      <div className="venue-content">
        <div className="venue-description">
          <div className="encontre-o-local-perfeito-para-wrapper">
            <h2 className="encontre-o-local">
              Encontre o local perfeito para seu casamento
            </h2>
          </div>
          <div className="venue-styles">
            <div className="praia">
              <img
                className="image-icon"
                loading="lazy"
                alt=""
                src="/image@2x.png"
              />
              <div className="style-descriptions">
                <div className="casamento-na-praia">Casamento na praia</div>
              </div>
            </div>
            <div className="praia">
              <img className="image-icon" alt="" src="/image-1@2x.png" />
              <div className="casamento-ao-ar-livre-wrapper">
                <div className="casamento-ao-ar">Casamento ao ar livre</div>
              </div>
            </div>
            <div className="praia">
              <img className="image-icon" alt="" src="/image-2@2x.png" />
              <div className="casamento-na-igreja-wrapper">
                <div className="casamento-ao-ar">Casamento na igreja</div>
              </div>
            </div>
            <div className="resort">
              <img className="image-icon" alt="" src="/image-3@2x.png" />
              <div className="casamento-em-resorts-wrapper">
                <div className="casamento-na-praia">Casamento em resorts</div>
              </div>
            </div>
          </div>
        </div>
        <div className="view-styles-button">
          <button className="ver-todos-os-estilos">
            <div className="ver-todos-os-estilos-child" />
            <div className="view-all-styles">
              <div className="ver-todos-os">Ver todos os estilos</div>
              <img
                className="ionarrow-up-icon"
                alt=""
                src="/ionarrowup@2x.png"
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

Venue.propTypes = {
  className: PropTypes.string,
};

export default Venue;
