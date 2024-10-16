import React, { useState } from "react";
import Navbar from "../../componentes/Navbar/Navbar";
import styles from "./Calculadora.module.css";
import ArcoFinanceiro from "../../componentes/ArcoFinanceiro/ArcoFinanceiro";
import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import add from "../../assets/calculadora/add.svg";
import decoracao from "../../assets/calculadora/decoracaocalculadora.svg";
import moda from "../../assets/calculadora/modabeleza.svg";
import aliancas from "../../assets/calculadora/aliancas.svg";
import transporte from "../../assets/calculadora/transporteacomodacao.svg";
import entretenimento from "../../assets/calculadora/entretenimentocalc.svg";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  faChevronDown,
  faFileExport,
  faChevronUp,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import LinkButton from "../../componentes/LinkButton/LinkButton";

function Calculadora() {
  const [categorias, setCategorias] = useState([
    {
      nome: "Moda e beleza",
      icon: moda,
      itens: [{ titulo: "Vestido de Daminha de Honra", custo: 400 }],
      aberta: true,
    },
    {
      nome: "Alianças de casamento",
      icon: aliancas,
      itens: [{ titulo: "Meu anel", custo: 2000 }],
      aberta: true,
    },
    {
      nome: "Decoração",
      icon: decoracao,
      itens: [{ titulo: "Teste", custo: 2000 }],
      aberta: true,
    },
    {
      nome: "Transporte e Acomodação",
      icon: transporte,
      itens: [{ titulo: "Teste", custo: 2000 }],
      aberta: true,
    },
    {
      nome: "Entretenimento",
      icon: entretenimento,
      itens: [{ titulo: "Teste", custo: 2000 }],
      aberta: true,
    },
  ]);

  const toggleCategoria = (index) => {
    const novasCategorias = [...categorias];
    novasCategorias[index].aberta = !novasCategorias[index].aberta;
    setCategorias(novasCategorias);
  };

  const handleInputChange = (e, catIndex, itemIndex) => {
    const { value } = e.target;
    const novasCategorias = [...categorias];
    novasCategorias[catIndex].itens[itemIndex].custo = value;
    setCategorias(novasCategorias);
  };

  const adicionarItem = (catIndex) => {
    const novasCategorias = [...categorias];
    novasCategorias[catIndex].itens.push({ titulo: "Novo item", custo: 0 });
    setCategorias(novasCategorias);
  };

  const onDragEnd = (result) => {
    console.log("Resultado do Drag:", result); // Log do resultado do drag
  
    const { source, destination } = result;
  
    // Se não houver destino, saia da função
    if (!destination) {
      console.log("Sem destino; a operação foi cancelada.");
      return;
    }
  
    // Log dos IDs das categorias e índices
    console.log(`Arrastado de ${source.droppableId} (índice: ${source.index}) para ${destination.droppableId} (índice: ${destination.index})`);
  
    const sourceCategoryIndex = parseInt(source.droppableId, 10);
    const destCategoryIndex = parseInt(destination.droppableId, 10);
  
    // Se não houve mudança de categoria, saia da função
    if (sourceCategoryIndex === destCategoryIndex && source.index === destination.index) {
      console.log("Sem mudanças; o item permaneceu na mesma posição.");
      return;
    }
  
    // Cria uma cópia das categorias
    const novasCategorias = [...categorias];
  
    // Log da categoria de origem e destino
    console.log("Categorias antes da atualização:", JSON.stringify(novasCategorias, null, 2));
  
    // Remove o item da categoria de origem
    const [removido] = novasCategorias[sourceCategoryIndex].itens.splice(source.index, 1);
    console.log(`Item removido: ${JSON.stringify(removido)}`);
  
    // Adiciona o item à categoria de destino
    novasCategorias[destCategoryIndex].itens.splice(destination.index, 0, removido);
  
    // Log da atualização das categorias
    console.log("Categorias após a atualização:", JSON.stringify(novasCategorias, null, 2));
  
    // Atualiza o estado com as novas categorias
    setCategorias(novasCategorias);
  };
  

  return (
    <div className={styles.background}>
      <Navbar />

      <div className={styles.planejamento}>
        <span>Ferramentas de planejamento - Calculadora Financeira</span>
      </div>

      <div className={styles.conteudo}>
        <div className={styles.colunaEsquerda}>
          <div className={styles.container_titulodesc}>
            <div className={styles.caixa}>
              <span className={styles.titulo_clnesq}>
                Calculadora Financeira
              </span>
              <span className={styles.descricao}>
                Lorem ipsum lorem ipsum lorem ipsum
              </span>
            </div>
            <div>
              <button className={styles.buttonExport}>
                <div className={styles.containerButton}>
                  <div>
                    <FontAwesomeIcon
                      icon={faFileExport}
                      className={styles.iconExport}
                    />{" "}
                  </div>
                  <span> Exportar </span>
                </div>
              </button>
            </div>
          </div>

          {/* Categorias */}
          <div className={styles.containerCategoria}>
            <div className={styles.categoriaBox}>
              <DragDropContext onDragEnd={onDragEnd}>
                {categorias.map((categoria, catIndex) => (
                  <Droppable key={catIndex} droppableId={`${catIndex}`}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={styles.categoria}
                      >
                        <div className={styles.cabecalhoCategoria}>
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
                          <img
                            src={categoria.icon}
                            className={styles.iconCategoria}
                            alt="Categoria ícone"
                          />
                          <span className={styles.categoriaNome}>
                            {categoria.nome}
                          </span>
                        </div>

                        {categoria.aberta && (
                          <div className={styles.itensCategoria}>
                            {categoria.itens.map((item, itemIndex) => (
                              <Draggable
                              key={`item-${catIndex}-${itemIndex}`}
                              draggableId={`item-${catIndex}-${itemIndex}`}
                              index={itemIndex}
                            >
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className={styles.itemCategoria}
                                >
                                  {/* Ícone de arrastar */}
                                  <span className={styles.dragIcon}>
                                    <FontAwesomeIcon icon={faBars} />
                                  </span>
                                  <span>{item.titulo}</span>
                                  <input
                                    type="number"
                                    value={item.custo}
                                    className={styles.inputCusto}
                                    onChange={(e) =>
                                      handleInputChange(
                                        e,
                                        catIndex,
                                        itemIndex
                                      )
                                    }
                                  />
                                </div>
                              )}
                            </Draggable>
                          ))}
                            {provided.placeholder}
                            <button
                              className={styles.adicionarItem}
                              onClick={() => adicionarItem(catIndex)}
                            >
                              Adicionar novo item
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </Droppable>
                ))}
              </DragDropContext>
            </div>

            <div className={styles.containerInferior}>
              <div className={styles.box}>
                <div className={styles.containerEsquerda}>
                  <div className={styles.containerAdcCategoria}>
                    <LinkButton label="Adicionar nova categoria" />
                  </div>
                </div>
                <div className={styles.containerDireita}>
                  <div className={styles.containerTotal}>
                    <span>Total atual</span>
                    <span>500</span>
                  </div>
                  <div>
                    <span>Orçamento: R$ 500.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.colunaDireita}>
          <div className={styles.conteudoColuna}>
            <div className={styles.containerTitulo}>
              <span>Orçamento total</span>
              <div className={styles.divider}></div>
            </div>

            <div className={styles.containerOrcamento}>
              <div className={styles.orcamento}>
                <ArcoFinanceiro />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculadora;
