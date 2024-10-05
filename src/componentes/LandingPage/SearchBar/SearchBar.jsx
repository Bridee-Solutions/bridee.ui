import styles from './SearchBar.module.css';

function SearchBar() {
  return (
    <div className={styles.search}>
      <div className={styles.search_bar}>
      <input type="text" className={styles.search_input} placeholder='Pesquisar por nome ou categoria de serviço' />
      <div className={styles.divider}></div>
      <input type="text" className={styles.state_input} placeholder='Estado'/>
      <button className={styles.search_button}>Pesquisar</button>
      </div>
    </div>
  );
}

export default SearchBar;