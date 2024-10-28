import styles from "./WeddingPlanner.module.css";

function WeddingPlannerCTA() {
  return (
    <section className={styles.wedding_planner}>
      <div className={styles.container}>
        <div className={styles.containerConteudo}>
          <div className={styles.containerTitulo}>
            <span>Você é um assessor de</span>
            <span> casamento?</span>
          </div>
          <div className={styles.containerDescricao}>
            <span>
              Gerencie sua agenda e encontre noivas de forma fácil e rápida.
            </span>

            <span>
              Nossa plataforma conecta você a casais e oferece ferramentas para
              organizar todos os detalhes do casamento.
            </span>

            <span>Facilite seu trabalho e crie momentos inesquecíveis.</span>
          </div>

          <div className={styles.containerBotao}>
            <button>Comece agora!</button>
          </div>
        </div>
        <div className={styles.containerConvite}>
          <span>
            Você já tem um perfil de assessor? <a href="">Faça login agora</a>
          </span>
        </div>
      </div>
    </section>
  );
}

export default WeddingPlannerCTA;
