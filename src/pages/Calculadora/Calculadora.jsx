import React, { useState, useEffect } from "react";
import Navbar from "../../componentes/Navbar/Navbar";
import styles from "./Calculadora.module.css";
import "../../index.css";

import { faFileExport, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import decoracao from "../../assets/calculadora/decoracaocalculadora.svg";
import moda from "../../assets/calculadora/modabeleza.svg";
import aliancas from "../../assets/calculadora/aliancas.svg";
import etiqueta from "../../assets/calculadora/etiqueta.svg";
import transporte from "../../assets/calculadora/transporteacomodacao.svg";
import entretenimento from "../../assets/calculadora/entretenimentocalc.svg";
import CategoriaCalc from "../../componentes/CategoriaCalculadora/CategoriaCalculadora";

import LinkButton from "../../componentes/LinkButton/LinkButton";
import Baseboard from "../../componentes/LandingPage/BaseBoard/Baseboard";
import Modal from "../../componentes/Modal/Modal";
import ModalHeader from "../../componentes/Modal/ModalHeader/ModalHeader";
import ModalBody from "../../componentes/Modal/ModalBody/ModalBody";
import ModalFooter from "../../componentes/Modal/ModalFooter/ModalFooter";
import ModalFooterButton from "../../componentes/Modal/ModalFooterButton/ModalFooterButton";
import ArcoFinanceiro from "../../componentes/ArcoFinanceiro/ArcoFinanceiro";

import { v4 as uuidv4 } from "uuid";

function Calculadora() {
  const [categorias, setCategorias] = useState([
    {
      id: uuidv4(),
      nome: "Moda e beleza",
      icon: moda,
      itens: [{ titulo: "Vestido de Daminha de Honra", custo: 400 }],
      aberta: true,
    },
    {
      id: uuidv4(),
      nome: "Alianças de casamento",
      icon: aliancas,
      itens: [{ titulo: "Meu anel", custo: 2000 }],
      aberta: true,
    },
    {
      id: uuidv4(),
      nome: "Decoração",
      icon: decoracao,
      itens: [{ titulo: "Teste", custo: 2000 }],
      aberta: true,
    },
    {
      id: uuidv4(),
      nome: "Transporte e Acomodação",
      icon: transporte,
      itens: [{ titulo: "Teste", custo: 2000 }],
      aberta: true,
    },
    {
      id: uuidv4(),
      nome: "Entretenimento",
      icon: entretenimento,
      itens: [{ titulo: "Teste", custo: 2000 }],
      aberta: true,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false); // controle do modal
  const [gasto, setGasto] = useState(0); // valor inicial de gasto
  const [total] = useState(10000); // valor total fixo p exemplo
  const [totalAtual, setTotalAtual] = useState(0);

  // editar nome da categoria
  const [categoriaEditando, setCategoriaEditando] = useState(null);
  const iniciarEdicaoCategoria = (catIndex) => {
    setCategoriaEditando(catIndex);
  };

  const finalizarEdicaoCategoria = () => {
    setCategoriaEditando(null);
  };

  // Handlers para edição do nome da categoria
  const handleCategoryNomeChange = (e, catIndex) => {
    const { value } = e.target;
    const novasCategorias = [...categorias];
    novasCategorias[catIndex].nome = value;
    setCategorias(novasCategorias);
    // Aqui você pode adicionar lógica para indicar que houve modificação
  };

  // função para abrir o modal
  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  // função para fechar o modal
  const fecharModal = () => {
    setIsModalOpen(false);
  };

  // Função para abrir e fechar a categoria
  const toggleCategoria = (index) => {
    const novasCategorias = [...categorias];
    novasCategorias[index].aberta = !novasCategorias[index].aberta;
    setCategorias(novasCategorias);
  };

  // Função para alterar o valor do input
  const handleInputChange = (e, catIndex, itemIndex) => {
    const { value } = e.target;
    const novasCategorias = [...categorias];
    novasCategorias[catIndex].itens[itemIndex].custo = value;
    setCategorias(novasCategorias);
  };

  // Função para adicionar um item
  const adicionarItem = (catIndex) => {
    const novasCategorias = [...categorias];
    novasCategorias[catIndex].itens.push({
      id: `item-${new Date().getTime()}`,
      titulo: "Novo item",
      custo: 0,
    });
    setCategorias(novasCategorias);
  };

  // Função para remover um item
  function removerItem(catIndex, itemIndex) {
    const novaCategoria = [...categorias];
    novaCategoria[catIndex].itens.splice(itemIndex, 1);
    setCategorias(novaCategoria);
  }

 // remover categoria
 const removerCategoria = (index) => {
  const novasCategorias = [...categorias]; 
  novasCategorias.splice(index, 1);
  setCategorias(novasCategorias); 
};



  // Função para editar o título do item
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

  // como o nome já diz...
  const adicionarCategoria = () => {
    console.log("Adicionando nova categoria");

    const novaCategoria = {
      id: uuidv4(),
      nome: "Digite o nome da nova categoria",
      icon: etiqueta,
      itens: [{ titulo: "Novo item", custo: 0 }],
      aberta: true,
    };

    setCategorias([...categorias, novaCategoria]);
  };

  useEffect(() => {
    const somaTotal = categorias.reduce((acc, categoria) => {
      return (
        acc +
        categoria.itens.reduce((somaItens, item) => {
          return somaItens + (parseFloat(item.custo) || 0); // Somando os custos dos itens, lidando com valores não numéricos
        }, 0)
      );
    }, 0);

    setTotalAtual(somaTotal); // Atualiza o total com a soma de todas as categorias
  }, [categorias]);

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
                Organize gastos por categoria, acompanhe o total e exporte dados
                facilmente.{" "}
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
                  removerItem={removerItem}
                  removerCategoria={removerCategoria}
                  categorias={categorias}
                  setCategorias={setCategorias} 
                />
              </div>
            ))}

            <div className={styles.containerInferior}>
              <div className={styles.box}>
                <div className={styles.containerEsquerda}>
                  <div
                    className={styles.containerAdcCategoria}
                    onClick={adicionarCategoria}
                  >
                    <LinkButton label="Adicionar nova categoria" />
                  </div>
                </div>

                <div className={styles.containerDireita}>
                  <div>
                    <div className={styles.containerTotal}>
                      <span className={styles.total}>Total atual</span>
                      <span className={styles.valor}>
                        R${totalAtual.toFixed(2)}
                      </span>
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
                <button
                  className={styles.buttonExport}
                  onClick={handleEditClick}
                >
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
                <ArcoFinanceiro gasto={gasto} total={total} />
              </div>
            </div>

            {/* Modal de edição */}
            {isModalOpen && (
              <Modal>
                <ModalHeader onClose={fecharModal}>
                  <div className={styles.containerHeaderModal}>
                    <span>Editar Orçamento</span>
                  </div>
                </ModalHeader>

                <ModalBody>
                  <div className={styles.containerModal}>
                    <div className={styles.search_input_container}>
                      <input
                        type="number"
                        id="gastoInput"
                        className={styles.search_input}
                        placeholder="Digite o valor do gasto"
                        onChange={(e) => setGasto(Number(e.target.value))}
                      />
                    </div>
                    <div className={styles.form_group}>
                      <label htmlFor="gastoInput">
                        Orçamento atual: R$ 500000
                      </label>
                    </div>
                  </div>
                </ModalBody>

                <ModalFooter>
                  <ModalFooterButton
                    button="cancel_button"
                    text="Cancelar"
                    onClick={fecharModal}
                  />
                  <ModalFooterButton
                    button="add_button"
                    text="Salvar"
                    onClick={() => fecharModal()}
                  />
                </ModalFooter>
              </Modal>
            )}
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
