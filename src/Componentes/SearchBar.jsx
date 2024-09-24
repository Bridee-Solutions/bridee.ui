import React from "react";
import styles from '../css/SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Pesquisar por nome ou categoria de serviço"
      />
      <input
        type="text"
        className={styles.stateInput}
        placeholder="Estado"
      />
      <button className={styles.searchButton}>Pesquisar</button>
    </div>
  );
};

export default SearchBar;
