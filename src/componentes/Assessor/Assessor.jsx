import styles from "./Assessor.module.css";
import iconeAssessor from "./assets/assessor.svg";

function Assessor({ nome, descricao }) {
  return (
    <div className={styles.container}>
      <div className={styles.assessorCard}>
        <div className={styles.icone}>
          <img src={iconeAssessor} alt={nome} />
        </div>
        <div className={styles.textos}>
          <h3 className={styles.nome}>Assessor</h3>
          <p className={styles.descricao}>{descricao}</p>
          <a href="#" className={styles.gerenciar}>
            Adicionar
          </a>
        </div>
      </div>
    </div>
  );
}

export default Assessor;
