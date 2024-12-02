import styles from "./Benefits.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import lupa from "../../../assets/loupe_icon.svg";
import networking from "../../../assets/networking_icon.svg";
import lista from "../../../assets/tasklist_icon.svg";
import pint from "../../../assets/pinterest_icon.svg";

library.add(faChevronRight);

function Benefits() {
  return (
    <section className={styles.benefits} id="benefits">
      <div className={styles.containerbenefits}>
        <div className={styles.containerReg}>
          <div className={styles.start_label}>
            <div className={styles.conteudo}>
              <div className={styles.containerCima}>
                <p>
                  Planeje seu casamento de <br /> forma simples e prática com a
                  bridee.
                </p>
              </div>
              <div className={styles.containerBaixo}>
                <div className={styles.comece}>
                  Comece agora
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.containerBeneficios}>
            <div className={styles.benefits_labels}>
              <div className={styles.icon_benefits}>
                <img src={lupa} />
              </div>
              <div className={styles.textocontainer}>
                <div className={styles.textodesc}>
                  <p>
                    <b>Calcule</b> os custos do seu casamento conforme suas
                    escolhas.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.benefits_labels}>
              <div className={styles.icon_benefits}>
                <img src={networking} />
              </div>
              <div className={styles.textocontainer}>
                <div className={styles.textodesc}>
                  <p>
                    Encontre os melhores <b>assessores</b> para o seu grande
                    dia.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.benefits_labels}>
              <div className={styles.icon_benefits}>
                <img src={lista} />
              </div>
              <div className={styles.textocontainer}>
                <div className={styles.textodesc}>
                  <p>
                    Gerencie e <b>confirme</b> presenças facilmente.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.benefits_labels}>
              <div className={styles.icon_benefits}>
                <img src={pint} />
              </div>
              <div className={styles.textocontainer}>
                <div className={styles.textodesc}>
                  <p>
                    Importe inspirações do <b>Pinterest</b> para o seu
                    planejamento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
