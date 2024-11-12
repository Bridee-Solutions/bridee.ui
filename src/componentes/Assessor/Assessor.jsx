import styles from "./Assessor.module.css";

import React, { useState } from "react"; 
import iconeAssessor from "../../assets/painel/assessor.svg";
import Modal from "../Modal/Modal";
import ModalHeader from "../Modal/ModalHeader/ModalHeader";
import ModalBody from "../Modal/ModalBody/ModalBody";
import ModalFooter from "../Modal/ModalFooter/ModalFooter";
import ModalFooterButton from "../Modal/ModalFooterButton/ModalFooterButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";


function Assessor({ nome, descricao }) {
  const [modalAberto, setModalAberto] = useState(false);
  const [assessorSelecionado, setAssessorSelecionado] = useState("");

  const abrirModal = (assessor) => {
    setAssessorSelecionado(assessor);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setAssessorSelecionado("");
  };



  return (
    <div className={styles.container}>
      <div className={styles.assessorCard}>
        <div className={styles.icone}>
          <img src={iconeAssessor} alt={nome} />
        </div>
        <div className={styles.textos}>
          <h3 className={styles.nome}>Assessor</h3>
          <p className={styles.descricao}>{descricao}</p>
          <a href="#" className={styles.gerenciar} onClick={() => abrirModal(nome)}>
            Adicionar
          </a>
        </div>
      </div>
      {modalAberto && (
        <Modal>
          <ModalHeader onClose={fecharModal}>
            <span>Adicionar Assessor </span>
          </ModalHeader>
          <ModalBody>
            <div className={styles.containerModal}>
              <div className={styles.form_group}>
                <label htmlFor="categoriaSelect">
                  Nome do assessor que você fechou negócio
                </label>
              </div>
              <div className={styles.search_input_container}>
                <input
                  type="text"
                  id=""
                  className={styles.search_input}
                  placeholder={`Digite o nome do assessor`}
                />
                <button className={styles.search_button}>
                  <FontAwesomeIcon
                    icon={faSearch}
                    className={styles.iconSearch}
                  />
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

export default Assessor;
