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
  handleTituloChange,
  itemEditando,
  setItemEditando,
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
                      {itemEditando.catIndex === catIndex && itemEditando.itemIndex === itemIndex ? (
                        // Campo de texto para edição
                        <input
                          type="text"
                          value={item.titulo}
                          onChange={(e) =>
                            handleTituloChange(e, catIndex, itemIndex)
                          }
                          onBlur={() => setItemEditando({ catIndex: null, itemIndex: null })} // Sai do modo de edição ao desfocar
                          className={styles.inputTitulo}
                        />
                      ) : (
                        // Exibe o título e habilita o modo de edição ao clicar
                        <span onClick={() => setItemEditando({ catIndex, itemIndex })}>
                          {item.titulo}
                        </span>
                      )}
                    </div>

                    <div className={styles.inputBox}>
                      <span>R$</span>
                      {itemEditando.catIndex === catIndex && itemEditando.itemIndex === itemIndex && itemEditando.field === 'custo' ? (
                        <input
                          className={styles.inputCusto}
                          value={item.custo}
                          onChange={(e) =>
                            handleInputChange(e, catIndex, itemIndex)
                          }
                          onBlur={() => setItemEditando({ catIndex: null, itemIndex: null, field: null })}
                          className={styles.inputCusto}
                        />
                      ) : (
                        <span onClick={() => setItemEditando({ catIndex, itemIndex, field: 'custo' })}>
                          {item.custo}
                        </span>
                      )}
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
