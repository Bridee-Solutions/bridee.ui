import Navbar from "../../componentes/Navbar/Navbar";
import styles from "./Painel.module.css";
import { useState } from "react";
import { useRef } from "react";
import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Categoria from "../../componentes/Categoria/Categoria";
import {
  faCalendarAlt,
  faUserFriends,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import edit from "./assets/edit.svg";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

function Painel() {
  const [imageUrl, setImageUrl] = useState(null);
  const inputRef = useRef(null);

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

          <div className={styles.containerContagem}></div>
        </div>
      </div>

      <div className={styles.conteudo}>
        <div className={styles.colunaEsquerda}>
          <div className={styles.content}>
            <div className={styles.container_titulodesc}>
              <div className={styles.caixa}>
                <span className={styles.titulo_clnesq}>Meus Fornecedores</span>
                <span className={styles.descricao}>
                  Lorem ipsum lorem ipsum lorem ipsum
                </span>
              </div>
            </div>

            <div>
              <Categoria />
            </div>
          </div>
        </div>

        <div className={styles.containerColunaDireita}>
          <div className={styles.colunaDireita}>
            <div className={styles.conteudoColuna}>
              <div className={styles.containerTitulo}>
                <span>Lista de tarefas</span>
                <div className={styles.divider}></div>
              </div>

              <div className={styles.listaTarefas}>
                <div className={styles.tarefa}>
                  <input type="checkbox" id="tarefa1" checked />
                  <label htmlFor="tarefa1">
                    Anuncie seu noivado para familiares e amigos.
                  </label>
                </div>
                <div className={styles.tarefa}>
                  <input type="checkbox" id="tarefa2" />
                  <label htmlFor="tarefa2">Enviar convites.</label>
                </div>
                <div className={styles.tarefa}>
                  <input type="checkbox" id="tarefa3" />
                  <label htmlFor="tarefa3">
                    Escolha e reserve um fotógrafo.
                  </label>
                </div>
              </div>

              <div className={styles.containerBotao}>
                <button className={styles.botao}>Ver todas as tarefas</button>
                <div className={styles.contador}>1 de 50 itens completos</div>
              </div>
            </div>
          </div>
          <div className={styles.colunaDireita}>
            <div className={styles.conteudoColuna}>
              <div className={styles.containerTitulo}>
                <span>Meu orçamento</span>
                <div className={styles.divider}></div>
              </div>
            </div>
          </div>
          <div className={styles.colunaDireita}>
          <div className={styles.conteudoColuna}>
              <div className={styles.containerTitulo}>
                <span>Planejador de assentos</span>
                <div className={styles.divider}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Painel;
