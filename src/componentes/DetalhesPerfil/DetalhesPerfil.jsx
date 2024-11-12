import FAQSection from "../../componentes/FAQSection/Faq.jsx";
import OrcamentoCard from "../../componentes/OrcamentoCard/OrcamentoCard.jsx";
import ImageGallery from "../../componentes/ImageGallery/ImageGallery.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./DetalhesPerfil.module.css";

const DetalhesPerfil = ({ selectedCard, handleBack, cardsData }) => {
    return (
      <div className={styles.containerAssessor}>
        <div className={styles.containerConteudo}>
          <div className={styles.containerVoltar}>
            <div onClick={handleBack} className={styles.voltar}>
              <FontAwesomeIcon icon={faArrowLeft} className={styles.iconvolt} />
              <span onClick={handleBack}>VOLTAR</span>
            </div>
          </div>
          <div className={styles.containerImagens}>
            <ImageGallery images={selectedCard?.images || []} />
          </div>
          <div className={styles.todoconteudo}>
            <div className={styles.esquerda}>
              <div className={styles.containerApresent}>
                {cardsData.length > 0 && (
                  <FAQSection perfilGeral={cardsData[0]} selectedCard={selectedCard} />
                )}
              </div>
            </div>
            <div className={styles.direita}>
              <div className={styles.regOrc}>
                <OrcamentoCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default DetalhesPerfil;