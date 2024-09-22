import PropTypes from "prop-types";
import styles from "../css/PlannerDescription.module.css";

const PlannerDescription = ({ className = "" }) => {
  return (
    <div className={`${styles.plannerDescription} ${className}`}>
      <h1 className={styles.vocUm}>Você é um assessor de casamento?</h1>
      <div className={styles.imagem3Parent}>
        <img
          className={styles.imagem3Icon}
          loading="lazy"
          alt=""
          src="/imagem3@2x.png"
        />
        <div className={styles.gerencieSuaAgendaContainer}>
          <span>
            <p className={styles.gerencieSuaAgenda}>{`Gerencie sua agenda e encontre noivas de forma fácil e rápida. `}</p>
            <p className={styles.gerencieSuaAgenda}>
              Nossa plataforma conecta você a casais e oferece ferramentas para
              organizar todos os detalhes do casamento.
            </p>
            <p className={styles.faciliteSeuTrabalho}>
              Facilite seu trabalho e crie momentos inesquecíveis.
            </p>
          </span>
        </div>
      </div>
      <button className={styles.boto1}>
        <div className={styles.botoItem} />
        <div className={styles.comeceAgora1}>COMECE AGORA!</div>
      </button>
      <div className={styles.vocJTemContainer}>
        <span className={styles.vocJTem}>{`Você já tem um perfil de assessor? `}</span>
        <span className={styles.faaLoginAgora}>Faça login agora</span>
      </div>
    </div>
  );
};

PlannerDescription.propTypes = {
  className: PropTypes.string,
};

export default PlannerDescription;
