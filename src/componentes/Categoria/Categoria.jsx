import styles from "./Categoria.module.css";

import wedding from "../../assets/painel/wedding.svg";
import buffet from "../../assets/painel/buffet.svg";
import camera from "../../assets/painel/camera.svg";
import confeitaria from "../../assets/painel/confeitaria.svg";
import moda from "../../assets/painel/moda.svg";
import hospedagem from "../../assets/painel/hospedagem.svg";
import decoracao from "../../assets/painel/decoracao.svg";
import florista from "../../assets/painel/florista.svg";
import papelaria from "../../assets/painel/papel.svg";
import entretenimento from "../../assets/painel/entretenimento.svg";
import videografo from "../../assets/painel/videografo.svg";
import local from "../../assets/painel/local.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useEffect, useRef, useState } from "react";

import Modal from "../Modal/Modal";
import ModalHeader from "../Modal/ModalHeader/ModalHeader";
import ModalBody from "../Modal/ModalBody/ModalBody";
import ModalFooter from "../Modal/ModalFooter/ModalFooter";
import ModalFooterButton from "../Modal/ModalFooterButton/ModalFooterButton";
import { request } from "../../config/axios/axios";
import { CasalContext } from "../../context/CasalContext";

function Categoria({ categoria, orcamentoFornecedores, orcamento, setOrcamento }) {

  const [modalAberto, setModalAberto] = useState(false);
  const[isChosen, setIsChosen] = useState(false);
  const[orcamentoFornecedor, setOrcamentoFornecedor] = useState({});
  const [fornecedoresModal, setFornecedoresModal] = useState();
  const [categoriaSelecionada, setCategoriaSelecionada] = useState({});

  const [fornecedorSelected, setFornecedorSelected] = useState();
  const fornecedoresModalRef = useRef();
  const orcamentoFornecedorRequest = useRef();
  const {casamentoId} = useContext(CasalContext)

  setTimeout(() => {
    orcamentoFornecedores?.filter(orcamentoFornecedor => {
      const subcategoriaFornecedor = orcamentoFornecedor.fornecedor.subcategoriaServico;
      const subcategoriasCategoria = categoria.subcategorias;
      for (let index = 0; index < subcategoriasCategoria.length; index++) {
        const element = subcategoriasCategoria[index];

        if(element.nome == subcategoriaFornecedor.nome){
          setIsChosen(true)
          setOrcamentoFornecedor(orcamentoFornecedor)
          return orcamentoFornecedor;
        }
      }
    })
  }, 500)

  const searchFornecedor = async (nome) => {
    const categoriaId = categoriaSelecionada.id
    const fornecedoresResponse = await request.getFornecedoresByCategoria(categoriaId, nome);
    const fornecedores = fornecedoresResponse.data.content;
    
    setFornecedoresModal(fornecedores)
  }

  const abrirModal = (categoria) => {
    setCategoriaSelecionada({...categoria}); // Define a categoria a ser adicionada
    setModalAberto(true); // Abre o modal
  };

  const fecharModal = () => {
    setModalAberto(false); // Fecha o modal
    setCategoriaSelecionada({});
    setFornecedoresModal([]) // Reseta a categoria
  };

  const selectFornecedor = (fornecedor, e) => {
    resetFornecedoresStyle(fornecedor)
    selectedFornecedorStyle(e)
    setFornecedorSelected(fornecedor)
  };

  const selectedFornecedorStyle = (e) => {
    e.target.style.backgroundColor = `#DD7B78`;
    e.target.style.color = `white`;
  }

  const resetFornecedoresStyle = (fornecedor) => {
    const children = fornecedoresModalRef.current.childNodes;
    console.log(children);
    const childrenToBeReseted = [];
    
    for (let i = 0; i < children.length; i++) {
      if(children[i].getAttribute("value") != fornecedor.id){
        childrenToBeReseted.push(children[i])
      }
      
    }

    childrenToBeReseted.forEach(child => {
      child.style.backgroundColor = `white`
      child.style.color = `black`
    }) 
    
  }

  const saveOrcamentoFornecedor = async () => {

    orcamentoFornecedorRequest.current = {
      id: null,
      preco: 0.0,
      fornecedorId: fornecedorSelected.id,
    }

    const orcamentoFornecedorResponse = await request.saveOrcamentoFornecedor(orcamentoFornecedorRequest.current, categoriaSelecionada.id, casamentoId)
    setIsChosen(true)
    setOrcamentoFornecedor(orcamentoFornecedorResponse.data)
    fecharModal();
  }

  const updateOrcamentoFornecedorPreco = (value) => {
    request.updatePrecoOrcamentoFornecedor(orcamentoFornecedor.id, Number(value))
    const newPrice = Number(value);
    const orcamentoFornecedorPrice = orcamentoFornecedor.preco;
    orcamento.orcamentoGasto = orcamento.orcamentoGasto - orcamentoFornecedorPrice + newPrice;
    orcamentoFornecedor.preco = newPrice;
    setOrcamentoFornecedor({...orcamentoFornecedor})
    setOrcamento({...orcamento})
  }


  return (
    <>
      {!isChosen ? 
        <div className={styles.categoriaCard}>
          <div className={styles.icone}>
            <img src={categoria.icon} alt={categoria.nome} />
          </div>
          <div className={styles.textos}>
            <h3 className={styles.titulo}>{categoria.nome}</h3>
            <a
              href="#"
              className={styles.gerenciar}
              onClick={() => abrirModal(categoria)}
            >
              Adicionar
            </a>
          </div>
        </div>
        :
        <div className={styles.chosen_category}>
          <div className={styles.chosen_header}>
            <div>Reservado</div>
            <FontAwesomeIcon icon={faEllipsis} onClick={() => abrirModal(categoria)} style={{cursor: "pointer"}}/>
          </div>
          <div className={styles.chosen_body}>
            <div>
              <span className={styles.chosen_body_category}>{orcamentoFornecedor.fornecedor?.subcategoriaServico?.nome}</span>
              <span className={styles.chosen_body_nome}>{orcamentoFornecedor.fornecedor?.nome}</span>
              <span className={styles.chosen_body_preco}><span>R$</span> <input type="number" onBlur={(e) => updateOrcamentoFornecedorPreco(e.target.value)} defaultValue={orcamentoFornecedor?.preco}/></span>
            </div>
          </div>
        </div>
      }
      {modalAberto && (
        <Modal>
          <ModalHeader onClose={fecharModal}>
            <div className={styles.containerHeaderModal}>
              <span> {isChosen ? "Editar" : "Adicionar"} {categoriaSelecionada.nome}</span>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className={styles.containerModal}>
              <div className={styles.form_group}>
                <label htmlFor="categoriaSelect">
                  Nome do fornecedor que você fechou negócio
                </label>
              </div>
              <div className={styles.search_input_container}>
                <input
                  type="text"
                  id=""
                  className={styles.search_input}
                  placeholder={`Digite o nome`}
                  onChange={(e) => searchFornecedor(e.target.value)}
                />
                <button className={styles.search_button}>
                  <FontAwesomeIcon
                    icon={faSearch}
                    className={styles.iconSearch}
                  />
                </button>
              </div>
              <div className={styles.fornecedor_modal} ref={fornecedoresModalRef}>
                {fornecedoresModal?.map(fornecedor => {
                  return <div value={fornecedor.id} onClick={(e) => selectFornecedor(fornecedor, e)}>{fornecedor.nome}</div>
                })}
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <ModalFooterButton
              button="cancel_button"
              text="Cancelar"
              onClick={fecharModal}
            />
            <ModalFooterButton button="add_button" text="Adicionar" onClick={saveOrcamentoFornecedor}/>
          </ModalFooter>
        </Modal>
      )}
    </>
  );
}

