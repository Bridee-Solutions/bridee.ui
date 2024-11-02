import styles from "../../pages/Calculadora/Calculadora.module.css";
import stylesCalc from "../CategoriaCalculadora/CategoriaCalculadora.module.css";
import "./CategoriaCalculadora.module.css";
import "../../index.css";
import add from "../../assets/calculadora/add.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import {
  faChevronDown,
  faChevronUp,
  faTrash,
  faCheck
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
  removerItem,
}) {
  // Estado para controlar se houve modificação
  const [isModified, setIsModified] = useState(false);

  // Função para verificar alterações nos campos de entrada
  const handleModifiedChange = (e, catIndex, itemIndex) => {
    handleInputChange(e, catIndex, itemIndex);
    setIsModified(true); // Define como modificado quando a função é chamada
  };

  const handleTituloModifiedChange = (e, catIndex, itemIndex) => {
    handleTituloChange(e, catIndex, itemIndex);
    setIsModified(true);
  };

  // Define o estado como `false` ao salvar as alterações
  const salvarAlteracoes = () => {
    // Aqui você pode adicionar lógica para salvar as alterações se necessário
    setIsModified(false); // Reseta o estado após salvar
  };
  return (
    <div className={stylesCalc.categoria}>
      <div className={stylesCalc.cabecalhoCategoria}>
        <div className={stylesCalc.containerCat}>
          <button
            className={stylesCalc.setaCategoria}
            onClick={() => toggleCategoria(catIndex)}
          >
            {categoria.aberta ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </button>

          <div className={stylesCalc.iconeCategoria}>
            <img src={categoria.icon} alt="Ícone da Categoria" />
          </div>

          <div className={stylesCalc.categoriaNome}>{categoria.nome}</div>
        </div>
      </div>

      {categoria.aberta && (
        <>
          {categoria.itens.map((item, itemIndex) => (
            <div key={`item-${itemIndex}`} className={stylesCalc.item}>
              <div className={stylesCalc.containerItem}>
                <div className={stylesCalc.itemEsquerda}>
                  {itemEditando.catIndex === catIndex &&
                  itemEditando.itemIndex === itemIndex ? (
                    // Campo de texto para edição do título
                    <input
                      type="text"
                      maxLength={42}
                      value={item.titulo}
                      onChange={(e) =>
                        handleTituloModifiedChange(e, catIndex, itemIndex)
                      }
                      onBlur={() =>
                        setItemEditando({ catIndex: null, itemIndex: null })
                      } // Sai do modo de edição ao desfocar
                      className={`${stylesCalc.inputTitulo} ${stylesCalc.titulo}`}
                    />
                  ) : (
                    // Exibe o título e habilita o modo de edição ao clicar
                    <span
                      onClick={() => setItemEditando({ catIndex, itemIndex })}
                      className={`${stylesCalc.titulo} ${
                        itemEditando.catIndex === catIndex &&
                        itemEditando.itemIndex === itemIndex
                          ? stylesCalc.editando
                          : ""
                      }`}
                    >
                      {item.titulo}
                    </span>
                  )}
                </div>

                <div className={stylesCalc.inputBox}>
                  <div className={stylesCalc.containerDinheiro}>
                    <span>R$</span>
                    {itemEditando.catIndex === catIndex &&
                    itemEditando.itemIndex === itemIndex &&
                    itemEditando.field === "custo" ? (
                      <input
                        className={`${stylesCalc.inputBoxEdit} ${stylesCalc.inputCusto}`}
                        value={item.custo}
                        maxLength={8}
                        type="number"
                        onChange={(e) =>
                          handleModifiedChange(e, catIndex, itemIndex)
                        }
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            // Sai do estado de edição
                            setItemEditando({
                              catIndex: null,
                              itemIndex: null,
                              field: null,
                            });
                          }
                        }}
                        onBlur={() =>
                          setItemEditando({
                            catIndex: null,
                            itemIndex: null,
                            field: null,
                          })
                        }
                      />
                    ) : (
                      <span
                        onClick={() =>
                          setItemEditando({
                            catIndex,
                            itemIndex,
                            field: "custo",
                          })
                        }
                      >
                        {item.custo}
                      </span>
                    )}
                  </div>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className={stylesCalc.iconeLixeira}
                    onClick={() => removerItem(catIndex, itemIndex)}
                  />
                </div>
              </div>
            </div>
          ))}

          <div
            className={stylesCalc.adicionarItem}
            onClick={() => adicionarItem(catIndex)}
          >
            <img src={add} alt="Adicionar item" />
            <span>Adicionar item</span>
          </div>
        </>
      )}

      <div className={stylesCalc.salvar}>
        {isModified && (
          <button
            className={stylesCalc.buttonSaveChanges}
            onClick={salvarAlteracoes}
          >
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={styles.iconExport}
                    />{" "}
            Salvar alterações
          </button>
        )}
      </div>
    </div>
  );
}

export default CategoriaCalc;