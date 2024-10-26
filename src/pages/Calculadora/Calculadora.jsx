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

import { faFileExport, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import LinkButton from "../../componentes/LinkButton/LinkButton";
import Baseboard from "../../componentes/LandingPage/BaseBoard/Baseboard";

function Calculadora() {
  const [categorias, setCategorias] = useState([
    {
      id: `cat-${new Date().getTime()}-1`,
      nome: "Moda e beleza",
      icon: moda,
      itens: [{ titulo: "Vestido de Daminha de Honra", custo: 400 }],
      aberta: true,
    },
    {
      id: `cat-${new Date().getTime()}-1`,
      nome: "Alianças de casamento",
      icon: aliancas,
      itens: [{ titulo: "Meu anel", custo: 2000 }],
      aberta: true,
    },
    {
      id: `cat-${new Date().getTime()}-1`,
      nome: "Decoração",
      icon: decoracao,
      itens: [{ titulo: "Teste", custo: 2000 }],
      aberta: true,
    },
    {
      id: `cat-${new Date().getTime()}-1`,
      nome: "Transporte e Acomodação",
      icon: transporte,
      itens: [{ titulo: "Teste", custo: 2000 }],
      aberta: true,
    },
    {
      id: `cat-${new Date().getTime()}-1`,
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

  const deletarItem = (catIndex, itemIndex) => {
    const novasCategorias = [...categorias];
    novasCategorias[catIndex].itens.splice(itemIndex, 1); 
    setCategorias(novasCategorias); 
  };
  
  const [itemEditando, setItemEditando] = useState({
    catIndex: null,
    itemIndex: null,
    field: null,
  });
  const handleTituloChange = (e, catIndex, itemIndex) => {
    const { value } = e.target;
    const novasCategorias = [...categorias];
    novasCategorias[catIndex].itens[itemIndex].titulo = value;
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
                Organize os gastos do seu evento por categorias, adicionando
                itens e valores. Veja o total atualizado e exporte suas
                informações a qualquer momento.{" "}
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
            {categorias.map((categoria) => (
              <div key={categoria.id} className={styles.categoriaBox}>
                <CategoriaCalc
                  categoria={categoria}
                  catIndex={categorias.indexOf(categoria)}
                  toggleCategoria={toggleCategoria}
                  handleInputChange={handleInputChange}
                  handleTituloChange={handleTituloChange}
                  itemEditando={itemEditando}
                  setItemEditando={setItemEditando}
                  adicionarItem={adicionarItem}
                />
              </div>
            ))}

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
              <div className={styles.tituloBotao}>
                <span>Orçamento total</span>
                <button className={styles.buttonExport}>
                  <div className={styles.containerButton}>
                    <div>
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        className={styles.iconExport}
                      />{" "}
                    </div>
                    <span> Editar </span>
                  </div>
                </button>
              </div>
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
  );
}

export default Calculadora;
