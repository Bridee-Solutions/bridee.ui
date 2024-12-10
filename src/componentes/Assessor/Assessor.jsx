import styles from "./Assessor.module.css";

import React, { useContext, useEffect, useRef, useState } from "react";
import iconeAssessor from "../../assets/painel/assessor.svg";
import Modal from "../Modal/Modal";
import ModalHeader from "../Modal/ModalHeader/ModalHeader";
import ModalBody from "../Modal/ModalBody/ModalBody";
import ModalFooter from "../Modal/ModalFooter/ModalFooter";
import ModalFooterButton from "../Modal/ModalFooterButton/ModalFooterButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { request } from "../../config/axios/axios";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { CasalContext } from "../../context/CasalContext";

function Assessor({ assessorResponseDto, orcamento, setOrcamento }) {
  const [modalAberto, setModalAberto] = useState(false);
  const [assessoresModal, setAssessoresModal] = useState();
  const [assessorSelected, setAssessorSelected] = useState();
  const [assessor, setAssessor] = useState();
  const [isChosen, setIsChosen] = useState(false);
  const {casamentoId} = useContext(CasalContext)

  const assessorModalRef = useRef();

  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  const searchAssessor = async (value) => {
    const assessores = await request.getAssessores(value);
    setAssessoresModal(assessores.data.content);
    console.log(assessores.data.content);
  };

  const selectAssessor = async (assessor, e) => {
    resetAssessorStyle(assessor);
    selectedAssessorStyle(e);
    setAssessorSelected(assessor);
  };

  const selectedAssessorStyle = (e) => {
    e.target.style.backgroundColor = `#ebebeb`;
    e.target.style.color = `black`;
  };

  const resetAssessorStyle = (assessor) => {
    const children = assessorModalRef.current.childNodes;
    const childrenToBeReseted = [];

    for (let i = 0; i < children.length; i++) {
      if (children[i].getAttribute("value") != assessor.id) {
        childrenToBeReseted.push(children[i]);
      }
    }
    childrenToBeReseted.forEach((child) => {
      child.style.backgroundColor = `white`;
      child.style.color = `black`;
    });
  };

  const vinculateAssessorToWedding = async () => {
    const assessor = await request.vinculateAssessorToWedding(
      casamentoId,
      assessorSelected.id
    );
    console.log(assessor);
    setAssessor(assessor.data);
    setIsChosen(true)
    fecharModal();
  };

  const updateAssessorPrice = async (value) => {
    request.updatePrecoAssessor(assessor.id, casamentoId, Number(value));
    const newPrice = Number(value);
    const assessorPrice = assessorResponseDto.preco;
    orcamento.orcamentoGasto =
      orcamento.orcamentoGasto - assessorPrice + newPrice;
    assessor.preco = newPrice;
    setAssessor({ ...assessor });
    setOrcamento({ ...orcamento });
  };

  setTimeout(() => {
    if (assessorResponseDto.assessor) {
      setIsChosen(true);
      setAssessor(assessorResponseDto.assessor);
    }
  }, 500);

  return (
    <div className={styles.container}>
      {!isChosen ? (
        <div className={styles.assessorCard}>
          <div className={styles.icone}>
            <img src={iconeAssessor} alt={`Assessor icon`} />
          </div>
          <div className={styles.textos}>
            <h3 className={styles.nome}>Assessor</h3>
            <a
              href="#"
              className={styles.gerenciar}
              onClick={() => abrirModal()}
            >
              Adicionar
            </a>
          </div>
        </div>
      ) : (
        <div className={styles.chosen_category}>
          <div className={styles.chosen_header}>
            <div>Reservado</div>
            <FontAwesomeIcon
              icon={faEllipsis}
              onClick={abrirModal}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className={styles.chosen_body}>
            <div>
              <span className={styles.chosen_body_category}>Assessor</span>
              <span className={styles.chosen_body_nome}>{assessor?.nome}</span>
              <span className={styles.chosen_body_preco}>
                <span>R$</span>{" "}
                <input
                  onBlur={(e) => updateAssessorPrice(e.target.value)}
                  type="number"
                  defaultValue={assessorResponseDto.preco}
                />
              </span>
            </div>
          </div>
        </div>
      )}
      {modalAberto && (
        <Modal>
          <ModalHeader onClose={fecharModal}>
            <span className={styles.titulo}>
              {isChosen ? "Editar" : "Adicionar"} assessor{" "}
            </span>
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
                  onChange={(e) => searchAssessor(e.target.value)}
                />
                <button className={styles.search_button}>
                  <FontAwesomeIcon
                    icon={faSearch}
                    className={styles.iconSearch}
                  />
                </button>
              </div>
              <div className={styles.assessor_modal} ref={assessorModalRef}>
                {assessoresModal?.map((assessor) => {
                  return (
                    <div
                      value={assessor.id}
                      onClick={(e) => selectAssessor(assessor, e)}
                    >
                      {assessor.nome}
                    </div>
                  );
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
              <ModalFooterButton
                button="add_button"
                text="Adicionar"
                onClick={vinculateAssessorToWedding}
              />
          </ModalFooter>
        </Modal>
      )}
    </div>
  );
}

export default Assessor;
