import React, { useState } from "react";
import Navbar from "../../componentes/Navbar/Navbar";
import styles from "./Calculadora.module.css";
import ArcoFinanceiro from "../../componentes/ArcoFinanceiro/ArcoFinanceiro";
import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faFileExport,
} from "@fortawesome/free-solid-svg-icons";

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
                    <FontAwesomeIcon icon={faFileExport} className={styles.iconExport} />{" "}
                  </div>                  
                  <span> Exportar </span>
                </div>
              </button>
            </div>
          </div>

          {/* Categorias */}
          {categorias.map((categoria, catIndex) => (
            <div key={catIndex} className={styles.categoria}>
              <div className={styles.cabecalhoCategoria}>
                <button onClick={() => toggleCategoria(catIndex)}>
                  {categoria.aberta ? (
                    <FontAwesomeIcon icon={faChevronUp} />
                  ) : (
                    <FontAwesomeIcon icon={faChevronDown} />
                  )}
                </button>
                <span className={styles.categoriaNome}>{categoria.nome}</span>
              </div>

              {categoria.aberta && (
                <div className={styles.itensCategoria}>
                  {categoria.itens.map((item, itemIndex) => (
                    <div key={itemIndex} className={styles.itemCategoria}>
                      <span>{item.titulo}</span>
                      <input
                        type="number"
                        value={item.custo}
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
                    Adicionar novo item
                  </button>
                </div>
              )}
            </div>
          ))}
          <button className={styles.adicionarCategoria}>
            Adicionar nova categoria
          </button>
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
