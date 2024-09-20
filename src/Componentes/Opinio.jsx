import PropTypes from "prop-types";
import styles from "../css/Opinio.module.css";

const Opinio = ({ bxsquoteLeft, bxsquoteLeft1, image, nome, descricao }) => {
  return (
    <div className={styles.opinio}>
      <img className={styles.iconeCita} alt="Citação" src={bxsquoteLeft} />
      <img className={styles.iconeCita1} alt="Citação" src={bxsquoteLeft1} />
      <img className={styles.imagemPerfil} alt={nome} src={image} />
      <div className={styles.texto}>
        <div className={styles.nome}>{nome}</div>
        <div className={styles.descricao}>{descricao}</div>
      </div>
    </div>
  );
};

Opinio.propTypes = {
  bxsquoteLeft: PropTypes.string.isRequired,
  bxsquoteLeft1: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
};

export default Opinio;
