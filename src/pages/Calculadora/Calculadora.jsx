import React, { useState } from "react";
import Navbar from "../../componentes/Navbar/Navbar";
import styles from "./Calculadora.module.css";
import ArcoFinanceiro from "../../componentes/ArcoFinanceiro/ArcoFinanceiro";
import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import add from "../../assets/calculadora/add.svg";
import {
  faChevronDown,
  faChevronUp,
  faFileExport,
} from "@fortawesome/free-solid-svg-icons";
import LinkButton from "../../componentes/LinkButton/LinkButton";

function Calculadora() {
  const [categorias, setCategorias] = useState([
    {
      nome: "Moda e beleza",
      itens: [{ titulo: "Vestido de Daminha de Honra", custo: 400 }],
      aberta: true,
    },
    {
      nome: "Alianças de casamento",
      itens: [{ titulo: "Meu anel", custo: 2000 }],
      aberta: true,
    },
    {
      nome: "Decoração",
      itens: [{ titulo: "Teste", custo: 2000 }],
      aberta: true,
    },
    {
      nome: "Transporte e Acomodação",
      itens: [{ titulo: "Teste", custo: 2000 }],
      aberta: true,
    },
    {
      nome: "Entretenimento",
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
              {categorias.map((categoria, catIndex) => (
                <div key={catIndex} className={styles.categoria}>
                  <div className={styles.cabecalhoCategoria}>
                    <button
                      className={styles.setaCategoria}
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
                    <span className={styles.categoriaNome}>
                      {categoria.nome}
                    </span>
                  </div>

                  {categoria.aberta && (
                    <div className={styles.itensCategoria}>
                      {categoria.itens.map((item, itemIndex) => (
                        <div key={itemIndex} className={styles.itemCategoria}>
                          <span>{item.titulo}</span>
                          <input
                            type="number"
                            value={item.custo}
                            className={styles.inputCusto}
                            onChange={(e) =>
                              handleInputChange(e, catIndex, itemIndex)
                            }
                            onBlur={(e) =>
                              handleInputChange(e, catIndex, itemIndex)
                            }
                          />
                        </div>
                      ))}

                      <button className={styles.adicionarItem}>
                        <img
                          src={add}
                          className={styles.add}
                          alt="Adicionar item"
                        />
                        Adicionar novo item
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
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
