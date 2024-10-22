import styles from "../../pages/Calculadora/Calculadora.module.css";
import "./CategoriaCalculadora.module.css";
import "../../index.css";
import add from "../../assets/calculadora/add.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Draggable } from "@hello-pangea/dnd";
import {
  faChevronDown,
  faChevronUp,
  faGripVertical,
} from "@fortawesome/free-solid-svg-icons";

function CategoriaCalc({
  categoria,
  catIndex,
  toggleCategoria,
  handleInputChange,
  adicionarItem,
}) {
  return (
    <div className={styles.categoria}>
      <div className={styles.cabecalhoCategoria}>
        <div className={styles.containerCat}>
          <button
            className={styles.setaCategoria}
            onClick={() => toggleCategoria(catIndex)}
          >
            {categoria.aberta ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </button>

          <div className={styles.iconeCategoria}>
            <img src={categoria.icon} alt="Ícone da Categoria" />
          </div>

          <div className={styles.categoriaNome}>{categoria.nome}</div>
        </div>
      </div>

      {categoria.aberta && (
        <>
          {categoria.itens.map((item, itemIndex) => (
            <Draggable
              key={item.id}
              draggableId={String(item.id)}
              index={itemIndex}
            >
              {(provided) => (
                <div
                  className={styles.item}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <div className={styles.containerItem}>
                    <div className={styles.itemEsquerda}>
                      <FontAwesomeIcon
                        icon={faGripVertical}
                        className={styles.gripIcon}
                      />
                      <span>{item.titulo}</span>
                    </div>

                    <div className={styles.inputBox}>
                      <span>R$</span>
                      <input
                        className={styles.inputCusto}
                        value={item.custo}
                        onChange={(e) =>
                          handleInputChange(e, catIndex, itemIndex)
                        }
                      />
                    </div>
                  </div>
                </div>
              )}
            </Draggable>
          ))}

          <div
            className={styles.adicionarItem}
            onClick={() => adicionarItem(catIndex)}
          >
            <img src={add} alt="Adicionar item" />
            <span>Adicionar item</span>
          </div>
        </>
      )}
    </div>
  );
}

export default CategoriaCalc;
