import styles from "./CategoriaCards.module.css";
import Pagination from "@mui/material/Pagination";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../Card/Card";
import { useEffect } from "react";

function CategoriaCards({
  cards,
  onCardClick,
  onBack,
  totalPages,
  onPageChange,
}) {

  useEffect(() => {
    console.log(cards);
    
  }, [])
  return (
    <div className={styles.pagina}>
      <div className={styles.containerOpcoes}>
        <div onClick={onBack} className={styles.setaVolta}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <span className={styles.voltar}>VOLTAR</span>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.cadaCard}>
            {cards.content?.map((card, index) => (
              <Card
                key={index}
                id={card.id}
                nome={card.nome}
                bairro={card.bairro}
                cidade={card.cidade}
                descricao={card.visaoGeral}
                imageUrl={card.imagemPrincipal}
                onClick={() => onCardClick(card)}
              />
            ))}
          </div>

          <div className={styles.paginacao}>
            <Pagination count={totalPages} onChange={onPageChange} shape="rounded"
              sx={{
                "& .MuiPaginationItem-root.Mui-selected": {
                  backgroundColor: "#DD7B78",
                  color: "#FFFFFF",
                },
              }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriaCards;
