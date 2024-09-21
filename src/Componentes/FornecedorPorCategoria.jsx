import Decoration from "./Decoration";
import PropTypes from "prop-types";
import "../css/FornecedorPorCategoria.module.css";

const FORNECEDORESPORCATEGORIA = ({ className = "" }) => {
  return (
    <section className={`fornecedores-por-categoria ${className}`}>
      <div className="fundoo" />
      <div className="category-title">
        <h2 className="descubra-fornecedores-de">
          Descubra fornecedores de casamento por categoria
        </h2>
      </div>
      <div className="category-grid">
        <div className="photography">
          <div className="photography">
            <div className="photographyfotos-vdeo">{`Fotos & Vídeo`}</div>
            <img
              className="camera-1-1"
              loading="lazy"
              alt=""
              src="/camera-1-1@2x.png"
            />
          </div>
        </div>
        <div className="category-pairs">
          <div className="category-icons">
            <img className="local-1-icon" alt="" src="/local-1@2x.png" />
            <div className="category-names">
              <div className="local">Local</div>
            </div>
          </div>
        </div>
        <div className="music">
          <div className="music-content">
            <img className="muscav2-1-icon" alt="" src="/muscav2-1@2x.png" />
            <div className="music-name">
              <div className="msica">Música</div>
            </div>
          </div>
        </div>
        <div className="cake">
          <div className="cake-content">
            <img
              className="bolo-de-casamento-1-icon"
              alt=""
              src="/bolodecasamento-1@2x.png"
            />
            <div className="cake-name">
              <div className="local">Bolo</div>
            </div>
          </div>
        </div>
        <Decoration decoracao1="/decoracao-1@2x.png" decorao="Decoração" />
        <Decoration
          decoracao1="/restaurante1-1@2x.png"
          decorao="Gastronomia "
        />
        <div className="category-pairs1">
          <div className="vestido-de-casamento-1-1-parent">
            <img
              className="vestido-de-casamento-1-1"
              alt=""
              src="/vestidodecasamento-1-1@2x.png"
            />
            <div className="noiva-wrapper">
              <div className="noiva">Noiva</div>
            </div>
          </div>
        </div>
        <div className="photography-content">
          <div className="noivo">Noivo</div>
          <img className="camisa-1-icon" alt="" src="/camisa-1@2x.png" />
        </div>
      </div>
    </section>
  );
};

FORNECEDORESPORCATEGORIA.propTypes = {
  className: PropTypes.string,
};

export default FORNECEDORESPORCATEGORIA;
