import React from 'react';
import styles from '../css/SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Pesquisar por nome ou categoria de serviço" />
      <input type="text" placeholder="Estado" />
      <button>Pesquisar</button>
    </div>
  );
};

export default SearchBar;
