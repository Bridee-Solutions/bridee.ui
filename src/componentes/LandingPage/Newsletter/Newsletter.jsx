import styles from "./Newsletter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";

library.add(faEnvelope);

function Newsletter() {
  return (
    <section className={styles.newsletter}>
      <div className={styles.container}>
        <div className={styles.containerTitulo}>
          <span>A maneira fácil de planejar</span>
        </div>
        <div className={styles.containerBoxInput}>
          <div className={styles.container_input}>
            <div className={styles.container_input_email}>
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2xl"
                style={{
                  color: "#494949",
                  fontSize: "1.3rem",
                  padding: "0.2rem",
                }}
              />
              <input type="text" placeholder=" Seu endereço de email" />
            </div>
            <div className={styles.containerbotao}>
              <div className={styles.botao}>
                <span>COMECE A PLANEJAR</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.containerConvites}>
          <div className={styles.contReg}>
            <span>
              Já tem uma conta? <a href="">Entrar</a>
            </span>
            <span>
              Você é um assessor? <a href="">Crie uma conta aqui</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
