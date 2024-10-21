import styles from "../../pages/Calculadora/Calculadora.module.css";
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
    <Draggable draggableId={categoria.id} index={catIndex}>
      {(provided) => (
        <div
          className={styles.categoria}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className={styles.cabecalhoCategoria}>
            <button
              className={styless.setaCategoria}
              onClick={() => toggleCategoria(catIndex)}
            >
              {categoria.aberta ? (
                <FontAwesomeIcon
                  icon={faChevronUp}
                  className={styles.iconArrow}
                />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
            </button>
            <img src={categoria.icon} className={styles.iconCategoria} />
            <span className={styles.categoriaNome}>{categoria.nome}</span>
          </div>

          {categoria.aberta && (
            <div className={styles.itensCategoria}>
              {categoria.itens.map((item, itemIndex) => (
                <div key={itemIndex} className={styles.itemCategoria}>
                  <div>
                    <FontAwesomeIcon
                      icon={faGripVertical}
                      className={styles.dragIcon}
                      style={{ marginRight: "8px", cursor: "grab" }}
                      
                    />
                    <span>{item.titulo}</span>
                  </div>
                  
                  <input
                    type="number"
                    value={item.custo}
                    className={styles.inputCusto}
                    onChange={(e) => handleInputChange(e, catIndex, itemIndex)}
                    onBlur={(e) => handleInputChange(e, catIndex, itemIndex)}
                  />
                </div>
              ))}

              <button
                className={styles.adicionarItem}
                onClick={() => adicionarItem(catIndex)}
              >
                <img src={add} className={styles.add} alt="Adicionar item" />
                Adicionar novo item
              </button>
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
}

export default CategoriaCalc;
