import Navbar from "../../componentes/Navbar/Navbar";
import styles from "./Painel.module.css";
import { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

import LinkButton from "../../componentes/LinkButton/LinkButton";
import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Categoria from "../../componentes/Categoria/Categoria";
import grupo from "../../assets/grupo.svg";
import sentados from "../../assets/sentados.svg";
import mesas from "../../assets/mesas.svg";
import Contagem from "../../componentes/ContagemRegressiva/ContagemRegressiva";
import {
  faCalendarAlt,
  faUserFriends,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import edit from "../../assets/edit.svg";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import Assessor from "../../componentes/Assessor/Assessor";
import ArcoFinanceiro from "../../componentes/ArcoFinanceiro/ArcoFinanceiro";

function Painel() {
  const [imageUrl, setImageUrl] = useState(null);
  const inputRef = useRef(null);
  const [checkedTarefa1, setCheckedTarefa1] = useState(true);
  const [checkedTarefa2, setCheckedTarefa2] = useState(false);
  const [checkedTarefa3, setCheckedTarefa3] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  const handleClickContainer = () => {
    if (!imageUrl) {
      inputRef.current.click();
    }
  };

  const handleEditClick = () => {
    inputRef.current.click();
  };

  return (
    <div className={styles.painelBackground}>
      <Navbar />
      <div className={styles.containerPai}>
        <div className={styles.containerRegulador}>
          <div className={styles.containerDireita}>
            <div className={styles.boxImagem}>
              <div
                className={styles.containerImagem}
                onClick={handleClickContainer}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className={styles.inputImagem}
                  ref={inputRef}
                  style={{ display: "none" }}
                />
                {imageUrl ? (
                  <>
                    <img
                      src={imageUrl}
                      alt="Imagem Selecionada"
                      className={styles.imagemCirculo}
                    />
                    <div className={styles.iconEdit} onClick={handleEditClick}>
                      <img src={edit} alt="Editar" className={styles.edit} />
                    </div>
                  </>
                ) : (
                  <div className={styles.containerTexto}>
                    <FontAwesomeIcon
                      icon={faCloudUploadAlt}
                      className={styles.iconeUpload}
                    />
                    <span>Escolher Arquivo</span>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.containerInfos}>
              <div className={styles.boxInformacoes}>
                <div className={styles.container_welcome_user}>
                  <span className={styles.welcome}>Bem vindo de volta,</span>
                  <span className={styles.user}>Amanda & Enzo</span>
                </div>

                <div className={styles.iconsContainer}>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>11 de Fevereiro, 2026</span>
                  </div>

                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faUserFriends} />
                    <span>101-150 convidados</span>
                  </div>

                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>São Paulo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.caixaCountdown}>
            <div className={styles.containerContagem}>
              <Contagem />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.conteudo}>
        <div className={styles.colunaEsquerda}>
          <div className={styles.content}>
            <div className={styles.container_titulodesc}>
              <div className={styles.caixa}>
                <span className={styles.titulo_clnesq}>Meus fornecedores</span>
                <span className={styles.descricao}>
                  Lorem ipsum lorem ipsum lorem ipsum
                </span>
              </div>
            </div>

            <div className={styles.filtros}>
              <div className={styles.containerFiltro}>
                <input
                  className={styles.inputPesquisa}
                  type="text"
                  placeholder="Pesquisar categoria de fornecedores"
                />
                <input
                  className={styles.inputFiltro}
                  type="text"
                  placeholder="Filtrar por tipo"
                />
              </div>
            </div>
            <>
              <Categoria />
            </>

            <div>
              <div className={styles.container_titulodesc}>
                <div className={styles.caixaAssessor}>
                  <span className={styles.titulo_clnesq}>
                    Meu assessor de casamento
                  </span>
                  <span className={styles.descricao}>
                    Lorem ipsum lorem ipsum lorem ipsum
                  </span>
                </div>

                <>
                  <Assessor />
                </>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.teste}>
          <div className={styles.containerColunaDireita}>
            <div className={styles.colunaDireita}>
              <div className={styles.conteudoColuna}>
                <div className={styles.boxColuna}>
                  <div className={styles.containerTitulo}>
                    <span>Lista de tarefas</span>
                    <div className={styles.divider}></div>
                  </div>

                  <div className={styles.listaTarefas}>
                    <div className={styles.listaTarefas}>
                      <div
                        className={`${styles.tarefa} ${styles.checkboxWrapper}`}
                      >
                        <div className={styles.round}>
                          <input
                            type="checkbox"
                            id="tarefa1"
                            checked={checkedTarefa1}
                            onChange={() => setCheckedTarefa1(!checkedTarefa1)}
                          />
                          <label htmlFor="tarefa1"></label>
                        </div>
                        <label htmlFor="tarefa1">
                          Anuncie seu noivado para familiares e amigos.
                        </label>
                      </div>

                      <div
                        className={`${styles.tarefa} ${styles.checkboxWrapper}`}
                      >
                        <div className={styles.round}>
                          <input
                            type="checkbox"
                            id="tarefa2"
                            checked={checkedTarefa2}
                            onChange={() => setCheckedTarefa2(!checkedTarefa2)}
                          />
                          <label htmlFor="tarefa2"></label>
                        </div>
                        <label htmlFor="tarefa2">Enviar convites.</label>
                      </div>

                      <div
                        className={`${styles.tarefa} ${styles.checkboxWrapper}`}
                      >
                        <div className={styles.round}>
                          <input
                            type="checkbox"
                            id="tarefa3"
                            checked={checkedTarefa3}
                            onChange={() => setCheckedTarefa3(!checkedTarefa3)}
                          />
                          <label htmlFor="tarefa3"></label>
                        </div>
                        <label htmlFor="tarefa3">
                          Escolha e reserve um fotógrafo.
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className={styles.containerBotao}>
                    <div>
                      <LinkButton
                        to="/lista-tarefas"
                        label="Ver todas as tarefas"
                      />
                    </div>
                    <div className={styles.contador}>
                      1 de 50 itens completos
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.colunaDireita}>
              <div className={styles.conteudoColuna}>
                <div className={styles.containerTitulo}>
                  <span>Meu orçamento</span>
                  <div className={styles.divider}></div>
                </div>

                <div>
                  <div className={styles.containerOrcamento}>
                    <div className={styles.orcamento}>
                      <ArcoFinanceiro />
                    </div>

                    <div className={styles.containerBotao}>
                      <LinkButton
                        to="/calculadora-financeira"
                        label="Ver calculadora financeira"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.colunaDireita}>
              <div className={styles.conteudoColuna}>
                <div className={styles.containerTitulo}>
                  <span>Planejador de assentos</span>
                  <div className={styles.divider}></div>
                </div>
                <div className={styles.conteudoPlanejador}>
                  <div className={styles.colunaPlanejador}>
                    <div className={styles.containerImgDesc}>
                      <div className={styles.iconePlanejador}>
                        <img src={grupo}></img>
                      </div>

                      <div className={styles.descricaoPlanejador}>
                        <span>Total de convidados</span>
                      </div>
                    </div>
                    <div>
                      <span>10</span>
                    </div>
                  </div>
                </div>

                <div className={styles.conteudoPlanejador}>
                  <div className={styles.colunaPlanejador}>
                    <div className={styles.containerImgDesc}>
                      <div className={styles.iconePlanejador}>
                        <img src={sentados}></img>
                      </div>

                      <div className={styles.descricaoPlanejador}>
                        <span>Convidados sentados</span>
                      </div>
                    </div>
                    <div>
                      <span>10</span>
                    </div>
                  </div>
                </div>

                <div className={styles.conteudoPlanejador}>
                  <div className={styles.colunaPlanejador}>
                    <div className={styles.containerImgDesc}>
                      <div className={styles.iconePlanejador}>
                        <img src={mesas}></img>
                      </div>

                      <div className={styles.descricaoPlanejador}>
                        <span>Total de mesas</span>
                      </div>
                    </div>
                    <div>
                      <span>10</span>
                    </div>
                  </div>
                </div>

                <div className={styles.containerBotao}>
                  <LinkButton
                    to="/planejador-assentos"
                    label="Gerenciar assentos"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Painel;
