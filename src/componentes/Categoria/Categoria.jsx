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
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

import Modal from "../Modal/Modal";
import ModalHeader from "../Modal/ModalHeader/ModalHeader";
import ModalBody from "../Modal/ModalBody/ModalBody";
import ModalFooter from "../Modal/ModalFooter/ModalFooter";
import ModalFooterButton from "../Modal/ModalFooterButton/ModalFooterButton";

function Categoria({ icone, titulo, onAdicionar }) {
  return (
    <div className={styles.categoriaCard}>
      <div className={styles.icone}>
        <img src={icone} alt={titulo} />
      </div>
      <div className={styles.textos}>
        <h3 className={styles.titulo}>{titulo}</h3>
        <a
          href="#"
          className={styles.gerenciar}
          onClick={() => onAdicionar(titulo)}
        >
          Adicionar
        </a>
      </div>
    </div>
  );
}

function Categorias() {
  const [modalAberto, setModalAberto] = useState(false);

  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");

  const categorias = [
    { titulo: "Vestidos", icone: wedding },
    { titulo: "Fotógrafo", icone: camera },
    { titulo: "Florista", icone: florista },
    { titulo: "Buffet & Gastronomia", icone: buffet },
    { titulo: "Decoração", icone: decoracao },
    { titulo: "Locais", icone: local },
    { titulo: "Hospedagem", icone: hospedagem },
    { titulo: "Confeitaria", icone: confeitaria },
    { titulo: "Moda & Beleza", icone: moda },
    { titulo: "Videógrafos", icone: videografo },
    { titulo: "Papelaria", icone: papelaria },
    { titulo: "Entretenimento", icone: entretenimento },
  ];

  const abrirModal = (categoria) => {
    setCategoriaSelecionada(categoria); // Define a categoria a ser adicionada
    setModalAberto(true); // Abre o modal
  };

  const fecharModal = () => {
    setModalAberto(false); // Fecha o modal
    setCategoriaSelecionada(""); // Reseta a categoria
  };

  return (
    <div className={styles.categoriasContainer}>
      <div className={styles.boxCategoria}>
        <div className={styles.containerGrid}>
          <div className={styles.grid}>
            {categorias.map((categoria) => (
              <Categoria
                key={categoria.titulo}
                titulo={categoria.titulo}
                icone={categoria.icone}
                onAdicionar={abrirModal}
              />
            ))}
          </div>
        </div>
      </div>
      {modalAberto && (
        <Modal>
          <ModalHeader onClose={fecharModal}>
            <h2>Adicionar {categoriaSelecionada}</h2>
          </ModalHeader>
              <ModalBody>
                <div className={styles.containerModal}>
                  <div className={styles.form_group}>
                    <label htmlFor="categoriaSelect">
                      Nome do {categoriaSelecionada} que você fechou negócio
                    </label>
                  </div>
                  <div className={styles.search_input_container}>
                    <input
                      type="text"
                      id=""
                      className={styles.search_input}
                      placeholder={`Digite o nome do ${categoriaSelecionada}`}
                    />
                    <button className={styles.search_button}>
                      <FontAwesomeIcon icon={faSearch} className={styles.iconSearch} />
                    </button>
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
