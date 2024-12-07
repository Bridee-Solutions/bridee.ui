import Navbar from "../../componentes/Navbar/Navbar";
import styles from "./PlanejadorAssentos.module.css";
function PlanejadorAssentos() {
  return (
    <div className={styles.all}>
      <Navbar />
      <div className={styles.breve}>
        <span> Em breve.. </span>
        <p> Seu evento será ainda mais especial com nosso recurso de planejamento de assentos!  </p>
        <p> Fique ligado para facilitar a organização do seu grande dia. </p>
      </div>
    </div>
  );
}

export default PlanejadorAssentos;
