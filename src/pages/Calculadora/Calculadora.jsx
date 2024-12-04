import React, { useState, useEffect, useRef } from "react";
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
import { request } from "../../config/axios/axios";
import FornecedorCalc from "../../componentes/FornecedorCalculadora/FornecedorCalculadora";
import { buildItemOrcamentos } from "./CalculadoraService";

function Calculadora() {

  const [orcamento, setOrcamento] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false); // controle do modal// valor inicial de gasto
  const [totalAtual, setTotalAtual] = useState(0);

  // editar nome da categoria
  const [categoriaEditando, setCategoriaEditando] = useState(null);
  const iniciarEdicaoCategoria = (catIndex) => {
    setCategoriaEditando(catIndex);
  };

  const atualizarOrcamento = useRef();
  const orcamentoFornecedorRequest = useRef([]);
  const itensOrcamentoRequest = useRef([]);

  // função para abrir o modal
  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  // função para fechar o modal
  const fecharModal = () => {
    setIsModalOpen(false);
  };

  const salvarOrcamento = () => {
    const valorOrcamento = atualizarOrcamento.current.value;
    updateOrcamento(valorOrcamento)
    request.updateOrcamentoTotal(Number(valorOrcamento), 2);
    fecharModal();
  }

  // Função para abrir e fechar a categoria
  const toggleCategoria = (item) => {
    item.aberta = !item.aberta
    setOrcamento({...orcamento})
  };

  const updateOrcamento = (valor) => {
    orcamento.orcamentoTotal = Number(valor);
    setOrcamento({...orcamento})
  };

  const updateItensOrcamento = (itens) => {
    orcamento.itemOrcamentos = itens
    setOrcamento({...orcamento})
  }
  

  const handleTituloChange = (e, catIndex, itemIndex) => {
    const { value } = e.target;
    const novasCategorias = [...orcamento.itemOrcamentos];
    novasCategorias[catIndex].custos[itemIndex].nome = value;
    updateItensOrcamento(novasCategorias)
  };

  const adicionarCategoria = () => {
    console.log("Adicionando nova categoria");

    const categoriasAnteriores = [...orcamento.itemOrcamentos];
    const novaCategoria = {
      id: null,
      tipo: "Digite o nome da nova categoria",
      icon: etiqueta,
      custos: [{id: null, nome: "Novo item", precoAtual: 0 }],
      aberta: true,
    };
    categoriasAnteriores.push(novaCategoria);
    updateItensOrcamento(categoriasAnteriores)
  };

  const downloadOrcamentoCsv = () => {
    request.downloadOrcamentoCsv(2).then((response) => {
      const blob = response.data;
      const file = new File([...blob], "orcamento", {type: "text/plain"})
     
      const url = window.URL.createObjectURL(file)
      const link = document.createElement("a");
      link.href = url;
     
      link.setAttribute("download", "orcamento.csv")
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    })
  }

  useEffect(() => {
    request.getOrcamentoCasal(2)
    .then(response => {
    
      response.data.itemOrcamentos = buildItemOrcamentos(response.data);
      const fornecedoresOrcamento = response.data.orcamentoFornecedores.map(fornecedor => {
        return {...fornecedor, aberta: true, icon: decoracao};
      })
      response.data.orcamentoFornecedores = fornecedoresOrcamento;

      setOrcamento(response.data)
      setTotalAtual(response.data.orcamentoGasto)
    })
    .catch(err => console.log(err))

  }, []);

  return (
    <div className={styles.background}>
      <Navbar />
      <div className={styles.planejamento}>
        <span>Ferramentas de planejamento {">"}  Calculadora Financeira</span>
      

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
              <button className={styles.buttonExport} onClick={downloadOrcamentoCsv}>
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
            {orcamento.itemOrcamentos?.map((categoria) => (
              <div key={categoria.id} className={styles.categoriaBox}>
                <CategoriaCalc
                  categoria={categoria}
                  catIndex={orcamento.itemOrcamentos.indexOf(categoria)}
                  toggleCategoria={toggleCategoria}
                  handleTituloChange={handleTituloChange}
                  categorias={orcamento}
                  setCategorias={setOrcamento}
                  itensOrcamentoRequest={itensOrcamentoRequest.current}
                />
              </div>
            ))}
              {/* {orcamento.orcamentoFornecedores[1].preco} */}
            {orcamento.orcamentoFornecedores &&
                <div className={styles.categoriaBox}>
                  <FornecedorCalc
                    categoria={orcamento.orcamentoFornecedores}
                    toggleCategoria={toggleCategoria}
                    handleTituloChange={handleTituloChange}
                    categorias={orcamento}
                    setCategorias={setOrcamento}
                    orcamentoFornecedorRequest={orcamentoFornecedorRequest.current}
                  />
                </div>
            }

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
                      <span className={styles.totalorcamento}>R${orcamento.orcamentoTotal}</span>
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
                <span>Controle de Gastos</span>
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
                <ArcoFinanceiro gasto={orcamento.orcamentoGasto} total={orcamento.orcamentoTotal} />
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
                        ref={atualizarOrcamento}
                      />
                    </div>
                    <div className={styles.form_group}>
                      <label htmlFor="gastoInput">
                        Orçamento atual: R$ {(orcamento.orcamentoTotal - orcamento.orcamentoGasto).toFixed(2)}
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
                    onClick={salvarOrcamento}
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
