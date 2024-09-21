import PropTypes from "prop-types";
import "../css/SearchBarContainer.module.css";

const SearchBarContainer = ({ className = "" }) => {
  return (
    <section className={`search-bar-container ${className}`}>
      <div className="barra-de-pesquisa">
        <div className="barra-de-pesquisa-child" />
        <div className="search-input">
          <div className="search-placeholder">
            <div className="pesquisar-por-nome-ou-categori-wrapper">
              <div className="pesquisar-por-nome">
                Pesquisar por nome ou categoria de serviço
              </div>
            </div>
            <div className="search-location">
              <div className="location-divider" />
              <div className="location-input">
                <div className="pesquisar-por-nome">Estado</div>
              </div>
            </div>
          </div>
        </div>
        <button className="search-button">
          <div className="search-button-child" />
          <div className="pesquisar">Pesquisar</div>
        </button>
      </div>
    </section>
  );
};

SearchBarContainer.propTypes = {
  className: PropTypes.string,
};

export default SearchBarContainer;
