import React from 'react';
import styles from '../css/SearchBar.module.css';

function SearchBar() {
  return (
    <form className={styles.search_bar}>
      <div className={styles.search_inputs}>
        <label htmlFor={styles.search_input} className={styles.visually_hidden}>Pesquisar por nome ou categoria de serviço</label>
        <input
          id={styles.search_input}
          type="text"
          className={styles.search_input}
          placeholder="Pesquisar por nome ou categoria de serviço"
        />
        <div className={styles.divider} />
        <label htmlFor={styles.state_input} className={styles.visually_hidden}>Estado</label>
        <input
          id={styles.state_input}
          type="text"
          className={styles.state_input}
          placeholder="Estado"
        />
      </div>
      <button type="submit" className={styles.search_button}>Pesquisar</button>
     
    </form>
  );
}

export default SearchBar;