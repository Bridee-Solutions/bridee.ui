import PropTypes from "prop-types";
import "../css/GroupComponent.module.css";

const GroupComponent = ({ className = "" }) => {
  return (
    <section className={`imagem-parent ${className}`}>
      <img className="imagem-icon1" alt="" src="/imagem@2x.png" />
      <div className="hero-content">
        <img
          className="pngwingcom-1-1"
          loading="lazy"
          alt=""
          src="/pngwingcom-1-1@2x.png"
        />
        <div className="hero-description">
          <img className="pngwingcom-1-2" alt="" src="/pngwingcom-1-1@2x.png" />
          <b className="simples-organizado-sem-container">
            <p className="simples-organizado-sem">
              Simples. Organizado. Sem estresse.
            </p>
          </b>
        </div>
        <h1 className="titulo-da-header">
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