function Categorias({orcamentoFornecedores, orcamento, setOrcamento}) {

  const [categorias, setCategorias] = useState();  

  useEffect(() => {
    request.getCategorias().then((response) => {
    const categorias = response.data.content?.map(categoria => {
      return {...categoria, icon: defineCategoriaIcon(categoria)}
    });
    setCategorias(categorias)
    })
  }, [])

  

  const defineCategoriaIcon = (categoria) => {
    if(categoria.nome == "Vestidos"){
      return wedding;
    }else if(categoria.nome == "Fotógrafo"){
      return camera;
    }else if(categoria.nome == "Buffet & Gastronomia"){
      return buffet;
    }else if(categoria.nome == "Florista"){
      return florista;
    }else if(categoria.nome == "Decoração"){
      return decoracao;
    }else if(categoria.nome == "Locais"){
      return local
    }else if(categoria.nome == "Transporte & acomodação"){
      return hospedagem;
    }else if(categoria.nome == "Padeiro de bolos & Sobremesas"){
      return confeitaria;
    }else if(categoria.nome == "Moda e Beleza"){
      return moda;
    }else if(categoria.nome == "Videógrafos"){
      return videografo;
    }else if(categoria.nome == "Papelaria"){
      return papelaria;
    }else if(categoria.nome == "Entretenimento"){
      return entretenimento;
    }
  };

  
  
  return (
    <div className={styles.categoriasContainer}>
      <div className={styles.boxCategoria}>
        <div className={styles.containerGrid}>
          <div className={styles.grid}>
            {categorias?.map((categoria) => (
              <Categoria
                key={categoria.nome}
                categoria={categoria}
                orcamentoFornecedores={orcamentoFornecedores}
                orcamento={orcamento}
                setOrcamento={setOrcamento}
              />
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Categorias;
