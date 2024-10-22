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
import CategoriaCalc from "../../componentes/CategoriaCalculadora/CategoriaCalculadora";

import {
  faChevronDown,
  faChevronUp,
  faFileExport,
} from "@fortawesome/free-solid-svg-icons";
import LinkButton from "../../componentes/LinkButton/LinkButton";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import Baseboard from "../../componentes/LandingPage/BaseBoard/Baseboard";

function Calculadora() {
  const [categorias, setCategorias] = useState([
    {
      id: "categoria-1",
      nome: "Moda e beleza",
      icon: moda,
      itens: [{ titulo: "Vestido de Daminha de Honra", custo: 400 }],
      aberta: true,
    },
    {
      id: "categoria-2",
      nome: "Alianças de casamento",
      icon: aliancas,
      itens: [{ titulo: "Meu anel", custo: 2000 }],
      aberta: true,
    },
    {
      id: "categoria-3",
      nome: "Decoração",
      icon: decoracao,
      itens: [{ titulo: "Teste", custo: 2000 }],
      aberta: true,
    },
    {
      id: "categoria-4",
      nome: "Transporte e Acomodação",
      icon: transporte,
      itens: [{ titulo: "Teste", custo: 2000 }],
      aberta: true,
    },
    {
      id: "categoria-5",
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
    novasCategorias[catIndex].itens.push({
      id: `item-${new Date().getTime()}`, // Garante que o id é uma string
      titulo: "Novo item",
      custo: 0,
    });
    setCategorias(novasCategorias);
  };

  function reorganizar(list, startIndex, endIndex) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  }

  // function onDragEnd(result) {
  //   if (!result.destination) {
  //     return;
  //   }

  //   console.log(result.source.index); // posicao onde iniciei o drag
  //   console.log(result.destination.index); // posicao onde soltei o item

  //   const items = reorganizar(
  //     categorias,
  //     result.source.index,
  //     result.destination.index
  //   );

  //   console.log(items);
  //   setCategorias(items);
  // }

  function onDragEnd(result) {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const sourceCatIndex = categorias.findIndex(
      (cat) => cat.id === source.droppableId
    );
    const destinationCatIndex = categorias.findIndex(
      (cat) => cat.id === destination.droppableId
    );

    // Movendo dentro da mesma categoria
    if (sourceCatIndex === destinationCatIndex) {
      const novaCategoria = [...categorias];
      const novaListaItens = reorganizar(
        novaCategoria[sourceCatIndex].itens,
        source.index,
        destination.index
      );
      novaCategoria[sourceCatIndex].itens = novaListaItens;
      setCategorias(novaCategoria);
    } else {
      // Movendo entre categorias diferentes
      const novaCategoria = [...categorias];
      const [movedItem] = novaCategoria[sourceCatIndex].itens.splice(
        source.index,
        1
      );
      novaCategoria[destinationCatIndex].itens.splice(
        destination.index,
        0,
        movedItem
      );
      setCategorias(novaCategoria);
    }
  }

  return (
    <>
      <Navbar />
      <div className={styles.background}>
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
              <DragDropContext onDragEnd={onDragEnd}>
                {categorias.map((categoria, catIndex) => (
                  <Droppable
                    droppableId={categoria.id}
                    key={categoria.id}
                    type="item"
                  >
                    {(provided) => (
                      <div
                        className={styles.categoriaBox}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        <CategoriaCalc
                          categoria={categoria}
                          catIndex={catIndex}
                          toggleCategoria={toggleCategoria}
                          handleInputChange={handleInputChange}
                          adicionarItem={adicionarItem}
                        />
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                ))}
              </DragDropContext>
              <div className={styles.containerInferior}>
                <div className={styles.box}>
                  <div className={styles.containerEsquerda}>
                    <div className={styles.containerAdcCategoria}>
                      <LinkButton label="Adicionar nova categoria" />
                    </div>
                  </div>
                  <div className={styles.containerDireita}>
                    <div>
                      <div className={styles.containerTotal}>
                        <span className={styles.total}>Total atual</span>
                        <span className={styles.valor}>R$500.00</span>
                      </div>
                      <div className={styles.orcamentoContainer}>
                        <span className={styles.orcamento}>Orçamento:</span>
                        <span className={styles.totalorcamento}>R$ 500.00</span>
                      </div>
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
        <footer>
          <Baseboard />
        </footer>
      </div>
    </>
  );
}

export default Calculadora;
