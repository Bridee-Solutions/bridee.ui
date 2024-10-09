import styles from './SearchBar.module.css';

function SearchBar({placeholder}) {
  return (
    <div className={styles.search}>
      <div className={styles.search_bar}>
      <input type="text" className={styles.search_input} placeholder={placeholder} />
      <div className={styles.divider}></div>
      <input type="text" className={styles.state_input} placeholder='Estado'/>
      <button className={styles.search_button}>Pesquisar</button>
      </div>
    </div>
  );
}

export default SearchBar;