import PropTypes from "prop-types";
import styles from "../css/FornecedorPorCategoria.module.css";

const FornecedorPorCategoria = ({ className = "" }) => {
  return (
    <section className={`${styles.fornecedorPorCategoria} ${className}`}>
      <div className={styles.fundo}></div>
      <div className={styles.tituloCategoria}>
        <h2 className={styles.descubraFornecedores}>
          Descubra fornecedores de casamento por categoria
        </h2>
      </div>
      <div className={styles.gridCategorias}>
        <div className={styles.categoriaItem}>
          <div className={styles.conteudoCategoria}>
            <div className={styles.tituloCategoriaItem}>Fotos & Vídeo</div>
            <img
              className={styles.iconeCategoria}
              alt="Câmera"
              src="/camera-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.categoriaItem}>
          <div className={styles.conteudoCategoria}>
            <div className={styles.tituloCategoriaItem}>Local</div>
            <img
              className={styles.iconeCategoria}
              alt="Local"
              src="/local-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.categoriaItem}>
          <div className={styles.conteudoCategoria}>
            <div className={styles.tituloCategoriaItem}>Música</div>
            <img
              className={styles.iconeCategoria}
              alt="Música"
              src="/musica-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.categoriaItem}>
          <div className={styles.conteudoCategoria}>
            <div className={styles.tituloCategoriaItem}>Bolo</div>
            <img
              className={styles.iconeCategoria}
              alt="Bolo"
              src="/bolo-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FornecedorPorCategoria.propTypes = {
  className: PropTypes.string,
};

export default FornecedorPorCategoria;
