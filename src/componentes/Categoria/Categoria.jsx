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
import React, { useEffect, useRef, useState } from "react";

import Modal from "../Modal/Modal";
import ModalHeader from "../Modal/ModalHeader/ModalHeader";
import ModalBody from "../Modal/ModalBody/ModalBody";
import ModalFooter from "../Modal/ModalFooter/ModalFooter";
import ModalFooterButton from "../Modal/ModalFooterButton/ModalFooterButton";
import { request } from "../../config/axios/axios";

function Categoria({ categoria, orcamentoFornecedorResponse, onAdicionar }) {

  const container = useRef();

  const[isChosen, setIsChosen] = useState(false);
  const[orcamentoFornecedor, setOrcamentoFornecedor] = useState({});

  useEffect(() => {
    orcamentoFornecedorResponse?.filter(orcamentoFornecedor => {
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
  }, [])


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
              onClick={() => onAdicionar(categoria)}
            >
              Adicionar
            </a>
          </div>
        </div>
        :
        <div className={styles.chosen_category}>
          <div className={styles.chosen_header}>
            <div>Reservado</div>
            <FontAwesomeIcon icon={faEllipsis}/>
          </div>
          <div className={styles.chosen_body}>
            <div>
              <span className={styles.chosen_body_category}>{orcamentoFornecedor.fornecedor?.subcategoriaServico?.nome}</span>
              <span className={styles.chosen_body_nome}>{orcamentoFornecedor.fornecedor?.nome}</span>
              <span className={styles.chosen_body_preco}>R$ {orcamentoFornecedor.preco}</span>
            </div>
          </div>
        </div>
      }
    </>
  );
}

function Categorias({orcamentoFornecedorResponse}) {
  const [modalAberto, setModalAberto] = useState(false);

  const [categoriaSelecionada, setCategoriaSelecionada] = useState({});
  const [categorias, setCategorias] = useState();
  const [fornecedoresModal, setFornecedoresModal] = useState();

  const container = useRef();

  useEffect(() => {
    request.getCategorias().then((response) => {
    const categorias = response.data.content?.map(categoria => {
      return {...categoria, icon: defineCategoriaIcon(categoria)}
    });
    setCategorias(categorias)
    console.log(categorias);
    })
    
    
    
  }, [])

  const defineCategoriaState = (categoria) => {
    fornecedores?.forEach((fornecedorInfo => {
      console.log(fornecedorInfo.fornecedor.subcategoriaServico.nome);
      
      if(fornecedorInfo.fornecedor.subcategoriaServico.nome == categoria.nome){
        container.current.style.backgroundImage = `url(${chosen})`
      }
    }))
  }

  const searchFornecedor = async (nome) => {
    const categoriaId = categoriaSelecionada.id
    const fornecedoresResponse = await request.getFornecedoresByCategoria(categoriaId, nome);
    const fornecedores = fornecedoresResponse.data.content;
    
    setFornecedoresModal(fornecedores)
  }

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

  const abrirModal = (categoria) => {
    setCategoriaSelecionada({...categoria}); // Define a categoria a ser adicionada
    setModalAberto(true); // Abre o modal
  };

  const fecharModal = () => {
    setModalAberto(false); // Fecha o modal
    setCategoriaSelecionada({});
    setFornecedoresModal([]) // Reseta a categoria
  };

  return (
    <div className={styles.categoriasContainer}>
      <div className={styles.boxCategoria}>
        <div className={styles.containerGrid}>
          <div className={styles.grid} ref={container}>
            {categorias?.map((categoria) => (
              <Categoria
                key={categoria.nome}
                categoria={categoria}
                onAdicionar={abrirModal}
                orcamentoFornecedorResponse={orcamentoFornecedorResponse}
              />
            ))}
          </div>
        </div>
      </div>
      {modalAberto && (
        <Modal>
          <ModalHeader onClose={fecharModal}>
            <div className={styles.containerHeaderModal}>
              <span>Adicionar {categoriaSelecionada.nome}</span>
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
              <div className={styles.fornecedor_modal}>
                {fornecedoresModal?.map(fornecedor => {
                  return <div>{fornecedor.nome}</div>
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
            <ModalFooterButton button="add_button" text="Adicionar" />
          </ModalFooter>
        </Modal>
      )}
    </div>
  );
}

export default Categorias;
