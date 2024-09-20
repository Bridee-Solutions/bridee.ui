import PropTypes from "prop-types";
import styles from "./PlannerDescription.module.css";

const PlannerDescription = ({ className = "" }) => {
  return (
    <section className={`${styles.plannerDescription} ${className}`}>
      <div className={styles.textoPlanner}>
        <h2 className={styles.titulo}>Planeje o seu grande dia com facilidade</h2>
        <p className={styles.descricao}>
          O Bridee oferece todas as ferramentas que você precisa para organizar
          o seu casamento dos sonhos, desde a escolha do local até o envio dos
          convites.
        </p>
      </div>
      <div className={styles.imagem}>
        <img src="/planner-image@2x.png" alt="Imagem Planejamento" />
      </div>
    </section>
  );
};

PlannerDescription.propTypes = {
  className: PropTypes.string,
};

export default PlannerDescription;
