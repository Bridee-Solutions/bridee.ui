import styles from "./WeddingLocations.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import OutdoorLocation from "../../../assets/outdoor_location.svg";
import BeachLocation from "../../../assets/beach_location.svg";
import ChurchLocation from "../../../assets/church_location.svg";
import ResortsLocation from "../../../assets/resorts_location.svg";

library.add(faArrowRight);

const locais = [
  { image: BeachLocation, descricao: "Casamento na praia" },
  { image: OutdoorLocation, descricao: "Casamento ao ar livre" },
  { image: ChurchLocation, descricao: "Casamento na igreja" },
  { image: ResortsLocation, descricao: "Casamento em resorts" },
];

function WeddingLocations() {
  return (
    <section className={styles.wedding_locations}>
      <div className={styles.containerLocais}>
        <div className={styles.containerTituloLocal}>
          <span>Encontre o local perfeito para seu casamento</span>
        </div>
        <div className={styles.slide_wrapper}>
          <div className={styles.container}>
            {locais.map((local, index) => (
              <div className={styles.location} key={index}>
                <div className={styles.containerImage}>
                  <img src={local.image} />
                </div>
                <div className={styles.containerDescr}>
                  <span className={styles.text}>{local.descricao}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.containerBotao}>
          <div className={styles.button_area}>
            <button>
              Ver todos os estilos
              <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeddingLocations;
