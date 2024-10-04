import styles from "./WeddingPlanner.module.css";

function WeddingPlannerCTA() {
    return (
      <section className={styles.wedding_planner}>
        <div className={styles.container}>
          <h1>Você é um assessor de casamento?</h1>
          <div>  
            <h4>
            Gerencie sua agenda e encontre noivas de forma fácil e <br />
            rápida. <br /> <br />
            Nossa plataforma conecta você a casais e oferece <br /> 
            ferramentas para organizar todos os detalhes do casamento. <br /> <br />
            Facilite seu trabalho e crie momentos inesquecíveis.
            </h4>
          </div>
          <div>
            <button>Comece agora!</button>
          </div>
          <div>
            <p>
              Você já tem um perfil de assessor?  <a href="">Faça login agora</a>
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  export default WeddingPlannerCTA;