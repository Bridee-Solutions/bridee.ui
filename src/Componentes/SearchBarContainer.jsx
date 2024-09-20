import PropTypes from "prop-types";
import styles from "../css/SearchBarContainer.module.css";

const SearchBarContainer = ({ placeholder = "Buscar...", onSearch }) => {
  return (
    <div className={styles.searchBarContainer}>
      <input
        className={styles.inputBusca}
        type="text"
        placeholder={placeholder}
        onChange={onSearch}
      />
      <button className={styles.botaoBusca}>
        <img src="/icone-busca.svg" alt="Buscar" />
      </button>
    </div>
  );
};

SearchBarContainer.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBarContainer;
