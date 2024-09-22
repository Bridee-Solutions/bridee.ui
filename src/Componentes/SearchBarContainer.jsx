import PropTypes from "prop-types";
import styles from "../css/searchBarContainer.module.css";

const searchBarContainer = ({ className = "" }) => {
  return (
    <section className={`${styles.searchBarContainer} ${className}`}>
      <div className={styles.barraDePesquisa}>
        <div className={styles.barraDePesquisaChild}/>
        <div className={styles.searchInput}>
          <div className={styles.searchPlaceholder}>
            <div className={styles.pesquisarPorNomeOuCategoriWrapper}>
              <div className={styles.pesquisarPorNome}>
                Pesquisar por nome ou categoria de serviço
              </div>
            </div>
            <div className={styles.searchLocation}>
              <div className={styles.locationDivider} />
              <div className={styles.locationInput}>
                <div className={styles.pesquisarPorNome}>Estado</div>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.searchButton}>
          <div className={styles.searchButtonChild} />
          <div className={styles.pesquisar}>Pesquisar</div>
        </button>
      </div>
    </section>
  );
};

searchBarContainer.propTypes = {
  className:PropTypes.string,
};

export default searchBarContainer;
